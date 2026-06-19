# Companhia Tenda

Site institucional em Astro para a `Companhia Tenda`, com foco em SEO local, páginas comerciais, blog, páginas dinâmicas por cidade e páginas de venda de produtos.

## Stack

- `Astro 6`
- `Tailwind CSS 4`
- `astro-seo`
- `lucide-astro`

## Comandos

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Mapa rápido de edição

### Dados principais da empresa

Edite [src/data/site.ts](src/data/site.ts)

Esse arquivo controla:

- nome da empresa
- telefone e link do WhatsApp
- e-mail
- endereço
- logo usada no layout e no schema
- favicon principal do site
- meta title e meta description globais
- `siteUrl` usado em canonical, schema e sitemap
- links do menu
- links rápidos do rodapé

### Páginas comerciais principais

Edite [src/data/siloPages.ts](src/data/siloPages.ts)

Esse arquivo controla o conteúdo das páginas:

- `/eventos`
- `/aluguel-de-tenda-em-bh`
- `/aluguel-de-tendas-valor`
- `/aluguel-de-tenda-para-casamento`
- `/aluguel-de-toldos`

Cada objeto define:

- `slug`
- `title` do H1
- `seoTitle`
- `seoDescription`
- `description`
- `intro`
- `articleLead`
- `articleSections`

### Páginas de venda e produtos

Edite:

- [src/pages/como-comprar.astro](src/pages/como-comprar.astro)
- [src/data/products.ts](src/data/products.ts)

Esses arquivos controlam:

- `/como-comprar`
- `/produtos`
- `/produtos/tenda-piramidal`
- `/produtos/tenda-bolha`
- `/produtos/galpao-duas-aguas`
- `/produtos/banheiros-quimicos`
- `/produtos/tenda-sanfonada`

### Rotas institucionais fixas

Edite diretamente:

- [src/pages/quem-somos.astro](src/pages/quem-somos.astro)
- [src/pages/contato.astro](src/pages/contato.astro)

### Páginas por cidade

Edite [src/data/cidadesTendas.ts](src/data/cidadesTendas.ts)

As páginas são geradas dinamicamente pela rota [src/pages/[slug].astro](src/pages/%5Bslug%5D.astro).

Exemplos:

- `/aluguel-de-tendas-em-contagem`
- `/aluguel-de-tendas-em-betim`
- `/aluguel-de-tendas-em-lagoa-santa`

### Blog

Edite [src/data/blogPosts.ts](src/data/blogPosts.ts)

### Home

A home está em [src/pages/index.astro](src/pages/index.astro) e monta a página com estes componentes:

- `Hero`
- `QuickCTA`
- `ModelsSection`
- `AboutPreview`
- `BlogPreview`
- `SocialProof`

## Sitemap e redirects

- o sitemap e gerado automaticamente no `build` pelo `@astrojs/sitemap`
- a origem usada e `https://ciadastendas.com.br`
- as rotas novas como `/quem-somos`, `/eventos`, `/como-comprar` e `/produtos` entram no sitemap gerado
- redirects legados e tratamento de `404` estao em `public/.htaccess`, `public/_redirects` e [src/pages/404.astro](src/pages/404.astro)

## Dados estruturados e assets visuais

Arquivos principais:

- [src/data/schema.ts](src/data/schema.ts)
- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- [src/data/site.ts](src/data/site.ts)

Hoje o projeto usa:

- `LocalBusiness` em todas as paginas
- `WebPage` base em todas as paginas
- `BreadcrumbList` automatico nas paginas internas
- `Service` nas paginas comerciais e nas paginas de cidade
- `CollectionPage` nas paginas indice como `Blog`, `Produtos` e `Cidades Atendidas`
- `Article` nos posts do blog
- `Product` nas paginas internas de produto
- `AboutPage` em `/quem-somos`
- `ContactPage` em `/contato`

Assets atuais:

- logo principal: `public/images/Logo-tenda.png`
- favicon principal: `public/favicon.png`
- imagem OG/schema principal: `public/images/banner-aluguel-venda-tenda.webp`

## Documentação completa

Leia [docs/GUIA_DO_PROJETO.md](docs/GUIA_DO_PROJETO.md) para entender:

- arquitetura real do projeto
- origem de cada rota
- quais arquivos estão ativos
- como editar sem quebrar SEO ou conteúdo
- checklist para futuras mudanças feitas por pessoas ou IAs
