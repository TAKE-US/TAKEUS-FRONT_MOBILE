export type DepartureType =
  | {
      [index: string]: string;
      string?: {
        string: Array<string>;
      };
    }
  | Record<string, never>;
