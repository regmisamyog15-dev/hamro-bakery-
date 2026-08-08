import { useState } from "react";
import { useBranch } from "@/context/BranchContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare, Send } from "lucide-react";

export function FeedbackModal() {
  const { selectedBranch } = useBranch();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    const subject = `Customer Feedback — Hamro Bakery ${selectedBranch ?? ""}`;
    window.open(
      `mailto:bakeryhamro1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      "_blank"
    );
    setMessage("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-2 text-xs font-sans text-white/35 hover:text-white/65 transition-colors"
          data-testid="btn-open-feedback"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Send Feedback
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-sm border border-[#2C1A0E]/10 bg-[#FAF7F2]" data-testid="modal-feedback">
        <DialogHeader>
          <DialogTitle className="font-bold text-lg text-[#2C1A0E]">Send Feedback</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-1">
          <p className="text-sm text-[#2C1A0E]/50 font-sans">
            We read every message. Tell us how we can serve you better.
          </p>
          <textarea
            placeholder="Your feedback or suggestion..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full border border-[#2C1A0E]/15 bg-white rounded-sm px-4 py-3 text-sm font-sans text-[#2C1A0E] placeholder:text-[#2C1A0E]/30 focus:outline-none focus:border-[#C4714A] resize-none transition-colors"
            data-testid="textarea-feedback-modal"
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-xs font-sans text-[#2C1A0E]/50 hover:text-[#2C1A0E] border border-[#2C1A0E]/12 rounded-sm transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="flex items-center gap-2 px-5 py-2 bg-[#2C1A0E] hover:bg-[#C4714A] text-white text-xs font-sans font-medium rounded-sm transition-colors disabled:opacity-40"
              data-testid="btn-send-feedback"
            >
              <Send className="w-3.5 h-3.5" />
              Send
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
