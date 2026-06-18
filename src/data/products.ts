export type ProductItem = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  badge: string;
  intro: string[];
  highlights: string[];
  applications: string[];
  differentials: Array<{ title: string; text: string }>;
  specs: Array<{ label: string; value: string }>;
};

export const products: ProductItem[] = [
  {
    slug: 'tenda-piramidal',
    title: 'Tenda Piramidal',
    shortTitle: 'Tenda Piramidal',
    eyebrow: 'Produto para locação e eventos',
    description: 'Cobertura versátil para festas, feiras, recepções e eventos corporativos com montagem rápida e visual elegante.',
    seoTitle: 'Tenda Piramidal para Eventos | Companhia Tenda',
    seoDescription: 'Conheça a tenda piramidal da Companhia Tenda para eventos, recepções, feiras e áreas de apoio com montagem segura.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    badge: 'Mais procurada',
    intro: [
      'A tenda piramidal é uma das estruturas mais utilizadas em eventos porque combina boa apresentação visual com montagem prática e modular.',
      'Ela funciona muito bem em recepções, áreas de circulação, apoio de buffet, lounges, feiras, ações promocionais e eventos sociais em geral.',
    ],
    highlights: [
      'Visual limpo e elegante para eventos sociais e corporativos.',
      'Montagem modular com possibilidade de ampliar a área coberta.',
      'Boa adaptação para festas, feiras, recepções e pontos de apoio.',
    ],
    applications: [
      'Casamentos e aniversários',
      'Feiras e exposições',
      'Eventos corporativos',
      'Entradas, recepções e lounges',
      'Cobertura de buffet, bar e apoio operacional',
    ],
    differentials: [
      { title: 'Apresentação visual', text: 'Formato piramidal de presença marcante, que valoriza áreas de atendimento e recepção.' },
      { title: 'Flexibilidade de layout', text: 'Pode ser utilizada sozinha ou acoplada para formar áreas maiores com circulação organizada.' },
      { title: 'Operação prática', text: 'É uma solução eficiente para quem precisa de cobertura rápida sem abrir mão do acabamento.' },
    ],
    specs: [
      { label: 'Medidas comuns', value: '3x3, 4x4, 5x5, 6x6, 8x8 e 10x10' },
      { label: 'Aplicação principal', value: 'Eventos sociais, corporativos e promocionais' },
      { label: 'Formato', value: 'Modular e acoplável' },
    ],
  },
  {
    slug: 'tenda-bolha',
    title: 'Tenda Bolha',
    shortTitle: 'Tenda Bolha',
    eyebrow: 'Cobertura para experiências diferenciadas',
    description: 'Estrutura com impacto visual para eventos de marca, ações especiais e experiências que pedem destaque.',
    seoTitle: 'Tenda Bolha para Eventos Promocionais | Companhia Tenda',
    seoDescription: 'Veja aplicações da tenda bolha para ações promocionais, ativações de marca e eventos com forte apelo visual.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    badge: 'Alto impacto visual',
    intro: [
      'A tenda bolha é indicada para projetos em que a cobertura também faz parte da cenografia ou da experiência do público.',
      'Ela costuma ser procurada para ativações de marca, eventos diferenciados, espaços instagramáveis e operações que precisam chamar atenção logo de longe.',
    ],
    highlights: [
      'Formato incomum e marcante para destacar a ação no ambiente.',
      'Boa escolha para experiências de marca e eventos especiais.',
      'Pode funcionar como ponto focal do projeto.',
    ],
    applications: [
      'Ações promocionais',
      'Ativações de marca',
      'Eventos de lançamento',
      'Espaços instagramáveis',
      'Ambientes temáticos e experiências especiais',
    ],
    differentials: [
      { title: 'Destaque imediato', text: 'É o tipo de estrutura que chama atenção e ajuda a reforçar presença de marca no evento.' },
      { title: 'Experiência de público', text: 'Contribui para criar uma ambientação mais memorável e fora do padrão.' },
      { title: 'Uso estratégico', text: 'Funciona melhor em projetos em que estética, visibilidade e diferenciação fazem parte do objetivo.' },
    ],
    specs: [
      { label: 'Aplicação principal', value: 'Eventos promocionais e experiências de marca' },
      { label: 'Perfil de uso', value: 'Projetos especiais com foco visual' },
      { label: 'Indicação', value: 'Áreas de destaque e recepção' },
    ],
  },
  {
    slug: 'galpao-duas-aguas',
    title: 'Galpão Duas Águas',
    shortTitle: 'Galpão Duas Águas',
    eyebrow: 'Estrutura para grandes áreas cobertas',
    description: 'Cobertura robusta para armazenagem temporária, áreas industriais, feiras e operações que exigem grande vão.',
    seoTitle: 'Galpão Duas Águas para Eventos e Operações | Companhia Tenda',
    seoDescription: 'Conheça o galpão duas águas para armazenagem temporária, feiras, operações industriais e grandes áreas cobertas.',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80',
    badge: 'Grandes vãos',
    intro: [
      'O galpão duas águas é indicado para projetos que precisam de mais área coberta e uma operação estrutural mais robusta.',
      'É muito utilizado em feiras industriais, armazenagem temporária, cobertura logística, áreas operacionais e eventos de maior porte.',
    ],
    highlights: [
      'Indicado para áreas amplas e operações de maior exigência.',
      'Boa opção para armazenagem, logística e feiras estruturadas.',
      'Permite criar ambientes cobertos mais extensos e contínuos.',
    ],
    applications: [
      'Armazenagem temporária',
      'Feiras industriais',
      'Eventos corporativos de grande porte',
      'Áreas de carga, apoio e operação',
      'Coberturas para logística e estoque',
    ],
    differentials: [
      { title: 'Escala de cobertura', text: 'Resolve projetos em que uma tenda comum já não entrega a metragem necessária.' },
      { title: 'Perfil operacional', text: 'Atende bem demandas em que circulação, estoque e apoio técnico precisam ficar protegidos.' },
      { title: 'Configuração sob medida', text: 'A modulação pode ser pensada conforme o espaço disponível e o tipo de uso da estrutura.' },
    ],
    specs: [
      { label: 'Aplicação principal', value: 'Grandes áreas e operações temporárias' },
      { label: 'Perfil de uso', value: 'Industrial, corporativo e logístico' },
      { label: 'Destaque', value: 'Cobertura ampla com layout mais técnico' },
    ],
  },
  {
    slug: 'banheiros-quimicos',
    title: 'Banheiros Químicos',
    shortTitle: 'Banheiros Químicos',
    eyebrow: 'Solução de apoio para eventos',
    description: 'Estrutura complementar para eventos, obras, feiras e operações temporárias com foco em praticidade e organização.',
    seoTitle: 'Banheiros Químicos para Eventos | Companhia Tenda',
    seoDescription: 'Locação de banheiros químicos para eventos, feiras, obras e operações temporárias com atendimento consultivo.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    badge: 'Apoio essencial',
    intro: [
      'Os banheiros químicos entram como item essencial em eventos e operações temporárias que precisam atender o público com mais conforto e organização.',
      'Eles podem ser locados como apoio complementar para festas, feiras, eventos corporativos, obras e estruturas de longa permanência.',
    ],
    highlights: [
      'Apoio importante para conforto e logística do evento.',
      'Indicado para eventos, obras e áreas sem infraestrutura fixa.',
      'Ajuda a organizar melhor o fluxo de público e equipe.',
    ],
    applications: [
      'Eventos sociais',
      'Feiras e festivais',
      'Eventos corporativos',
      'Obras e operações temporárias',
      'Áreas externas sem estrutura fixa',
    ],
    differentials: [
      { title: 'Conveniência', text: 'Facilita a operação do evento e evita improvisos em locais sem banheiros permanentes.' },
      { title: 'Planejamento de público', text: 'A quantidade pode ser dimensionada conforme duração do evento e volume esperado de pessoas.' },
      { title: 'Suporte complementar', text: 'Faz sentido principalmente quando o projeto já envolve tendas, apoio logístico e atendimento ao público.' },
    ],
    specs: [
      { label: 'Aplicação principal', value: 'Apoio para eventos e operações' },
      { label: 'Perfil de uso', value: 'Público, equipe e áreas externas' },
      { label: 'Combinação comum', value: 'Tendas, recepção e estruturas de apoio' },
    ],
  },
  {
    slug: 'tenda-sanfonada',
    title: 'Tenda Sanfonada',
    shortTitle: 'Tenda Sanfonada',
    eyebrow: 'Agilidade para ações rápidas',
    description: 'Cobertura prática para feiras, ações promocionais, pontos de atendimento e eventos que pedem mobilidade.',
    seoTitle: 'Tenda Sanfonada para Feiras e Ações Promocionais | Companhia Tenda',
    seoDescription: 'Conheça a tenda sanfonada para feiras, ações promocionais, eventos rápidos e pontos de atendimento.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    badge: 'Montagem ágil',
    intro: [
      'A tenda sanfonada é uma solução prática para ações em que rapidez de montagem e mobilidade contam muito.',
      'Ela costuma ser procurada para feiras, pontos de atendimento, ativações promocionais, eventos de rua e operações temporárias menores.',
    ],
    highlights: [
      'Montagem rápida e uso prático em ações dinâmicas.',
      'Boa escolha para eventos menores e atendimento temporário.',
      'Estrutura útil para apoio comercial, promocional e operacional.',
    ],
    applications: [
      'Feiras e exposições',
      'Ações promocionais',
      'Pontos de atendimento',
      'Eventos de rua',
      'Cobertura rápida para apoio operacional',
    ],
    differentials: [
      { title: 'Velocidade', text: 'Entrega agilidade em montagens que não comportam uma operação estrutural maior.' },
      { title: 'Versatilidade', text: 'Adapta-se bem a feiras, ativações, credenciamento e pontos de venda temporários.' },
      { title: 'Praticidade operacional', text: 'É uma opção objetiva para quem precisa resolver cobertura de maneira rápida e funcional.' },
    ],
    specs: [
      { label: 'Medidas comuns', value: '1,5x1,5 até 3x3' },
      { label: 'Aplicação principal', value: 'Feiras, promoções e atendimento rápido' },
      { label: 'Destaque', value: 'Montagem prática e mobilidade' },
    ],
  },
];

export const productLinks = products.map((product) => ({
  title: product.title,
  href: `/produtos/${product.slug}`,
}));
