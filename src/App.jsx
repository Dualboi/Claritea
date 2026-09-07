import { useMemo, useState } from 'react';
import SectionHeading from './components/SectionHeading';
import TeaCard from './components/TeaCard';

const teaCategories = ['All', 'Green', 'Black', 'Herbal', 'Oolong'];

const teaRange = [
  {
    name: 'Spring Meadow Sencha',
    type: 'Green',
    temperature: '75°C',
    origin: 'Uji, Japan',
    price: 'Bright and grassy',
    description: 'A clean, vivid sencha with steamed sweetness and a fresh finish.',
    notes: ['fresh cut grass', 'sea mist', 'gentle sweetness']
  },
  {
    name: 'Cedar Smoke Breakfast',
    type: 'Black',
    temperature: '95°C',
    origin: 'Assam, India',
    price: 'Full-bodied and warm',
    description: 'A bold morning blend with deep malt, soft spice, and a rounded body.',
    notes: ['malty', 'oak', 'honeyed']
  },
  {
    name: 'Golden Orchard Oolong',
    type: 'Oolong',
    temperature: '88°C',
    origin: 'Taiwan',
    price: 'Velvety and floral',
    description: 'Layered florals, stone fruit, and a silky aftertaste that lingers.',
    notes: ['orchard fruit', 'orchid', 'cream']
  },
  {
    name: 'Wild Chamomile Rest',
    type: 'Herbal',
    temperature: '100°C',
    origin: 'Alps',
    price: 'Soft and calming',
    description: 'A nighttime infusion built for winding down with honey and apple notes.',
    notes: ['apple', 'honey', 'calm finish']
  }
];

const ritualSteps = [
  {
    title: 'Source with intention',
    copy: 'We start with small growers and season-specific harvests so each tea feels alive.'
  },
  {
    title: 'Blend for clarity',
    copy: 'Each recipe is tuned for balance, body, and a finish that invites another sip.'
  },
  {
    title: 'Serve with ritual',
    copy: 'From temperature to steep time, the final cup is designed to slow the moment down.'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTea, setSelectedTea] = useState(teaRange[0].name);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const visibleTeas = useMemo(
    () =>
      teaRange.filter(
        (tea) => activeCategory === 'All' || tea.type === activeCategory
      ),
    [activeCategory]
  );

  const featuredTea = teaRange.find((tea) => tea.name === selectedTea) ?? teaRange[0];

  function handleCategorySelect(category) {
    setActiveCategory(category);
    const firstVisibleTea = teaRange.find((tea) => category === 'All' || tea.type === category);

    if (firstVisibleTea) {
      setSelectedTea(firstVisibleTea.name);
    }
  }

  function handleTeaSelect(teaName) {
    setSelectedTea(teaName);
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;

    setSubmitted(true);
    setEmail('');
  }

  return (
    <div className="min-h-screen overflow-hidden text-clay-900">
      <header className="relative border-b border-white/50">
        <div className="absolute inset-0 bg-gradient-to-r from-moss-50 via-clay-50 to-amber-50" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-moss-700 text-lg font-bold text-white shadow-glow">
              C
            </span>
            <div>
              <p className="font-display text-3xl font-semibold leading-none">Claritea</p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-moss-600">
                Tea with intention
              </p>
            </div>
          </a>

          <nav className="hidden gap-8 text-sm font-semibold text-clay-700 md:flex">
            <a href="#collection" className="transition hover:text-moss-600">
              Collection
            </a>
            <a href="#ritual" className="transition hover:text-moss-600">
              Ritual
            </a>
            <a href="#story" className="transition hover:text-moss-600">
              Story
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 lg:pt-16">
          <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-moss-200/35 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-moss-200 bg-white/70 px-4 py-2 text-sm font-semibold text-moss-700 shadow-sm backdrop-blur">
                Small batch teas, made to feel calm and premium
              </p>
              <h1 className="max-w-2xl font-display text-5xl font-semibold tracking-tight text-clay-900 md:text-7xl">
                A tea brand landing page with a softer, warmer ritual.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-clay-700 md:text-xl">
                This starter gives you a React + Tailwind foundation for Claritea: elegant tea
                storytelling, clear calls to action, and reusable sections you can expand into a
                full client site.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#collection"
                  className="rounded-full bg-moss-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-moss-600"
                >
                  Explore teas
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-clay-200 bg-white/70 px-6 py-3 text-sm font-semibold text-clay-800 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Read the story
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['28', 'daily harvests'],
                  ['14', 'blend profiles'],
                  ['1.5k+', 'cups served']
                ].map(([value, label]) => (
                  <div key={label} className="glass-panel rounded-[1.75rem] p-5">
                    <div className="font-display text-4xl font-semibold text-clay-900">{value}</div>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-clay-600">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full border border-moss-300/60 bg-white/70 blur-[1px]" />
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-amber-100/80 blur-2xl" />

              <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-6 shadow-glow">
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-moss-400 via-amber-300 to-clay-300" />

                <div className="rounded-[2rem] bg-gradient-to-br from-clay-900 to-moss-900 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-100/90">
                    Featured blend
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-semibold">{featuredTea.name}</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                    {featuredTea.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/60">Origin</p>
                      <p className="mt-2 font-semibold">{featuredTea.origin}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/60">Best served</p>
                      <p className="mt-2 font-semibold">{featuredTea.temperature}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {featuredTea.notes.map((note) => (
                      <span key={note} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-clay-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss-600">
                      Mood
                    </p>
                    <p className="mt-2 font-semibold text-clay-900">Quiet mornings and slow evenings</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-clay-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss-600">
                      Pairing
                    </p>
                    <p className="mt-2 font-semibold text-clay-900">Shortbread, citrus, and stillness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Collection"
            title="Pick a blend, then let the rest of the site grow from this system."
            copy="The card layout, filter state, and hero summary are all reusable patterns you can keep extending as the client content grows."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {teaCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategorySelect(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-moss-700 text-white shadow-glow'
                    : 'bg-white/70 text-clay-700 hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {visibleTeas.map((tea) => (
              <TeaCard
                key={tea.name}
                tea={tea}
                isActive={tea.name === selectedTea}
                onSelect={handleTeaSelect}
              />
            ))}
          </div>
        </section>

        <section id="ritual" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-8 rounded-[2.5rem] bg-clay-900 px-6 py-10 text-white md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Ritual"
                title="Build a brand story around how tea feels, not just what it is."
                copy="This section gives you a cleaner narrative flow for client copy: source, blend, serve, and then invite the customer back."
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {ritualSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/78">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Story"
                title="A grounded palette, better typography, and a layout that already feels like a tea brand."
                copy="Use this as a starting system: swap copy, extend the collection, and move the brand into product pages or a storefront later."
              />
            </div>

            <form onSubmit={handleNewsletterSubmit} className="glass-panel rounded-[2rem] p-6 shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-moss-600">
                Newsletter
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-clay-900">
                Taste notes and launch updates.
              </h3>
              <p className="mt-3 text-sm leading-6 text-clay-700">
                Drop in a lead capture form here when you are ready to collect emails.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="min-w-0 flex-1 rounded-full border border-clay-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-clay-400 focus:border-moss-400"
                />
                <button
                  type="submit"
                  className="rounded-full bg-clay-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-moss-700"
                >
                  Join list
                </button>
              </div>

              {submitted ? (
                <p className="mt-4 text-sm font-medium text-moss-700">
                  Thanks. That subscription form is ready for a real backend later.
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-clay-700 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Claritea. Tea brand starter built with React and Tailwind CSS.</p>
          <div className="flex gap-4 font-semibold">
            <a href="#collection" className="hover:text-moss-600">
              Collection
            </a>
            <a href="#story" className="hover:text-moss-600">
              Story
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}