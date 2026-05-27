import { useState, useEffect, createContext, useContext, ReactNode } from "react";

export type BranchName = "Hakim Chowk" | "Bishal Chowk" | "Sangam Road" | "Synergy Road";

export interface BranchData {
  phone: string;
  telephone?: string;
  whatsapp: string;
  tiktok: string;
  mapUrl: string;
  mapEmbed: string | null;
  hours: { open: number; close: number };
  hoursText: string;
  mapNote: string | null;
}

export const branches: Record<BranchName, BranchData> = {
  "Hakim Chowk": {
    phone: "9865009581",
    whatsapp: "9865009581",
    tiktok: "https://www.tiktok.com/@hamro.bakery.shop",
    mapUrl: "https://maps.app.goo.gl/rwkVuBN5VG8wVvje8",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d84.43!3d27.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGFraW0gQ2hvd2s!5e0!3m2!1sen!2snp!4v1",
    hours: { open: 8, close: 20 },
    hoursText: "8:00 AM – 8:00 PM",
    mapNote: null,
  },
  "Bishal Chowk": {
    phone: "9702663750",
    whatsapp: "9702663750",
    tiktok: "https://www.tiktok.com/@hamrobakeryshop1",
    mapUrl: "https://maps.app.goo.gl/Ej2fs4hVETw6dopW6",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d84.44!3d27.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQmlzaGFsIENob3dr!5e0!3m2!1sen!2snp!4v1",
    hours: { open: 8, close: 20 },
    hoursText: "8:00 AM – 8:00 PM",
    mapNote: null,
  },
  "Sangam Road": {
    phone: "9855070143",
    telephone: "056-596143",
    whatsapp: "9855070143",
    tiktok: "https://www.tiktok.com/@hamrobakerynarayangarh",
    mapUrl: "https://maps.app.goo.gl/q1g2hWfA9gxB9pgN8",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d84.45!3d27.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU2FuZ2FtIFJvYWQ!5e0!3m2!1sen!2snp!4v1",
    hours: { open: 8, close: 21 },
    hoursText: "8:00 AM – 9:00 PM",
    mapNote: null,
  },
  "Synergy Road": {
    phone: "9821207163",
    whatsapp: "9821207163",
    tiktok: "https://www.tiktok.com/@hamrobakery3",
    mapUrl: "https://maps.app.goo.gl/LQtLVUozxDfCZC4fA",
    mapEmbed: null,
    hours: { open: 8, close: 20 },
    hoursText: "8:00 AM – 8:00 PM",
    mapNote: "Approximate Location — Map Coming Soon",
  },
};

interface BranchContextType {
  selectedBranch: BranchName | null;
  setSelectedBranch: (branch: BranchName) => void;
  branchData: BranchData | null;
  showSelector: boolean;
  setShowSelector: (show: boolean) => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export function BranchProvider({ children }: { children: ReactNode }) {
  const [selectedBranch, setSelectedBranchState] = useState<BranchName | null>(null);
  const [showSelector, setShowSelector] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("hamro-branch") as BranchName | null;
    if (saved && branches[saved]) {
      setSelectedBranchState(saved);
      setShowSelector(false);
    }
  }, []);

  const setSelectedBranch = (branch: BranchName) => {
    setSelectedBranchState(branch);
    localStorage.setItem("hamro-branch", branch);
    setShowSelector(false);
  };

  const branchData = selectedBranch ? branches[selectedBranch] : null;

  return (
    <BranchContext.Provider
      value={{
        selectedBranch,
        setSelectedBranch,
        branchData,
        showSelector,
        setShowSelector,
      }}
    >
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (context === undefined) {
    throw new Error("useBranch must be used within a BranchProvider");
  }
  return context;
}
