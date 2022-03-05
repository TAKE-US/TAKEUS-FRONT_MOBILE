import { instance, isErrorByStatusCode } from '@service/index';

export const postToken = async (token: string, social: string) => {
  const body = { token, social };
  const data = await instance.post('/api/users/login', body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const errorType = isErrorByStatusCode(data.status);
  const result = {
    id: data.data.id,
    email: data.data.email,
    token: data.data.accessToken,
    issuedAt: data.data.issuedAt,
  };

  return {
    status: data.status,
    error: errorType,
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
