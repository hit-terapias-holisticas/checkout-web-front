import { formatPrice } from "@/utils/format-currency";
import { CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type PlanCardProps = {
  id: string;
  price: number;
  appointments: number;
  isRecommended: boolean;
  title: string;
  description: string;
  benefits: string[];
};

export function PlanCard({
  id,
  price,
  appointments,
  isRecommended,
  title,
  description,
  benefits,
}: PlanCardProps) {
  const sessionLabel = appointments === 1 ? "Sessão" : "Sessões";

  return (
    <>
      {isRecommended && (
        <div className="bg-primary-600 py-2 text-center rounded-t-2xl">
          <span className="text-gray-50 text-base font-bold">
            O Mais Popular
          </span>
        </div>
      )}
      <div
        className={cn(
          "bg-white rounded-2xl overflow-hidden flex flex-col h-full",
          {
            "border-2 border-primary-600": isRecommended,
            "rounded-t-none": isRecommended,
          }
        )}
      >
        <div className="px-4 pt-4 pb-10 flex flex-col flex-1">
          <h3 className="text-2-5xl font-bold text-blue-950">{title}</h3>
          <p className="text-base text-gray-600 pb-6">{description}</p>
          <div className="flex items-baseline gap-1 pb-1">
            <span
              className={cn("text-5xl font-black", {
                "text-primary-600": isRecommended,
                "text-blue-950": !isRecommended,
              })}
            >
              {formatPrice(price)}
            </span>
            <span className="text-base text-gray-600 font-semibold">/mês</span>
          </div>
          <p className="text-sm text-gray-400 font-semibold pb-6">
            Cobrado mensalmente
          </p>
          <div className="flex items-center gap-2 mb-2">
            <CheckCheck className="text-primary w-5 h-5 shrink-0" />
            <p className="text-sm text-gray-600 font-semibold">
              <span
                className={cn("font-bold", {
                  "text-primary": isRecommended,
                  "text-gray-600": !isRecommended,
                })}
              >
                {appointments} {sessionLabel}
              </span>{" "}
              de terapia por mês
            </p>
          </div>
          <div className="space-y-2 pb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 ">
                <CheckCheck className="text-primary w-5 h-5 shrink-0" />
                <p className="text-sm text-gray-600 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-auto">
            <Button
              variant={isRecommended ? "primary" : "secondary"}
              className={cn({ "shadow-cta-glow": isRecommended })}
            >
              Quero o plano {title}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
