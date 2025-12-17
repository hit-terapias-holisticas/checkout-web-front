import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchParams = {
  cupom: string;
};

type PlansPageProps = {
  searchParams: Promise<SearchParams>;
};

async function PlansPage({ searchParams }: PlansPageProps) {
  const params = await searchParams;

  console.log(params.cupom);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button className="shadow-cta-glow">Subscribe Now</Button>
      <Button variant="secondary">Subscribe Now</Button>
      <Button>Subscribe Now</Button>
      <div>
        <Input placeholder="Digite seu email" />
      </div>
    </div>
  );
}

export default PlansPage;
