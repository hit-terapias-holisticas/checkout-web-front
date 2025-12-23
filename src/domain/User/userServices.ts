"use server";

import { AppError } from "@/src/utils/errors/AppError";
import { CheckUserAlreadyExistsDTO, CreateUserDTO } from "./userDTO";
import * as userResources from "./userResources";
import {
  CheckUserAlreadyExistsServiceResponse,
  CreateUserServiceResponse,
} from "./userTypes";

export async function createUser(
  payload: CreateUserDTO
): Promise<CreateUserServiceResponse> {
  try {
    const { data } = await userResources.createUserResource(payload);

    return {
      linkToPaymentPage: data.linkToPaymentPage,
      success: true,
    };
  } catch (error) {
    const statusCode = error instanceof AppError ? error.statusCode : 400;
    const action = error instanceof AppError ? error.action : undefined;

    return {
      success: false,
      linkToPaymentPage: "",
      error: {
        message: "Ocorreu um erro ao criar seu usuário. Tente novamente.",
        statusCode,
        action,
      },
    };
  }
}

export async function checkUserAlreadyExists(
  payload: CheckUserAlreadyExistsDTO
): Promise<CheckUserAlreadyExistsServiceResponse> {
  try {
    const response = await userResources.checkUserAlreadyExists(payload);

    return {
      success: true,
      linkToPaymentPage: response.data.linkToPaymentPage,
    };
  } catch (error) {
    console.log("aqui => ", error);
    const statusCode = error instanceof AppError ? error.statusCode : 400;
    const action = error instanceof AppError ? error.action : undefined;

    return {
      success: false,
      linkToPaymentPage: "",
      error: {
        message: "Ocorreu um erro ao verificar seu email. Tente novamente.",
        statusCode,
        action,
      },
    };
  }
}
