import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";

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
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="shadow-cta-glow">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-6 py-10 sm:px-12 sm:py-14 md:px-20 md:py-20 rounded-3xl sm:rounded-4xl gap-0">
          <div className="flex flex-col items-center text-center pb-6 sm:pb-8 md:pb-10">
            <Image
              src="/images/logo-full.png"
              alt="Logo"
              width={150}
              height={50}
              className="pb-4 sm:pb-6 md:pb-8 w-25 sm:w-30 md:w-37.5 h-auto"
            />
            <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-blue-950 leading-tight sm:leading-tight md:leading-15 pb-2 sm:pb-3 md:pb-4">
              Insira seu e-mail e inicie sua assinatura
            </h1>
            <p className="text-base sm:text-lg md:text-1-5xl font-bold text-gray-500">
              Se você já possui um cadastro, use seu e-mail para logar.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8">
            <Field>
              <FieldLabel className="text-sm sm:text-sm-plus md:text-base font-semibold text-blue-950">
                Email
              </FieldLabel>
              <Input placeholder="Digite seu email" />
            </Field>
            <Button className="w-full">Continuar</Button>
          </div>
        </DialogContent>
      </Dialog>
      <Button variant="secondary">Subscribe Now</Button>
      <Button>Subscribe Now</Button>
      <div>
        <Input placeholder="Digite seu email" />
      </div>
    </div>
  );
}

export default PlansPage;
