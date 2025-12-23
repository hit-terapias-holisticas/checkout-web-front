import { GetPlansResponse } from "@/domain/Plan/planTypes";

export type UserValidationFlowProps = {
  plansData: GetPlansResponse;
  couponId?: string;
};

export type UseUserValidationFlowProps = {
  couponId?: string;
};
