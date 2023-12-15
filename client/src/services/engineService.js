import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/engines";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (engineId) => {
  const result = await request.get(`${baseUrl}/${engineId}`);

  return result;
};


export const create = async (engineData) => {
    const result = await request.post(baseUrl, engineData);
  
    return result;
  };
  
  export const edit = async (engineId, engineData) => {
    const result = await request.put(`${baseUrl}/${engineId}`, engineData);
  
    return result;
  };
  
  export const remove = async (engineId) => request.remove(`${baseUrl}/${engineId}`);