import { useState, useEffect, useCallback } from "react";
import { planService } from "@/domain/services";
import { GetPlansResponse } from "@/domain/Plan/planTypes";

export function useGetPlans(couponId?: string) {
  const [data, setData] = useState<GetPlansResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPlans = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await planService.getPlans(couponId);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [couponId]);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  return {
    data,
    isLoading,
    error,
  };
}
