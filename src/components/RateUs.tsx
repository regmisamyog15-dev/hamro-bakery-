import { useState } from "react";
import { useBranch } from "@/context/BranchContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp } from "lucide-react";

export function RateUs() {
  const { branchData, selectedBranch } = useBranch();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating >= 4) {
      window.open(branchData?.mapUrl ?? "https://maps.google.com", "_blank");
      setSubmitted(true);
    } else {
      const subject = `Hamro Bakery Feedback — ${selectedBranch ?? "Branch"}`;
      const body = feedback;
      window.open(`mailto:bakeryhamro1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-2">Rate Us</h2>
          <p className="text-muted-foreground">Your feedback means the world to us</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border shadow-md p-8"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <ThumbsUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-primary mb-2">
                  {rating >= 4 ? "Thank you so much!" : "Thank you for your feedback!"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {rating >= 4
                    ? "We've opened Google Maps so you can share your review."
                    : "We've received your message and will do better."}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 rounded-full"
                  onClick={() => { setSubmitted(false); setRating(0); setFeedback(""); }}
                >
                  Rate Again
                </Button>
              </motion.div>
            ) : (
              <motion.div key="form" className="space-y-6">
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(star)}
                      className="text-4xl transition-transform hover:scale-110"
                      data-testid={`btn-star-${star}`}
                      aria-label={`Rate ${star} stars`}
                    >
                      <span className={star <= (hover || rating) ? "text-yellow-400" : "text-muted-foreground/30"}>
                        ★
                      </span>
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {rating > 0 && rating < 4 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      <p className="text-sm text-muted-foreground text-center">
                        We're sorry! Tell us how we can improve.
                      </p>
                      <Textarea
                        placeholder="Your feedback..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={3}
                        className="resize-none"
                        data-testid="textarea-feedback-rating"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {rating > 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      className="w-full rounded-full"
                      disabled={rating < 4 && !feedback.trim()}
                      data-testid="btn-submit-rating"
                    >
                      {rating >= 4 ? "Share on Google ★" : "Send Feedback"}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
