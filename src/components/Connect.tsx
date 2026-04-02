"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import DiamondDivider from "./DiamondDivider";
import { ArrowRight, MessageSquare, FileText, Mail } from "lucide-react";

export default function Connect() {
  return (
    <section id="connect" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 ring-pattern" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="panel p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/logo.png"
                alt=""
                width={350}
                height={350}
                className="logo-white opacity-[0.03]"
                aria-hidden="true"
              />
            </div>

            <div className="relative">
              <DiamondDivider className="mb-5" />
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold mb-3">
                Let&apos;s Connect
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
                Ready to Get{" "}
                <span className="text-gold">Started?</span>
              </h2>
              <p className="mt-3 text-foreground-muted text-sm leading-relaxed max-w-lg mx-auto">
                Whether you&apos;re exploring options or ready to move forward —
                we&apos;re here to help. Choose what works best for you.
              </p>

              {/* Two CTA Cards */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {/* Option 1: Learn More / Meeting */}
                <a
                  href="mailto:tylerallamong@hayneindustries.com?subject=Interested%20in%20Learning%20More"
                  className="group border border-gold/20 p-6 hover:border-gold/50 hover:bg-gold/[0.03] transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 border border-gold/25 flex items-center justify-center mb-4 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all">
                    <MessageSquare className="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    Let&apos;s Talk
                  </h3>
                  <p className="text-sm text-foreground-muted/50 leading-relaxed mb-3">
                    Schedule a meeting to learn more about our capabilities and how we can support your needs.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold group-hover:text-gold-light transition-colors">
                    Schedule a Meeting
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                {/* Option 2: Get a Quote */}
                <a
                  href="mailto:tylerallamong@hayneindustries.com?subject=Request%20for%20Quote"
                  className="group border border-gold/20 p-6 hover:border-gold/50 hover:bg-gold/[0.03] transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 border border-gold/25 flex items-center justify-center mb-4 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all">
                    <FileText className="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    Get a Quote
                  </h3>
                  <p className="text-sm text-foreground-muted/50 leading-relaxed mb-3">
                    Interested in pricing? Tell us about your project and we&apos;ll provide a tailored quote.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold group-hover:text-gold-light transition-colors">
                    Request a Quote
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              <DiamondDivider className="my-7" />

              <div className="flex items-center justify-center text-sm text-foreground-muted/50">
                <a
                  href="mailto:tylerallamong@hayneindustries.com"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  tylerallamong@hayneindustries.com
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
