import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserValidationFlow } from "./components/UserValidationFlow/UserValidationFlow";

type SearchParams = {
  cupom: string;
  planId: string;
};

type PlansPageProps = {
  searchParams: Promise<SearchParams>;
};

async function PlansPage({ searchParams }: PlansPageProps) {
  const params = await searchParams;

  const planId = params.planId || "";
  const couponId = params.cupom || undefined;

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
      <UserValidationFlow planId={planId} couponId={couponId} />
      <Button variant="secondary">Subscribe Now</Button>
      <Button>Subscribe Now</Button>
      <div>
        <Input placeholder="Digite seu email" />
      </div>
    </div>
  );
}

export default PlansPage;
