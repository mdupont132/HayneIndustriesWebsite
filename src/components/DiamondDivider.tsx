export default function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex-1 max-w-32 h-px bg-gradient-to-r from-transparent to-gold/30" />
      <div className="w-2 h-2 rotate-45 border border-gold/40 bg-gold/10" />
      <div className="flex-1 max-w-32 h-px bg-gradient-to-l from-transparent to-gold/30" />
    </div>
  );
}
