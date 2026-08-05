import { useState } from "react";
import { useBranch } from "@/context/BranchContext";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, Star } from "lucide-react";

export function RateUs() {
  const { branchData, selectedBranch } = useBranch();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating >= 4) {
      window.open(branchData?.mapUrl ?? "https://maps.google.com", "_blank");
    } else {
      const subject = `Hamro Bakery Feedback — ${selectedBranch ?? "Branch"}`;
      window.open(`mailto:bakeryhamro1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(feedback)}`, "_blank");
    }
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-lg">
        <div className="text-center mb-10">
          <span className="section-eyebrow mb-3 block">Reviews</span>
          <h2 className="font-bold text-4xl text-[#2C1A0E]">
            How did we <span>do?</span>
          </h2>
          <p className="text-[#2C1A0E]/45 font-sans text-sm mt-3">
            Happy? Leave us a Google review. Not happy? Tell us directly — we'll fix it.
          </p>
        </div>

        <div className="border border-[#2C1A0E]/8 rounded-sm p-8 bg-[#FAF7F2]">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#C4714A]/10 flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-6 h-6 text-[#C4714A]" />
                </div>
                <h3 className="font-semibold text-xl text-[#2C1A0E] mb-2">
                  {rating >= 4 ? "Thank you so much!" : "We hear you."}
                </h3>
                <p className="text-[#2C1A0E]/45 text-sm font-sans mb-5">
                  {rating >= 4
                    ? "Google Maps is open — your review helps other customers find us."
                    : "We've received your feedback and will improve."}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setRating(0); setFeedback(""); }}
                  className="text-xs font-sans text-[#2C1A0E]/50 border border-[#2C1A0E]/15 px-4 py-2 rounded-sm hover:border-[#2C1A0E]/40 transition-colors"
                >
                  Rate again
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" className="space-y-6">
                {/* Stars */}
                <div className="flex justify-center gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                      data-testid={`btn-star-${star}`}
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          star <= (hover || rating)
                            ? "fill-[#C4714A] text-[#C4714A]"
                            : "text-[#2C1A0E]/15"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Label */}
                <AnimatePresence>
                  {rating > 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-sm font-sans text-[#2C1A0E]/50"
                    >
                      {rating >= 4
                        ? "Glad you loved it! Share your experience on Google?"
                        : "Sorry to hear that. Tell us what went wrong."}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Feedback textarea — only for low ratings */}
                <AnimatePresence>
                  {rating > 0 && rating < 4 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <textarea
                        placeholder="Tell us what happened and how we can do better..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={3}
                        className="w-full border border-[#2C1A0E]/12 bg-white rounded-sm px-4 py-3 text-sm font-sans text-[#2C1A0E] placeholder:text-[#2C1A0E]/30 focus:outline-none focus:border-[#C4714A] resize-none transition-colors"
                        data-testid="textarea-feedback-rating"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {rating > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleSubmit}
                    disabled={rating < 4 && !feedback.trim()}
                    className="w-full bg-[#2C1A0E] hover:bg-[#C4714A] text-white py-3 rounded-sm text-sm font-sans font-medium transition-colors duration-200 disabled:opacity-40"
                    data-testid="btn-submit-rating"
                  >
                    {rating >= 4 ? "Share on Google ★" : "Send Feedback"}
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
