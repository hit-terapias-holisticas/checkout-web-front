export type UserValidationFlowProps = {
  searchParams: Promise<{
    cupom: string;
  }>;
};

export type UseUserValidationFlowProps = {
  couponId?: string;
};
