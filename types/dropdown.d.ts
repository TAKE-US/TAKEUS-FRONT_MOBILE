type AllowedKeys = 'countryList' | 'cityList' | 'airportList';

export type dropdownPropType = {
  restProps: {
    [key in AllowedKeys]: Array<stirng>;
  };
  onSubmit: fn;
  onClose: fn;
};
