"use server";
import * as planResources from "./planResources";
import { GetPlansResponse } from "./planTypes";

export async function getPlans(couponId?: string): Promise<GetPlansResponse> {
  const { data } = await planResources.getPlansResource(couponId);

  return data;
}
