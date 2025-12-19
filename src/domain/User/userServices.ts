"use server";

import { AppError } from "@/src/utils/errors/AppError";
import { CheckUserAlreadyExistsDTO, CreateUserDTO } from "./userDTO";
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

export async function checkUserAlreadyExists(
  payload: CheckUserAlreadyExistsDTO
) {
  try {
    const response = await userResources.checkUserAlreadyExists(payload);

    return {
      linkToPaymentPage: response.data.linkToPaymentPage,
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        linkToPaymentPage: null,
        error: new AppError(error.message, error.statusCode, error?.action),
      };
    }

    return {
      linkToPaymentPage: null,
    };
  }
}
