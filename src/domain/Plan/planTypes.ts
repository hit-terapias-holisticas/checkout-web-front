export type Coupon = {
  percentOff: number;
  id: string;
  title: string;
};

export type Plan = {
  id: string;
  price: number;
  priceWithDiscount?: number;
  appointments: number;
  isRecommended: boolean;
  title: string;
  description: string;
  benefits: string[];
};

export type GetPlansResponse = {
  coupon?: Coupon;
  plans: Plan[];
};
