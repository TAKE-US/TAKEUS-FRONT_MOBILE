import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? process.env.DEV_API_URL : process.env.DEPLOY_API_URL;

export const getDogs = async () => {
  try {
    const { data } = await axios.get('api/dogs');
    return data.data;
  } catch (e) {
    return e;
  }
};
