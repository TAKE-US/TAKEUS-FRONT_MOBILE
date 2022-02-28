import axios from 'axios';
import { match } from 'ts-pattern';
import { ERROR_TYPE } from '../types/error';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? process.env.DEV_API_URL : process.env.DEPLOY_API_URL;

interface getDogsResp {
  status: number;
  error: ERROR_TYPE | null;
  data: {
    dogList: Array<string>;
  } | null;
}

const getErrorType = (statusCode: number): ERROR_TYPE | null => {
  return match(statusCode)
    .with(200, () => ERROR_TYPE.NOT_ERROR)
    .with(400, 401, 403, () => ERROR_TYPE.CLIENT_ERROR)
    .with(500, () => ERROR_TYPE.SERVER_ERROR)
    .otherwise(() => null);
};

export const getDogs = async (): Promise<getDogsResp> => {
  const data = await axios.get('/api/dogs');
  const errorType = getErrorType(data.status);

  return {
    status: data.status,
    error: errorType,
    data: {
      dogList: data.data.data,
    },
  };
};
