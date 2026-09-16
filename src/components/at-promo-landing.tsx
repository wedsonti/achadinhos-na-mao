import { useState, useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Eye,
  Flame,
  Menu,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Tag,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import shoeImage from "@/assets/offer-running-shoe.jpg";
import earbudsImage from "@/assets/offer-earbuds.jpg";
import toolsImage from "@/assets/offer-tools.jpg";
import airfryerImage from "@/assets/offer-airfryer.jpg";
import speakerImage from "@/assets/offer-speaker.jpg";
import tumblerImage from "@/assets/offer-tumbler.jpg";
import galaxyS25Image from "@/assets/offer-galaxy-s25-ultra.jpg";
import fitnessGraceImage from "@/assets/offer-fitness-grace.jpg";
import logoPng from "@/assets/at-promo-logo.png";
import { MarketplaceMarquee } from "./marketplace-marquee";

const LINKS = {
  offers: "#ofertas",
  instagram: "https://www.instagram.com/atpromoo?stkn=MXU0bnR6cnYwYnhnag==",
  whatsapp: "https://chat.whatsapp.com/IDN79MDjG97Dj8NqsvKlqh",
  telegram: "https://t.me/ATPROMOC",
  whatsappGerais: "https://chat.whatsapp.com/IDN79MDjG97Dj8NqsvKlqh",
  telegramGerais: "https://t.me/ATPROMOGERAIS",
  telegramTech: "https://t.me/ATPROMOC",
};

const offers = [
  {
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    name: "Carregador Portatil Power Bank i2GO 10000mAh 1 Usb-C e 2 Usb-A",
    old: "R$ 99,90",
    price: "R$ 53,00",
    off: "47% OFF",
    store: "Shopee",
    link: "https://s.shopee.com.br/7fZqVt4quO?lp=aff",
  },
  {
    image: earbudsImage,
    name: "Basike Fone De Ouvido Sem Fio Bluetooth Com Gancho Gamer Esportivo Baixa Latência 100h, Design Aberto",
    old: "R$ 159,90",
    price: "R$ 78,00",
    off: "51% OFF",
    store: "Mercado Livre",
    link: "https://meli.la/2ATJe3U",
  },
  {
    image: toolsImage,
    name: "Kit de ferramentas",
    old: "R$ 149,90",
    price: "R$ 99,90",
    off: "33% OFF",
    store: "Loja parceira",
    link: "#",
  },
  {
    image: airfryerImage,
    name: "Air fryer compacta",
    old: "R$ 499,90",
    price: "R$ 329,90",
    off: "34% OFF",
    store: "Marketplace",
    link: "#",
  },
  {
    image: speakerImage,
    name: "Caixa de som portátil",
    old: "R$ 119,90",
    price: "R$ 69,90",
    off: "41% OFF",
    store: "Loja parceira",
    link: "#",
  },
  {
    image: tumblerImage,
    name: "Copo térmico",
    old: "R$ 79,90",
    price: "R$ 49,90",
    off: "37% OFF",
    store: "Marketplace",
    link: "#",
  },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="AT Promoções — início"
      className={`logo ${inverse ? "logo-inverse" : ""}`}
    >
      <img
        src={logoPng}
        alt="AT Promoções — Ofertas que valem a pena!"
        width={1191}
        height={1034}
        referrerPolicy="no-referrer"
      />
    </a>
  );
}

function CTA({
  children = "ENTRAR NO GRUPO",
  className = "",
  flame = false,
}: {
  children?: ReactNode;
  className?: string;
  flame?: boolean;
}) {
  return (
    <Button asChild variant="cta" size="lg" className={`cta ${className}`}>
      <a href={LINKS.offers}>
        {flame && <Flame />}
        {children}
        <ArrowRight />
      </a>
    </Button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Grupos", "#ofertas"],
    ["Como funciona", "#como-funciona"],
    ["Dúvidas", "#duvidas"],
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navegação móvel">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ChevronRight />
            </a>
          ))}
          <CTA>ENTRAR NO GRUPO</CTA>
        </nav>
      )}
    </header>
  );
}

function DealMessage({ second = false }: { second?: boolean }) {
  return (
    <div className="deal-message" suppressHydrationWarning>
      <div className="message-kicker" suppressHydrationWarning>{second ? "⚡ OFERTA RELÂMPAGO" : "🔥 ACHADINHO"}</div>
      <div className="message-product" suppressHydrationWarning>
        <img
          src={second ? fitnessGraceImage : galaxyS25Image}
          alt={
            second
              ? "Conjunto Academia Fitness Grace Azul Claro Cós Alto Forro Duplo AQN SPORT"
              : "Samsung Galaxy S25 Ultra 5g, 256GB, 12GB, Câm. Quád. Titanium Black"
          }
          width={768}
          height={768}
          referrerPolicy="no-referrer"
        />
        <div suppressHydrationWarning>
          <strong suppressHydrationWarning>
            {second
              ? "Conjunto Academia Fitness Grace Azul Claro Cós Alto Forro Duplo AQN SPORT"
              : "Samsung Galaxy S25 Ultra 5g, 256GB, 12GB, Câm. Quád. Titanium Black"}
          </strong>
          <s suppressHydrationWarning>{second ? "R$ 90,00" : "R$ 5.998,89"}</s>
          <b suppressHydrationWarning>{second ? "R$ 53,00" : "R$ 4859"}</b>
        </div>
      </div>
      <div className="message-bottom" suppressHydrationWarning>
        <span suppressHydrationWarning>{second ? "41% OFF" : "🏷️ Cupom disponível"}</span>
        <span suppressHydrationWarning>APROVEITAR</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            A GENTE <em>GARIMPA.</em>
            <br />
            VOCÊ <span>APROVEITA.</span>
          </h1>
          <p>Ofertas, cupons e achadinhos, sem você precisar procurar.</p>
          <CTA flame>ENTRAR NO GRUPO</CTA>
          <ul className="hero-bullets" aria-label="Benefícios do grupo">
            <li>
              <Check className="bullet-icon" />
              <span>100% gratuito</span>
            </li>
            <li>
              <Check className="bullet-icon" />
              <span>Sem cadastro</span>
            </li>
            <li>
              <Check className="bullet-icon" />
              <span>Você decide o que comprar</span>
            </li>
          </ul>
        </div>
      </div>
      <MarketplaceMarquee />
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="problem section">
      <div className="narrow">
        <span className="section-index">O problema</span>
        <h2>
          Você também tem a sensação de que as boas ofertas <span>aparecem e somem?</span>
        </h2>
        <p>
          São dezenas de lojas, milhares de produtos, cupons que expiram e promoções que duram
          pouco.
        </p>
        <p>Ficar procurando tudo isso o dia inteiro não faz sentido.</p>
        <strong>
          É aí que entra o AT promo. <ArrowRight />
        </strong>
      </div>
    </section>
  );
}

export function SolutionCards() {
  const items = [
    { icon: Search, title: "Garimpo", text: "A gente procura boas oportunidades." },
    {
      icon: Tag,
      title: "Curadoria",
      text: "Encontramos preços, descontos e cupons para compartilhar.",
    },
    { icon: MessageCircle, title: "Entrega", text: "A oportunidade chega direto no seu celular." },
  ];
  return (
    <section className="section solution">
      <div className="container">
        <div className="section-heading">
          <span className="section-index">A solução</span>
          <h2>
            Você não procura.
            <br />
            <span>A gente garimpa.</span>
          </h2>
          <p>
            O AT promo acompanha ofertas e oportunidades em diferentes lojas e marketplaces e
            compartilha aquilo que realmente pode valer a pena.
          </p>
        </div>
        <div className="three-grid">
          {items.map(({ icon: Icon, title, text }, i) => (
            <article className="feature-card" key={title}>
              <div className="feature-number">0{i + 1}</div>
              <div className="icon-box">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferPreview() {
  return (
    <section id="ofertas" className="section preview-section">
      <div className="container preview-grid">
        <div className="preview-action-column">
          <span className="section-index">Direto no celular</span>

          <div className="mini-steps" aria-label="Como funciona o grupo">
            <div className="mini-step">
              <Smartphone className="mini-step-icon" />
              <span>Você recebe</span>
            </div>
            <ArrowRight className="mini-step-arrow" />
            <div className="mini-step">
              <Eye className="mini-step-icon" />
              <span>Olha</span>
            </div>
            <ArrowRight className="mini-step-arrow" />
            <div className="mini-step">
              <Check className="mini-step-icon" />
              <span>Decide</span>
            </div>
          </div>

          <div className="channel-selection">
            <div className="primary-channel-wrapper">
              <span className="channel-badge">CANAL MAIS POPULAR</span>
              <a
                id="btn-whatsapp-ofertas-gerais"
                href={LINKS.whatsappGerais}
                target="_blank"
                rel="noopener noreferrer"
                className="group-btn group-btn-whatsapp primary-channel-btn"
              >
                <MessageCircle className="group-btn-icon" strokeWidth={2.5} />
                <div className="group-btn-content">
                  <span className="group-btn-main">ENTRAR NO GRUPO</span>
                  <span className="group-btn-sub">WhatsApp • Ofertas Gerais</span>
                </div>
                <ArrowRight className="group-btn-arrow" />
              </a>
            </div>

            <div className="secondary-channels">
              <span className="secondary-channels-label">Prefere outro canal?</span>
              <div className="secondary-channels-links">
                <a
                  id="btn-telegram-ofertas-gerais"
                  href={LINKS.telegramGerais}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-channel-btn"
                >
                  <Send className="secondary-btn-icon" />
                  <span>Telegram Geral</span>
                </a>
                <span className="secondary-dot" aria-hidden="true">
                  ·
                </span>
                <a
                  id="btn-telegram-ofertas-tech"
                  href={LINKS.telegramTech}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-channel-btn"
                >
                  <Send className="secondary-btn-icon" />
                  <span>Telegram Tech</span>
                </a>
              </div>
            </div>
          </div>

          <div className="trust-badge">
            <ShieldCheck className="trust-badge-icon" />
            <span>🔒 Só moderadores enviam links — 100% verificado.</span>
          </div>
        </div>
        <div className="message-stack" aria-label="Exemplos reais de ofertas no grupo">
          <DealMessage />
          <DealMessage second />
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const without = [
    "Abrir várias lojas",
    "Procurar preços",
    "Procurar cupons",
    "Comparar produtos",
    "Descobrir se apareceu promoção",
  ];
  const withAt = ["Receber", "Conferir", "Aproveitar se quiser"];
  return (
    <section className="section comparison">
      <div className="container">
        <div className="section-heading centered inverse">
          <span className="section-index">O jeito mais prático</span>
          <h2>
            Menos tempo procurando.
            <br />
            <span>Mais tempo aproveitando.</span>
          </h2>
        </div>
        <div className="compare-grid">
          <div className="compare-list muted-list">
            <h3>Sem AT promo</h3>
            {without.map((x) => (
              <div key={x}>
                <Search />
                {x}
              </div>
            ))}
          </div>
          <div className="compare-list active-list">
            <div className="recommended">MAIS PRÁTICO</div>
            <h3>Com AT promo</h3>
            {withAt.map((x, i) => (
              <div key={x}>
                {i === 0 ? <Smartphone /> : i === 1 ? <Search /> : <Check />}
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  const content = (
    <>
      <div className="offer-image">
        <img loading="lazy" src={offer.image} alt={offer.name} width={768} height={768} />
        <span>{offer.off}</span>
      </div>
      <div className="offer-info">
        <small>{offer.store}</small>
        <h3>{offer.name}</h3>
        <s>{offer.old}</s>
        <strong>{offer.price}</strong>
      </div>
    </>
  );

  return (
    <article className="offer-card">
      {offer.link && offer.link !== "#" ? (
        <a
          href={offer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="offer-card-link"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}

function OffersShowcase() {
  return (
    <section className="section showcase">
      <div className="container">
        <div className="section-heading">
          <h2>
            Olha o que a gente pode encontrar <span>👀</span>
          </h2>
          <p>Produtos e valores ilustrativos. As oportunidades reais variam ao longo do dia.</p>
        </div>
        <div className="offers-grid">
          {offers.map((offer) => (
            <OfferCard key={offer.name} offer={offer} />
          ))}
        </div>
        <div className="center-cta">
          <CTA flame>ENTRAR NO GRUPO</CTA>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["01", "Você entra", "Comece gratuitamente."],
    ["02", "A gente garimpa", "Procuramos ofertas, cupons e achadinhos."],
    ["03", "Você aproveita", "Receba as oportunidades e decida se alguma interessa."],
  ];
  return (
    <section id="como-funciona" className="section steps">
      <div className="container">
        <div className="section-heading centered">
          <h2>Como funciona?</h2>
        </div>
        <div className="steps-grid">
          {steps.map(([n, title, text], i) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              {i < 2 && <ChevronRight />}
            </article>
          ))}
        </div>
        <div className="free-note">
          <Check /> Sem mensalidade. Sem obrigação de comprar.
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const items = [
    ["É gratuito?", "Sim. Você pode começar gratuitamente."],
    ["Preciso comprar alguma coisa?", "Não. Você recebe as ofertas e decide se alguma interessa."],
    [
      "Quais lojas aparecem?",
      "Podem aparecer ofertas de diferentes lojas e marketplaces, como Shopee, Mercado Livre, Amazon e AliExpress.",
    ],
    [
      "Vocês vendem os produtos?",
      "O AT promo divulga oportunidades e direciona você para a loja indicada na oferta.",
    ],
    ["Posso sair quando quiser?", "Sim."],
    [
      "Vou receber muitas mensagens?",
      "A frequência pode variar conforme a quantidade de oportunidades encontradas. O conteúdo é focado em ofertas, descontos e achadinhos.",
    ],
  ];
  return (
    <section id="duvidas" className="section faq">
      <div className="container faq-grid">
        <div>
          <h2>Ainda tem dúvida?</h2>
          <p>A gente responde sem letras miúdas.</p>
        </div>
        <Accordion type="single" collapsible>
          {items.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <Logo inverse />
          <p>A gente garimpa. Você aproveita.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <a href={LINKS.instagram}>Instagram</a>
          <a href={LINKS.whatsapp}>WhatsApp</a>
          <a href={LINKS.telegram}>Telegram</a>
        </nav>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} AT promo. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="mobile-sticky">
      <CTA flame>ENTRAR NO GRUPO</CTA>
    </div>
  );
}

export function ATPromoLanding() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OfferPreview />
        <OffersShowcase />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
