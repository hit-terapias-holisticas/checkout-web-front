import { api } from "@/http/api";
import type { CheckUserRequestDTO, CheckUserResponseDTO } from "./types";

export async function checkUserResource(
  payload: CheckUserRequestDTO
): Promise<CheckUserResponseDTO> {
  const response = await api.post<CheckUserResponseDTO>("/user/check", payload);
  return response.data;
}
