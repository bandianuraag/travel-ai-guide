"use client";

import { useMemo, useState } from 'react';
import { destinations, travelStyles, type TravelStyle } from '@/lib/travel-data';

const styleColors: Record<TravelStyle | 'All', string> = {
  All: 'bg-sky-500/15 text-sky-100 border-sky-400/40',
  Adventure: 'bg-emerald-500/15 text-emerald-100 border-emerald-400/40',
  Luxury: 'bg-amber-500/15 text-amber-100 border-amber-400/40',
  Family: 'bg-violet-500/15 text-violet-100 border-violet-400/40',
  Romance: 'bg-pink-500/15 text-pink-100 border-pink-400/40',
  Foodie: 'bg-orange-500/15 text-orange-100 border-orange-400/40',
  Budget: 'bg-cyan-500/15 text-cyan-100 border-cyan-400/40'
};

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<TravelStyle>('All');
  const [selectedDestinationId, setSelectedDestinationId] = useState<number>(1);
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const filteredDestinations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesStyle = selectedStyle === 'All' || destination.vibe.includes(selectedStyle);
      const matchesQuery =
        !query ||
        destination.name.toLowerCase().includes(query) ||
        destination.country.toLowerCase().includes(query) ||
        destination.continent.toLowerCase().includes(query) ||
        destination.tagline.toLowerCase().includes(query);

      return matchesStyle && matchesQuery;
    });
  }, [search, selectedStyle]);

  const selectedDestination =
    filteredDestinations.find((destination) => destination.id === selectedDestinationId) || filteredDestinations[0] || destinations[0];

  const generatePlan = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/travel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: selectedDestination.name,
          style: selectedStyle,
          tripLength: '5 days'
        })
      });

      const data = await response.json();
      setPlan(data.plan);
    } catch (error) {
      console.error('Failed to generate plan', error);
      setPlan(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-sky-500/10 via-slate-900 to-indigo-900/80 p-8 shadow-glow md:p-12">
          <nav className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-xl text-sky-300">✈️</div>
              <div>
                <p className="text-lg font-bold">Travel AI Guide</p>
                <p className="text-sm text-slate-300">Discover anywhere on Earth</p>
              </div>
            </div>
            <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10">
              Plan a trip
            </button>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                AI-powered travel inspiration
              </span>
              <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight md:text-6xl">
                Explore dream destinations and build your next adventure.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Search for iconic cities, tropical islands, mountain escapes, and cultural gems — then get a tailored itinerary for your travel style.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search a destination, country, or vibe..."
                  className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white outline-none ring-0 placeholder:text-slate-400 focus:border-sky-400"
                />
                <button
                  onClick={generatePlan}
                  className="rounded-2xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  {loading ? 'Planning...' : 'Generate plan'}
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-sky-300/20 bg-slate-950/60 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Top pick</p>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedDestination.name}</h2>
                  <p className="text-sm text-slate-400">{selectedDestination.country}</p>
                </div>
                <span className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-200">
                  {selectedDestination.continent}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mb-6 flex flex-wrap gap-3">
          {travelStyles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedStyle === style
                  ? styleColors[style]
                  : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <button
                key={destination.id}
                onClick={() => setSelectedDestinationId(destination.id)}
                className={`overflow-hidden rounded-[24px] border text-left transition ${
                  selectedDestination.id === destination.id
                    ? 'border-sky-400/70 bg-sky-500/5 shadow-glow'
                    : 'border-white/10 bg-slate-900/60 hover:border-white/20'
                }`}
              >
                <img src={destination.image} alt={destination.name} className="h-48 w-full object-cover" />
                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <span className="text-xs text-sky-200">{destination.continent}</span>
                  </div>
                  <p className="text-sm text-slate-300">{destination.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.vibe.slice(0, 2).map((vibe) => (
                      <span key={vibe} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">
                        {vibe}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Selected destination</p>
              <h3 className="mt-3 text-3xl font-bold">{selectedDestination.name}</h3>
              <p className="mt-2 text-slate-300">{selectedDestination.description}</p>

              <div className="mt-5 space-y-3 text-sm text-slate-200">
                <div className="flex justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="text-slate-400">Best time</span>
                  <span className="font-medium text-right">{selectedDestination.bestTime}</span>
                </div>
                <div className="flex justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="text-slate-400">Budget</span>
                  <span className="font-medium text-right">{selectedDestination.budget}</span>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Top highlights</p>
              <ul className="mt-4 space-y-3">
                {selectedDestination.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Travel AI planner</p>
              <h3 className="mt-2 text-3xl font-bold">{selectedDestination.name} itinerary</h3>
            </div>
            <button
              onClick={generatePlan}
              className="rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-100 hover:bg-sky-500/20"
            >
              Refresh suggestions
            </button>
          </div>

          {plan ? (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-lg font-bold text-sky-200">Overview</h4>
                <p className="mt-3 text-slate-300">{plan.summary}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-lg font-bold text-sky-200">Best for</h4>
                <ul className="mt-3 space-y-2 text-slate-300">
                  {plan.bestFor.map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-lg font-bold text-sky-200">Day plan</h4>
                <ul className="mt-3 space-y-2 text-slate-300">
                  {plan.days.map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 bg-slate-950/40 p-8 text-slate-300">
              Click “Generate plan” to receive a tailored travel summary and 5-day itinerary for this destination.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
