export const site = {
  name: "Companhia Tenda",
  tagline: "Locação e venda de tendas para eventos, empresas e operações temporárias",
  initials: "CT",
  mainService: "Aluguel e Venda de Tenda",
  phone: "(31) 98289-4301",
  whatsapp: "5531982894301",
  email: "ciadastendasbh@gmail.com",
  city: "Belo Horizonte",
  address: "Rua Santa Rita, 4137 - Belo Horizonte, MG",
  metaTitle: "Aluguel e Venda de Tenda em BH e Regiao",
  metaDescription: "Aluguel e venda de tendas elegantes, corporativas e industriais com atendimento consultivo para eventos, feiras, casamentos e operacoes temporarias.",
  siteUrl: "https://ciadastendas.com.br",
  logo: "/images/Logo-tenda.png",
  favicon: "/favicon.png",
  ogImage: "/images/banner-aluguel-venda-tenda.webp",
  twitterHandle: "@ciadastendas",
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  businessHours: {
    opens: "08:00",
    closes: "18:00",
  },
  whatsappMessage: "Olá, quero um orçamento para aluguel ou compra de tenda",
};

export const getWhatsappUrl = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navItems = [
  { name: "Início", href: "/" },
  { name: "Produtos", href: "/produtos" },
  { name: "Cidades Atendidas", href: "/Cidades-Atendidas" },
  { name: "Como Comprar", href: "/como-comprar" },
  { name: "Sobre", href: "/quem-somos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export const cityItems = [
  { name: "Belo Horizonte", href: "/aluguel-de-tenda-em-bh" },
  { name: "Contagem", href: "/aluguel-de-tendas-em-contagem" },
];

export const serviceLinks = [
  { title: "Aluguel de Tendas para Eventos", href: "/eventos" },
  { title: "Aluguel de Tenda em BH", href: "/aluguel-de-tenda-em-bh" },
  { title: "Aluguel de Tendas em Contagem", href: "/aluguel-de-tendas-em-contagem" },
  { title: "Aluguel de Tendas Valor", href: "/aluguel-de-tendas-valor" },
  { title: "Aluguel de Tenda para Casamento", href: "/aluguel-de-tenda-para-casamento" },
  { title: "Aluguel de Toldos", href: "/aluguel-de-toldos" },
];

export const siloNetworkLinks = [
  { title: "Aluguel de Tendas em BH", href: "/aluguel-de-tenda-em-bh" },
  { title: "Aluguel de Tendas para Eventos", href: "/eventos" },
  { title: "Aluguel de Tenda para Casamento", href: "/aluguel-de-tenda-para-casamento" },
  { title: "Aluguel de Tendas Valor", href: "/aluguel-de-tendas-valor" },
  { title: "Aluguel de Toldos", href: "/aluguel-de-toldos" },
  { title: "Cidades Atendidas", href: "/Cidades-Atendidas" },
  { title: "Aluguel de Tendas em Contagem", href: "/aluguel-de-tendas-em-contagem" },
];
