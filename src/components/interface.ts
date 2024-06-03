export interface AgeResponse {
  name: string;
  age: number;
  count: number;
}

export interface GenderResponse {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

export interface CountryData {
  country_id: string;
  probability: number;
}

export interface CountryResponse {
  name: string;
  country: CountryData[];
}

export interface Result {
  age: number | null;
  gender: string | null;
  country: string[];
}
