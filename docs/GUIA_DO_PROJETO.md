# Guia do Projeto

## Objetivo deste documento

Este guia existe para facilitar futuras edições no projeto, principalmente quando a manutenção for feita por IA ou por alguém que ainda não conhece a estrutura do site.

O foco aqui é responder rapidamente:

- onde cada conteúdo está
- quais arquivos realmente controlam o site atual
- quais arquivos parecem legados ou placeholders
- como fazer mudanças com segurança

## Visão geral

O projeto é um site em `Astro` com forte uso de conteúdo estruturado em arquivos `ts`.

Hoje, a maior parte do site é controlada por arquivos de dados em `src/data`, e não por CMS nem por Markdown ativo.

Arquitetura principal:

1. `BaseLayout` injeta SEO, navbar, footer e botão flutuante de WhatsApp.
2. As páginas comerciais usam o componente `SiloPage`.
3. O blog atual usa `src/data/blogPosts.ts`.
4. As páginas por cidade são geradas dinamicamente a partir de `src/data/cidadesTendas.ts`.

## Estrutura principal

### Layout global

Arquivo: [src/layouts/BaseLayout.astro](../src/layouts/BaseLayout.astro)

Responsável por:

- importar `global.css`
- definir SEO com `astro-seo`
- gerar canonical
- injetar `LocalBusiness` em JSON-LD
- renderizar `Navbar`
- renderizar `Footer`
- renderizar `FloatingWhatsApp`

Se o problema envolver SEO global, schema, canonical, botão flutuante, menu ou rodapé, comece por aqui.

### Página inicial

Arquivo: [src/pages/index.astro](../src/pages/index.astro)

Monta a home com:

- [src/components/Hero.astro](../src/components/Hero.astro)
- [src/components/QuickCTA.astro](../src/components/QuickCTA.astro)
- [src/components/ModelsSection.astro](../src/components/ModelsSection.astro)
- [src/components/AboutPreview.astro](../src/components/AboutPreview.astro)
- [src/components/BlogPreview.astro](../src/components/BlogPreview.astro)
- [src/components/SocialProof.astro](../src/components/SocialProof.astro)

Observação importante:

- `BlogPreview` na home usa cards definidos dentro do próprio componente, não lê automaticamente `blogPosts.ts`.

## Arquivos de dados realmente importantes

### 1. Dados institucionais

Arquivo: [src/data/site.ts](../src/data/site.ts)

Esse é o arquivo mais importante para dados da empresa.

Controla:

- `site.name`
- `site.phone`
- `site.whatsapp`
- `site.email`
- `site.address`
- `site.metaTitle`
- `site.metaDescription`
- `site.siteUrl`
- `site.social`
- `navItems`
- `serviceLinks`
- função `getWhatsappUrl()`

Sempre que mudar telefone, e-mail, endereço, nome da empresa, CTA global, menu ou links rápidos, edite aqui primeiro.

### 2. Páginas comerciais fixas

Arquivo: [src/data/siloPages.ts](../src/data/siloPages.ts)

Esse arquivo contém o conteúdo das páginas principais:

- `/eventos`
- `/aluguel-de-tenda-em-bh`
- `/aluguel-de-tendas-valor`
- `/aluguel-de-tenda-para-casamento`
- `/aluguel-de-toldos`

Cada item do array `siloPages` controla:

- `slug`
- `title`
- `description`
- `intro`
- `seoTitle`
- `seoDescription`
- `heroEyebrow`
- `heroChecklist`
- `ctaBannerText`
- `articleEyebrow`
- `articleTitle`
- `articleLead`
- `articleSections`
- `articleImages`
- `featuredModels`

Regra prática:

- se a mudança for apenas conteúdo de uma página comercial, quase sempre basta editar esse arquivo

### 3. Páginas dinâmicas por cidade

Arquivos:

- [src/data/cidadesTendas.ts](../src/data/cidadesTendas.ts)
- [src/pages/[slug].astro](../src/pages/%5Bslug%5D.astro)

Funcionamento:

- `cidadesTendas.ts` tem uma lista de cidades
- a função `buildCidadeTendaPage()` transforma cada cidade em conteúdo completo
- a rota dinâmica `[slug].astro` gera uma página para cada item

Se quiser adicionar uma nova cidade:

1. adicionar um novo objeto em `cidadesTendas`
2. preencher `cidade`, `slug`, `regiao`, `eventosLocais`, `locaisReferencia` e `diferencialLocal`
3. o build já gera a nova rota automaticamente

Se quiser mudar o texto padrão de todas as cidades:

- editar a função `buildCidadeTendaPage()`

Se quiser mudar só uma cidade específica:

- editar os dados dessa cidade

### 4. Blog

Arquivos:

- [src/data/blogPosts.ts](../src/data/blogPosts.ts)
- [src/pages/blog/index.astro](../src/pages/blog/index.astro)
- [src/pages/blog/[slug].astro](../src/pages/blog/%5Bslug%5D.astro)

Funcionamento real do blog hoje:

- a listagem e as rotas são baseadas em `blogPosts.ts`
- posts com `href` funcionam como cards que apontam para páginas comerciais
- posts sem `href` viram páginas próprias do blog

Campos importantes de um post:

- `slug`
- `title`
- `articleTitle`
- `description`
- `category`
- `pubDate`
- `image`
- `intro`
- `sections`
- `ctaTitle`
- `ctaText`
- `ctaLabel`

O template do post suporta:

- `paragraphs`
- `bullets`
- `table`
- `terrainMethods`

Se precisar de tabela em post do blog:

- seguir o formato já usado no artigo `como-calcular-tamanho-de-tenda-para-evento`

## Componentes que controlam a renderização

### Página comercial genérica

Arquivo: [src/components/SiloPage.astro](../src/components/SiloPage.astro)

Esse componente renderiza:

- hero com H1
- checklist lateral
- CTA horizontal
- cards de modelos
- artigo principal
- imagens
- lista de páginas relacionadas
- preview institucional e blog ao final

Se várias páginas comerciais estiverem com o mesmo problema visual ou estrutural, quase certamente ele está aqui.

### Rodapé

Arquivo: [src/components/Footer.astro](../src/components/Footer.astro)

Hoje usa diretamente `site.ts` para:

- telefone
- e-mail
- endereço
- nome da empresa

### Botão flutuante de WhatsApp

Arquivo: [src/components/FloatingWhatsApp.astro](../src/components/FloatingWhatsApp.astro)

Controla:

- link do WhatsApp
- efeito visual do botão
- ícone SVG interno

### Página de contato

Arquivo: [src/pages/contato.astro](../src/pages/contato.astro)

Usa:

- `site.phone`
- `site.email`
- `site.address`
- `getWhatsappUrl()`

## Arquivos que parecem legados ou placeholders

Esses arquivos existem no repositório, mas hoje não parecem participar da experiência principal do site ou ainda estão com conteúdo genérico:

- [src/data/services.ts](../src/data/services.ts)
- [src/data/testimonials.ts](../src/data/testimonials.ts)
- [src/components/Services.astro](../src/components/Services.astro)
- [src/components/Testimonials.astro](../src/components/Testimonials.astro)
- [src/content/blog/post-exemplo-01.mdx](../src/content/blog/post-exemplo-01.mdx)
- [src/content/blog/post-exemplo-02.mdx](../src/content/blog/post-exemplo-02.mdx)
- [src/content/blog/post-exemplo-03.mdx](../src/content/blog/post-exemplo-03.mdx)
- [src/layouts/Layout.astro](../src/layouts/Layout.astro)

Importante:

- não remover esses arquivos sem confirmar antes
- mas também não assumir que editar neles mudará o site atual

## Fluxos de edição mais comuns

### Alterar telefone, endereço, e-mail ou nome da empresa

Editar:

- [src/data/site.ts](../src/data/site.ts)

Depois conferir:

- navbar
- footer
- contato
- schema no `BaseLayout`
- links de WhatsApp

### Alterar H1, SEO ou texto de uma página comercial

Editar:

- [src/data/siloPages.ts](../src/data/siloPages.ts)

### Criar nova página comercial no mesmo padrão

1. adicionar um novo objeto em `siloPages`
2. criar uma página em `src/pages/novo-slug.astro`
3. buscar um exemplo já existente, como [src/pages/aluguel-de-tendas-valor.astro](../src/pages/aluguel-de-tendas-valor.astro)

Modelo atual:

```astro
---
import SiloPage from '../components/SiloPage.astro';
import BaseLayout from '../layouts/BaseLayout.astro';
import { siloPages } from '../data/siloPages';
const page = siloPages.find((item) => item.slug === 'novo-slug')!;
---
<BaseLayout title={page.title} description={page.description}><SiloPage {...page} /></BaseLayout>
```

### Criar um novo post do blog

Editar:

- [src/data/blogPosts.ts](../src/data/blogPosts.ts)

Para virar página própria do blog:

- criar objeto sem `href`

Para virar apenas card apontando para página comercial:

- criar objeto com `href`

### Adicionar uma nova cidade

Editar:

- [src/data/cidadesTendas.ts](../src/data/cidadesTendas.ts)

Não precisa criar manualmente uma página em `src/pages`, porque a rota dinâmica já cuida disso.

## Convenções úteis para futuras IAs

### Onde procurar antes de editar

1. `site.ts` para dados institucionais
2. `siloPages.ts` para páginas comerciais fixas
3. `cidadesTendas.ts` para páginas locais
4. `blogPosts.ts` para blog
5. `SiloPage.astro` e `blog/[slug].astro` para estrutura visual

### O que evitar assumir

- que o blog usa MDX nas rotas ativas
- que a home lê automaticamente todos os posts reais
- que todos os componentes em `src/components` estão em uso
- que arquivos com placeholders ainda participam da experiência final

### Como editar com menor risco

- mudar primeiro os dados, não a estrutura
- reaproveitar o padrão existente
- manter slugs estáveis quando a URL já estiver publicada
- revisar se `title`, `seoTitle` e `description` têm papéis diferentes
- rodar `npm run build` após mudanças relevantes

## Checklist antes de encerrar uma edição

1. Conferir se o arquivo certo foi editado
2. Conferir se a rota depende de dado estático ou dinâmico
3. Conferir se não existe placeholder antigo no trecho alterado
4. Conferir impacto em SEO:
   `title`, `description`, canonical e schema
5. Rodar:

```sh
npm run build
```

## Resumo curto para manutenção futura

Se alguém precisar entender este projeto em poucos minutos:

- `site.ts` controla os dados da empresa
- `siloPages.ts` controla as páginas comerciais principais
- `cidadesTendas.ts` gera as páginas locais automaticamente
- `blogPosts.ts` controla o blog real
- `SiloPage.astro` e `blog/[slug].astro` são os renderizadores centrais
- existem arquivos legados/placeholders no repositório e eles não devem ser a primeira opção de edição
