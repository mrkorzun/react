import axios from "axios";
import type { Car } from "../types/cars";

interface GetCarListResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}

export const getCarList = async (query: string) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/cars";
  const url = BASE_URL + END_POINT;

  const params = { make: query };

  const res = await axios.get<GetCarListResponse>(url, { params });
  return res.data;
};
// export const postCarList = async () => {};
// export const putCarListById = async () => {};
// export const deleteCarListById = async () => {};
