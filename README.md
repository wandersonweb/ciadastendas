# Companhia Tenda

Site institucional em Astro para a `Companhia Tenda`, com foco em SEO local, páginas comerciais, blog e páginas dinâmicas por cidade.

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
- meta title e meta description globais
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

### Páginas por cidade

Edite [src/data/cidadesTendas.ts](src/data/cidadesTendas.ts)

As páginas são geradas dinamicamente pela rota [src/pages/[slug].astro](src/pages/%5Bslug%5D.astro).

Exemplos:

- `/aluguel-de-tendas-em-contagem`
- `/aluguel-de-tendas-em-betim`
- `/aluguel-de-tendas-em-lagoa-santa`

### Blog

Edite [src/data/blogPosts.ts](src/data/blogPosts.ts)

Importante: o blog atual nao usa os arquivos `.mdx` de `src/content/blog` para renderizar as rotas principais.

### Home

A home está em [src/pages/index.astro](src/pages/index.astro) e monta a página com estes componentes:

- `Hero`
- `QuickCTA`
- `ModelsSection`
- `AboutPreview`
- `BlogPreview`
- `SocialProof`

## Documentação completa

Leia [docs/GUIA_DO_PROJETO.md](docs/GUIA_DO_PROJETO.md) para entender:

- arquitetura real do projeto
- origem de cada rota
- quais arquivos estão ativos
- quais arquivos parecem legados/placeholders
- como editar sem quebrar SEO ou conteúdo
- checklist para futuras mudanças feitas por pessoas ou IAs
