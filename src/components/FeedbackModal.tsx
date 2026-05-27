import { useState } from "react";
import { useBranch } from "@/context/BranchContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare } from "lucide-react";

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
        <Button
          variant="outline"
          size="sm"
          className="rounded-full gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          data-testid="btn-open-feedback"
        >
          <MessageSquare className="w-4 h-4" />
          Send Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-2xl" data-testid="modal-feedback">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">Send Feedback</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <p className="text-sm text-muted-foreground">
            We read every message. Tell us how we can serve you better.
          </p>
          <Textarea
            placeholder="Your feedback or suggestion..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="resize-none"
            data-testid="textarea-feedback-modal"
          />
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)} className="rounded-full">
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleSend}
              disabled={!message.trim()}
              className="rounded-full px-6"
              data-testid="btn-send-feedback"
            >
              Send Feedback
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
