"use client";

import { UserValidationFlow } from "./components/UserValidationFlow/UserValidationFlow";

type SearchParams = {
  cupom: string;
};

type PlansPageProps = {
  searchParams: Promise<SearchParams>;
};

function PlansPage({ searchParams }: PlansPageProps) {
  return <UserValidationFlow searchParams={searchParams} />;
}

export default PlansPage;
