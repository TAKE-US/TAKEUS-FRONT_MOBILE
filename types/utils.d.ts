export type DepartureType =
  | {
      [index: string]: string;
      string?: {
        string: Array<string>;
      };
    }
  | Record<string, never>;

export type DepartureContextType = {
  departureList: DepartureType;
  setDepartureList: (list: DepartureType) => void;
};
