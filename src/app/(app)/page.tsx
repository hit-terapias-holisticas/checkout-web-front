import { PlanCard } from "@/components/planCard";
import { PlanCarousel } from "@/components/planCarousel";

type SearchParams = {
  cupom: string;
  planId: string;
};

type PlansPageProps = {
  searchParams: Promise<SearchParams>;
};

async function PlansPage({ searchParams }: PlansPageProps) {
  const params = await searchParams;

  const planId = params?.planId;
  const couponId = params?.cupom;

  const plans = [
    {
      id: "1",
      price: 85,
      appointments: 1,
      isRecommended: false,
      title: "Plano Essencial",
      description: "Para quem está começando.",
      benefits: ["Acesso ilimitado", "Profissionais certificados"],
    },
    {
      id: "2",
      price: 160,
      appointments: 2,
      isRecommended: true,
      title: "Plano Equilíbrio",
      description: "O mais escolhido para constância.",
      benefits: ["Acesso ilimitado", "Profissionais certificados"],
    },
    {
      id: "3",
      price: 280,
      appointments: 4,
      isRecommended: false,
      title: "Plano Intensivo",
      description: "Para foco total no processo.",
      benefits: ["Acesso ilimitado", "Atendimento personalizado"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 pt-10 gap-6 md:gap-8">
      <div className="px-4 flex flex-col items-center gap-6">
        <div className="bg-primary-600/10 px-8 py-2 rounded-full">
          <p className="text-primary-600 text-sm font-bold">
            ✨ Mais de 40.000 pessoas transformadas
          </p>
        </div>
        <div className="text-center flex flex-col gap-6">
          <h1 className="text-4-5xl md:text-6-5xl font-black text-blue-950 leading-none md:leading-6-5xl ">
            Escolha o plano{" "}
            <span className="text-primary-600">
              ideal para <br /> sua jornada
            </span>
          </h1>
          <p className="text-gray-600 text-lg font-semibold leading-tight">
            Escolha o plano ideal e comece sua jornada de autoconhecimento hoje
            mesmo.
          </p>
        </div>
      </div>

      <PlanCarousel plans={plans} />
    </div>
  );
}

export default PlansPage;
