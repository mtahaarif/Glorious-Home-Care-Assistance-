type DetailCardProps = {
  title: string;
  intro: string;
  items: string[];
};

export default function DetailCard({ title, intro, items }: DetailCardProps) {
  return (
    <div className="rounded-2xl border border-brand-gold/30 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{intro}</p>
      <ul className="mt-4 space-y-2 text-sm text-brand-ink">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-red" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
