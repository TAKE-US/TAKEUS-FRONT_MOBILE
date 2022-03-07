import { instance, isErrorByStatusCode, ERROR_TYPE } from 'service/index';
import { DogCardListType, DogCardType } from '@Customtypes/dog';

interface DogListResponse {
  error: ERROR_TYPE | null;
  dogList: DogCardListType;
  length: number;
}
export interface DogResponse {
  error: ERROR_TYPE | null;
  dog: DogCardType;
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
    dogList: data.data,
    length: data.totalNums,
  };
};

export const getDogById = async (id: string): Promise<DogResponse> => {
  const { status, data } = await instance.get(`/api/dogs/detail/${id}`);
  const error = isErrorByStatusCode(status);

  return {
    error,
    dog: data.data,
  };
};
