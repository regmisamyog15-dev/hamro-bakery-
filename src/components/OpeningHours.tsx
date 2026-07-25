import { useBranch, branches, BranchName } from "@/context/BranchContext";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function OpeningHours() {
  const { selectedBranch, setShowSelector, branchData } = useBranch();
  const today = new Date().getDay();
  const currentHour = new Date().getHours();

  const isOpen = branchData
    ? currentHour >= branchData.hours.open && currentHour < branchData.hours.close
    : false;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="section-eyebrow mb-3 block">Hours</span>
            <h2 className="font-serif text-5xl font-light text-[#2C1A0E] mb-6">
              We're open<br />
              <span className="italic">every day</span>
            </h2>
            <p className="text-[#2C1A0E]/50 text-sm font-sans leading-relaxed mb-8">
              All four branches open at 8 AM daily. Hours may vary on public holidays — call ahead to confirm.
            </p>

            {/* Branch grid picker */}
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(branches) as BranchName[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setShowSelector(true)}
                  className={`text-left p-3.5 rounded-sm border transition-all duration-200 ${
                    b === selectedBranch
                      ? "bg-[#2C1A0E] text-white border-[#2C1A0E]"
                      : "border-[#2C1A0E]/12 hover:border-[#2C1A0E]/30 text-[#2C1A0E]"
                  }`}
                >
                  <p className={`text-xs font-sans font-medium ${b === selectedBranch ? "text-white" : "text-[#2C1A0E]"}`}>{b}</p>
                  <p className={`text-xs font-sans mt-0.5 ${b === selectedBranch ? "text-white/60" : "text-[#2C1A0E]/40"}`}>
                    {branches[b].hoursText}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right — hours card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-[#2C1A0E]/8 overflow-hidden rounded-sm"
          >
            {/* Status bar */}
            <div className="px-6 py-4 border-b border-[#2C1A0E]/8 flex items-center justify-between bg-[#FAF7F2]">
              <div>
                <p className="font-sans text-xs text-[#2C1A0E]/40 uppercase tracking-widest mb-0.5">
                  {selectedBranch ?? "Select a branch"}
                </p>
                {branchData && (
                  <p className="font-sans text-sm text-[#2C1A0E] font-medium">{branchData.hoursText} daily</p>
                )}
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-medium ${
                isOpen ? "bg-green-50 text-green-700" : "bg-red-50 text-red-500"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-400"}`} />
                {isOpen ? "Open now" : "Closed"}
              </div>
            </div>

            {/* Day rows */}
            <div className="divide-y divide-[#2C1A0E]/5">
              {DAYS.map((day, i) => {
                const isToday = i === today;
                return (
                  <div
                    key={day}
                    className={`flex justify-between items-center px-6 py-3.5 ${
                      isToday ? "bg-[#FAF7F2]" : ""
                    }`}
                    data-testid={`hours-row-${i}`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <span className="w-1 h-4 bg-[#C4714A] rounded-full" />}
                      {!isToday && <span className="w-1 h-4 rounded-full" />}
                      <span className={`font-sans text-sm ${
                        isToday ? "text-[#2C1A0E] font-semibold" : "text-[#2C1A0E]/50"
                      }`}>
                        {day}{isToday && <span className="text-[#C4714A] text-xs font-normal ml-2">today</span>}
                      </span>
                    </div>
                    <span className={`font-sans text-sm ${
                      isToday ? "text-[#2C1A0E] font-medium" : "text-[#2C1A0E]/40"
                    }`}>
                      {branchData ? branchData.hoursText : "—"}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-3 bg-[#FAF7F2] border-t border-[#2C1A0E]/5">
              <p className="text-xs text-[#2C1A0E]/35 font-sans">
                Hours may vary on public holidays.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
