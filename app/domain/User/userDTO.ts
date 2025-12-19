export type CreateUserDTO = {
  email: string;
  name: string;
  password: string;
  planId: string;
  couponId?: string;
  terms: boolean;
};
