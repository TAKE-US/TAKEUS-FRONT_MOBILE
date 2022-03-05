export type countryAirportType =
  | {
      [index: string]: string;
      string?: {
        string: Array<string>;
      };
    }
  | Record<string, never>;
