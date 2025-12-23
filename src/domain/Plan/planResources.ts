import { AxiosResponse } from "axios";
import { api } from "@/http/api";
import { GetPlansResponseDTO } from "./planDTO";

export async function getPlansResource(
  couponId?: string
): Promise<AxiosResponse<GetPlansResponseDTO>> {
  const url = couponId
    ? `/payment/checkout/plan?couponId=${couponId}`
    : "/payment/checkout/plan";

  return api.get<GetPlansResponseDTO>(url);
}
