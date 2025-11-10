// src/components/whatsapp-button-wrapper.tsx

import { WhatsAppButton } from './whatsapp-button';

export function WhatsAppButtonWrapper() {
  // Static WhatsApp number
  const whatsappNumber = "9063679687";

  return <WhatsAppButton whatsappNumber={whatsappNumber} />;
}
