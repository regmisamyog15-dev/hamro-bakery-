import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { BranchSelector } from "@/components/BranchSelector";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-8xl mb-6">🎂</p>
        <h1 className="text-5xl font-black text-[#2C1A0E] mb-3">404</h1>
        <p className="text-xl font-semibold text-[#2C1A0E] mb-2">Page not found</p>
        <p className="text-[#2C1A0E]/50 text-sm mb-8 max-w-xs">
          Looks like this page got eaten. Let's get you back to the good stuff.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="/">
            <span className="bg-[#2C1A0E] text-white px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#C4714A] transition-colors">
              Back to Home
            </span>
          </Link>
          <Link href="/menu">
            <span className="border border-[#2C1A0E]/20 text-[#2C1A0E] px-6 py-3 rounded-lg text-sm font-semibold cursor-pointer hover:border-[#C4714A] hover:text-[#C4714A] transition-colors">
              View Menu
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
