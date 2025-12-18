import { checkUserResource } from "./resources";
import {
  type CheckUserRequestDTO,
  type CheckUserResponseDTO,
  isUserRegistered,
} from "./types";

export type CheckUserResult =
  | { type: "redirect"; url: string }
  | { type: "create_user" };

export async function checkUserService(
  email: string,
  planId: string,
  couponId?: string
): Promise<CheckUserResult> {
  const payload: CheckUserRequestDTO = {
    email,
    planId,
    ...(couponId ? { couponId } : {}),
  };

  const response: CheckUserResponseDTO = await checkUserResource(payload);

  if (isUserRegistered(response)) {
    return {
      type: "redirect",
      url: response.linkToPaymentPage,
    };
  }

  return {
    type: "create_user",
  };
}
