"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X, Send, Check, Loader2, Copy } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { showToast } from "@/components/toast";
import { cn } from "@/lib/utils";

const CONTACT_MODAL_EVENT = "portfolio-open-contact-modal";

export function openContactModal() {
  const event = new CustomEvent(CONTACT_MODAL_EVENT);
  window.dispatchEvent(event);
}

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Inquiry / Collaborating with Ishant");
  
  // Track if user has modified the message box manually
  const [isMessageDirty, setIsMessageDirty] = useState(false);

  const getTemplateMessage = (senderName: string) => {
    return `Hi Ishant,\n\nI saw your portfolio and would love to connect with you regarding [project/internship/opportunity].\n\nBest regards,\n${senderName.trim() || "[Your Name]"}`;
  };

  const [message, setMessage] = useState(getTemplateMessage(""));

  // States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      // Reset status and fields
      setStatus("idle");
      setErrors({});
      setName("");
      setEmail("");
      setIsMessageDirty(false);
      setMessage(getTemplateMessage(""));
    };

    window.addEventListener(CONTACT_MODAL_EVENT, handleOpen);
    
    // Listen for ESC key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(CONTACT_MODAL_EVENT, handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Name is required.";
    if (!email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!subject.trim()) tempErrors.subject = "Subject is required.";
    if (!message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: name,
            email: email,
            subject: subject,
            message: message
          })
        });

        const result = await response.json();

        if (result.success) {
          setStatus("success");
          showToast("Message sent successfully!", "success");
        } else {
          setStatus("idle");
          showToast(result.message || "Failed to send message.", "info");
          return;
        }
      } catch (err) {
        console.error("Error submitting form: ", err);
        setStatus("idle");
        showToast("Error sending message. Please try again.", "info");
        return;
      }
    } else {
      // Fallback/Mock mode when no access key is defined
      console.warn(
        "Web3Forms Access Key not found. Please create a .env.local file with NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to send real emails."
      );
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setStatus("success");
      showToast("Message sent successfully! (Mocked)", "success");
    }

    // Wait and close
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsOpen(false);
    
    // Clear dynamic parts
    setName("");
    setEmail("");
  };

  const handleCopyDetails = async () => {
    const emailText = `To: ${siteConfig.email}\nSubject: ${subject}\n\n${message}`;
    try {
      await navigator.clipboard.writeText(emailText);
      showToast("Email text copied to clipboard!", "success");
    } catch (err) {
      console.error(err);
      showToast("Failed to copy text.", "info");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => status !== "sending" && setIsOpen(false)}
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-panel backdrop-blur-2xl p-6 sm:p-8"
          >
            {/* Ambient Radial Accent */}
            <div className="absolute -left-16 -top-16 -z-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
            <div className="absolute -right-16 -bottom-16 -z-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink leading-tight">Send a Message</h3>
                  <p className="text-[10px] text-muted">Direct inquiry to Ishant Sharma</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                disabled={status === "sending"}
                aria-label="Close contact modal"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/8 bg-white/[0.02] text-muted transition hover:border-white/20 hover:bg-white/5 hover:text-ink disabled:opacity-50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form & Simulated States */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-ink">Thank you!</h4>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  Your message has been simulated sent. Ishant will reach out to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSend} className="mt-5 space-y-4">
                {/* To Field (Read Only) */}
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-muted/65 block mb-1">
                    To
                  </label>
                  <input
                    type="text"
                    value={siteConfig.email}
                    disabled
                    className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2 text-sm text-muted/80 cursor-not-allowed select-all"
                  />
                </div>

                {/* Sender Name & Email Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="modal-name" className="text-[10px] font-semibold uppercase tracking-wider text-muted/65 block mb-1">
                      Your Name *
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        const newName = e.target.value;
                        setName(newName);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        if (!isMessageDirty) {
                          setMessage(getTemplateMessage(newName));
                        }
                      }}
                      disabled={status === "sending"}
                      className={cn(
                        "w-full rounded-xl border bg-white/[0.02] px-3.5 py-2 text-sm text-ink outline-none transition focus:border-gold/50 focus:bg-white/[0.04]",
                        errors.name ? "border-red-500/50" : "border-white/8"
                      )}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="text-[10px] font-semibold uppercase tracking-wider text-muted/65 block mb-1">
                      Your Email *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      disabled={status === "sending"}
                      className={cn(
                        "w-full rounded-xl border bg-white/[0.02] px-3.5 py-2 text-sm text-ink outline-none transition focus:border-gold/50 focus:bg-white/[0.04]",
                        errors.email ? "border-red-500/50" : "border-white/8"
                      )}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="modal-subject" className="text-[10px] font-semibold uppercase tracking-wider text-muted/65 block mb-1">
                    Subject *
                  </label>
                  <input
                    id="modal-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
                    }}
                    disabled={status === "sending"}
                    className={cn(
                      "w-full rounded-xl border bg-white/[0.02] px-3.5 py-2 text-sm text-ink outline-none transition focus:border-gold/50 focus:bg-white/[0.04]",
                      errors.subject ? "border-red-500/50" : "border-white/8"
                    )}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-400 mt-1 block">{errors.subject}</span>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="modal-message" className="text-[10px] font-semibold uppercase tracking-wider text-muted/65 block mb-1">
                    Message *
                  </label>
                  <textarea
                    id="modal-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setIsMessageDirty(true);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                    }}
                    disabled={status === "sending"}
                    className={cn(
                      "w-full rounded-xl border bg-white/[0.02] px-3.5 py-2 text-sm text-ink outline-none transition focus:border-gold/50 focus:bg-white/[0.04] resize-none",
                      errors.message ? "border-red-500/50" : "border-white/8"
                    )}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-400 mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyDetails}
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-gold transition disabled:opacity-50"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      Copy Draft
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-6 text-xs font-semibold text-background transition hover:bg-gold disabled:pointer-events-none disabled:opacity-50 shrink-0"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
