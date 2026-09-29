export const WHATSAPP_NUMBER = '5519988701809';

export function getWhatsAppHref(productName?: string) {
  const message = productName
    ? `Olá! Gostaria de solicitar um orçamento para o equipamento ${productName}.`
    : 'Olá! Vim pelo site da Arruda Bombas e gostaria de solicitar um orçamento.';

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}