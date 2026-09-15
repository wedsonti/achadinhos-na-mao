import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Flame,
  Gamepad2,
  Home,
  Menu,
  MessageCircle,
  PackageSearch,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Tag,
  Wrench,
  X,
  Zap,
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

const LINKS = {
  offers: "#receber",
  instagram: "#",
  whatsapp: "#receber",
  telegram: "#receber",
  privacy: "#",
  terms: "#",
};

const offers = [
  { image: shoeImage, name: "Tênis de corrida", old: "R$ 159,90", price: "R$ 89,90", off: "43% OFF", store: "Loja parceira" },
  { image: earbudsImage, name: "Fone Bluetooth", old: "R$ 89,90", price: "R$ 39,90", off: "55% OFF", store: "Marketplace" },
  { image: toolsImage, name: "Kit de ferramentas", old: "R$ 149,90", price: "R$ 99,90", off: "33% OFF", store: "Loja parceira" },
  { image: airfryerImage, name: "Air fryer compacta", old: "R$ 499,90", price: "R$ 329,90", off: "34% OFF", store: "Marketplace" },
  { image: speakerImage, name: "Caixa de som portátil", old: "R$ 119,90", price: "R$ 69,90", off: "41% OFF", store: "Loja parceira" },
  { image: tumblerImage, name: "Copo térmico", old: "R$ 79,90", price: "R$ 49,90", off: "37% OFF", store: "Marketplace" },
];

const categories = [
  { icon: Home, title: "Casa", text: "Utilidades que facilitam a rotina." },
  { icon: Smartphone, title: "Tecnologia", text: "Acessórios e eletrônicos úteis." },
  { icon: Smartphone, title: "Celulares", text: "Aparelhos, capas e carregadores." },
  { icon: ShoppingBag, title: "Moda", text: "Roupas, calçados e acessórios." },
  { icon: Wrench, title: "Ferramentas", text: "Do reparo rápido ao projeto novo." },
  { icon: Gamepad2, title: "Games", text: "Jogos, controles e periféricos." },
  { icon: Sparkles, title: "Achadinhos", text: "Coisas que valem o clique." },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <a href="#top" aria-label="AT promo — início" className={`logo ${inverse ? "logo-inverse" : ""}`}><span>AT</span> promo</a>;
}

function CTA({ children = "QUERO RECEBER AS OFERTAS", className = "", flame = false }: { children?: ReactNode; className?: string; flame?: boolean }) {
  return <Button asChild variant="cta" size="lg" className={`cta ${className}`}><a href={LINKS.offers}>{flame && <Flame />}{children}<ArrowRight /></a></Button>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = [["Ofertas", "#ofertas"], ["Como funciona", "#como-funciona"], ["Categorias", "#categorias"], ["Dúvidas", "#duvidas"]];
  return <header className="site-header"><div className="container header-inner"><Logo /><nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><CTA className="header-cta">RECEBER OFERTAS</CTA><Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Navegação móvel">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ChevronRight /></a>)}<CTA>RECEBER OFERTAS</CTA></nav>}</header>;
}

function DealMessage({ second = false }: { second?: boolean }) {
  return <div className="deal-message"><div className="message-kicker">{second ? "⚡ OFERTA RELÂMPAGO" : "🔥 ACHADINHO"}</div><div className="message-product"><img src={second ? earbudsImage : shoeImage} alt={second ? "Fone Bluetooth" : "Tênis de corrida"} width={768} height={768} /><div><strong>{second ? "Fone Bluetooth" : "Tênis de corrida"}</strong><s>{second ? "R$ 89,90" : "R$ 159,90"}</s><b>{second ? "R$ 39,90" : "R$ 89,90"}</b></div></div><div className="message-bottom"><span>{second ? "55% OFF" : "🏷️ Cupom disponível"}</span><span>APROVEITAR</span></div></div>;
}

export function Hero() {
  return <section id="top" className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><PackageSearch /> Curadoria de oportunidades</div><h1>A GENTE <em>GARIMPA.</em><br />VOCÊ <span>APROVEITA.</span></h1><p>Encontramos ofertas, cupons e achadinhos na internet para você não precisar ficar procurando.</p><CTA>QUERO RECEBER AS OFERTAS</CTA><small>Grátis <i /> Sem cadastro complicado <i /> Você decide o que vale a pena</small></div><div className="hero-visual" aria-label="Exemplo de ofertas encontradas"><div className="float-tag tag-one">🔥 -43%</div><div className="float-tag tag-two">🏷️ CUPOM</div><div className="float-tag tag-three">⚡ OFERTA</div><div className="offer-radar"><div className="radar-head"><Logo /><span>garimpando agora <i /></span></div><div className="radar-product"><img src={shoeImage} alt="Tênis em uma oferta de exemplo" width={768} height={768} /><div><span>Achadinho encontrado</span><strong>Tênis de corrida</strong><s>R$ 159,90</s><b>R$ 89,90</b></div></div><div className="radar-status"><Search /> Buscando novas oportunidades...</div></div><div className="price-pop">R$ 39,90<small>ACHADINHO</small></div></div></div></section>;
}

export function ProblemSection() {
  return <section className="problem section"><div className="narrow"><span className="section-index">O problema</span><h2>Você também tem a sensação de que as boas ofertas <span>aparecem e somem?</span></h2><p>São dezenas de lojas, milhares de produtos, cupons que expiram e promoções que duram pouco.</p><p>Ficar procurando tudo isso o dia inteiro não faz sentido.</p><strong>É aí que entra o AT promo. <ArrowRight /></strong></div></section>;
}

export function SolutionCards() {
  const items = [{ icon: Search, title: "Garimpo", text: "A gente procura boas oportunidades." }, { icon: Tag, title: "Curadoria", text: "Encontramos preços, descontos e cupons para compartilhar." }, { icon: MessageCircle, title: "Entrega", text: "A oportunidade chega direto no seu celular." }];
  return <section className="section solution"><div className="container"><div className="section-heading"><span className="section-index">A solução</span><h2>Você não procura.<br /><span>A gente garimpa.</span></h2><p>O AT promo acompanha ofertas e oportunidades em diferentes lojas e marketplaces e compartilha aquilo que realmente pode valer a pena.</p></div><div className="three-grid">{items.map(({ icon: Icon, title, text }, i) => <article className="feature-card" key={title}><div className="feature-number">0{i + 1}</div><div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

export function OfferPreview() {
  return <section id="ofertas" className="section preview-section"><div className="container preview-grid"><div><span className="section-index">Direto no celular</span><h2>É mais ou menos assim <span>↓</span></h2><p>Encontrou. Chegou. Agora é com você.</p><div className="decision-flow"><span>Você recebe</span><ArrowRight /><span>Olha</span><ArrowRight /><strong>Decide</strong></div></div><div className="message-stack"><DealMessage /><DealMessage second /></div></div></section>;
}

export function CategoryCard({ item }: { item: typeof categories[number] }) {
  const Icon = item.icon;
  return <article className="category-card"><Icon /><h3>{item.title}</h3><p>{item.text}</p></article>;
}

export function CategoriesSection() {
  return <section id="categorias" className="section categories"><div className="container"><div className="section-heading centered"><span className="section-index">De tudo um pouco</span><h2>E não é só um tipo de produto.</h2><p>De coisa para casa até tecnologia, ferramentas e aquele achadinho que você nem estava procurando.</p></div><div className="category-grid">{categories.map(item => <CategoryCard key={item.title} item={item} />)}</div></div></section>;
}

export function ComparisonSection() {
  const without = ["Abrir várias lojas", "Procurar preços", "Procurar cupons", "Comparar produtos", "Descobrir se apareceu promoção"];
  const withAt = ["Receber", "Conferir", "Aproveitar se quiser"];
  return <section className="section comparison"><div className="container"><div className="section-heading centered inverse"><span className="section-index">O jeito mais prático</span><h2>Menos tempo procurando.<br /><span>Mais tempo aproveitando.</span></h2></div><div className="compare-grid"><div className="compare-list muted-list"><h3>Sem AT promo</h3>{without.map(x => <div key={x}><Search />{x}</div>)}</div><div className="compare-list active-list"><div className="recommended">MAIS PRÁTICO</div><h3>Com AT promo</h3>{withAt.map((x, i) => <div key={x}>{i === 0 ? <Smartphone /> : i === 1 ? <Search /> : <Check />}{x}</div>)}</div></div></div></section>;
}

export function OfferCard({ offer }: { offer: typeof offers[number] }) {
  return <article className="offer-card"><div className="offer-image"><img loading="lazy" src={offer.image} alt={offer.name} width={768} height={768} /><span>{offer.off}</span></div><div className="offer-info"><small>{offer.store}</small><h3>{offer.name}</h3><s>{offer.old}</s><strong>{offer.price}</strong></div></article>;
}

function OffersShowcase() {
  return <section className="section showcase"><div className="container"><div className="section-heading"><span className="section-index">Exemplos de oportunidades</span><h2>Olha o que a gente pode encontrar <span>👀</span></h2><p>Produtos e valores ilustrativos. As oportunidades reais variam ao longo do dia.</p></div><div className="offers-grid">{offers.map(offer => <OfferCard key={offer.name} offer={offer} />)}</div><div className="center-cta"><CTA>QUERO RECEBER ESSE TIPO DE OFERTA</CTA></div></div></section>;
}

export function MobileMockup() {
  return <section className="section phone-section"><div className="container phone-grid"><div className="phone"><div className="phone-top"><span>9:41</span><i /></div><div className="phone-chat-head"><Logo /><small>oportunidades para você</small></div><div className="phone-chat"><DealMessage /><div className="coupon-message"><Tag /> <div><small>CUPOM</small><strong>R$ 20 OFF</strong></div></div><DealMessage second /></div></div><div className="phone-copy"><span className="section-index">No seu ritmo</span><h2>As oportunidades chegam até você.</h2><div className="phone-point"><Clock3 /><div><strong>Você não precisa ficar procurando.</strong><p>Quando aparece uma oportunidade interessante, ela chega até você.</p></div></div><div className="phone-point"><ShieldCheck /><div><strong>Você continua no controle.</strong><p>Confira os detalhes e aproveite somente se fizer sentido.</p></div></div><CTA>RECEBER OFERTAS</CTA></div></div></section>;
}

export function HowItWorks() {
  const steps = [["01", "Você entra", "Comece gratuitamente."], ["02", "A gente garimpa", "Procuramos ofertas, cupons e achadinhos."], ["03", "Você aproveita", "Receba as oportunidades e decida se alguma interessa."]];
  return <section id="como-funciona" className="section steps"><div className="container"><div className="section-heading centered"><span className="section-index">Simples assim</span><h2>Como funciona?</h2></div><div className="steps-grid">{steps.map(([n, title, text], i) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p>{i < 2 && <ChevronRight />}</article>)}</div><div className="free-note"><Check /> Sem mensalidade. Sem obrigação de comprar.</div></div></section>;
}

export function TrustSection() {
  return <section className="section trust"><div className="container trust-grid"><div><span className="section-index">Transparência sempre</span><h2>Você decide o que vale a pena.</h2><p>O AT promo não compra por você e não obriga você a aproveitar nenhuma oferta.</p><p>Você recebe a oportunidade, confere os detalhes e decide.</p></div><div className="trust-checks">{["Você escolhe", "Você compara", "Você decide"].map(x => <div key={x}><Check /><strong>{x}</strong></div>)}</div></div></section>;
}

export function TestimonialCard({ label }: { label: string }) {
  return <div className="testimonial-placeholder"><MessageCircle /><strong>{label}</strong><p>Espaço reservado para conteúdo real da comunidade.</p></div>;
}

function SocialProof() {
  return <section className="section social"><div className="container"><div className="section-heading centered"><span className="section-index">Comunidade</span><h2>Quem já acompanha, fica de olho <span>👀</span></h2><p>Em breve, experiências reais de quem acompanha o AT promo.</p></div><div className="three-grid"><TestimonialCard label="Print real" /><TestimonialCard label="Comentário real" /><TestimonialCard label="Mensagem real" /></div></div></section>;
}

export function FAQ() {
  const items = [["É gratuito?", "Sim. Você pode começar gratuitamente."], ["Preciso comprar alguma coisa?", "Não. Você recebe as ofertas e decide se alguma interessa."], ["Quais lojas aparecem?", "Podem aparecer ofertas de diferentes lojas e marketplaces, como Shopee, Mercado Livre, Amazon e AliExpress."], ["Vocês vendem os produtos?", "O AT promo divulga oportunidades e direciona você para a loja indicada na oferta."], ["Posso sair quando quiser?", "Sim."], ["Vou receber muitas mensagens?", "A frequência pode variar conforme a quantidade de oportunidades encontradas. O conteúdo é focado em ofertas, descontos e achadinhos."]];
  return <section id="duvidas" className="section faq"><div className="container faq-grid"><div><span className="section-index">Perguntas frequentes</span><h2>Ainda tem dúvida?</h2><p>A gente responde sem letras miúdas.</p></div><Accordion type="single" collapsible>{items.map(([q, a], i) => <AccordionItem key={q} value={`item-${i}`}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

export function FinalCTA() {
  return <section id="receber" className="final-cta"><div className="container final-inner"><div className="deal-chip chip-a">🔥 OFERTA</div><div className="deal-chip chip-b">-43%</div><div className="deal-chip chip-c">🏷️ CUPOM</div><span className="section-index">A escolha é sua</span><h2>Você pode continuar procurando.<br /><span>Ou pode deixar a gente garimpar.</span></h2><p>Entre gratuitamente no AT promo e comece a receber ofertas, cupons e achadinhos direto no seu celular.</p><CTA flame>QUERO RECEBER AS OFERTAS</CTA><small>É grátis. Você recebe e decide o que vale a pena.</small></div></section>;
}

export function Footer() {
  return <footer><div className="container footer-top"><div><Logo inverse /><p>A gente garimpa. Você aproveita.</p></div><nav aria-label="Links do rodapé"><a href={LINKS.instagram}>Instagram</a><a href={LINKS.whatsapp}>WhatsApp</a><a href={LINKS.telegram}>Telegram</a><a href={LINKS.privacy}>Política de Privacidade</a><a href={LINKS.terms}>Termos de Uso</a></nav></div><div className="container copyright">© {new Date().getFullYear()} AT promo. Todos os direitos reservados.</div></footer>;
}

export function MobileStickyCTA() {
  return <div className="mobile-sticky"><CTA flame>RECEBER OFERTAS</CTA></div>;
}

export function ATPromoLanding() {
  return <><Header /><main><Hero /><ProblemSection /><SolutionCards /><OfferPreview /><CategoriesSection /><ComparisonSection /><OffersShowcase /><MobileMockup /><HowItWorks /><TrustSection /><SocialProof /><FAQ /><FinalCTA /></main><Footer /><MobileStickyCTA /></>;
}