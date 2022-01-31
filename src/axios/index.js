import jsonToFormData from '../utils/jsonToFromDate';
import baseAxios from './Base';

const postApi = async (url, body) => (await baseAxios.post(url, body)).data;

const postFormDataApi = async (url, body) =>
  (
    await baseAxios.post(url, jsonToFormData(body), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  ).data;

const getApi = async (url) => (await baseAxios.get(url)).data;

const deleteApi = async (url, body) => (await baseAxios.delete(url, body)).data;

export default {
  POST: postApi,
  POST_FORM_DATA: postFormDataApi,
  GET: getApi,
  DELETE: deleteApi,
};
