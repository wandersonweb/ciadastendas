import { siloNetworkLinks } from './site';
import { cidadesTendas } from './cidadesTendas';

type SiloModelIcon = 'tent' | 'zap' | 'landmark';

type SiloModel = {
  title: string;
  description: string;
  icon: SiloModelIcon;
};

type SiloImage = {
  src: string;
  alt: string;
};

type SiloArticleSection = {
  level: 2 | 3;
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

type RelatedLink = {
  title: string;
  href: string;
};

type SiloPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  seoTitle?: string;
  seoDescription?: string;
  heroEyebrow?: string;
  heroChecklist?: string[];
  ctaBannerText?: string;
  articleEyebrow?: string;
  articleTitle?: string;
  articleLead?: string[];
  articleSections?: SiloArticleSection[];
  articleImages?: SiloImage[];
  featuredModels?: SiloModel[];
  relatedLinks?: RelatedLink[];
};

const defaultHeroChecklist = [
  'Indicação do modelo ideal',
  'Avaliação de metragem e acesso',
  'Montagem planejada e segura',
];

const defaultFeaturedModels: SiloModel[] = [
  {
    title: 'Tenda Piramidal',
    description: 'Modelo versátil para eventos, recepções, áreas de apoio e coberturas modulares com visual limpo.',
    icon: 'tent',
  },
  {
    title: 'Tenda Sanfonada',
    description: 'Opção prática para ações rápidas, feiras, pontos de atendimento e eventos com montagem ágil.',
    icon: 'zap',
  },
  {
    title: 'Chapéu de Bruxa',
    description: 'Estrutura de presença marcante para entradas, lounges e ambientes que pedem acabamento diferenciado.',
    icon: 'landmark',
  },
];

const defaultArticleImages: SiloImage[] = [
  {
    src: '/images/aluguel-tendas-eventos.webp',
    alt: 'Tenda montada para eventos ao ar livre',
  },
  {
    src: '/images/aluguel-tendas-bh.webp',
    alt: 'Estrutura temporária para evento corporativo',
  },
  {
    src: '/images/Tenda-sanfonada.webp',
    alt: 'Cobertura para evento com estrutura profissional',
  },
  {
    src: '/images/venda-de-tendas.webp',
    alt: 'Área coberta para feira e circulação de convidados',
  },
  {
    src: '/images/aluguel-venda-tenda-casamento.webp',
    alt: 'Tenda elegante para evento social',
  },
];

const lastCidadeLink = (() => {
  const lastCidade = cidadesTendas[cidadesTendas.length - 1];

  if (!lastCidade) return null;

  return {
    title: `Aluguel de Tendas em ${lastCidade.cidade}`,
    href: `/${lastCidade.slug}`,
  };
})();

export const siloPages: SiloPage[] = [
  {
    slug: 'eventos',
    title: 'Aluguel de Tendas Para Eventos',
    seoTitle: 'Aluguel de Tendas Para Eventos | Locação e Montagem',
    seoDescription: 'Aluguel de tendas para eventos com montagem segura e estrutura sob medida. Atendemos festas, feiras, empresas, eventos sociais e barraquinhas de festa junina.',
    description: 'Aluguel de tendas para eventos com montagem segura, estrutura sob medida e atendimento para festas, feiras, empresas e eventos sociais.',
    intro: 'O aluguel de tendas para eventos e uma solucao pratica para quem precisa criar areas cobertas, proteger convidados e organizar melhor o espaco.',
    heroEyebrow: 'Locação de estruturas em Minas Gerais',
    heroChecklist: defaultHeroChecklist,
    ctaBannerText: 'Receba uma orientação rápida para escolher a tenda certa para seu evento ou operação.',
    articleEyebrow: 'Guia prático',
    articleTitle: 'Aluguel de Tendas Para Eventos',
    articleImages: defaultArticleImages,
    featuredModels: defaultFeaturedModels,
    relatedLinks: siloNetworkLinks,
    articleLead: [
      'Seja para uma festa, feira, evento corporativo, acao promocional, <a href="/aluguel-de-tenda-para-casamento">casamento</a>, evento religioso ou comemoracao em area aberta, a tenda ajuda a transformar o ambiente com mais conforto e seguranca.',
      'Em eventos, a estrutura nao e apenas um detalhe.',
      'Ela protege pessoas, equipamentos, mesas, produtos, palco, buffet, som, iluminacao e areas de circulacao. Para uma visao mais ampla da operacao na capital, vale conferir tambem <a href="/aluguel-de-tenda-em-bh">aluguel de tendas em BH</a>.',
      'E quando o clima resolve participar sem ser convidado, a tenda salva o evento.',
    ],
    articleSections: [
      {
        level: 2,
        heading: 'Proteja Seu Evento Com Uma Estrutura Adequada',
        paragraphs: [
          'Todo evento ao ar livre precisa de planejamento.',
          'Sol forte, chuva, vento, sereno e mudancas repentinas no tempo podem comprometer a experiencia dos convidados e ate prejudicar equipamentos.',
          'Com a locacao de tendas, e possivel criar espacos protegidos para diferentes finalidades.',
          'A cobertura pode ser usada na entrada, recepcao, area de alimentacao, praca de convivencia, pista, palco, camarim, estoque, atendimento ou area tecnica.',
          'O ideal e escolher a estrutura conforme o tipo de evento, o espaco disponivel e o numero de pessoas esperado.',
        ],
      },
      {
        level: 2,
        heading: 'Locação de Estrutura Para Eventos',
        paragraphs: [
          'A locacao de estrutura para eventos envolve muito mais do que simplesmente entregar uma tenda no local.',
          'E preciso avaliar o ambiente, definir o tamanho adequado, entender o tipo de piso, planejar a montagem e garantir que a cobertura esteja bem instalada.',
          'Nossa equipe trabalha com estruturas para eventos sociais, comerciais, religiosos, corporativos, escolares, culturais e promocionais.',
          'Cada montagem e pensada para atender a necessidade do cliente com seguranca, funcionalidade e bom acabamento.',
        ],
      },
      {
        level: 2,
        heading: 'Locação e Montagem de Estruturas Para Eventos Com Padrão Técnico',
        paragraphs: [
          'A montagem correta faz toda a diferenca no resultado final.',
          'Uma tenda precisa estar alinhada, bem fixada e adequada ao uso proposto.',
          'Esse cuidado ajuda a evitar improvisos e garante uma estrutura mais segura para o evento.',
        ],
        listItems: [
          'Tipo de evento;',
          'Quantidade aproximada de pessoas;',
          'Local da montagem;',
          'Tipo de piso;',
          'Espaco disponivel;',
          'Necessidade de cobertura lateral;',
          'Horario do evento;',
          'Tempo de locacao;',
          'Acesso para carga e descarga;',
          'Necessidade de estruturas acopladas.',
        ],
      },
      {
        level: 2,
        heading: 'Estruturas Para Composições Técnicas, Operacionais e de Apoio ao Evento',
        paragraphs: [
          'Alem da area principal dos convidados, muitos eventos precisam de estruturas de apoio.',
          'As tendas podem ser usadas para montar espacos tecnicos e operacionais que facilitam a organizacao.',
          'Essas estruturas ajudam o evento a funcionar melhor nos bastidores.',
          'Porque evento bonito na frente tambem precisa de operacao organizada atras.',
        ],
        listItems: [
          'Area de credenciamento;',
          'Recepcao de convidados;',
          'Camarim;',
          'Apoio para fornecedores;',
          'Area do buffet;',
          'Cozinha temporaria;',
          'Deposito de materiais;',
          'Protecao para equipamentos;',
          'Bilheteria;',
          'Atendimento ao publico;',
          'Posto de primeiros socorros;',
          'Area de seguranca;',
          'Espaco para equipe de producao.',
        ],
      },
      {
        level: 2,
        heading: 'Tendas Para Eventos Corporativos',
        paragraphs: [
          'Empresas usam tendas em diferentes situacoes.',
          'Elas podem ser montadas para acoes promocionais, feiras, treinamentos, eventos internos, confraternizacoes, ativacoes de marca, lancamentos de produtos e atendimento temporario.',
          'A estrutura coberta transmite mais organizacao e melhora a experiencia de clientes, colaboradores e convidados.',
          'Tambem pode servir como apoio para exposicao de produtos, recepcao, filas, balcoes de atendimento e areas de convivencia.',
        ],
      },
      {
        level: 2,
        heading: 'Tendas Para Festas e Eventos Sociais',
        paragraphs: [
          'Em festas sociais, as tendas ajudam a proteger os convidados e organizar o espaco.',
          'Elas sao muito usadas em aniversarios, casamentos, chas, confraternizacoes, formaturas, festas de familia e eventos em sitios, chacaras, clubes ou quintais.',
          'A cobertura pode ser instalada sobre mesas, buffet, pista de danca, bar, area de brinquedos, som ou recepcao.',
          'Com a estrutura correta, o evento fica mais confortavel e preparado para imprevistos.',
        ],
      },
      {
        level: 2,
        heading: 'Tendas Para Feiras, Exposições e Ações Promocionais',
        paragraphs: [
          'Feiras e exposicoes exigem organizacao visual e funcionalidade.',
          'As tendas podem ser usadas para estandes, pontos de venda, areas de degustacao, atendimento ao publico, recepcao e protecao de produtos.',
          'Tambem sao muito uteis em acoes promocionais realizadas em pracas, estacionamentos, patios, escolas, empresas e areas comerciais.',
          'A estrutura ajuda a destacar o espaco e cria um ponto de apoio para equipe e visitantes.',
        ],
      },
      {
        level: 2,
        heading: 'Barraquinhas de Festa Junina',
        paragraphs: [
          'Alem das tendas tradicionais, tambem e possivel usar estruturas menores para barraquinhas de festa junina.',
          'Elas sao ideais para festas escolares, eventos comunitarios, quermesses, igrejas, condominios e empresas.',
          'As barraquinhas podem ser usadas para comidas tipicas, brincadeiras, atendimento, venda de fichas, decoracao tematica e pontos de apoio.',
          'Pipoca, canjica, pescaria, correio elegante, so nao da para deixar a chuva ser a atracao principal.',
        ],
      },
      {
        level: 2,
        heading: 'Tamanhos de Tendas Para Eventos',
        paragraphs: [
          'O tamanho ideal depende do objetivo da cobertura.',
          'Eventos pequenos podem precisar apenas de uma tenda compacta para recepcao ou apoio.',
          'Eventos maiores podem exigir estruturas acopladas para criar uma area coberta ampla.',
          'Na duvida, o melhor caminho e informar o tipo de evento, quantidade de pessoas e espaco disponivel para receber uma orientacao mais precisa.',
        ],
        listItems: [
          '3x3;',
          '4x4;',
          '5x5;',
          '6x6;',
          '7x7;',
          '8x8;',
          '10x10;',
          'estruturas acopladas para areas maiores.',
        ],
      },
      {
        level: 2,
        heading: 'Locação de Tendas Para Eventos ao Ar Livre',
        paragraphs: [
          'Eventos ao ar livre sao muito valorizados, mas exigem cuidado com cobertura.',
          'A tenda cria uma protecao importante contra sol e chuva, alem de ajudar na divisao dos ambientes.',
          'Ela pode ser usada em jardins, patios, estacionamentos, sitios, chacaras, fazendas, clubes, pracas, escolas e espacos comerciais.',
          'Com planejamento, e possivel montar uma estrutura funcional sem comprometer a circulacao dos convidados.',
        ],
      },
      {
        level: 2,
        heading: 'Quanto Custa Alugar Tendas Para Eventos?',
        paragraphs: [
          'O valor do aluguel de tendas para eventos varia conforme o projeto.',
          'Por isso, o orcamento precisa ser personalizado e normalmente conversa com o que voce encontra em <a href="/aluguel-de-tendas-valor">aluguel de tendas valor</a>.',
          'Assim, conseguimos indicar a estrutura correta e calcular o valor conforme a necessidade real do evento.',
        ],
        listItems: [
          'Tamanho da tenda;',
          'Modelo da estrutura;',
          'Local da montagem;',
          'Tempo de locacao;',
          'Tipo de piso;',
          'Necessidade de fechamento lateral;',
          'Distancia para entrega;',
          'Complexidade da instalacao;',
          'Quantidade de estruturas;',
          'Data do evento.',
        ],
      },
      {
        level: 2,
        heading: 'Como Escolher a Estrutura Certa Para o Seu Evento',
        paragraphs: [
          'Antes de contratar, avalie qual sera o uso da tenda.',
          'Ela sera usada para convidados, buffet, recepcao, palco, atendimento, produtos ou apoio tecnico?',
          'Tambem e importante considerar o local, o acesso para montagem e a previsao de publico.',
          'Quanto mais claro for o objetivo da estrutura, melhor sera a escolha do tamanho e do modelo.',
          'Uma boa orientacao evita gastos desnecessarios e ajuda a garantir mais seguranca no dia do evento.',
        ],
      },
      {
        level: 2,
        heading: 'Garanta a Locação da Sua Estrutura',
        paragraphs: [
          'Se voce precisa de aluguel de tendas para eventos, fale com nossa equipe.',
          'Vamos entender sua necessidade, avaliar o espaco e indicar a melhor opcao de cobertura.',
          'Atendemos eventos sociais, corporativos, comerciais, religiosos, escolares e promocionais.',
          'Solicite um orcamento sem compromisso e garanta uma estrutura adequada para seu evento.',
        ],
      },
    ],
  },
  {
    slug: 'aluguel-de-tenda-em-bh',
    title: 'Aluguel de Tendas em BH',
    seoTitle: 'Aluguel de Tendas em BH | Estruturas para Eventos',
    seoDescription: 'Precisa de aluguel de tendas em BH? Conheça as soluções da Companhia Tenda para eventos corporativos, sociais e promocionais. Solicite orçamento.',
    description: 'Aluguel de tenda em Belo Horizonte para eventos, empresas, feiras e operações temporárias com atendimento consultivo.',
    intro: 'Para quem precisa de aluguel de tendas em BH, o planejamento correto evita atrasos, improvisos e problemas de cobertura. Atuamos com orientação sobre modelo, metragem, local de montagem e acabamento adequado ao perfil do evento ou operação.',
    heroEyebrow: 'Locação de estruturas em Minas Gerais',
    heroChecklist: defaultHeroChecklist,
    ctaBannerText: 'Receba uma orientação rápida para escolher a tenda certa para seu evento ou operação.',
    articleEyebrow: 'Guia prático',
    articleTitle: 'Como planejar aluguel de tendas em BH com mais segurança',
    articleImages: defaultArticleImages,
    featuredModels: defaultFeaturedModels,
    relatedLinks: lastCidadeLink ? [...siloNetworkLinks, lastCidadeLink] : siloNetworkLinks,
    articleLead: [
      'Está organizando um evento e precisa de uma estrutura segura, bonita e funcional? O <strong>aluguel de tendas em BH</strong> é uma das soluções mais procuradas para proteger convidados, equipamentos e garantir conforto durante toda a programação.',
      `A Companhia Tenda atende Belo Horizonte e cidades da Região Metropolitana com estruturas para <a href="/eventos">eventos</a>, <a href="/aluguel-de-tenda-para-casamento">casamentos</a>, aniversários, feiras, exposições, ações promocionais e celebrações em geral. Trabalhamos com diferentes modelos e tamanhos para atender desde pequenas reuniões até grandes eventos. A navegação local também se fecha com <a href="${lastCidadeLink?.href ?? '/Cidades-Atendidas'}">${lastCidadeLink?.title ?? 'a última cidade da cadeia local'}</a>.`,
    ],
    articleSections: [
      {
        level: 2,
        heading: 'A Tenda Ideal para Seu Evento',
        paragraphs: [
          'Cada evento possui características próprias. Por isso, escolher a cobertura correta faz toda a diferença para o conforto dos convidados e para o sucesso da organização.',
          'Na Companhia Tenda, avaliamos fatores como quantidade de pessoas, local de instalação, duração do evento e necessidade de personalização antes de recomendar a melhor solução.',
        ],
      },
      {
        level: 3,
        heading: 'Tendas Piramidais',
        paragraphs: [
          'As tendas piramidais estão entre as mais procuradas para eventos sociais e corporativos. Seu design elegante proporciona excelente acabamento visual e combina com diferentes estilos de decoração.',
          'São muito utilizadas em casamentos, aniversários, confraternizações empresariais, eventos gastronômicos e ações promocionais.',
        ],
      },
      {
        level: 3,
        heading: 'Tendas Personalizadas',
        paragraphs: [
          'Alguns eventos exigem uma identidade visual exclusiva. As tendas personalizadas permitem incluir cores específicas, comunicação visual da marca e adaptações conforme a proposta do projeto.',
          'Esse tipo de estrutura é bastante utilizado em feiras, eventos institucionais e campanhas promocionais que buscam maior destaque junto ao público.',
        ],
      },
      {
        level: 2,
        heading: 'Nossos Serviços de Locação de Tendas',
        paragraphs: [
          'A Companhia Tenda oferece soluções completas para quem busca qualidade, segurança e praticidade na locação de estruturas para eventos.',
          'Nossa equipe auxilia desde a escolha da tenda ideal até a montagem e desmontagem, garantindo que tudo esteja pronto dentro do prazo combinado. Atendemos eventos em Belo Horizonte, <a href="/aluguel-de-tendas-em-contagem">Contagem</a>, Betim, Nova Lima, Lagoa Santa, Ribeirão das Neves, Santa Luzia e demais cidades da região.',
        ],
      },
      {
        level: 3,
        heading: 'Tendas Modulares',
        paragraphs: [
          'As tendas modulares são uma excelente escolha para eventos que exigem flexibilidade de espaço. Sua estrutura permite ampliar áreas cobertas conforme a necessidade do projeto.',
          'Esse modelo é muito utilizado em feiras, eventos corporativos, exposições, festivais e grandes celebrações, oferecendo um visual moderno e ótima capacidade de adaptação.',
        ],
      },
      {
        level: 3,
        heading: 'Decoração para Colunas de Tendas',
        paragraphs: [
          'Os detalhes fazem diferença na experiência dos convidados. A decoração das colunas pode complementar o ambiente e tornar o espaço ainda mais sofisticado.',
          'Tecidos, iluminação decorativa e acabamentos especiais ajudam a transformar a estrutura em um ambiente mais agradável e alinhado ao conceito do evento.',
        ],
      },
      {
        level: 2,
        heading: 'Informações Úteis para Escolher Tendas para Eventos',
        paragraphs: [
          'Antes de contratar o aluguel de tendas em BH, vale observar alguns pontos importantes. Verifique a experiência da empresa, a qualidade dos materiais utilizados, os prazos de montagem e o suporte oferecido durante o evento.',
          'Outro aspecto relevante é garantir que a estrutura seja adequada para as condições climáticas e para a quantidade de participantes prevista. Uma análise técnica realizada por profissionais experientes ajuda a evitar problemas e proporciona mais tranquilidade para os organizadores.',
        ],
      },
      {
        level: 2,
        heading: 'Como Escolher o Tamanho Ideal da Tenda',
        paragraphs: [
          'Uma das dúvidas mais comuns é definir qual tamanho de tenda será necessário. A escolha depende do número de convidados, da disposição das mesas, da circulação de pessoas, da presença de palco, pista de dança, buffet ou outros equipamentos.',
          'Uma estrutura muito pequena pode comprometer o conforto dos participantes. Já uma área excessivamente grande pode gerar custos desnecessários. Nossa equipe auxilia nesse planejamento para que o espaço seja aproveitado da melhor forma possível.',
        ],
      },
      {
        level: 2,
        heading: 'Evite Imprevistos em Seu Evento',
        paragraphs: [
          'O clima é um dos fatores que mais preocupam quem organiza eventos ao ar livre. Chuva intensa, sol forte e ventos podem comprometer toda a programação quando não existe uma estrutura adequada.',
          'Ao contratar uma empresa especializada em aluguel de tendas em BH, você garante mais proteção para convidados, equipamentos e profissionais envolvidos na realização do evento. Planejamento antecipado e estruturas de qualidade são fundamentais para reduzir riscos e proporcionar uma experiência positiva para todos os participantes.',
        ],
      },
      {
        level: 2,
        heading: 'Como a Companhia Tenda Pode Contribuir para o Sucesso do Seu Evento',
        paragraphs: [
          'A Companhia Tenda trabalha com foco em segurança, pontualidade e atendimento personalizado. Nossa equipe entende que cada evento possui necessidades específicas. Por isso, oferecemos soluções sob medida para diferentes formatos e tamanhos de projetos.',
          'Atendemos eventos corporativos, sociais, culturais e promocionais em Belo Horizonte e toda a Região Metropolitana, sempre buscando entregar estruturas que combinam qualidade, funcionalidade e excelente apresentação visual.',
        ],
      },
    ],
  },
  {
    slug: 'aluguel-de-tendas-valor',
    title: 'Aluguel de Tendas Valor',
    seoTitle: 'Aluguel de Tendas: Valor, Preço e Orçamento para Eventos',
    seoDescription: 'Descubra quanto custa o aluguel de tendas para eventos. Entenda os fatores que influenciam o preço e solicite um orçamento personalizado.',
    description: 'Descubra quanto custa o aluguel de tendas para eventos. Entenda os fatores que influenciam o preço e solicite um orçamento personalizado.',
    intro: 'O valor do aluguel de tendas pode variar conforme o tamanho da estrutura, o modelo escolhido, o local do evento e o período de locação.',
    heroEyebrow: 'Locação de estruturas em Minas Gerais',
    heroChecklist: defaultHeroChecklist,
    ctaBannerText: 'Precisa saber o valor do aluguel de tendas para seu evento? Solicite um orçamento personalizado.',
    articleEyebrow: 'Guia prático',
    articleTitle: 'Aluguel de Tendas: Valor e Preço Para Eventos',
    articleImages: defaultArticleImages,
    featuredModels: defaultFeaturedModels,
    relatedLinks: siloNetworkLinks,
    articleLead: [
      'O valor do aluguel de tendas pode variar conforme o tamanho da estrutura, o modelo escolhido, o local do evento e o período de locação.',
      'Por esse motivo, não existe um preço único que atenda todos os tipos de eventos.',
      'Uma festa pequena pode precisar apenas de uma cobertura compacta. Já um <a href="/aluguel-de-tenda-para-casamento">casamento</a>, feira, exposição ou evento corporativo pode exigir várias tendas integradas, fechamentos laterais e uma operação de montagem mais complexa.',
      'Se você está pesquisando quanto custa alugar uma tenda para seu evento, esta página vai ajudar a entender quais fatores influenciam o orçamento e como escolher a estrutura ideal sem pagar por algo além da sua necessidade. Para uma visão geral da operação local, veja também <a href="/aluguel-de-tenda-em-bh">aluguel de tendas em BH</a>.',
    ],
    articleSections: [
      {
        level: 2,
        heading: 'Descubra o Preço Para Alugar Uma Tenda Para Seu Próximo Evento',
        paragraphs: [
          'O preço para alugar uma tenda começa pela análise das características do evento.',
          'Antes de elaborar um orçamento, é importante entender onde a estrutura será instalada, quantas pessoas utilizarão o espaço e qual será sua finalidade.',
          'A cobertura pode ser utilizada para recepção de convidados, área de buffet, palco, pista de dança, exposição de produtos, apoio operacional ou proteção de equipamentos.',
          'Essas informações ajudam a indicar a solução mais adequada, evitando custos desnecessários e garantindo conforto durante o evento.',
        ],
      },
      {
        level: 2,
        heading: 'Quanto Custa o Aluguel de Tendas?',
        paragraphs: [
          'Muitas pessoas pesquisam quanto custa alugar uma tenda esperando encontrar um valor fixo. Na prática, o orçamento é personalizado porque cada evento possui necessidades específicas.',
          'O custo do aluguel de tendas está diretamente ligado às características do projeto.',
          'Os principais fatores considerados são:',
        ],
        listItems: [
          'Tamanho da estrutura;',
          'Modelo da tenda;',
          'Quantidade de unidades;',
          'Cidade do evento;',
          'Distância para transporte;',
          'Tipo de piso;',
          'Tempo de locação;',
          'Complexidade da montagem;',
          'Necessidade de fechamento lateral;',
          'Data e horário do evento;',
          'Facilidade de acesso ao local.',
        ],
      },
      {
        level: 2,
        heading: 'O Que Influencia no Valor do Aluguel de Tendas?',
        paragraphs: [
          'Dois eventos com a mesma quantidade de convidados podem apresentar valores diferentes.',
          'Um espaço plano e de fácil acesso exige uma operação distinta de um local com terreno irregular ou acesso limitado para veículos.',
        ],
      },
      {
        level: 3,
        heading: '1. Tamanho da Tenda',
        paragraphs: [
          'O tamanho da estrutura é um dos fatores que mais impactam o orçamento.',
          'Existem diversas medidas disponíveis, entre elas:',
        ],
        listItems: [
          '3x3;',
          '4x4;',
          '5x5;',
          '6x6;',
          '7x7;',
          '8x8;',
          '10x10;',
          'Tendas acopladas para grandes áreas cobertas.',
        ],
      },
      {
        level: 3,
        heading: '2. Modelo e Tipo de Estrutura',
        paragraphs: [
          'Quanto maior a área de cobertura, maior tende a ser a quantidade de materiais, mão de obra e logística necessária.',
          'Nem sempre a maior estrutura é a melhor escolha. O ideal é dimensionar corretamente o espaço conforme a quantidade de pessoas e o uso previsto.',
          'Existem diferentes tipos de tendas para eventos.',
          'Algumas são voltadas para áreas operacionais e apoio logístico. Outras possuem acabamento mais sofisticado para casamentos, formaturas e eventos corporativos.',
          'Também podem existir diferenças relacionadas a:',
        ],
        listItems: [
          'Lona branca;',
          'Lona cristal;',
          'Estruturas abertas;',
          'Estruturas fechadas;',
          'Coberturas integradas.',
        ],
      },
      {
        level: 3,
        heading: '3. Localização e Entrega da Tenda',
        paragraphs: [
          'Cada modelo possui características específicas que podem influenciar o valor final do aluguel.',
          'A localização do evento também interfere no orçamento.',
          'Atendemos Belo Horizonte, região metropolitana e diversas cidades de Minas Gerais.',
          'Nesse cálculo podem ser considerados:',
        ],
        listItems: [
          'Distância entre a base operacional e o evento;',
          'Custos de transporte;',
          'Pedágios;',
          'Tempo de deslocamento;',
          'Quantidade de veículos utilizados;',
          'Condições de acesso ao local.',
        ],
      },
      {
        level: 3,
        heading: '4. Duração do Aluguel',
        paragraphs: [
          'Quanto maior a distância ou mais complexa a logística, maior tende a ser o investimento necessário.',
          'O período de locação influencia diretamente o custo da estrutura.',
          'Alguns eventos utilizam a tenda por apenas um dia. Outros exigem permanência durante vários dias ou semanas.',
          'Feiras, exposições, festivais e eventos empresariais costumam demandar períodos mais longos de utilização.',
          'Por isso, é importante informar corretamente as datas de montagem, uso e desmontagem ao solicitar o orçamento.',
        ],
      },
      {
        level: 3,
        heading: '5. Quantidade de Tendas',
        paragraphs: [
          'Eventos de maior porte geralmente necessitam de mais de uma estrutura.',
          'As tendas podem ser instaladas separadamente ou acopladas para formar uma área coberta maior.',
          'O aumento da quantidade influencia fatores como:',
        ],
        listItems: [
          'Transporte;',
          'Equipe de montagem;',
          'Materiais de fixação;',
          'Tempo de execução.',
        ],
      },
      {
        level: 3,
        heading: '6. Tipo de Piso e Sistema de Fixação',
        paragraphs: [
          'Um planejamento adequado ajuda a aproveitar melhor o espaço disponível e evitar custos desnecessários.',
          'O tipo de piso interfere diretamente na forma de instalação.',
          'As estruturas podem ser montadas sobre:',
        ],
        listItems: [
          'Gramado;',
          'Terra;',
          'Asfalto;',
          'Concreto;',
          'Piso intertravado;',
          'Estacionamentos;',
          'Áreas pavimentadas.',
        ],
      },
      {
        level: 3,
        heading: '7. Fechamentos Laterais e Itens Extras',
        paragraphs: [
          'Cada situação exige um método de fixação específico.',
          'Em determinados locais pode ser necessário utilizar contrapesos para preservar o piso e garantir a estabilidade da estrutura.',
          'As tendas podem ser contratadas abertas ou com fechamentos laterais.',
          'Esses fechamentos ajudam na proteção contra:',
        ],
        listItems: [
          'Chuva lateral;',
          'Ventos;',
          'Poeira;',
          'Sereno.',
        ],
      },
      {
        level: 3,
        heading: '8. Data do Evento e Disponibilidade',
        paragraphs: [
          'Dependendo do evento, também podem ser incluídos itens complementares como calhas, iluminação, decoração e integração com outras estruturas.',
          'Esses adicionais devem ser informados no momento da contratação para que o orçamento seja elaborado corretamente.',
          'A época do evento também pode influenciar o valor do aluguel de tendas.',
          'Períodos com alta procura costumam apresentar maior demanda por estruturas e equipes.',
          'Isso acontece principalmente durante:',
        ],
        listItems: [
          'Festas juninas;',
          'Casamentos;',
          'Formaturas;',
          'Eventos corporativos;',
          'Festividades de fim de ano.',
        ],
      },
      {
        level: 2,
        heading: 'O Que Considerar na Hora de Alugar Uma Tenda?',
        paragraphs: [
          'Reservar com antecedência aumenta as opções disponíveis e facilita o planejamento.',
          'O menor preço nem sempre representa a melhor escolha.',
          'Antes de contratar, vale avaliar fatores como:',
        ],
        listItems: [
          'Estado de conservação da estrutura;',
          'Limpeza das lonas;',
          'Experiência da equipe;',
          'Segurança da montagem;',
          'Pontualidade;',
          'Clareza das condições do contrato;',
          'Inclusão da montagem e desmontagem;',
          'Suporte durante o evento.',
        ],
      },
      {
        level: 2,
        heading: 'Como Escolher o Tamanho Certo?',
        paragraphs: [
          'Uma análise completa ajuda a evitar problemas e garante mais tranquilidade no dia da realização.',
          'A escolha do tamanho deve considerar mais do que apenas o número de convidados.',
          'Também é necessário avaliar:',
        ],
        listItems: [
          'Mesas e cadeiras;',
          'Buffet;',
          'Palco;',
          'Equipamentos;',
          'Pista de dança;',
          'Áreas de circulação.',
        ],
      },
      {
        level: 2,
        heading: 'Aluguel de Tenda Por Dia',
        paragraphs: [
          'Para receber uma recomendação mais precisa, informe a quantidade aproximada de convidados, o tipo de evento, a área disponível, as estruturas complementares e os equipamentos que ficarão sob a cobertura.',
          'Esses dados permitem dimensionar corretamente o espaço necessário.',
          'Uma dúvida comum é sobre o preço do aluguel de tenda por dia.',
          'Embora muitas pessoas procurem uma diária, o orçamento normalmente considera toda a operação necessária para o evento.',
          'Grande parte do investimento está relacionada ao transporte, montagem, desmontagem e mobilização da equipe.',
          'Por isso, a locação por dois dias nem sempre representa exatamente o dobro do valor de uma diária.',
          'Cada projeto deve ser analisado individualmente.',
        ],
      },
      {
        level: 2,
        heading: 'Como Economizar no Aluguel de Tendas Sem Comprometer a Qualidade?',
        paragraphs: [
          'A melhor forma de economizar é contratar uma estrutura adequada ao evento.',
          'Escolher uma tenda maior do que o necessário aumenta os custos.',
          'Escolher uma estrutura menor pode gerar desconforto e necessidade de ajustes de última hora.',
          'Também ajudam a reduzir gastos:',
        ],
        listItems: [
          'Solicitar orçamento com antecedência;',
          'Informar corretamente o endereço do evento;',
          'Enviar fotos do local;',
          'Definir previamente o número de convidados;',
          'Evitar alterações após a contratação;',
          'Planejar a distribuição dos espaços.',
        ],
      },
      {
        level: 2,
        heading: 'Encontre Uma Solução Adequada Para Sua Região',
        paragraphs: [
          'O planejamento costuma gerar mais economia do que simplesmente buscar o menor preço.',
          'Atendemos eventos em Belo Horizonte, região metropolitana e diversas cidades de Minas Gerais.',
          'O valor final depende das características da estrutura, da localização e das condições de montagem.',
          'Ao solicitar um orçamento, informe:',
        ],
        listItems: [
          'Cidade;',
          'Bairro;',
          'Data do evento;',
          'Quantidade de convidados;',
          'Fotos do espaço, quando possível.',
        ],
      },
      {
        level: 2,
        heading: 'Perguntas Frequentes Sobre Aluguel de Tendas',
        paragraphs: [
          'Essas informações ajudam nossa equipe a apresentar uma proposta mais adequada às necessidades do seu evento.',
        ],
      },
      {
        level: 3,
        heading: 'Qual é o valor do aluguel de uma tenda?',
        paragraphs: [
          'O preço pode variar conforme tamanho, modelo, localização do evento, período de locação e itens adicionais contratados.',
        ],
      },
      {
        level: 3,
        heading: 'Quanto custa alugar uma tenda para 100 pessoas?',
        paragraphs: [
          'O valor depende da configuração do evento, quantidade de mesas, circulação necessária e estruturas complementares.',
        ],
      },
      {
        level: 3,
        heading: 'O aluguel de tenda inclui montagem e desmontagem?',
        paragraphs: [
          'Na maioria dos casos, sim. O ideal é confirmar todos os serviços inclusos no orçamento.',
        ],
      },
      {
        level: 3,
        heading: 'Qual o melhor tamanho de tenda para eventos?',
        paragraphs: [
          'O tamanho ideal depende da quantidade de convidados, do tipo de evento e do espaço disponível.',
        ],
      },
      {
        level: 3,
        heading: 'Com quanto tempo de antecedência devo reservar?',
        paragraphs: [
          'Quanto antes a reserva for realizada, maiores são as chances de garantir disponibilidade de modelos e datas.',
        ],
      },
      {
        level: 2,
        heading: 'Orçamento Rápido e Sem Compromisso',
        paragraphs: [
          'Precisa saber o valor do aluguel de tendas para seu evento?',
          'Entre em contato e informe a cidade do evento, data, tipo de evento, quantidade de convidados, área aproximada, quantidade de dias, tipo de piso e estruturas desejadas.',
          'Nossa equipe analisará as informações e apresentará um orçamento personalizado para sua necessidade.',
        ],
      },
    ],
  },
  {
    slug: 'aluguel-de-tenda-para-casamento',
    title: 'Aluguel de Tendas Para Casamento',
    description: 'Aluguel de tenda para casamento com foco em conforto, estética, cobertura segura e acabamento profissional.',
    intro: 'O aluguel de tendas para casamento e uma das melhores solucoes para quem deseja realizar uma cerimonia ou festa ao ar livre com mais seguranca, conforto e elegancia.',
    heroEyebrow: 'Locação de estruturas em Minas Gerais',
    heroChecklist: defaultHeroChecklist,
    ctaBannerText: 'Receba uma orientação rápida para escolher a tenda certa para seu evento ou operação.',
    articleEyebrow: 'Guia prático',
    articleTitle: 'Aluguel de Tendas Para Casamento',
    articleImages: defaultArticleImages,
    featuredModels: defaultFeaturedModels,
    relatedLinks: siloNetworkLinks,
    articleLead: [
      'Afinal, casamento tem data marcada, convidados confirmados, decoracao planejada e muitos detalhes envolvidos.',
      'O que nao da para planejar com tanta precisao e o clima. E e justamente ai que a tenda entra como uma aliada importante.',
      'Ela protege convidados, buffet, decoracao, som, iluminacao, pista de danca e toda a estrutura do evento contra sol forte, chuva e mudancas inesperadas no tempo. Se voce ainda estiver comparando formatos de uso, vale ver tambem <a href="/eventos">aluguel de tendas para eventos</a> e <a href="/aluguel-de-tenda-em-bh">aluguel de tendas em BH</a>.',
    ],
    articleSections: [
      {
        level: 2,
        heading: 'Aluguel de Tendas Para Casamento é Excelente Saída Para Festas ao Ar Livre',
        paragraphs: [
          'Casamentos ao ar livre sao lindos, romanticos e cheios de personalidade.',
          'Mas tambem exigem planejamento.',
          'Se a cerimonia ou recepcao acontecer em sitios, chacaras, jardins, fazendas, clubes, quintais ou espacos abertos, a cobertura precisa ser pensada com antecedencia.',
          'A locacao de tendas para casamento permite criar um ambiente protegido sem abrir mao da beleza do local.',
          'A estrutura pode ser montada para cobrir a cerimonia, area de convidados, mesas, buffet, bar, pista de danca ou recepcao.',
          'Assim, o evento fica mais preparado para imprevistos climaticos e os noivos ganham mais tranquilidade no grande dia.',
        ],
      },
      {
        level: 2,
        heading: 'A Tenda Perfeita Para Sua Festa Inesquecível',
        paragraphs: [
          'Cada casamento tem um estilo.',
          'Alguns sao mais rusticos, outros classicos, modernos, intimistas ou sofisticados.',
          'Por isso, a escolha da tenda deve considerar o espaco, a quantidade de convidados, o tipo de decoracao e a proposta da festa.',
          'Uma tenda bem escolhida nao serve apenas para proteger.',
          'Ela tambem ajuda a organizar o layout do evento, criar ambientes confortaveis e valorizar a experiencia dos convidados.',
          'Com iluminacao, decoracao e fechamento adequados, a estrutura pode se transformar em um espaco elegante e acolhedor.',
        ],
      },
      {
        level: 2,
        heading: 'Vantagens do Aluguel de Tendas Para Casamento',
        paragraphs: [
          'O aluguel de tendas oferece varias vantagens para casamentos realizados em areas abertas.',
          'A principal delas e a protecao contra chuva e sol.',
          'Mas existem outros beneficios importantes.',
          'A tenda ajuda a delimitar espacos, organizar circulacao, proteger equipamentos e melhorar o conforto termico dos convidados.',
          'Tambem facilita a montagem de areas especificas, como recepcao, lounge, buffet, pista, cerimonia e espaco para fotos.',
          'Outro ponto importante e a flexibilidade.',
          'As tendas podem ser usadas em diferentes tamanhos e formatos, inclusive acopladas para criar areas maiores.',
        ],
      },
      {
        level: 2,
        heading: 'Tendas Para Cerimônia, Festa e Recepção',
        paragraphs: [
          'A mesma estrutura pode atender diferentes momentos do casamento.',
          'Na cerimonia, a tenda protege altar, corredor, cadeiras e convidados.',
          'Na recepcao, cria uma area coberta para entrada, lista de convidados, mesa de doces ou espaco de boas-vindas.',
          'Na festa, pode cobrir mesas, pista de danca, buffet, bar, som, iluminacao e areas de convivencia.',
          'Dependendo do projeto, tambem e possivel usar tendas menores como apoio para fornecedores, cozinha, gerador, equipe de organizacao ou chapelaria.',
          'Sim, ate os bastidores precisam de cobertura.',
          'Porque festa bonita tambem depende de operacao funcionando.',
        ],
      },
      {
        level: 2,
        heading: 'Tipos de Tendas Para Casamento',
        paragraphs: [
          'A escolha do modelo depende do local e do estilo do evento.',
          'As opcoes mais comuns incluem tendas piramidais, tendas sanfonadas, tendas acopladas, estruturas com lona branca e estruturas com lona cristal.',
          'A lona branca e muito usada por oferecer visual limpo, protecao e boa integracao com diferentes decoracoes.',
          'Ja a lona cristal pode ser interessante quando o objetivo e aproveitar melhor a iluminacao natural ou criar um visual mais sofisticado.',
          'Em muitos casos, a combinacao entre cobertura, iluminacao e decoracao faz toda a diferenca no resultado final.',
        ],
      },
      {
        level: 2,
        heading: 'Tamanhos de Tendas Para Casamento',
        paragraphs: [
          'O tamanho ideal da tenda depende da quantidade de convidados e dos espacos que serao cobertos.',
          'Tambem e preciso considerar mesas, cadeiras, buffet, circulacao, pista de danca, bar, palco, som, decoracao e area de servico.',
          'Uma avaliacao previa ajuda a evitar dois problemas comuns: contratar uma tenda pequena demais ou pagar por uma estrutura maior do que o necessario.',
        ],
        listItems: [
          '3x3;',
          '4x4;',
          '5x5;',
          '6x6;',
          '7x7;',
          '8x8;',
          '10x10;',
          'estruturas acopladas para areas maiores.',
        ],
      },
      {
        level: 2,
        heading: 'Aluguel de Tendas Para Casamento Preço',
        paragraphs: [
          'Quem pesquisa por aluguel de tendas para casamento preco normalmente quer saber quanto precisa investir para proteger o evento, e essa analise conversa diretamente com a pagina de <a href="/aluguel-de-tendas-valor">aluguel de tendas valor</a>.',
          'O valor pode variar bastante conforme o projeto.',
          'Isso acontece porque cada casamento tem um espaco, uma quantidade de convidados e uma necessidade diferente de montagem.',
          'Por isso, o ideal e solicitar um orcamento personalizado.',
          'Assim, e possivel indicar a estrutura correta e calcular o valor com mais precisao.',
        ],
        listItems: [
          'Tamanho da tenda;',
          'Modelo da estrutura;',
          'Tipo de lona;',
          'Local da montagem;',
          'Distancia para entrega;',
          'Tempo de locacao;',
          'Tipo de piso;',
          'Necessidade de fechamento lateral;',
          'Complexidade da montagem;',
          'Data do evento;',
          'Quantidade de estruturas.',
        ],
      },
      {
        level: 2,
        heading: 'Valor Aluguel Tenda Casamento',
        paragraphs: [
          'O valor do aluguel de tenda para casamento deve ser analisado junto com o que esta incluso no servico.',
          'Nem sempre o menor preco e a melhor escolha.',
          'E importante avaliar a qualidade da estrutura, conservacao das lonas, seguranca da montagem, prazo de instalacao, experiencia da equipe e suporte antes do evento.',
          'Uma tenda mal dimensionada ou mal instalada pode gerar dor de cabeca em um dia que deveria ser lembrado por bons motivos.',
          'Por isso, contratar uma equipe experiente faz diferenca.',
        ],
      },
      {
        level: 2,
        heading: 'Como Escolher a Tenda Ideal Para Casamento',
        paragraphs: [
          'Antes de fechar a locacao, considere alguns pontos importantes.',
          'Primeiro, avalie o local da festa.',
          'Depois, pense na quantidade de convidados, no horario do evento, no tipo de piso e na previsao de uso da estrutura.',
          'Tambem e importante considerar se o casamento sera durante o dia ou a noite.',
          'Eventos diurnos podem exigir mais atencao ao sol e a ventilacao.',
          'Eventos noturnos podem precisar de integracao com iluminacao, decoracao e fechamento lateral.',
          'Quanto mais informacoes forem passadas no orcamento, melhor sera a indicacao da estrutura.',
        ],
      },
      {
        level: 2,
        heading: 'Casamento ao Ar Livre Com Mais Segurança',
        paragraphs: [
          'Casamento ao ar livre combina com natureza, fotos bonitas e uma atmosfera especial.',
          'Mas tambem exige responsabilidade.',
          'A tenda ajuda a criar uma protecao extra para convidados e fornecedores, evitando que chuva, sol forte ou sereno comprometam a experiencia.',
          'Alem disso, a estrutura contribui para manter o ambiente mais organizado.',
          'Com tudo bem planejado, os noivos conseguem aproveitar a festa com menos preocupacao.',
          'E convenhamos: no dia do casamento, preocupacao ja tem bastante.',
        ],
      },
      {
        level: 2,
        heading: 'Eventos Marcantes Precisam de Boa Estrutura',
        paragraphs: [
          'Um casamento marcante nao depende apenas de decoracao, buffet e musica.',
          'A estrutura tambem faz parte da experiencia.',
          'Quando os convidados chegam e encontram um ambiente coberto, confortavel e bem montado, a sensacao de cuidado e imediata.',
          'A tenda certa ajuda a valorizar o evento, proteger os detalhes e garantir que tudo aconteca conforme o planejado.',
        ],
      },
      {
        level: 2,
        heading: 'Sua Festa Inesquecível Começa Com Planejamento',
        paragraphs: [
          'Toda festa inesquecivel comeca antes do primeiro convidado chegar.',
          'Ela comeca no planejamento.',
          'Escolher a cobertura correta e uma das decisoes que ajudam a evitar imprevistos e preservar o investimento feito no casamento.',
          'Afinal, decoracao, flores, mobiliario, som e buffet precisam de protecao.',
          'A tenda funciona como uma base para que o restante do evento aconteca com mais seguranca.',
        ],
      },
      {
        level: 2,
        heading: 'Garanta Sua Celebração, Faça Chuva ou Faça Sol',
        paragraphs: [
          'Nao deixe a estrutura do seu casamento para a ultima hora.',
          'Quanto antes voce solicitar o orcamento, mais facil sera avaliar o local, escolher o tamanho ideal e reservar a tenda para a data do evento.',
          'Garanta sua celebracao com uma cobertura adequada, segura e preparada para o seu espaco.',
        ],
      },
      {
        level: 2,
        heading: 'Solicite Um Orçamento Para Locação de Tendas',
        paragraphs: [
          'Precisa de aluguel de tendas para casamento?',
          'Fale com nossa equipe e solicite um orcamento sem compromisso.',
          'Vamos entender o local, a quantidade de convidados e o estilo da sua festa para indicar a melhor estrutura.',
        ],
      },
    ],
  },
  {
    slug: 'aluguel-de-toldos',
    title: 'Aluguel de Toldos',
    description: 'Aluguel de toldos e coberturas temporárias para eventos, recepções, áreas de apoio e demandas comerciais.',
    intro: 'Precisa de aluguel de toldos para proteger sua casa, empresa ou evento? Os toldos sao solucoes praticas para criar areas cobertas, proteger contra sol e chuva e deixar o ambiente mais confortavel.',
    heroEyebrow: 'Locação de estruturas em Minas Gerais',
    heroChecklist: defaultHeroChecklist,
    ctaBannerText: 'Receba uma orientação rápida para escolher a tenda certa para seu evento ou operação.',
    articleEyebrow: 'Guia prático',
    articleTitle: 'Aluguel de Toldos',
    articleImages: defaultArticleImages,
    featuredModels: defaultFeaturedModels,
    relatedLinks: siloNetworkLinks,
    articleLead: [
      'Eles podem ser usados em festas, recepcoes, entradas comerciais, areas externas, eventos corporativos e espacos temporarios de atendimento. Em muitos casos, funcionam como complemento de projetos de <a href="/eventos">aluguel de tendas para eventos</a>.',
      'Com a estrutura certa, seu evento fica mais organizado, seguro e preparado para mudancas no clima. Se a demanda principal for uma cobertura maior, vale comparar com <a href="/aluguel-de-tenda-em-bh">aluguel de tendas em BH</a>.',
    ],
    articleSections: [
      {
        level: 2,
        heading: 'Locação de Toldos Para Festa, Empresa ou Evento',
        paragraphs: [
          'A locacao de toldos e uma alternativa inteligente para quem precisa de cobertura temporaria sem comprar uma estrutura definitiva.',
          'Esse tipo de solucao e muito usado em eventos sociais, feiras, acoes promocionais, comercios, igrejas, escolas, empresas e areas residenciais.',
          'O toldo ajuda a proteger convidados, clientes, equipamentos, mesas, cadeiras e espacos de circulacao.',
          'Ou seja, ele resolve aquele problema classico: e se chover bem na hora do evento?',
        ],
      },
      {
        level: 2,
        heading: 'Aluguel de Toldos Para Festa',
        paragraphs: [
          'O aluguel de toldos para festa e indicado para aniversarios, casamentos, confraternizacoes, eventos familiares e comemoracoes em areas abertas.',
          'A estrutura pode ser usada para cobrir mesas, buffet, entrada de convidados, area de som, pista, recepcao ou espaco gourmet.',
          'Alem da protecao, o toldo tambem ajuda a organizar melhor o ambiente.',
          'Com uma cobertura bem instalada, o evento ganha mais conforto e passa uma imagem mais cuidada para os convidados.',
        ],
      },
      {
        level: 2,
        heading: 'Aluguel de Toldos Para Eventos',
        paragraphs: [
          'O aluguel de toldos para eventos atende desde pequenas reunioes ate estruturas maiores para empresas, feiras e acoes promocionais.',
          'Ele pode ser usado em eventos ao ar livre, eventos corporativos, pontos de atendimento, exposicoes, festas religiosas e eventos comerciais.',
          'A principal vantagem e a flexibilidade.',
          'Dependendo do espaco e da necessidade, e possivel montar estruturas para circulacao, recepcao, protecao de produtos ou apoio operacional.',
        ],
      },
      {
        level: 2,
        heading: 'Aluguel de Toldos em BH e Região',
        paragraphs: [
          'Se voce esta procurando aluguel de toldos em BH, nossa equipe atende Belo Horizonte e cidades proximas da regiao metropolitana.',
          'A locacao pode ser feita para casas, empresas, comercios, condominios, eventos e espacos abertos.',
          'Antes da montagem, avaliamos o tipo de local, o objetivo da cobertura, o espaco disponivel e o melhor modelo de toldo para a necessidade.',
          'Assim, o cliente recebe uma orientacao mais segura antes de contratar.',
        ],
      },
      {
        level: 2,
        heading: 'Toldos Para Sua Casa, Empresa ou Evento',
        paragraphs: [
          'Os toldos podem ser usados em diferentes ambientes.',
          'Em residencias, ajudam a proteger areas externas, entradas, varandas e espacos de convivencia.',
          'Em empresas, sao uteis para recepcao de clientes, cobertura de fachadas, areas de espera, eventos promocionais e pontos de atendimento.',
          'Em eventos, funcionam como cobertura temporaria para convidados, fornecedores, equipamentos e areas de apoio.',
        ],
      },
      {
        level: 2,
        heading: 'Toldos e Coberturas Para Diferentes Necessidades',
        paragraphs: [
          'Cada projeto exige uma solucao diferente.',
          'Por isso, e importante entender se o cliente precisa de uma cobertura simples, uma estrutura para recepcao, um toldo mais fechado ou uma cobertura para uso temporario em evento.',
          'Trabalhamos com solucoes estruturais para diferentes segmentos, sempre buscando seguranca, bom acabamento e praticidade na montagem.',
        ],
      },
      {
        level: 2,
        heading: 'Toldo Articulado',
        paragraphs: [
          'O toldo articulado e uma opcao muito usada em areas comerciais, varandas, fachadas, espacos gourmet e ambientes que precisam de sombra com praticidade.',
          'Ele permite criar uma area protegida contra o sol e pode valorizar a fachada do imovel.',
          'E uma boa solucao para comercios, bares, restaurantes, lojas, residencias e areas externas que precisam de cobertura funcional.',
        ],
      },
      {
        level: 2,
        heading: 'Toldo Cortina',
        paragraphs: [
          'O toldo cortina e indicado para protecao lateral.',
          'Ele ajuda a bloquear vento, chuva lateral, poeira e excesso de claridade.',
          'E bastante usado em varandas, garagens, areas gourmet, entradas comerciais e espacos que precisam de fechamento temporario.',
          'Essa opcao e interessante quando o objetivo nao e apenas cobrir por cima, mas tambem proteger as laterais do ambiente.',
        ],
      },
      {
        level: 2,
        heading: 'Toldos de Recepção',
        paragraphs: [
          'Os toldos de recepcao sao muito usados em eventos, empresas, escolas, igrejas, condominios e estabelecimentos comerciais.',
          'Eles ajudam a organizar a entrada dos convidados ou clientes, criando uma area coberta e mais confortavel.',
          'Tambem podem ser usados para filas, credenciamento, recepcao de fornecedores, area de espera e atendimento externo.',
          'Em eventos, esse tipo de estrutura melhora a experiencia logo na chegada.',
        ],
      },
      {
        level: 2,
        heading: 'Temos a Estrutura Que Seu Evento Precisa',
        paragraphs: [
          'Cada evento tem uma necessidade propria.',
          'Alguns precisam apenas de uma cobertura pequena para entrada.',
          'Outros exigem toldos maiores, tendas acopladas ou estruturas para areas de apoio.',
          'Por isso, nossa equipe avalia o local e orienta sobre a melhor solucao.',
          'O objetivo e entregar uma estrutura segura, funcional e adequada ao espaco disponivel.',
        ],
      },
      {
        level: 2,
        heading: 'Estruturas Com Qualidade, Garantia e Bom Atendimento',
        paragraphs: [
          'Na hora de contratar o aluguel de toldos, nao avalie apenas o preco.',
          'Tambem e importante considerar qualidade da estrutura, seguranca da montagem, prazo de instalacao e experiencia da equipe.',
          'Uma cobertura mal instalada pode gerar transtornos, atrasos e riscos desnecessarios.',
          'Por isso, trabalhamos com atencao ao acabamento, fixacao, alinhamento e orientacao correta para cada tipo de uso.',
        ],
      },
      {
        level: 2,
        heading: 'Venda ou Locação de Toldos',
        paragraphs: [
          'Alem da locacao, tambem e possivel avaliar solucoes de venda ou instalacao definitiva de toldos, conforme a necessidade do cliente.',
          'A locacao costuma ser ideal para eventos, acoes temporarias e demandas pontuais.',
          'Ja a compra pode fazer sentido para empresas, residencias ou comercios que precisam de cobertura permanente.',
          'Nossa equipe pode orientar qual opcao vale mais a pena em cada caso.',
        ],
      },
      {
        level: 2,
        heading: 'Quanto Custa Alugar Um Toldo?',
        paragraphs: [
          'O valor para alugar um toldo depende de alguns fatores.',
          'Por isso, o ideal e solicitar um orcamento personalizado.',
          'Assim, conseguimos indicar a estrutura correta e passar um valor mais justo para sua necessidade.',
        ],
        listItems: [
          'Modelo do toldo;',
          'Tamanho da estrutura;',
          'Local da montagem;',
          'Tempo de locacao;',
          'Tipo de piso;',
          'Necessidade de fixacao;',
          'Distancia para entrega;',
          'Data do evento;',
          'Complexidade da montagem.',
        ],
      },
      {
        level: 2,
        heading: 'Solicite Um Orçamento',
        paragraphs: [
          'Precisa de aluguel de toldos para festa, evento, empresa ou residencia?',
          'Fale com nossa equipe e solicite um orcamento sem compromisso.',
          'Vamos entender o local, o tipo de cobertura necessaria e indicar a melhor solucao para seu projeto.',
        ],
      },
    ],
  },
];
