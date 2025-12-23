export function formatPrice(value: number) {
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return `${formatted.replace(/\u00A0/g, " ")}`;
}
