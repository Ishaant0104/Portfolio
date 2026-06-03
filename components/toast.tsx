"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Mail, Copy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ToastMessage = {
  id: string;
  message: string;
  type: "success" | "info";
};

// Custom event name
const TOAST_EVENT = "portfolio-show-toast";

export function showToast(message: string, type: "success" | "info" = "success") {
  const event = new CustomEvent(TOAST_EVENT, {
    detail: { message, type }
  });
  window.dispatchEvent(event);
}

export function ToastProvider() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; type: "success" | "info" }>;
      const newToast: ToastMessage = {
        id: Math.random().toString(36).substring(2, 9),
        message: customEvent.detail.message,
        type: customEvent.detail.type
      };

      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss after 3 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 3500);
    };

    window.addEventListener(TOAST_EVENT, handleToast);
    return () => window.removeEventListener(TOAST_EVENT, handleToast);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 w-full max-w-[360px] px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } }}
            layout
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/80 p-4 shadow-panel backdrop-blur-xl"
          >
            {toast.type === "success" ? (
              <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
            ) : (
              <Mail className="h-5 w-5 text-gold shrink-0" />
            )}
            <div className="flex-1 text-sm font-medium text-ink">
              {toast.message}
            </div>
            <Copy className="h-4 w-4 text-muted/50 hover:text-ink cursor-pointer shrink-0 transition-colors" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Helper to copy text and show toast
export async function copyEmailToClipboard(email: string) {
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email address copied to clipboard!", "success");
  } catch (err) {
    console.error("Failed to copy email: ", err);
  }
}
