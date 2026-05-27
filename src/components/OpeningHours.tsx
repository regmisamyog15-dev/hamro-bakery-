import { useBranch, branches, BranchName } from "@/context/BranchContext";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function OpeningHours() {
  const { selectedBranch, branchData } = useBranch();
  const today = new Date().getDay();
  const currentHour = new Date().getHours();

  const isOpen = branchData
    ? currentHour >= branchData.hours.open && currentHour < branchData.hours.close
    : false;

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-2">Opening Hours</h2>
          <p className="text-muted-foreground">We're here when you need us</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl shadow-md overflow-hidden"
        >
          <div className="px-6 py-5 bg-primary/5 border-b border-border flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Currently showing</p>
              <p className="font-serif text-xl font-bold text-primary">{selectedBranch ?? "Select a branch"}</p>
              {branchData && <p className="text-sm text-muted-foreground">{branchData.hoursText} daily</p>}
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
              {isOpen ? "Open Now" : "Closed Now"}
            </div>
          </div>

          <div>
            {DAYS.map((day, i) => {
              const isToday = i === today;
              return (
                <div
                  key={day}
                  className={`flex justify-between items-center px-6 py-3.5 ${
                    i < 6 ? "border-b border-border" : ""
                  } ${isToday ? "bg-primary/5" : "hover:bg-secondary/20 transition-colors"}`}
                  data-testid={`hours-row-${i}`}
                >
                  <span className={`font-medium ${isToday ? "text-primary font-bold" : "text-foreground/80"}`}>
                    {day} {isToday && <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full ml-2">Today</span>}
                  </span>
                  <span className={`text-sm ${isToday ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                    {branchData ? branchData.hoursText : "—"}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="px-6 py-4 bg-secondary/20">
            <p className="text-xs text-muted-foreground text-center">
              Hours may vary on public holidays. Call ahead to confirm.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(Object.keys(branches) as BranchName[]).map((b) => (
            <div
              key={b}
              className={`rounded-xl p-3 text-center border transition-all ${
                b === selectedBranch
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card border-border text-muted-foreground"
              }`}
            >
              <p className="text-xs font-semibold">{b}</p>
              <p className="text-xs mt-0.5 opacity-80">{branches[b].hoursText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
