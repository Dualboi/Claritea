export default function TeaCard({ tea, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tea.name)}
      className={`group w-full rounded-[2rem] border p-5 text-left transition duration-300 ${
        isActive
          ? 'border-moss-300 bg-white shadow-glow'
          : 'border-white/70 bg-white/55 hover:-translate-y-1 hover:bg-white hover:shadow-glow'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-moss-500">
            {tea.type}
          </p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-clay-900">
            {tea.name}
          </h3>
        </div>
        <span className="rounded-full bg-clay-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-clay-700">
          {tea.temperature}
        </span>
      </div>

      <p className="mt-4 max-w-md text-sm leading-6 text-clay-700">{tea.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tea.notes.map((note) => (
          <span
            key={note}
            className="rounded-full bg-clay-50 px-3 py-1 text-xs font-medium text-clay-700"
          >
            {note}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between text-sm font-semibold text-clay-800">
        <span>{tea.origin}</span>
        <span className="text-moss-600">{tea.price}</span>
      </div>
    </button>
  );
}