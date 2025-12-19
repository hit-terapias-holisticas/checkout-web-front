import { AxiosResponse } from "axios";
import type { CreateUserDTO } from "./userDTO";

import { api } from "@/http/api";

import { CreatedUserResponse } from "./userTypes";

export async function createUserResource(
  payload: CreateUserDTO
): Promise<AxiosResponse<CreatedUserResponse>> {
  return api.post<CreatedUserResponse>("/payment/checkout/user", payload);
}
