import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/cars";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (carId) => {
  const result = await request.get(`${baseUrl}/${carId}`);

  return result;
};

export const create = async (carData) => {
  const result = await request.post(baseUrl, carData);

  return result;
};

export const edit = async (carId, carData) => {
  const result = await request.put(`${baseUrl}/${carId}`, carData);

  return result;
};

export const remove = async (carId) => request.remove(`${baseUrl}/${carId}`);
