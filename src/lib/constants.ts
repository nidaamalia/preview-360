export const WHATSAPP_CONFIG = {
  phoneNumber: "6281330030441",
  defaultMessage: "Halo Paktukang, saya ingin konsultasi",
  projectMessage: (projectTitle: string) =>
    `Halo Paktukang, saya tertarik dengan proyek ${projectTitle}`,
};

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
};
