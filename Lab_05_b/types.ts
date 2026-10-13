export interface BikeItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  category: 'Roadbike' | 'Mountain';
  image: string;
  description: string;
  isFavorite: boolean;
}

export type RootStackParamList = {
  Welcome: undefined;
  BikeList: undefined;
  BikeDetail: { bike: BikeItem };
};
