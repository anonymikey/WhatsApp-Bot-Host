import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Users, Code2, X, Handshake } from "lucide-react";
import { useLocation } from "wouter";

export function PartnerFloatingWidget() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  if (location === "/partners") return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.22 }}
            className="flex flex-col gap-2 mb-1"
          >
            {/* Reseller option */}
            <Link
              href="/partners"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-2xl border border-primary/30 bg-[#0a1a14] hover:bg-[#0d2318] shadow-lg shadow-black/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Become a Reseller</p>
                <p className="text-[10px] text-muted-foreground">Earn recurring commissions</p>
              </div>
            </Link>

            {/* Developer option */}
            <Link
              href="/partners?tab=developer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-2xl border border-violet-500/25 bg-[#100d1a] hover:bg-[#150f22] shadow-lg shadow-black/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Code2 className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Submit Your Bot</p>
                <p className="text-[10px] text-muted-foreground">List in the marketplace</p>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-black/50 font-bold text-xs text-background transition-all overflow-hidden"
        style={{ background: "linear-gradient(135deg, #00e599, #22d3ee)" }}
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {open ? <X className="w-4 h-4" /> : <Handshake className="w-4 h-4" />}
        </motion.span>
        <AnimatePresence mode="wait">
          {!open && (
            <motion.span
              key="label"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden whitespace-nowrap"
            >
              Partner with us
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#00e599" }} />
        )}
      </motion.button>
    </div>
  );
}
