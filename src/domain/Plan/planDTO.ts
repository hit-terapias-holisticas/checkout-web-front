export type CouponDTO = {
  percentOff: number;
  id: string;
  title: string;
};

export type PlanDTO = {
  id: string;
  price: number;
  priceWithDiscount?: number;
  appointments: number;
  isRecommended: boolean;
  title: string;
  description: string;
  benefits: string[];
};

export type GetPlansResponseDTO = {
  coupon?: CouponDTO;
  plans: PlanDTO[];
};
