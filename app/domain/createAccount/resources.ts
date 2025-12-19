import { api } from "@/http/api";
import type { RequestCreateUser, ResponseCreateContract } from "./types";

export async function createUserResource(
  payload: RequestCreateUser
): Promise<ResponseCreateContract> {
  const response = await api.post<ResponseCreateContract>(
    "/payment/checkout/user",
    payload
  );
  return response.data;
}

