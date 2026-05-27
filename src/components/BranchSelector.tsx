import { useBranch, branches, BranchName } from "@/context/BranchContext";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/WhatsApp_Image_2026-05-23_at_12.56.16_PM_(1)_1779613315640.jpeg";

function isBranchOpen(branch: BranchName): boolean {
  const { open, close } = branches[branch].hours;
  const hour = new Date().getHours();
  return hour >= open && hour < close;
}

export function BranchSelector() {
  const { showSelector, setSelectedBranch } = useBranch();

  return (
    <AnimatePresence>
      {showSelector && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          data-testid="branch-selector-overlay"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-lg rounded-2xl shadow-xl border overflow-hidden"
          >
            {/* Logo watermark background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <img
                src={logoImg}
                alt=""
                className="w-72 h-72 object-contain opacity-[0.07]"
              />
            </div>

            {/* Card content */}
            <div className="relative z-10 bg-card/90 backdrop-blur-sm p-8 text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={logoImg}
                  alt="Hamro Bakery"
                  className="h-20 w-20 object-contain rounded-full bg-white border-2 border-primary/20 shadow-md"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-primary mb-2">Welcome to Hamro Bakery</h1>
              <p className="text-muted-foreground mb-8">Choose Your Nearest Branch to get started</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(Object.keys(branches) as BranchName[]).map((branch) => {
                  const open = isBranchOpen(branch);
                  return (
                    <motion.button
                      key={branch}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedBranch(branch)}
                      data-testid={`btn-select-branch-${branch}`}
                      className={`h-auto py-4 px-4 flex flex-col items-center gap-2 rounded-xl border transition-all duration-200 cursor-pointer
                        ${open
                          ? "bg-card border-primary/20 hover:border-primary/50 hover:bg-secondary/40"
                          : "bg-red-50 border-red-200 hover:border-red-400 hover:bg-red-100"
                        }`}
                    >
                      <MapPin className={`h-6 w-6 ${open ? "text-primary" : "text-red-400"}`} />
                      <span className={`font-semibold text-lg ${open ? "text-foreground" : "text-red-700"}`}>
                        {branch}
                      </span>
                      <span className="text-xs text-muted-foreground">{branches[branch].hoursText}</span>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          open
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {open ? "Open Now" : "Closed Now"}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
