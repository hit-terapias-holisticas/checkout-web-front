import { AxiosResponse } from "axios";
import type { CheckUserAlreadyExistsDTO, CreateUserDTO } from "./userDTO";
import { CheckUserResponse, CreatedUserResponse } from "./userTypes";

import { api } from "@/http/api";

export async function createUserResource(
  payload: CreateUserDTO
): Promise<AxiosResponse<CreatedUserResponse>> {
  return api.post<CreatedUserResponse>("/payment/checkout/user", payload);
}

export async function checkUserAlreadyExists(
  payload: CheckUserAlreadyExistsDTO
): Promise<AxiosResponse<CheckUserResponse>> {
  return api.post<CheckUserResponse>("/user/check", payload);
}
