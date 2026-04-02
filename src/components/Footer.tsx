import Image from "next/image";

const footerLinks = {
  Security: [
    { label: "Video Surveillance", href: "#services" },
    { label: "Access Control", href: "#services" },
    { label: "Alarm Systems", href: "#services" },
    { label: "Cybersecurity", href: "#services" },
  ],
  "Facility Services": [
    { label: "Commercial Cleaning", href: "#services" },
    { label: "Disinfection", href: "#services" },
    { label: "Floor & Carpet Care", href: "#services" },
    { label: "Post-Construction", href: "#post-construction" },
  ],
  Company: [
    { label: "Why Hayne Industries", href: "#differentiators" },
    { label: "Past Performance", href: "#past-performance" },
    { label: "The Mission", href: "#mission" },
    { label: "Contact", href: "#connect" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <a href="#" className="inline-block">
            <Image src="/logo.png" alt="Hayne Industries" width={90} height={90} className="logo-white opacity-50 mx-auto" />
          </a>
          <p className="mt-3 text-xs text-foreground-muted/30 max-w-md mx-auto leading-relaxed">
            Security systems, cybersecurity, and facility services for government,
            commercial, and residential clients nationwide. DVOSB &middot; 8(a) &middot; HUBZone &middot; Licensed &amp; Bonded.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 max-w-48 h-px bg-gradient-to-r from-transparent to-gold/20" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold/30" />
          <div className="flex-1 max-w-48 h-px bg-gradient-to-l from-transparent to-gold/20" />
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="text-center">
              <h4 className="text-[9px] font-mono font-medium text-gold/50 uppercase tracking-[0.2em] mb-3">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-foreground-muted/25 hover:text-gold/60 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-5 border-t border-gold/5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-5">
            {["NAICS 561612", "NAICS 561720", "CAGE: 9VN48", "DUNS: E34AVD6FPWA9"].map((code) => (
              <span key={code} className="text-[9px] font-mono text-foreground-muted/15 tracking-wider">{code}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] text-foreground-muted/20 tracking-wide">
              &copy; {new Date().getFullYear()} Hayne Industries. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[10px] text-foreground-muted/20">
              <a href="#" className="hover:text-gold/40 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold/40 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
