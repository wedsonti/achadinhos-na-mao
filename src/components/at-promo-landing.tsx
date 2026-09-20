import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  Eye,
  Flame,
  Menu,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Tag,
  Volume2,
  VolumeX,
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
    image: galaxyS25Image,
    name: "Samsung Galaxy S25 Ultra 5G 256GB 12GB RAM Câmera Quádrupla Titanium Black",
    old: "R$ 5.998,89",
    price: "R$ 4.859,00",
    off: "R$ 1.139 OFF",
    store: "Mercado Livre",
    tag: "Oferta Relâmpago",
    link: "https://meli.la/2ATJe3U",
  },
  {
    image: earbudsImage,
    name: "Basike Fone De Ouvido Sem Fio Bluetooth Gamer Esportivo 100h com Gancho",
    old: "R$ 159,90",
    price: "R$ 78,00",
    off: "51% OFF",
    store: "Mercado Livre",
    tag: "Mais Vendido",
    link: "https://meli.la/2ATJe3U",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    name: "Power Bank i2GO 10000mAh 1 Usb-C e 2 Usb-A Carregamento Rápido",
    old: "R$ 99,90",
    price: "R$ 53,00",
    off: "47% OFF",
    store: "Shopee",
    tag: "Cupom Ativo",
    link: "https://s.shopee.com.br/7fZqVt4quO?lp=aff",
  },
  {
    image: fitnessGraceImage,
    name: "Conjunto Academia Fitness Grace Cós Alto Forro Duplo AQN SPORT",
    old: "R$ 90,00",
    price: "R$ 53,00",
    off: "41% OFF",
    store: "Shopee",
    tag: "Achadinho",
    link: "https://s.shopee.com.br/7fZqVt4quO?lp=aff",
  },
  {
    image: airfryerImage,
    name: "Fritadeira Elétrica Air Fryer 4L Compacta Antiaderente",
    old: "R$ 499,90",
    price: "R$ 329,90",
    off: "34% OFF",
    store: "Amazon",
    tag: "Menor Preço",
    link: LINKS.whatsappGerais,
  },
  {
    image: speakerImage,
    name: "Caixa de Som Portátil Bluetooth Resistente à Água",
    old: "R$ 119,90",
    price: "R$ 69,90",
    off: "41% OFF",
    store: "Shopee",
    tag: "Achadinho",
    link: LINKS.whatsappGerais,
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
      <a
        href={LINKS.whatsappGerais}
        target="_blank"
        rel="noopener noreferrer"
      >
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

export function ChannelSelection({ idPrefix = "hero" }: { idPrefix?: string }) {
  return (
    <>
      <div className="channel-selection">
        <div className="primary-channel-wrapper">
          <span className="channel-badge">CANAL MAIS POPULAR</span>
          <a
            id={`btn-whatsapp-${idPrefix}`}
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
              id={`btn-telegram-${idPrefix}-gerais`}
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
              id={`btn-telegram-${idPrefix}-tech`}
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
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            <span className="hero-line">
              A GENTE <em>GARIMPA.</em>
            </span>
            <br />
            <span className="hero-line">
              VOCÊ <span className="hero-accent">APROVEITA.</span>
            </span>
          </h1>
          <p>Ofertas, cupons e achadinhos, sem você precisar procurar.</p>
          <ChannelSelection idPrefix="hero" />
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

export function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  return (
    <article className="offer-card">
      <div className="offer-image">
        <img loading="lazy" src={offer.image} alt={offer.name} width={768} height={768} />
        <span className="offer-discount-badge">{offer.off}</span>
        {offer.tag && <span className="offer-tag-badge">{offer.tag}</span>}
      </div>
      <div className="offer-info">
        <div className="offer-store-row">
          <span className="offer-store-pill">{offer.store}</span>
          <span className="offer-verified-badge">
            <Check className="offer-check-icon" /> Verificado
          </span>
        </div>
        <h3>{offer.name}</h3>
        <div className="offer-price-box">
          <s>{offer.old}</s>
          <strong>{offer.price}</strong>
        </div>
        <a
          href={LINKS.whatsappGerais}
          target="_blank"
          rel="noopener noreferrer"
          className="offer-action-btn"
        >
          <span>Pegar no WhatsApp</span>
          <ExternalLink className="offer-action-icon" />
        </a>
      </div>
    </article>
  );
}

export function RealOffersSection() {
  return (
    <section id="ofertas" className="section showcase real-offers-section">
      <div className="container">
        <div className="section-heading centered">
          <h2>
            Últimos Achadinhos & Ofertas Reais <span>🔥</span>
          </h2>
          <p>
            Links diretos, cupons ativos e oportunidades reais selecionadas pela nossa moderação.
          </p>
        </div>

        <div className="real-offers-trust-bar">
          <div className="trust-pill">
            <span className="live-dot" />
            <span>
              <strong>Ao vivo:</strong> novas ofertas hoje
            </span>
          </div>
          <div className="trust-pill">
            <ShieldCheck className="trust-pill-icon" />
            <span>
              <strong>100% Verificado:</strong> lojas oficiais
            </span>
          </div>
          <div className="trust-pill">
            <Tag className="trust-pill-icon" />
            <span>
              <strong>Cupons testados</strong> antes do envio
            </span>
          </div>
        </div>

        <div className="offers-grid">
          {offers.map((offer) => (
            <OfferCard key={offer.name} offer={offer} />
          ))}
        </div>

        <div className="group-preview-callout">
          <div className="group-preview-content">
            <span className="group-preview-badge">ALERTA EM TEMPO REAL</span>
            <h3>Quer receber as ofertas antes de todo mundo?</h3>
            <p>
              As melhores promoções e cupons esgotam em poucos minutos. No nosso grupo VIP do WhatsApp e Telegram você recebe os links verificados direto no celular assim que o preço cai!
            </p>
            <ChannelSelection idPrefix="ofertas-real" />
          </div>
          <div className="group-preview-stack">
            <span className="preview-floating-label">📲 Como a notificação chega no seu celular:</span>
            <div className="message-stack" aria-label="Exemplos reais de alertas no grupo">
              <DealMessage />
              <DealMessage second />
            </div>
          </div>
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
        <div className="copyright-inner">
          <span>© {new Date().getFullYear()} AT promo. Todos os direitos reservados.</span>
          <span className="audio-license">
            Trilha:{" "}
            <a
              href="https://pixabay.com/pt/users/multimusicas-54375882/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=474631"
              target="_blank"
              rel="noopener noreferrer"
              className="license-link"
            >
              Allan Pacheco
            </a>{" "}
            (Pixabay)
          </span>
        </div>
      </div>
    </footer>
  );
}

export function DiscreteAudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1.0;
      audio.muted = false;
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.muted = false;
      audio.volume = 1.0;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Reprodução de áudio impedida ou falhou:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/multimusicas-guitar-br-474631.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.error("Erro no elemento de áudio:", e)}
      />
      <button
        type="button"
        id="btn-toque-para-ouvir"
        onClick={togglePlay}
        className={`discrete-audio-btn ${isPlaying ? "is-playing" : ""}`}
        aria-label={isPlaying ? "Pausar som" : "Toque para ouvir música"}
      >
        <span className="audio-icon-wrapper">
          {isPlaying ? (
            <span className="audio-bars" aria-hidden="true">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </span>
          ) : (
            <Volume2 className="audio-icon" aria-hidden="true" />
          )}
        </span>
        <span className="audio-label">
          {isPlaying ? "Tocando som" : "toque para ouvir"}
        </span>
      </button>
    </>
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
        <RealOffersSection />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
      <DiscreteAudioButton />
      <MobileStickyCTA />
    </>
  );
}
