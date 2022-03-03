import { instance, getErrorType, ERROR_TYPE } from 'service/index';

interface getDogsResp {
  status: number;
  error: ERROR_TYPE | null;
  dogList: Array<string>;
}

export const getDogs = async (): Promise<getDogsResp> => {
  const data = await instance.get('/api/dogs');
  const errorType = getErrorType(data.status);

  return {
    status: data.status,
    error: errorType,
    dogList: data.data.data,
  };
};
