import type { GetCarsResponse } from "../types/car";
import { server } from "./serverConfig";

interface GetCarsParams {
  page: number;
  perPage: number;
  sortField: string;
  sortOrder: string;
  make: string;
  model: string;
  color: string;
  fuelType: string;
  year: number;
  price: number;
}

export const getCars = async (params?: GetCarsParams) => {
  const res = await server.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};
