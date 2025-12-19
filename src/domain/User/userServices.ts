"use server";

import { AppError } from "@/src/utils/errors/AppError";
import { CreateUserDTO } from "./userDTO";
import * as userResources from "./userResources";

export async function createUser(payload: CreateUserDTO) {
  try {
    const { data } = await userResources.createUserResource(payload);

    return {
      linkToPaymentPage: data.linkToPaymentPage,
    };
  } catch (error) {
    if (error instanceof AppError) {
      throw new AppError(error.message, error.statusCode, error?.action);
    }

    throw error;
  }
}
