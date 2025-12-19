import { AppError } from "@/utils/errors/AppError";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response && error?.response?.data) {
      return Promise.reject(
        new AppError(
          error.response?.data?.message,
          error?.response?.status,
          error?.response?.data?.action
        )
      );
    }

    return Promise.reject(new AppError("Internal server error", 500));
  }
);
