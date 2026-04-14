import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Code2, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const RESELLER_PERKS = [
  "Earn recurring commissions on every referral",
  "No technical skills needed",
  "Co-marketing support & promo tools",
];

const DEVELOPER_PERKS = [
  "Reach thousands of WhatsApp users",
  "Revenue share on every subscription",
  "We handle hosting, payments & support",
];

interface Props {
  className?: string;
}

export function PartnerCTASection({ className = "" }: Props) {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-24 ${className}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Partnership Opportunities
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-black mb-3">
          Work <span className="tech-gradient-text">With Us</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Whether you sell bots or build them — there's a rewarding place for you on the ANONYMIKETECH platform.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Reseller Card */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="relative rounded-2xl border border-primary/20 overflow-hidden group"
          style={{ background: "linear-gradient(145deg, rgba(0,229,153,0.06) 0%, rgba(0,0,0,0) 60%)" }}
        >
          {/* Glow blob */}
          <div className="absolute top-0 left-0 w-60 h-40 bg-primary/10 blur-[70px] rounded-full pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
            {/* Icon + Badge */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                Partner Program
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-black mb-2">
              Become a Reseller Partner
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Join our reseller network and earn recurring commissions by introducing businesses to WhatsApp automation.
            </p>

            {/* Perks */}
            <ul className="space-y-2.5 mb-8 flex-1">
              {RESELLER_PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">{perk}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/partners"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all bg-primary text-background hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(0,229,153,0.35)] group/btn"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Developer Card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="relative rounded-2xl border border-violet-500/20 overflow-hidden group"
          style={{ background: "linear-gradient(145deg, rgba(139,92,246,0.06) 0%, rgba(0,0,0,0) 60%)" }}
        >
          {/* Glow blob */}
          <div className="absolute top-0 right-0 w-60 h-40 bg-violet-500/10 blur-[70px] rounded-full pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
            {/* Icon + Badge */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-violet-400" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/25">
                Developer
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-black mb-2">
              Submit Your Bot
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Built a WhatsApp bot? List it in our marketplace and let thousands of users subscribe. We handle the ops.
            </p>

            {/* Perks */}
            <ul className="space-y-2.5 mb-8 flex-1">
              {DEVELOPER_PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-400" />
                  <span className="text-sm text-foreground/80">{perk}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/partners?tab=developer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all border border-violet-500/40 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:border-violet-500/60 hover:shadow-[0_0_24px_rgba(139,92,246,0.2)] group/btn"
            >
              Submit Your Bot
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
