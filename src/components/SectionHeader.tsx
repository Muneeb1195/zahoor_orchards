export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="w-12 h-0.5 bg-gold rounded mb-3" />
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-text-secondary text-base">{subtitle}</p>}
    </div>
  );
}
