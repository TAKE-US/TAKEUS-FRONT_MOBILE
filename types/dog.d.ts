export type DogCardListType = Array<DogCard>;

export interface DogCard {
  status: string;
  kakaotalkId: Array<string>;
  phoneNumber: Array<string>;
  instagram: Array<string>;
  twitter: Array<string>;
  facebook: Array<string>;
  photos: Array<string>;
  _id: string;
  user: string;
  endingCountry: string;
  endingAirport: string;
  name: string;
  gender: string;
  age: string;
  weight: number;
  neutralization: boolean;
  health: string;
  isInstitution: boolean;
  institutionName: string;
  registerDate: string;
  __v: number;
  detail: string;
}
