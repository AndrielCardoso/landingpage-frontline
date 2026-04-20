import React from "react";

export const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Frontline Help",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Modelo White-Label para Farmácias"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "120"
    },
    "description": "Plataforma de suporte à decisão clínica e inteligência farmacêutica.",
    "publisher": {
      "@type": "Organization",
      "name": "Frontline Help",
      "url": "https://frontlinehelp.com.br",
      "logo": "https://frontlinehelp.com.br/Logo_Frontline.png"
    }
  };

  const businessData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Frontline Help",
    "url": "https://frontlinehelp.com.br",
    "logo": "https://frontlinehelp.com.br/Logo_Frontline.png",
    "description": "Especialistas em suporte à decisão clínica farmacêutica.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "medicalSpecialty": ["Pharmacy", "Clinical Decision Support"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
    </>
  );
};
