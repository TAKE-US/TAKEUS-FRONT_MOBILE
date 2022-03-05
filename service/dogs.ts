import { instance, isErrorByStatusCode, ERROR_TYPE } from 'service/index';

interface DogListResponse {
  error: ERROR_TYPE | null;
  dogList: Array<string>;
  length: number;
}

export const getDogs = async (): Promise<DogListResponse> => {
  const { status, data } = await instance.get('/api/dogs');
  const error = isErrorByStatusCode(status);

  return {
    error,
    dogList: data.data,
    length: data.data.length,
  };
};

export const getDogByAirport = async (airport: string): Promise<DogListResponse> => {
  const { status, data } = await instance.get(`/api/dogs/search/${airport}`, {
    params: {
      order: 'latest',
      page: 1,
    },
  });
  const error = isErrorByStatusCode(status);

  return {
    error,
    dogList: data,
    length: data.length,
  };
};
