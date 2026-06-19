# Guia do Projeto

## Objetivo deste documento

Este guia existe para facilitar futuras edições no projeto, principalmente quando a manutenção for feita por IA ou por alguém que ainda não conhece a estrutura do site.

O foco aqui é responder rapidamente:

- onde cada conteúdo está
- quais arquivos realmente controlam o site atual
- como fazer mudanças com segurança

## Visão geral

O projeto é um site em `Astro` com forte uso de conteúdo estruturado em arquivos `ts`.

Hoje, a maior parte do site é controlada por arquivos de dados em `src/data`, e não por CMS nem por Markdown ativo.

Arquitetura principal:

1. `BaseLayout` injeta SEO, navbar, footer e botão flutuante de WhatsApp.
2. `schema.ts` centraliza os dados estruturados reutilizáveis do site.
3. As páginas comerciais usam o componente `SiloPage`.
4. O blog atual usa `src/data/blogPosts.ts`.
5. As páginas por cidade são geradas dinamicamente a partir de `src/data/cidadesTendas.ts`.
6. As páginas de venda e produto usam `src/pages/como-comprar.astro`, `src/pages/produtos/index.astro` e `src/pages/produtos/[slug].astro`.

## Estrutura principal

### Layout global

Arquivo: [src/layouts/BaseLayout.astro](../src/layouts/BaseLayout.astro)

Responsável por:

- importar `global.css`
- definir SEO com `astro-seo`
- gerar canonical
- injetar JSON-LD base e schemas complementares
- renderizar `Navbar`
- renderizar `Footer`
- renderizar `FloatingWhatsApp`

Se o problema envolver SEO global, schema, canonical, botão flutuante, menu ou rodapé, comece por aqui.

Observação importante:

- o `BaseLayout` hoje recebe `structuredData`, `pageSchemaType` e `breadcrumbs`
- a maior parte dos schemas específicos parte de [src/data/schema.ts](../src/data/schema.ts)

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
- a home hoje mistura intenção de locação e venda, então mudanças de posicionamento comercial costumam passar por `Hero`, `QuickCTA`, `ModelsSection`, `AboutPreview` e `site.ts`

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
- `site.logo`
- `site.favicon`
- `site.metaTitle`
- `site.metaDescription`
- `site.siteUrl`
- `site.social`
- `navItems`
- `serviceLinks`
- função `getWhatsappUrl()`

Sempre que mudar telefone, e-mail, endereço, nome da empresa, CTA global, menu ou links rápidos, edite aqui primeiro.

Observação:

- `site.siteUrl` também é a base do canonical, do schema e do sitemap gerado no build
- a logo visual atual está em `public/images/Logo-tenda.png`
- o favicon principal atual está em `public/favicon.png`
- a imagem OG/schema principal atual está em `public/images/banner-aluguel-venda-tenda.webp`

### 1.1. Helper de dados estruturados

Arquivo: [src/data/schema.ts](../src/data/schema.ts)

Esse arquivo centraliza a geração de:

- `LocalBusiness`
- `WebSite`
- `WebPage`
- `Service`
- `CollectionPage`
- `Article`
- `Product`
- `BreadcrumbList`

Uso atual por tipo de página:

- todas as páginas: `LocalBusiness`
- home: `WebSite` + `WebPage` + `Service`
- páginas comerciais: `WebPage` + `Service`
- páginas de cidade: `WebPage` + `Service` com `areaServed` específico
- índice de cidades: `CollectionPage`
- blog post: `Article`
- produto interno: `Product`
- institucionais: `AboutPage` e `ContactPage`

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

### 3. Páginas de venda e catálogo de produtos

Arquivos:

- [src/pages/como-comprar.astro](../src/pages/como-comprar.astro)
- [src/data/products.ts](../src/data/products.ts)
- [src/pages/produtos/index.astro](../src/pages/produtos/index.astro)
- [src/pages/produtos/[slug].astro](../src/pages/produtos/%5Bslug%5D.astro)

Funcionamento:

- `/como-comprar` é uma landing page estática de venda
- `products.ts` concentra os dados dos produtos
- `/produtos` lista os produtos
- `/produtos/[slug]` gera cada página individual a partir dos dados do produto

Se quiser alterar textos, bullets, diferenciais, FAQ curta ou SEO dos produtos:

- editar `src/data/products.ts`

Se quiser alterar estrutura visual da listagem ou da página individual:

- editar `src/pages/produtos/index.astro` ou `src/pages/produtos/[slug].astro`

### 4. Páginas dinâmicas por cidade

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

### 5. Blog

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

### Prova social da home

Arquivos:

- [src/components/SocialProof.astro](../src/components/SocialProof.astro)
- [src/data/testimonials.ts](../src/data/testimonials.ts)

Hoje essa seção não está mais com placeholders.

Ela usa:

- estatísticas da marca
- depoimentos com visual inspirado em review do Google
- hover e cards personalizados da home

### Rodapé

Arquivo: [src/components/Footer.astro](../src/components/Footer.astro)

Hoje usa diretamente `site.ts` para:

- telefone
- e-mail
- endereço
- nome da empresa
- logo principal do site

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

### Página 404 e redirects

Arquivos:

- [src/pages/404.astro](../src/pages/404.astro)
- [public/.htaccess](../public/.htaccess)
- [public/_redirects](../public/_redirects)

Uso atual:

- páginas inexistentes exibem a `404` com redirecionamento automático para a home
- URLs antigas como `/sobre` e `/aluguel-de-tendas-para-eventos` redirecionam para `/quem-somos` e `/eventos`
- isso ajuda tanto na experiência quanto na preservação de URLs antigas

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
- sitemap na próxima build

Se a mudança também envolver logo, favicon ou imagem principal do schema:

- revisar `site.logo`
- revisar `site.favicon`
- revisar `site.ogImage`

### Alterar H1, SEO ou texto de uma página comercial

Editar:

- [src/data/siloPages.ts](../src/data/siloPages.ts)

### Alterar a home com foco em locação e venda

Editar, conforme o caso:

- [src/components/Hero.astro](../src/components/Hero.astro)
- [src/components/QuickCTA.astro](../src/components/QuickCTA.astro)
- [src/components/ModelsSection.astro](../src/components/ModelsSection.astro)
- [src/components/AboutPreview.astro](../src/components/AboutPreview.astro)
- [src/data/site.ts](../src/data/site.ts)

Esses arquivos concentram o discurso principal da home.

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

### Alterar ou criar produto

Editar:

- [src/data/products.ts](../src/data/products.ts)

O catálogo e as páginas internas são derivados desse arquivo.

Observação:

- as imagens dos cards e das páginas internas de produto hoje vêm de `products.ts`

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

Observação:

- as miniaturas das páginas de cidade usam o bloco `defaultArticleImages` em `cidadesTendas.ts`
- o schema da página local também é montado automaticamente pela rota dinâmica

## Convenções úteis para futuras IAs

### Onde procurar antes de editar

1. `site.ts` para dados institucionais
2. `siloPages.ts` para páginas comerciais fixas
3. `cidadesTendas.ts` para páginas locais
4. `blogPosts.ts` para blog
5. `SiloPage.astro` e `blog/[slug].astro` para estrutura visual

### O que evitar assumir

- que a home lê automaticamente todos os posts reais
- que todos os componentes em `src/components` estão em uso
- que qualquer arquivo antigo fora do fluxo principal ainda participa da experiência final

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
5. Conferir se slugs novos relevantes entraram no sitemap gerado
6. Rodar:

```sh
npm run build
```

## Resumo curto para manutenção futura

Se alguém precisar entender este projeto em poucos minutos:

- `site.ts` controla os dados da empresa
- `schema.ts` controla a base dos dados estruturados
- `siloPages.ts` controla as páginas comerciais principais
- `products.ts` controla o catálogo e as páginas de produtos
- `como-comprar.astro` controla a landing page de venda
- `cidadesTendas.ts` gera as páginas locais automaticamente
- `blogPosts.ts` controla o blog real
- `SiloPage.astro`, `produtos/[slug].astro` e `blog/[slug].astro` são renderizadores centrais
- os componentes e dados ativos estão concentrados no fluxo acima; se um arquivo estiver fora disso, confirme uso antes de editar
