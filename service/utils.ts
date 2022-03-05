import { instance, isErrorByStatusCode } from '@service/index';

export const postToken = async (token: string, social: string) => {
  const body = { token, social };
  const { data, status } = await instance.post('/api/users/login', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const error = isErrorByStatusCode(status);

  const result = {
    id: data.id,
    email: data.email,
    token: data.accessToken,
    issuedAt: data.issuedAt,
  };
  return {
    error,
    data: result,
  };
};

export const getCountryAndAirport = async () => {
  const {
    data: { data },
  } = await instance.get('/api/airports/country');

  const { _id, ...countryAirportList } = data;

  return {
    countryAirportList: countryAirportList,
  };
};
