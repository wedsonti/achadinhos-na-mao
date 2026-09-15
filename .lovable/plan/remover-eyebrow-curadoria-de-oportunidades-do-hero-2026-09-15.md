# Remover eyebrow "Curadoria de oportunidades" do Hero

## O que muda

Remover a linha `<div className="eyebrow"><PackageSearch /> Curadoria de oportunidades</div>` da seção Hero em `src/components/at-promo-landing.tsx` (linha 84).

## Detalhe técnico

- Arquivo: `src/components/at-promo-landing.tsx`, função `Hero()`
- Excluir a div `.eyebrow` inteira (ícone + texto)
- O restante do Hero (título, subtítulo, CTA, small) permanece igual
- Verificar se o ícone `PackageSearch` ainda é usado em outro lugar; se não, remover do import no topo do arquivo

## Resultado

O Hero começa direto pelo título "A GENTE GARIMPA. VOCÊ APROVEITA." sem o pequeno rótulo acima.
