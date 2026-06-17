type CidadeTenda = {
  cidade: string;
  slug: string;
  regiao: string;
  eventosLocais: string[];
  locaisReferencia: string[];
  diferencialLocal: string;
};

type SiloArticleSection = {
  level: 2 | 3;
  heading: string;
  paragraphs: string[];
};

type SiloPageData = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  heroEyebrow: string;
  heroChecklist: string[];
  ctaBannerText: string;
  articleEyebrow: string;
  articleTitle: string;
  articleTitleTag: 'h2' | 'p';
  articleLead: string[];
  articleSections: SiloArticleSection[];
  articleImages: { src: string; alt: string }[];
  featuredModels: {
    title: string;
    description: string;
    icon: 'tent' | 'zap' | 'landmark';
  }[];
  relatedLinks: {
    title: string;
    href: string;
  }[];
};

export const cidadesTendas: CidadeTenda[] = [
  {
    cidade: "Contagem",
    slug: "aluguel-de-tendas-em-contagem",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Jubileu de Nossa Senhora das Dores",
      "Festival Gastronômico das Abóboras",
      "Feira de Artesanato do Eldorado",
      "eventos empresariais e comerciais"
    ],
    locaisReferencia: [
      "Parque de Exposição de Contagem",
      "Eldorado",
      "Centro de Contagem",
      "Cidade Industrial"
    ],
    diferencialLocal:
      "Em Contagem, a locação de tendas atende desde eventos religiosos e gastronômicos até feiras, ações comerciais, confraternizações empresariais e festas em áreas abertas.",
  },
  {
    cidade: "Betim",
    slug: "aluguel-de-tendas-em-betim",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Betim Rural",
      "Festa do Reinado",
      "Salão do Encontro",
      "rodeios e shows nacionais"
    ],
    locaisReferencia: [
      "Parque de Exposições David Gonçalves Lara",
      "Centro de Betim",
      "regiões industriais e comerciais da cidade"
    ],
    diferencialLocal:
      "Em Betim, a procura por tendas é comum em rodeios, shows, eventos culturais, festas tradicionais, ações empresariais e estruturas temporárias para eventos de grande público.",
  },
  {
    cidade: "Ribeirão das Neves",
    slug: "aluguel-de-tendas-em-ribeirao-das-neves",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Nossa Senhora das Neves",
      "Festa do Peão de Ribeirão das Neves",
      "festas comunitárias e eventos populares"
    ],
    locaisReferencia: [
      "Centro de Ribeirão das Neves",
      "regiões de Justinópolis",
      "áreas de eventos e bairros próximos"
    ],
    diferencialLocal:
      "Em Ribeirão das Neves, as tendas são muito usadas em festas populares, eventos religiosos, rodeios, comemorações familiares e encontros comunitários.",
  },
  {
    cidade: "Sabará",
    slug: "aluguel-de-tendas-em-sabara",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festival do Umbu",
      "Festival da Jabuticaba",
      "celebrações da Semana Santa",
      "eventos históricos e culturais"
    ],
    locaisReferencia: [
      "Centro Histórico de Sabará",
      "Praça Melo Viana",
      "regiões de eventos culturais da cidade"
    ],
    diferencialLocal:
      "Em Sabará, a locação de tendas atende eventos culturais, festivais gastronômicos, celebrações religiosas, feiras e encontros realizados em espaços abertos.",
  },
  {
    cidade: "Santa Luzia",
    slug: "aluguel-de-tendas-em-santa-luzia",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Santa Luzia",
      "Festival de Inverno",
      "Festas de Reinado",
      "eventos religiosos e culturais"
    ],
    locaisReferencia: [
      "Centro Histórico de Santa Luzia",
      "Santuário de Santa Luzia",
      "bairros e espaços de eventos da cidade"
    ],
    diferencialLocal:
      "Em Santa Luzia, as tendas são bastante procuradas para eventos religiosos, festas tradicionais, festivais culturais, encontros comunitários e comemorações em áreas externas.",
  },
  {
    cidade: "Caeté",
    slug: "aluguel-de-tendas-em-caete",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Nossa Senhora da Piedade",
      "Festa do Caeteense",
      "eventos religiosos e tradicionais"
    ],
    locaisReferencia: [
      "Santuário Basílica Nossa Senhora da Piedade",
      "Centro de Caeté",
      "áreas de eventos e espaços abertos da cidade"
    ],
    diferencialLocal:
      "Em Caeté, a locação de tendas é indicada para festas religiosas, eventos tradicionais, comemorações familiares, encontros comunitários e estruturas de apoio em áreas abertas.",
  },
  {
    cidade: "Nova Lima",
    slug: "aluguel-de-tendas-em-nova-lima",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de São João",
      "Festival de Inverno de Nova Lima",
      "Cavalhada de São Jorge",
      "eventos corporativos e sociais"
    ],
    locaisReferencia: [
      "Centro de Nova Lima",
      "região dos condomínios",
      "espaços de eventos e áreas verdes da cidade"
    ],
    diferencialLocal:
      "Em Nova Lima, a procura por tendas atende festas tradicionais, festivais culturais, eventos sociais, casamentos, ações corporativas e comemorações em espaços ao ar livre.",
  },
  {
    cidade: "Raposos",
    slug: "aluguel-de-tendas-em-raposos",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Nossa Senhora da Conceição",
      "Festa do Cavalo",
      "eventos religiosos e comunitários"
    ],
    locaisReferencia: [
      "Igreja Matriz de Nossa Senhora da Conceição",
      "Centro de Raposos",
      "áreas de eventos locais"
    ],
    diferencialLocal:
      "Em Raposos, as tendas são usadas em festas religiosas, eventos tradicionais, cavalgadas, comemorações familiares e encontros comunitários em áreas abertas.",
  },
  {
    cidade: "Rio Acima",
    slug: "aluguel-de-tendas-em-rio-acima",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Sabão",
      "Festival da Cultura",
      "Festa do Rio-acimense",
      "eventos turísticos e comunitários"
    ],
    locaisReferencia: [
      "Centro de Rio Acima",
      "áreas próximas a cachoeiras e espaços naturais",
      "locais de eventos da cidade"
    ],
    diferencialLocal:
      "Em Rio Acima, a locação de tendas é muito útil para eventos culturais, festas comunitárias, encontros turísticos, confraternizações e comemorações em áreas externas.",
  },
  {
    cidade: "Jabuticatubas",
    slug: "aluguel-de-tendas-em-jabuticatubas",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa da Jabuticaba",
      "Festa do Peão de Jabuticatubas",
      "Festas de São Gonçalo",
      "eventos ligados à Serra do Cipó"
    ],
    locaisReferencia: [
      "Centro de Jabuticatubas",
      "entrada para a Serra do Cipó",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Jabuticatubas, as tendas são procuradas para festas tradicionais, rodeios, eventos rurais, encontros turísticos e comemorações próximas à região da Serra do Cipó.",
  },
  {
    cidade: "Baldim",
    slug: "aluguel-de-tendas-em-baldim",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Baldense",
      "Festa de São Bernardo",
      "Festas do Rosário",
      "eventos tradicionais e comunitários"
    ],
    locaisReferencia: [
      "Centro de Baldim",
      "áreas de eventos locais",
      "espaços comunitários da cidade"
    ],
    diferencialLocal:
      "Em Baldim, a locação de tendas atende festas tradicionais, eventos religiosos, comemorações comunitárias, encontros familiares e estruturas temporárias em áreas abertas.",
  },
  {
    cidade: "Nova União",
    slug: "aluguel-de-tendas-em-nova-uniao",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Divino Espírito Santo",
      "Festa do Peão de Nova União",
      "eventos religiosos e rurais"
    ],
    locaisReferencia: [
      "Centro de Nova União",
      "áreas rurais da cidade",
      "espaços de eventos locais"
    ],
    diferencialLocal:
      "Em Nova União, as tendas são usadas em festas religiosas, rodeios, eventos rurais, comemorações familiares e encontros realizados em espaços abertos.",
  },
  {
    cidade: "Taquaraçu de Minas",
    slug: "aluguel-de-tendas-em-taquaracu-de-minas",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Senhor do Bom Jesus",
      "Cavalgada de Taquaraçu",
      "eventos religiosos e rurais"
    ],
    locaisReferencia: [
      "Centro de Taquaraçu de Minas",
      "áreas rurais do município",
      "espaços de cavalgadas e eventos locais"
    ],
    diferencialLocal:
      "Em Taquaraçu de Minas, a locação de tendas é indicada para festas religiosas, cavalgadas, eventos rurais, comemorações familiares e estruturas de apoio em áreas externas.",
  },
  {
    cidade: "Juatuba",
    slug: "aluguel-de-tendas-em-juatuba",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festival de Inverno de Juatuba",
      "Festa do Peão de Juatuba",
      "eventos culturais e rodeios"
    ],
    locaisReferencia: [
      "Parque de Exposições de Juatuba",
      "Centro de Juatuba",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Juatuba, as tendas são muito procuradas para rodeios, festivais culturais, festas tradicionais, eventos comunitários e comemorações em espaços abertos.",
  },
  {
    cidade: "Mateus Leme",
    slug: "aluguel-de-tendas-em-mateus-leme",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Santo Antônio",
      "Festa do Cavalo",
      "eventos tradicionais e rurais"
    ],
    locaisReferencia: [
      "Parque de Exposições de Mateus Leme",
      "Centro de Mateus Leme",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Mateus Leme, a locação de tendas atende festas religiosas, eventos rurais, festas do cavalo, encontros comunitários e comemorações familiares.",
  },
  {
    cidade: "Florestal",
    slug: "aluguel-de-tendas-em-florestal",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Estudante",
      "Festa do Peão de Florestal",
      "eventos universitários e comunitários"
    ],
    locaisReferencia: [
      "Campus da UFV em Florestal",
      "Centro de Florestal",
      "áreas de eventos e espaços rurais"
    ],
    diferencialLocal:
      "Em Florestal, a locação de tendas é útil para eventos universitários, rodeios, festas estudantis, comemorações familiares e encontros comunitários em áreas abertas.",
  },
  {
    cidade: "Esmeraldas",
    slug: "aluguel-de-tendas-em-esmeraldas",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Santa Quitéria",
      "Festa do Esmeraldense",
      "eventos religiosos e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Esmeraldas",
      "Centro de Esmeraldas",
      "áreas de eventos e bairros próximos"
    ],
    diferencialLocal:
      "Em Esmeraldas, as tendas são bastante usadas em festas religiosas, eventos populares, comemorações comunitárias, encontros familiares e estruturas temporárias para espaços externos.",
  },
  {
    cidade: "Brumadinho",
    slug: "aluguel-de-tendas-em-brumadinho",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de São Sebastião",
      "exposições temporárias no Instituto Inhotim",
      "eventos noturnos no Instituto Inhotim",
      "eventos culturais e turísticos"
    ],
    locaisReferencia: [
      "Instituto Inhotim",
      "Centro de Brumadinho",
      "espaços de eventos e áreas turísticas"
    ],
    diferencialLocal:
      "Em Brumadinho, a locação de tendas atende eventos culturais, turísticos, religiosos, corporativos, comemorações familiares e estruturas de apoio para eventos em áreas abertas.",
  },
  {
    cidade: "Ibirité",
    slug: "aluguel-de-tendas-em-ibirite",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Nossa Senhora das Graças",
      "Ibiritermo",
      "Festival de Inverno",
      "eventos religiosos e culturais"
    ],
    locaisReferencia: [
      "Estádio Municipal de Ibirité",
      "Praça do Fórum",
      "Centro de Ibirité"
    ],
    diferencialLocal:
      "Em Ibirité, as tendas são usadas em festas religiosas, festivais de inverno, eventos culturais, comemorações comunitárias e ações realizadas em praças e espaços abertos.",
  },
  {
    cidade: "Sarzedo",
    slug: "aluguel-de-tendas-em-sarzedo",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Peão de Sarzedo",
      "Festa de São Geraldo",
      "eventos populares e religiosos"
    ],
    locaisReferencia: [
      "Centro de Sarzedo",
      "áreas de eventos da cidade",
      "bairros próximos à região central"
    ],
    diferencialLocal:
      "Em Sarzedo, a locação de tendas atende rodeios, festas religiosas, eventos populares, comemorações familiares e encontros comunitários em áreas abertas.",
  },
  {
    cidade: "Mário Campos",
    slug: "aluguel-de-tendas-em-mario-campos",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Produtor Rural",
      "Festa de São Sebastião",
      "eventos ligados à produção de hortaliças"
    ],
    locaisReferencia: [
      "Centro de Mário Campos",
      "áreas rurais do município",
      "espaços de eventos locais"
    ],
    diferencialLocal:
      "Em Mário Campos, as tendas são procuradas para festas rurais, eventos religiosos, encontros de produtores, comemorações familiares e estruturas temporárias em áreas abertas.",
  },
  {
    cidade: "São Joaquim de Bicas",
    slug: "aluguel-de-tendas-em-sao-joaquim-de-bicas",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festival Gastronômico Bicas com Gosto",
      "Festa do Peão de São Joaquim de Bicas",
      "eventos gastronômicos e rodeios"
    ],
    locaisReferencia: [
      "Centro de São Joaquim de Bicas",
      "áreas de eventos da cidade",
      "bairros próximos à região central"
    ],
    diferencialLocal:
      "Em São Joaquim de Bicas, a locação de tendas é indicada para festivais gastronômicos, rodeios, festas populares, comemorações familiares e eventos realizados em áreas abertas.",
  },
  {
    cidade: "Igarapé",
    slug: "aluguel-de-tendas-em-igarape",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Igarapé Bem Temperado",
      "Festa do Peão de Igarapé",
      "eventos gastronômicos e tradicionais"
    ],
    locaisReferencia: [
      "Parque de Exposições de Igarapé",
      "Centro de Igarapé",
      "áreas de eventos e espaços abertos"
    ],
    diferencialLocal:
      "Em Igarapé, as tendas são muito procuradas para festivais gastronômicos, rodeios, festas tradicionais, eventos familiares e estruturas de apoio em áreas externas.",
  },
  {
    cidade: "Itaguara",
    slug: "aluguel-de-tendas-em-itaguara",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Confrade",
      "Festa do Peão de Itaguara",
      "eventos tradicionais e rodeios"
    ],
    locaisReferencia: [
      "Parque de Exposições de Itaguara",
      "Centro de Itaguara",
      "áreas de eventos locais"
    ],
    diferencialLocal:
      "Em Itaguara, a locação de tendas atende festas tradicionais, rodeios, comemorações familiares, eventos comunitários e estruturas temporárias em espaços abertos.",
  },
  {
    cidade: "Itatiaiuçu",
    slug: "aluguel-de-tendas-em-itatiaiucu",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Peão de Itatiaiuçu",
      "Festa de São Sebastião",
      "eventos religiosos e rodeios"
    ],
    locaisReferencia: [
      "Parque de Exposições de Itatiaiuçu",
      "Centro de Itatiaiuçu",
      "áreas de eventos e espaços abertos"
    ],
    diferencialLocal:
      "Em Itatiaiuçu, as tendas são usadas em rodeios, festas religiosas, eventos tradicionais, comemorações familiares e encontros comunitários ao ar livre.",
  },
  {
    cidade: "Rio Manso",
    slug: "aluguel-de-tendas-em-rio-manso",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Peão de Rio Manso",
      "Festa de Santa Luzia",
      "eventos religiosos e rurais"
    ],
    locaisReferencia: [
      "Centro de Rio Manso",
      "áreas rurais da cidade",
      "espaços de eventos locais"
    ],
    diferencialLocal:
      "Em Rio Manso, a locação de tendas é indicada para rodeios, festas religiosas, eventos rurais, comemorações familiares e encontros comunitários em espaços abertos.",
  },
  {
    cidade: "Lagoa Santa",
    slug: "aluguel-de-tendas-em-lagoa-santa",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa de Nossa Senhora da Saúde",
      "Festival de Inverno",
      "eventos na Orla da Lagoa Central"
    ],
    locaisReferencia: [
      "Orla da Lagoa Central",
      "Centro de Lagoa Santa",
      "bairros próximos à lagoa"
    ],
    diferencialLocal:
      "Em Lagoa Santa, as tendas são muito procuradas para eventos ao ar livre, especialmente em áreas próximas à Lagoa Central, festas tradicionais e comemorações familiares.",
  },
  {
    cidade: "Vespasiano",
    slug: "aluguel-de-tendas-em-vespasiano",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Carnaval de Vespasiano",
      "Festa de São Pedro",
      "eventos culturais e comunitários"
    ],
    locaisReferencia: [
      "Centro de Vespasiano",
      "Palácio das Artes de Vespasiano",
      "bairros próximos à MG-010"
    ],
    diferencialLocal:
      "Em Vespasiano, a locação de tendas atende desde eventos culturais até festas comunitárias, ações promocionais, comemorações familiares e eventos particulares.",
  },
  {
    cidade: "Pedro Leopoldo",
    slug: "aluguel-de-tendas-em-pedro-leopoldo",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Pedro Leopoldo Rodeio Show",
      "Festival de Verão",
      "shows e eventos de grande público"
    ],
    locaisReferencia: [
      "Parque de Exposições Assis Chateaubriand",
      "Centro de Pedro Leopoldo",
      "bairros próximos à região central"
    ],
    diferencialLocal:
      "Em Pedro Leopoldo, a procura por tendas costuma crescer em eventos de grande público, rodeios, shows, festas particulares e comemorações em espaços abertos.",
  },
  {
    cidade: "Matozinhos",
    slug: "aluguel-de-tendas-em-matozinhos",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Jubileu do Senhor do Bom Jesus",
      "Festa do Matozinhense",
      "eventos religiosos e festas populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Matozinhos",
      "Centro de Matozinhos",
      "bairros próximos à região central"
    ],
    diferencialLocal:
      "Em Matozinhos, a locação de tendas é muito procurada para eventos religiosos, festas tradicionais, encontros comunitários e comemorações em espaços abertos.",
  },
  {
    cidade: "Confins",
    slug: "aluguel-de-tendas-em-confins",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Peão de Confins",
      "Festa de São José",
      "eventos locais e comemorações familiares"
    ],
    locaisReferencia: [
      "Centro de Confins",
      "regiões próximas ao Aeroporto Internacional de Confins",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Confins, a procura por tendas atende festas tradicionais, eventos locais, comemorações familiares, encontros empresariais e estruturas temporárias para espaços abertos.",
  },
  {
    cidade: "São José da Lapa",
    slug: "aluguel-de-tendas-em-sao-jose-da-lapa",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festa do Lapeano",
      "Festa de São José",
      "eventos comunitários e comemorações familiares"
    ],
    locaisReferencia: [
      "Centro de São José da Lapa",
      "bairros próximos à região central",
      "áreas de eventos e espaços comunitários"
    ],
    diferencialLocal:
      "Em São José da Lapa, as tendas são bastante usadas em festas tradicionais, eventos comunitários, comemorações familiares, ações comerciais e encontros ao ar livre.",
  },
  {
    cidade: "Capim Branco",
    slug: "aluguel-de-tendas-em-capim-branco",
    regiao: "Região Metropolitana de Belo Horizonte",
    eventosLocais: [
      "Festival Gastronômico da Coxinha",
      "Festa do Capim-branquense",
      "eventos gastronômicos e festas comunitárias"
    ],
    locaisReferencia: [
      "Centro de Capim Branco",
      "áreas centrais da cidade",
      "espaços de eventos locais"
    ],
    diferencialLocal:
      "Em Capim Branco, a locação de tendas é uma ótima opção para festas gastronômicas, eventos comunitários, comemorações familiares e encontros realizados em áreas abertas.",
  },
  {
    cidade: "Ouro Preto",
    slug: "aluguel-de-tendas-em-ouro-preto",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festival de Inverno de Ouro Preto",
      "Semana Santa com tapetes de serragem",
      "CineOP",
      "Carnaval de Ouro Preto"
    ],
    locaisReferencia: [
      "Praça Tiradentes",
      "Centro de Convenções da UFOP",
      "praças históricas de Ouro Preto",
      "regiões das repúblicas estudantis"
    ],
    diferencialLocal:
      "Em Ouro Preto, a locação de tendas é muito procurada para eventos culturais, festivais, celebrações religiosas, carnaval, ações estudantis e estruturas de apoio em praças e espaços históricos.",
  },
  {
    cidade: "Mariana",
    slug: "aluguel-de-tendas-em-mariana",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festas do Aniversário da Cidade",
      "procissão das Almas",
      "tapetes da Semana Santa",
      "Encontro Internacional de Palhaços",
      "Festival da Vida"
    ],
    locaisReferencia: [
      "Praça da Sé",
      "Arena Mariana",
      "Centro Histórico de Mariana",
      "espaços culturais da cidade"
    ],
    diferencialLocal:
      "Em Mariana, as tendas são usadas em eventos religiosos, festivais culturais, apresentações artísticas, comemorações públicas e estruturas temporárias em áreas históricas e espaços abertos.",
  },
  {
    cidade: "Itabirito",
    slug: "aluguel-de-tendas-em-itabirito",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Julifest",
      "festas juninas e julinas",
      "shows nacionais",
      "megaeventos populares"
    ],
    locaisReferencia: [
      "Área de Julifest",
      "Centro de Itabirito",
      "espaços de eventos da cidade"
    ],
    diferencialLocal:
      "Em Itabirito, a procura por tendas cresce em festas juninas, shows de grande público, eventos populares, confraternizações e estruturas de apoio para áreas externas.",
  },
  {
    cidade: "Conselheiro Lafaiete",
    slug: "aluguel-de-tendas-em-conselheiro-lafaiete",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festival de Teatro de Conselheiro Lafaiete",
      "Festival de Gastronomia de Lafaiete",
      "Exposição Agropecuária de Conselheiro Lafaiete",
      "eventos culturais e rurais"
    ],
    locaisReferencia: [
      "Parque de Exposições Tancredo Neves",
      "Centro de Conselheiro Lafaiete",
      "espaços culturais e áreas de eventos"
    ],
    diferencialLocal:
      "Em Conselheiro Lafaiete, a locação de tendas atende festivais culturais, eventos gastronômicos, exposições agropecuárias, feiras, festas familiares e encontros empresariais.",
  },
  {
    cidade: "Congonhas",
    slug: "aluguel-de-tendas-em-congonhas",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Jubileu do Senhor Bom Jesus de Matosinhos",
      "Festival de Inverno de Congonhas",
      "eventos religiosos",
      "eventos culturais"
    ],
    locaisReferencia: [
      "Santuário do Bom Jesus de Matosinhos",
      "Centro Cultural de Congonhas",
      "Centro de Congonhas",
      "áreas de recepção de romeiros"
    ],
    diferencialLocal:
      "Em Congonhas, as tendas são bastante procuradas para eventos religiosos, festivais culturais, recepção de romeiros, ações públicas e estruturas temporárias em espaços abertos.",
  },
  {
    cidade: "Ouro Branco",
    slug: "aluguel-de-tendas-em-ouro-branco",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festival da Batata",
      "Festival de Inverno de Ouro Branco",
      "shows nacionais",
      "eventos culturais e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Ouro Branco",
      "Praça de Eventos",
      "Centro de Ouro Branco",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Ouro Branco, a locação de tendas atende festas tradicionais, shows nacionais, festivais culturais, eventos gastronômicos e comemorações em espaços abertos.",
  },
  {
    cidade: "Jeceaba",
    slug: "aluguel-de-tendas-em-jeceaba",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Jeceaba",
      "Festa do Jeceabense",
      "eventos rurais",
      "festas populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Jeceaba",
      "Centro de Jeceaba",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Jeceaba, as tendas são usadas em rodeios, festas populares, eventos rurais, comemorações familiares e estruturas temporárias para áreas externas.",
  },
  {
    cidade: "São Brás do Suaçuí",
    slug: "aluguel-de-tendas-em-sao-bras-do-suacui",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Exposição Agropecuária de São Brás",
      "Festa de São Brás",
      "eventos religiosos",
      "eventos agropecuários"
    ],
    locaisReferencia: [
      "Parque de Exposições de São Brás do Suaçuí",
      "Centro de São Brás do Suaçuí",
      "espaços de eventos da cidade"
    ],
    diferencialLocal:
      "Em São Brás do Suaçuí, a locação de tendas é indicada para exposições agropecuárias, festas religiosas, encontros comunitários, comemorações familiares e eventos ao ar livre.",
  },
  {
    cidade: "Entre Rios de Minas",
    slug: "aluguel-de-tendas-em-entre-rios-de-minas",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa da Colheita",
      "Festival Gastronômico Sabores de Entre Rios",
      "eventos rurais",
      "festas tradicionais"
    ],
    locaisReferencia: [
      "Parque de Exposições de Entre Rios de Minas",
      "Centro de Entre Rios de Minas",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Entre Rios de Minas, as tendas são procuradas para festas rurais, festivais gastronômicos, eventos tradicionais, comemorações familiares e estruturas de apoio em áreas abertas.",
  },
  {
    cidade: "Catas Altas",
    slug: "aluguel-de-tendas-em-catas-altas",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Vinho de Catas Altas",
      "eventos gastronômicos",
      "eventos culturais",
      "encontros turísticos"
    ],
    locaisReferencia: [
      "Praça da Matriz",
      "Serra do Caraça",
      "Centro de Catas Altas",
      "espaços turísticos e culturais"
    ],
    diferencialLocal:
      "Em Catas Altas, a locação de tendas combina muito bem com eventos gastronômicos, culturais e turísticos, especialmente em áreas abertas próximas à Praça da Matriz e à Serra do Caraça.",
  },
  {
    cidade: "Santa Bárbara",
    slug: "aluguel-de-tendas-em-santa-barbara",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Torneio Leiteiro",
      "Feira Agropecuária de Santa Bárbara",
      "eventos rurais",
      "eventos culturais"
    ],
    locaisReferencia: [
      "Parque de Exposições de Santa Bárbara",
      "Memorial Affonso Penna",
      "Centro de Santa Bárbara",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Santa Bárbara, as tendas são bastante usadas em feiras agropecuárias, torneios leiteiros, eventos culturais, festas familiares e encontros comunitários em áreas abertas.",
  },
  {
    cidade: "Sete Lagoas",
    slug: "aluguel-de-tendas-em-sete-lagoas",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Exposete",
      "Festival de Inverno de Sete Lagoas",
      "Festa do Congado",
      "shows nacionais e eventos agropecuários"
    ],
    locaisReferencia: [
      "Parque de Exposições Jovelino Lanza",
      "Orla da Lagoa Paulino",
      "Centro de Sete Lagoas",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Sete Lagoas, a locação de tendas atende grandes exposições agropecuárias, shows, festivais culturais, festas religiosas, eventos empresariais e comemorações em espaços abertos.",
  },
  {
    cidade: "Curvelo",
    slug: "aluguel-de-tendas-em-curvelo",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Forró de Curvelo",
      "Expo Curvelo",
      "provas no Circuito dos Cristais",
      "eventos automobilísticos e agropecuários"
    ],
    locaisReferencia: [
      "Parque de Exposições Antônio Ernesto de Salvo",
      "Circuito dos Cristais",
      "Centro de Curvelo",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Curvelo, as tendas são muito procuradas para festas de grande público, exposições agropecuárias, eventos automobilísticos, shows, feiras e estruturas de apoio em áreas externas.",
  },
  {
    cidade: "Paraopeba",
    slug: "aluguel-de-tendas-em-paraopeba",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Expo Paraopeba",
      "Festa do Feijão",
      "Festival Gastronômico do Lambari",
      "rodeios e eventos gastronômicos"
    ],
    locaisReferencia: [
      "Parque de Exposições de Paraopeba",
      "Centro de Paraopeba",
      "áreas de eventos e espaços abertos"
    ],
    diferencialLocal:
      "Em Paraopeba, a locação de tendas é indicada para rodeios, festivais gastronômicos, festas tradicionais, encontros comunitários e eventos realizados em áreas abertas.",
  },
  {
    cidade: "Inhaúma",
    slug: "aluguel-de-tendas-em-inhauma",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Inhaúma",
      "Festa do Inhaumense",
      "eventos rurais",
      "festas populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Inhaúma",
      "Centro de Inhaúma",
      "áreas de eventos locais"
    ],
    diferencialLocal:
      "Em Inhaúma, as tendas são usadas em festas de peão, eventos rurais, comemorações populares, encontros familiares e estruturas temporárias em espaços abertos.",
  },
  {
    cidade: "Prudente de Morais",
    slug: "aluguel-de-tendas-em-prudente-de-morais",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Prudente de Morais",
      "Festas de São Sebastião",
      "eventos populares",
      "eventos religiosos"
    ],
    locaisReferencia: [
      "Campo do Prudentino",
      "Área de Eventos Central",
      "Centro de Prudente de Morais",
      "espaços comunitários da cidade"
    ],
    diferencialLocal:
      "Em Prudente de Morais, a locação de tendas atende rodeios, festas religiosas, eventos comunitários, comemorações familiares e estruturas de apoio em áreas abertas.",
  },
  {
    cidade: "Caetanópolis",
    slug: "aluguel-de-tendas-em-caetanopolis",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Caetanópolis",
      "Festival Cultural Clara Nunes",
      "eventos de samba e MPB",
      "festas culturais"
    ],
    locaisReferencia: [
      "Praça da Matriz",
      "Centro de Caetanópolis",
      "áreas de eventos abertos da cidade"
    ],
    diferencialLocal:
      "Em Caetanópolis, as tendas são procuradas para rodeios, festivais culturais, apresentações musicais, festas populares e estruturas de apoio em praças e áreas abertas.",
  },
  {
    cidade: "Cordisburgo",
    slug: "aluguel-de-tendas-em-cordisburgo",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Semana Roseana",
      "Festa de São José",
      "eventos científicos",
      "eventos ecoturísticos"
    ],
    locaisReferencia: [
      "Gruta do Maquiné",
      "Centro de Cordisburgo",
      "espaços culturais ligados a Guimarães Rosa",
      "áreas turísticas da cidade"
    ],
    diferencialLocal:
      "Em Cordisburgo, a locação de tendas atende festivais culturais, eventos literários, festas religiosas, encontros turísticos, atividades científicas e estruturas de apoio ao ar livre.",
  },
  {
    cidade: "Jequitibá",
    slug: "aluguel-de-tendas-em-jequitiba",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festival de Folclore de Jequitibá",
      "Festa do Peão",
      "grupos de congado",
      "folia de reis e pastorinhas"
    ],
    locaisReferencia: [
      "Ilha do Rio das Velhas",
      "Área de Eventos de Jequitibá",
      "Centro de Jequitibá",
      "espaços culturais da cidade"
    ],
    diferencialLocal:
      "Em Jequitibá, as tendas são muito usadas em festivais folclóricos, festas de peão, manifestações culturais, eventos religiosos, encontros comunitários e áreas de eventos abertas.",
  },
  {
    cidade: "Funilândia",
    slug: "aluguel-de-tendas-em-funilandia",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Funilândia",
      "Festa do Divino Espírito Santo",
      "eventos religiosos",
      "festas populares"
    ],
    locaisReferencia: [
      "Centro de Funilândia",
      "áreas de eventos locais",
      "espaços comunitários da cidade"
    ],
    diferencialLocal:
      "Em Funilândia, a locação de tendas atende festas de peão, eventos religiosos, comemorações comunitárias, encontros familiares e estruturas temporárias em espaços abertos.",
  },
  {
    cidade: "Felixlândia",
    slug: "aluguel-de-tendas-em-felixlandia",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa de Nossa Senhora da Piedade",
      "Torneio de Pesca Esportiva no Lago de Três Marias",
      "eventos religiosos",
      "eventos esportivos e turísticos"
    ],
    locaisReferencia: [
      "Praça do Santuário",
      "Lago de Três Marias",
      "Centro de Felixlândia",
      "áreas turísticas e espaços de eventos"
    ],
    diferencialLocal:
      "Em Felixlândia, as tendas são indicadas para festas religiosas, torneios de pesca, eventos turísticos, comemorações familiares e estruturas de apoio em áreas abertas.",
  },
  {
    cidade: "Pará de Minas",
    slug: "aluguel-de-tendas-em-para-de-minas",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festa do Frango e do Suíno",
      "Festival de Teatro de Pará de Minas",
      "shows nacionais",
      "eventos agropecuários"
    ],
    locaisReferencia: [
      "Parque de Exposições Francisco Olivé Diniz",
      "Chicão",
      "Centro de Pará de Minas",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Pará de Minas, a locação de tendas atende grandes feiras agropecuárias, shows nacionais, festivais culturais, eventos empresariais, festas familiares e estruturas temporárias.",
  },
  {
    cidade: "Itaúna",
    slug: "aluguel-de-tendas-em-itauna",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festival de Inverno de Itaúna",
      "Festa do Peão de Itaúna",
      "Festa do Reinado",
      "eventos de Congado"
    ],
    locaisReferencia: [
      "Parque de Exposições de Itaúna",
      "Boulevard Lago Sul",
      "Centro de Itaúna",
      "áreas de eventos e espaços culturais"
    ],
    diferencialLocal:
      "Em Itaúna, as tendas são usadas em festivais culturais, festas de peão, celebrações de Congado, eventos sociais, comemorações familiares e encontros em espaços abertos.",
  },
  {
    cidade: "Nova Serrana",
    slug: "aluguel-de-tendas-em-nova-serrana",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Nova Serrana",
      "Feira do Calçado",
      "eventos industriais",
      "rodeios e shows nacionais"
    ],
    locaisReferencia: [
      "Centro de Convenções de Nova Serrana",
      "Parque de Exposições de Nova Serrana",
      "polo calçadista",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Nova Serrana, a locação de tendas atende rodeios, feiras industriais, eventos do setor calçadista, shows, ações comerciais e estruturas de apoio para eventos de grande circulação.",
  },
  {
    cidade: "Divinópolis",
    slug: "aluguel-de-tendas-em-divinopolis",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Divinaexpo",
      "Festival Gastronômico Prato da Casa",
      "rodeios de grande porte",
      "shows nacionais"
    ],
    locaisReferencia: [
      "Parque de Exposições de Divinópolis",
      "Centro de Divinópolis",
      "áreas de eventos e espaços comerciais"
    ],
    diferencialLocal:
      "Em Divinópolis, as tendas são muito procuradas para grandes rodeios, shows nacionais, festivais gastronômicos, eventos empresariais, feiras e estruturas de apoio em áreas abertas.",
  },
  {
    cidade: "Cláudio",
    slug: "aluguel-de-tendas-em-claudio",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Cláudio",
      "Exposição Agropecuária de Cláudio",
      "Festival de Petiscos",
      "eventos rurais e gastronômicos"
    ],
    locaisReferencia: [
      "Parque de Exposições Quinto Guimarães Tolentino",
      "Centro de Cláudio",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Cláudio, a locação de tendas é indicada para exposições agropecuárias, festas de peão, festivais gastronômicos, eventos rurais, comemorações familiares e encontros ao ar livre.",
  },
  {
    cidade: "Carmo do Cajuru",
    slug: "aluguel-de-tendas-em-carmo-do-cajuru",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Cajuru Fest",
      "Festa de Nossa Senhora do Líbano",
      "festa do peão",
      "eventos religiosos e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Carmo do Cajuru",
      "Centro de Carmo do Cajuru",
      "áreas de eventos locais"
    ],
    diferencialLocal:
      "Em Carmo do Cajuru, as tendas são usadas em festas de peão, celebrações religiosas, eventos populares, comemorações familiares e estruturas temporárias para áreas externas.",
  },
  {
    cidade: "São Gonçalo do Pará",
    slug: "aluguel-de-tendas-em-sao-goncalo-do-para",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de São Gonçalo",
      "Festa do Rosário",
      "eventos religiosos",
      "festas populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de São Gonçalo do Pará",
      "Centro de São Gonçalo do Pará",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em São Gonçalo do Pará, a locação de tendas atende festas de peão, celebrações religiosas, eventos comunitários, encontros familiares e estruturas de apoio ao ar livre.",
  },
  {
    cidade: "Igaratinga",
    slug: "aluguel-de-tendas-em-igaratinga",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Igaratinga",
      "Torneio Leiteiro",
      "eventos rurais",
      "festas populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Igaratinga",
      "Centro de Igaratinga",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Igaratinga, as tendas são procuradas para rodeios, torneios leiteiros, eventos rurais, festas familiares e encontros comunitários realizados em áreas abertas.",
  },
  {
    cidade: "Conceição do Pará",
    slug: "aluguel-de-tendas-em-conceicao-do-para",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Cavalgada de Conceição do Pará",
      "Festa de Nossa Senhora da Conceição",
      "eventos religiosos",
      "eventos rurais"
    ],
    locaisReferencia: [
      "Área de Eventos Central",
      "Centro de Conceição do Pará",
      "áreas rurais e espaços comunitários"
    ],
    diferencialLocal:
      "Em Conceição do Pará, a locação de tendas é útil para cavalgadas, festas religiosas, eventos rurais, comemorações familiares e estruturas temporárias em espaços abertos.",
  },
  {
    cidade: "Pitangui",
    slug: "aluguel-de-tendas-em-pitangui",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Pitangui",
      "Festival de Inverno de Pitangui",
      "eventos históricos",
      "festas tradicionais"
    ],
    locaisReferencia: [
      "Parque de Exposições de Pitangui",
      "Centro Histórico de Pitangui",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Pitangui, as tendas são bastante usadas em festas de peão, festivais culturais, eventos históricos, comemorações familiares e encontros comunitários em áreas abertas.",
  },
  {
    cidade: "Onça de Pitangui",
    slug: "aluguel-de-tendas-em-onca-de-pitangui",
    regiao: "Região Centro-Oeste de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Onça de Pitangui",
      "Festa de Sant'Ana",
      "eventos religiosos",
      "festas populares"
    ],
    locaisReferencia: [
      "Centro de Onça de Pitangui",
      "áreas de eventos locais",
      "espaços comunitários da cidade"
    ],
    diferencialLocal:
      "Em Onça de Pitangui, a locação de tendas atende festas de peão, celebrações religiosas, comemorações familiares, encontros comunitários e eventos em áreas abertas.",
  },
  {
    cidade: "Moeda",
    slug: "aluguel-de-tendas-em-moeda",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Moeda",
      "Festival de Inverno de Moeda",
      "eventos culturais e gastronômicos",
      "festas aos pés da Serra da Moeda"
    ],
    locaisReferencia: [
      "Parque de Exposições de Moeda",
      "Serra da Moeda",
      "Centro de Moeda",
      "áreas de eventos e espaços abertos"
    ],
    diferencialLocal:
      "Em Moeda, a locação de tendas é indicada para festas de peão, eventos culturais, festivais gastronômicos, comemorações familiares e encontros realizados em áreas abertas próximas à Serra da Moeda.",
  },
  {
    cidade: "Crucilândia",
    slug: "aluguel-de-tendas-em-crucilandia",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Crucilândia",
      "Torneio Leiteiro",
      "rodeios tradicionais",
      "shows sertanejos"
    ],
    locaisReferencia: [
      "Parque de Exposições de Crucilândia",
      "Centro de Crucilândia",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Crucilândia, as tendas são muito usadas em rodeios, torneios leiteiros, shows sertanejos, festas rurais, comemorações familiares e estruturas temporárias em áreas abertas.",
  },
  {
    cidade: "Piedade dos Gerais",
    slug: "aluguel-de-tendas-em-piedade-dos-gerais",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Peão de Piedade dos Gerais",
      "Jubileu de Nossa Senhora da Piedade",
      "eventos religiosos",
      "festas rurais e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Piedade dos Gerais",
      "Centro de Piedade dos Gerais",
      "áreas de eventos e espaços comunitários"
    ],
    diferencialLocal:
      "Em Piedade dos Gerais, a locação de tendas atende festas de peão, celebrações religiosas, eventos comunitários, comemorações familiares e estruturas de apoio para espaços abertos.",
  },
  {
    cidade: "Itabira",
    slug: "aluguel-de-tendas-em-itabira",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festival de Inverno de Itabira",
      "Flitabira",
      "Ita Fest",
      "eventos literários, culturais e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Itabira",
      "Praça do Areão",
      "Fundação Cultural Carlos Drummond de Andrade",
      "Centro de Itabira"
    ],
    diferencialLocal:
      "Em Itabira, as tendas são bastante procuradas para festivais de inverno, eventos literários, festas populares, ações culturais, feiras e estruturas temporárias em praças e espaços abertos.",
  },
  {
    cidade: "Santa Maria de Itabira",
    slug: "aluguel-de-tendas-em-santa-maria-de-itabira",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Cavalgada de Santa Maria de Itabira",
      "Circuito de Corrida",
      "Desafio de Mountain Bike",
      "eventos esportivos e sertanejos"
    ],
    locaisReferencia: [
      "Parque de Exposições de Santa Maria de Itabira",
      "Centro de Santa Maria de Itabira",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Santa Maria de Itabira, a locação de tendas é útil para cavalgadas, eventos esportivos, corridas, desafios de mountain bike, festas sertanejas e comemorações em áreas abertas.",
  },
  {
    cidade: "João Monlevade",
    slug: "aluguel-de-tendas-em-joao-monlevade",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Cavalgada de João Monlevade",
      "Festival Gastronômico Sabor de Monlevade",
      "rodeios com atrações nacionais",
      "eventos gastronômicos e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições do Jacuí",
      "Centro de João Monlevade",
      "áreas de eventos e espaços comerciais"
    ],
    diferencialLocal:
      "Em João Monlevade, as tendas são muito procuradas para cavalgadas, rodeios, festivais gastronômicos, shows, eventos comerciais, feiras e comemorações em espaços externos.",
  },
  {
    cidade: "São Gonçalo do Rio Abaixo",
    slug: "aluguel-de-tendas-em-sao-goncalo-do-rio-abaixo",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Cavalgada de São Gonçalo do Rio Abaixo",
      "Festival da Quitanda",
      "eventos gastronômicos",
      "festas tradicionais"
    ],
    locaisReferencia: [
      "Parque de Exposições Edirlei Márcio Moreira Lanza",
      "Centro de São Gonçalo do Rio Abaixo",
      "áreas de eventos e espaços abertos"
    ],
    diferencialLocal:
      "Em São Gonçalo do Rio Abaixo, a locação de tendas atende cavalgadas, festivais gastronômicos, festas tradicionais, eventos familiares e estruturas de apoio para áreas externas.",
  },
  {
    cidade: "Barão de Cocais",
    slug: "aluguel-de-tendas-em-barao-de-cocais",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Baronense",
      "Festa de São João Batista",
      "shows de aniversário da cidade",
      "eventos religiosos e populares"
    ],
    locaisReferencia: [
      "Espaço de Eventos Central",
      "Parque de Exposições de Barão de Cocais",
      "Centro de Barão de Cocais",
      "áreas de eventos da cidade"
    ],
    diferencialLocal:
      "Em Barão de Cocais, as tendas são usadas em festas de aniversário da cidade, shows, celebrações religiosas, eventos populares, feiras e encontros em áreas abertas.",
  },
  {
    cidade: "Nova Era",
    slug: "aluguel-de-tendas-em-nova-era",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Cavalgada de Nova Era",
      "Festival da Arte e Cultura",
      "eventos rurais",
      "festas culturais e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Nova Era",
      "Centro de Nova Era",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Nova Era, a locação de tendas atende cavalgadas, festivais culturais, eventos rurais, comemorações familiares e estruturas temporárias em áreas abertas.",
  },
  {
    cidade: "Bom Jesus do Amparo",
    slug: "aluguel-de-tendas-em-bom-jesus-do-amparo",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Amparo",
      "Cavalgada do Produtor Rural",
      "eventos religiosos",
      "eventos rurais e shows"
    ],
    locaisReferencia: [
      "Parque de Exposições de Bom Jesus do Amparo",
      "Centro de Bom Jesus do Amparo",
      "áreas rurais e espaços comunitários"
    ],
    diferencialLocal:
      "Em Bom Jesus do Amparo, as tendas são indicadas para festas religiosas, cavalgadas, eventos rurais, shows, comemorações familiares e encontros comunitários ao ar livre.",
  },
  {
    cidade: "Itambé do Mato Dentro",
    slug: "aluguel-de-tendas-em-itambe-do-mato-dentro",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Itambeense Silencioso",
      "Festival da Cultura Tropeira",
      "eventos ligados ao turismo ecológico",
      "festas culturais próximas às cachoeiras"
    ],
    locaisReferencia: [
      "Centro de Itambé do Mato Dentro",
      "áreas de cachoeiras e turismo ecológico",
      "espaços culturais e comunitários",
      "áreas abertas da cidade"
    ],
    diferencialLocal:
      "Em Itambé do Mato Dentro, a locação de tendas é muito útil para eventos culturais, turismo ecológico, festas tradicionais, encontros comunitários e estruturas de apoio próximas a áreas naturais e cachoeiras.",
  },
  {
    cidade: "Alvinópolis",
    slug: "aluguel-de-tendas-em-alvinopolis",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Alvin Fest",
      "Festival Gastronômico Gastronove",
      "festa do peão e rodeio regional",
      "eventos gastronômicos e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Alvinópolis",
      "Centro de Alvinópolis",
      "áreas de eventos e espaços abertos"
    ],
    diferencialLocal:
      "Em Alvinópolis, as tendas são usadas em festas de peão, rodeios regionais, festivais gastronômicos, eventos populares, feiras e comemorações familiares em espaços abertos.",
  },
  {
    cidade: "Ferros",
    slug: "aluguel-de-tendas-em-ferros",
    regiao: "Região Central de Minas Gerais",
    eventosLocais: [
      "Festa do Ferrense",
      "Cavalgada de Ferros",
      "eventos rurais",
      "festas tradicionais e populares"
    ],
    locaisReferencia: [
      "Parque de Exposições de Ferros",
      "Centro de Ferros",
      "áreas rurais e espaços de eventos"
    ],
    diferencialLocal:
      "Em Ferros, a locação de tendas atende cavalgadas, festas tradicionais, eventos rurais, comemorações familiares e estruturas de apoio em áreas abertas.",
  }
];

function getCidadeChain(item: CidadeTenda) {
  const index = cidadesTendas.findIndex((cidade) => cidade.slug === item.slug);
  const previous = index > 0 ? cidadesTendas[index - 1] : null;
  const next = index >= 0 && index < cidadesTendas.length - 1 ? cidadesTendas[index + 1] : null;

  return { previous, next };
}

function buildCidadeRelatedLinks(item: CidadeTenda) {
  const { previous, next } = getCidadeChain(item);

  return [
    previous ? { title: `Aluguel de Tendas em ${previous.cidade}`, href: `/${previous.slug}` } : null,
    next ? { title: `Aluguel de Tendas em ${next.cidade}`, href: `/${next.slug}` } : null,
    { title: 'Aluguel de Tendas em BH', href: '/aluguel-de-tenda-em-bh' },
    { title: 'Cidades Atendidas', href: '/Cidades-Atendidas' },
  ].filter(Boolean) as { title: string; href: string }[];
}

function buildCidadeChainParagraph(item: CidadeTenda) {
  const { previous, next } = getCidadeChain(item);

  if (previous && next) {
    return `Tambem atendemos <a href="/${previous.slug}">${previous.cidade}</a>, <a href="/${next.slug}">${next.cidade}</a> e outras cidades da regiao. Onde quer que seu evento aconteca, nossa equipe esta pronta para indicar e montar a estrutura ideal para voce.`;
  }

  if (next) {
    return `Tambem atendemos <a href="/${next.slug}">${next.cidade}</a> e outras cidades proximas. Onde quer que seu evento aconteca, nossa equipe esta pronta para indicar e montar a estrutura ideal para voce.`;
  }

  if (previous) {
    return `Tambem atendemos <a href="/${previous.slug}">${previous.cidade}</a> e Belo Horizonte. Se quiser ampliar a busca, veja tambem <a href="/aluguel-de-tenda-em-bh">aluguel de tendas em BH</a> para conhecer a pagina principal da operacao.`;
  }

  return `Se quiser ampliar a busca, veja tambem <a href="/aluguel-de-tenda-em-bh">aluguel de tendas em BH</a> para conhecer a pagina principal da operacao.`;
}

const defaultArticleImages = [
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=420&q=80',
    alt: 'Estrutura coberta para evento corporativo em área ampla',
  },
  {
    src: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=420&q=80',
    alt: 'Montagem de cobertura para área de apoio e circulação',
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=420&q=80',
    alt: 'Evento com estrutura temporária e iluminação profissional',
  },
  {
    src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=420&q=80',
    alt: 'Feira com espaços cobertos para exposição e atendimento',
  },
  {
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=420&q=80',
    alt: 'Área preparada para recepção de convidados sob cobertura',
  },
];

const defaultFeaturedModels = [
  {
    title: 'Tenda Piramidal',
    description: 'Estrutura versátil para eventos sociais, corporativos e coberturas organizadas em áreas externas.',
    icon: 'tent' as const,
  },
  {
    title: 'Tenda Sanfonada',
    description: 'Opção prática para ações promocionais, feiras, pontos de apoio e montagens ágeis.',
    icon: 'zap' as const,
  },
  {
    title: 'Chapéu de Bruxa',
    description: 'Modelo de forte presença visual para entradas, recepções e áreas de circulação.',
    icon: 'landmark' as const,
  },
];

function joinWithCommas(values: string[]) {
  if (values.length <= 1) return values[0] ?? '';
  if (values.length === 2) return `${values[0]} e ${values[1]}`;
  return `${values.slice(0, -1).join(', ')} e ${values[values.length - 1]}`;
}

function formatEventParagraphs(cidade: string, eventosLocais: string[]) {
  const introList = joinWithCommas(eventosLocais);
  return [
    `Em ${cidade}, diferentes tipos de programações podem pedir cobertura temporária, especialmente ${introList}. Esses contextos costumam exigir mais conforto para convidados, proteção de equipamentos e uma organização melhor do espaço.`,
    `Quando a estrutura é escolhida com antecedência, fica mais fácil montar áreas de recepção, circulação, apoio e atendimento sem improvisos. Isso ajuda o evento a funcionar melhor mesmo quando acontece ao ar livre ou em áreas amplas.`,
  ];
}

function formatLocalReferences(cidade: string, locaisReferencia: string[]) {
  const locais = joinWithCommas(locaisReferencia);
  return [
    `Atendemos diferentes pontos de ${cidade}, incluindo ${locais}. Isso facilita o suporte para eventos em áreas centrais, bairros residenciais, espaços comerciais e locais de acesso variado.`,
    `Se a montagem for em chácaras, condomínios, áreas afastadas ou regiões próximas, nossa equipe pode avaliar logística, acesso e necessidades específicas para indicar a melhor solução de cobertura.`,
  ];
}

export function buildCidadeTendaPage(item: CidadeTenda): SiloPageData {
  return {
    slug: item.slug,
    title: `Aluguel de Tendas em ${item.cidade}`,
    description: `Locação de tendas em ${item.cidade} para festas, eventos, feiras, empresas e coberturas temporárias com montagem planejada.`,
    intro: `${item.diferencialLocal} Atendemos ${item.cidade}, ${item.regiao}, com estruturas pensadas para oferecer praticidade, proteção e melhor aproveitamento do espaço.`,
    seoTitle: `Aluguel de Tendas em ${item.cidade} | Locação Para Eventos`,
    seoDescription: `Precisa de aluguel de tendas em ${item.cidade}? Trabalhamos com tendas 3x3, 4x4, 5x5, 6x6, 8x8 e 10x10 para festas, eventos e empresas. Solicite orçamento.`,
    heroEyebrow: `Atendimento em ${item.cidade} e região`,
    heroChecklist: [
      'Coberturas para festas, eventos e empresas',
      `Atendimento em ${item.cidade} com apoio consultivo`,
      'Planejamento de montagem com foco em conforto e proteção',
    ],
    ctaBannerText: `Precisa de uma estrutura confiável em ${item.cidade}? Solicite orientação e encontre a tenda ideal para o seu evento.`,
    articleEyebrow: 'Guia local',
    articleTitle: `Aluguel de Tendas em ${item.cidade}`,
    articleTitleTag: 'p',
    articleLead: [
      `Precisa de aluguel de tendas em ${item.cidade} para seu evento?`,
      `A Companhia Tenda oferece soluções completas para quem busca praticidade, proteção e uma estrutura adequada para eventos de diferentes portes. ${item.diferencialLocal} Para entender a página central da operação, veja também <a href="/aluguel-de-tenda-em-bh">aluguel de tendas em BH</a>.`,
      `Nossa equipe auxilia na escolha da estrutura ideal de acordo com o espaço disponível, quantidade de participantes e necessidades específicas de cada ocasião, sempre com atendimento em ${item.cidade} e em cidades próximas da ${item.regiao}. Também vale navegar por <a href="/Cidades-Atendidas">Cidades Atendidas</a> para conhecer outras áreas da cobertura regional.`,
      buildCidadeChainParagraph(item),
    ],
    articleSections: [
      {
        level: 2,
        heading: `Locação de Tendas em ${item.cidade} Para Todos os Tipos de Eventos`,
        paragraphs: [
          'A locação de tendas é uma alternativa eficiente para proteger pessoas, equipamentos, alimentos, móveis e áreas de circulação contra chuva, sol intenso e outras condições climáticas.',
          `Atendemos clientes que precisam de estruturas para eventos sociais, corporativos, promocionais e institucionais em ${item.cidade}. Cada projeto recebe atenção especial para que a cobertura escolhida seja compatível com o local e o objetivo do evento. Se o foco for uma demanda mais ampla, você pode comparar com <a href="/aluguel-de-tendas-para-eventos">aluguel de tendas para eventos</a>.`,
          'Independentemente do porte da programação, buscamos oferecer uma estrutura funcional, bem montada e preparada para proporcionar mais tranquilidade durante todo o período de utilização.',
        ],
      },
      {
        level: 2,
        heading: `Eventos em ${item.cidade} Que Podem Precisar de Tendas`,
        paragraphs: formatEventParagraphs(item.cidade, item.eventosLocais),
      },
      {
        level: 2,
        heading: 'Tendas Com Lona Branca ou Lona Cristal',
        paragraphs: [
          'A escolha da cobertura influencia diretamente no visual e na funcionalidade do espaço. Por isso, disponibilizamos diferentes opções para atender estilos variados de eventos.',
        ],
      },
      {
        level: 3,
        heading: 'Tenda com Lona Branca',
        paragraphs: [
          'A lona branca continua sendo uma das opções mais procuradas por sua versatilidade.',
          'Ela combina facilmente com diferentes tipos de decoração e oferece excelente proteção contra sol e chuva. Seu acabamento proporciona um ambiente mais agradável, organizado e visualmente harmonioso.',
          'É uma excelente escolha para aniversários, casamentos, confraternizações, eventos corporativos, recepções e celebrações em geral.',
        ],
      },
      {
        level: 3,
        heading: 'Tenda com Lona Cristal',
        paragraphs: [
          'A lona cristal é indicada para quem deseja um ambiente mais sofisticado e com maior entrada de luz natural.',
          'Esse modelo permite uma integração visual maior com o ambiente externo, valorizando jardins, áreas decoradas e espaços abertos.',
          'Por esse motivo, costuma ser muito utilizada em casamentos, eventos sociais elegantes, recepções e ocasiões especiais onde a estética tem um papel importante.',
        ],
      },
      {
        level: 2,
        heading: 'Locação de Tendas de Todos os Tamanhos',
        paragraphs: [
          'Cada evento possui características diferentes. Pensando nisso, trabalhamos com diversas medidas para atender desde pequenas reuniões até grandes eventos.',
          'Nossa equipe ajuda a identificar qual dimensão oferece o melhor aproveitamento do espaço disponível, evitando tanto a falta quanto o excesso de cobertura.',
          'Disponibilizamos tendas 3x3, 4x4, 5x5, 6x6, 7x7, 8x8 e 10x10, que também podem ser acopladas para formar áreas maiores e totalmente cobertas.',
        ],
      },
      {
        level: 2,
        heading: `Aluguel de Barraca em ${item.cidade}`,
        paragraphs: [
          'Além das tendas tradicionais, a Companhia Tenda também oferece opções menores para quem precisa de uma estrutura compacta, prática e funcional.',
          'As barracas são muito utilizadas em eventos de rua, feiras livres, campanhas promocionais, ações de marketing e pontos de atendimento temporários.',
          'Trabalhamos com barracas de 1,50x1,50 até 3x3, ideais para quem precisa de cobertura eficiente sem ocupar grandes áreas.',
        ],
      },
      {
        level: 2,
        heading: `Atendimento em Diferentes Regiões de ${item.cidade}`,
        paragraphs: formatLocalReferences(item.cidade, item.locaisReferencia),
      },
      {
        level: 2,
        heading: 'Aluguel de Tendas Perto de Mim',
        paragraphs: [
          `Se você pesquisou por aluguel de tendas perto de mim, provavelmente precisa de atendimento rápido, estrutura confiável e orientação especializada. Atendemos ${item.cidade} e cidades próximas da ${item.regiao}.`,
          'Nossa equipe está preparada para esclarecer dúvidas sobre medidas, modelos disponíveis, capacidade de cobertura e melhores opções para cada cenário.',
        ],
      },
    ],
    articleImages: defaultArticleImages,
    featuredModels: defaultFeaturedModels,
    relatedLinks: buildCidadeRelatedLinks(item),
  };
}
