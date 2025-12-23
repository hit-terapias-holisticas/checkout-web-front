import { UserValidationFlow } from "./components/UserValidationFlow/UserValidationFlow";
import { planService } from "@/domain/services";

type SearchParams = {
  cupom?: string;
};

type PlansPageProps = {
  searchParams: Promise<SearchParams>;
};

async function PlansPage({ searchParams }: PlansPageProps) {
  const params = await searchParams;
  const plansData = await planService.getPlans(params.cupom);

  return <UserValidationFlow plansData={plansData} couponId={params.cupom} />;
}

export default PlansPage;
