import { createFileRoute } from "@tanstack/react-router";
import { ATPromoLanding } from "@/components/at-promo-landing";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AT promo | Ofertas, cupons e achadinhos" },
      {
        name: "description",
        content:
          "O AT promo garimpa ofertas, cupons e achadinhos para você receber oportunidades direto no celular. É grátis.",
      },
      { property: "og:title", content: "AT promo — A gente garimpa. Você aproveita." },
      {
        property: "og:description",
        content: "Receba ofertas, cupons e achadinhos sem precisar procurar o dia inteiro.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://atpromo.vercel.app/" },
      { property: "og:image", content: "https://atpromo.vercel.app/og-banner.png" },
      { property: "og:image:secure_url", content: "https://atpromo.vercel.app/og-banner.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AT promo - Ofertas que valem a pena! Grupo VIP no WhatsApp e Telegram" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AT promo — A gente garimpa. Você aproveita." },
      {
        name: "twitter:description",
        content: "Receba ofertas, cupons e achadinhos sem precisar procurar o dia inteiro.",
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
