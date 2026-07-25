import { useBranch, branches, BranchName } from "@/context/BranchContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock } from "lucide-react";

export function BranchSelector() {
  const { showSelector, setShowSelector, selectedBranch, setSelectedBranch } = useBranch();

  const handleSelect = (branch: BranchName) => {
    setSelectedBranch(branch);
    setShowSelector(false);
  };

  return (
    <AnimatePresence>
      {showSelector && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSelector(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 top-1/2 -translate-y-1/2 z-50 w-full sm:w-[440px] bg-[#FAF7F2] rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#2C1A0E]/8">
              <div>
                <p className="font-serif text-lg text-[#2C1A0E]">Choose a branch</p>
                <p className="text-xs font-sans text-[#2C1A0E]/40 mt-0.5">Prices and hours may vary by location</p>
              </div>
              <button
                onClick={() => setShowSelector(false)}
                className="w-8 h-8 rounded-full border border-[#2C1A0E]/12 flex items-center justify-center hover:bg-[#2C1A0E]/5 transition-colors"
                data-testid="btn-close-selector"
              >
                <X className="w-4 h-4 text-[#2C1A0E]/50" />
              </button>
            </div>

            {/* Branch list */}
            <div className="divide-y divide-[#2C1A0E]/6">
              {(Object.entries(branches) as [BranchName, typeof branches[BranchName]][]).map(([name, data]) => {
                const isActive = name === selectedBranch;
                return (
                  <button
                    key={name}
                    onClick={() => handleSelect(name)}
                    className={`w-full text-left px-6 py-4 flex items-start justify-between gap-4 transition-colors hover:bg-white ${
                      isActive ? "bg-white" : ""
                    }`}
                    data-testid={`branch-option-${name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                        isActive ? "bg-[#C4714A]" : "bg-[#2C1A0E]/6"
                      }`}>
                        <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#2C1A0E]/40"}`} />
                      </div>
                      <div>
                        <p className={`font-sans text-sm font-medium ${isActive ? "text-[#2C1A0E]" : "text-[#2C1A0E]/70"}`}>
                          {name}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1 text-xs text-[#2C1A0E]/35 font-sans">
                            <Phone className="w-3 h-3" /> {data.phone}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-[#2C1A0E]/35 font-sans">
                            <Clock className="w-3 h-3" /> {data.hoursText}
                          </span>
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <span className="shrink-0 text-xs font-sans font-medium text-[#C4714A] mt-1">Selected</span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="px-6 py-4 border-t border-[#2C1A0E]/6 bg-white/60">
              <p className="text-xs text-[#2C1A0E]/35 font-sans">All branches open 8 AM – 9 PM daily · Narayangarh, Chitwan</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
