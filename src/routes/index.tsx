import { createFileRoute } from "@tanstack/react-router";
import { ATPromoLanding } from "@/components/at-promo-landing";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AT promo | Games, tecnologia, hardware e promoções" },
      {
        name: "description",
        content:
          "Games, tecnologia, hardware, acessórios e muito mais! Receba ofertas reais, cupons e achadinhos verificados direto no WhatsApp e Telegram.",
      },
      { property: "og:site_name", content: "AT promo" },
      { property: "og:title", content: "AT promo — Games, Tecnologia & Achadinhos" },
      {
        property: "og:description",
        content: "As melhores promoções e cupons esgotam em poucos minutos. Receba os links verificados direto no seu celular!",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://atpromo.vercel.app/" },
      { property: "og:image", content: "https://atpromo.vercel.app/og-banner.png" },
      { property: "og:image:secure_url", content: "https://atpromo.vercel.app/og-banner.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AT promo - Games, Tecnologia e Achadinhos" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AT promo — Games, Tecnologia & Achadinhos" },
      {
        name: "twitter:description",
        content: "As melhores promoções e cupons esgotam em poucos minutos. Receba os links verificados direto no seu celular!",
      },
      { property: "twitter:image", content: "https://atpromo.vercel.app/og-banner.png" },
      { name: "twitter:image", content: "https://atpromo.vercel.app/og-banner.png" },
    ],
    links: [
      { rel: "canonical", href: "https://atpromo.vercel.app/" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <ATPromoLanding />;
}
