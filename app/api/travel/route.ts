import { NextResponse } from 'next/server';
import { destinations } from '@/lib/travel-data';

export async function POST(request: Request) {
  const body = await request.json();
  const destinationName = body?.destination || 'Bali';
  const style = body?.style || 'All';
  const tripLength = body?.tripLength || '5 days';

  const matchedDestination =
    destinations.find(
      (place) => place.name.toLowerCase() === destinationName.toLowerCase()
    ) ||
    destinations.find((place) => destinationName.toLowerCase().includes(place.name.toLowerCase())) ||
    destinations[0];

  const styleLabels =
    style === 'All'
      ? ['culture', 'nature', 'food', 'relaxation']
      : [style.toLowerCase(), 'local experiences', 'memorable moments'];

  const plan = {
    summary: `This ${tripLength} trip to ${matchedDestination.name} is perfect for travelers looking for ${styleLabels.join(', ')} while enjoying the best of ${matchedDestination.country}.`,
    bestFor: [
      `${matchedDestination.tagline}`,
      `Ideal for ${style === 'All' ? 'balanced travelers' : style.toLowerCase()} explorers`,
      `Budget range: ${matchedDestination.budget}`
    ],
    days: [
      `Day 1: Start with ${matchedDestination.highlights[0]} and a local food stop`,
      `Day 2: Explore ${matchedDestination.highlights[1]} and enjoy an afternoon activity`,
      `Day 3: Visit ${matchedDestination.highlights[2]} and rest in a scenic area`,
      `Day 4: Try local cuisine and discover neighborhoods or scenic trails`,
      `Day 5: Enjoy a relaxing final day with shopping, views, and culture`
    ]
  };

  return NextResponse.json({ plan });
}
