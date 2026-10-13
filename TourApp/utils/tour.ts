export interface Tour {
  id: string;
  name: string;
  city: string;
  days: number;
  price: number;
  seats: number;
  departure: string;
  image: string;
  isFavorite: boolean;
}

export interface TourSection {
  title: string;
  data: Tour[];
}

export function groupByCity(tours: Tour[]): TourSection[] {
  const groups: { [city: string]: Tour[] } = {};

  tours.forEach((tour) => {
    if (!groups[tour.city]) {
      groups[tour.city] = [];
    }
    groups[tour.city].push(tour);
  });

  const sortedCities = Object.keys(groups).sort((a, b) => a.localeCompare(b));

  return sortedCities.map((city) => ({
    title: city,
    data: groups[city].sort((a, b) => a.departure.localeCompare(b.departure)),
  }));
}
