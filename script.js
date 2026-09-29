const projects = {
  vexa: {
    category: 'PRODUTO DIGITAL / ATENDIMENTO', title: 'Vexa',
    description: 'Uma central de atendimento demonstrativa para enxergar solicitações, responsáveis e prazos sem perder o contexto de cada conversa.',
    stack: { 'Frontend': 'React, TypeScript, Next.js e CSS', 'Backend': 'Rotas de API em TypeScript no Next.js', 'Dados': 'Cloudflare D1 (SQLite) com Drizzle ORM' },
    features: ['Painel de chamados e indicadores de atendimento', 'Acompanhamento de responsáveis, prioridades e prazos', 'Histórico e diferentes visões da operação']
  },
  insight: {
    category: 'PRODUTO DIGITAL / DADOS', title: 'Insight Pipeline',
    description: 'Uma aplicação de análise de vendas. A demonstração publicada processa CSV no navegador; o repositório também traz uma API Python/FastAPI e persistência em PostgreSQL para execução completa com Docker Compose.',
    stack: { 'Frontend': 'React, TypeScript, Vite e CSS', 'Backend': 'Python com FastAPI (execução completa)', 'Dados': 'PostgreSQL na versão completa; CSV local na demonstração' },
    features: ['Importação de CSV no navegador', 'Validação e revisão de registros inconsistentes', 'Indicadores de receita, pedidos e qualidade da base']
  },
  ledger: {
    category: 'PRODUTO DIGITAL / FINANÇAS', title: 'LedgerFlow',
    description: 'Um workspace demonstrativo de assinaturas e faturamento para acompanhar clientes, cobranças e receita recorrente em um mesmo lugar.',
    stack: { 'Frontend': 'React, TypeScript, Next.js e CSS', 'Backend': 'Rotas de API em TypeScript no Next.js', 'Dados': 'Cloudflare D1 (SQLite) com Drizzle ORM' },
    features: ['Visão consolidada da operação financeira', 'Assinaturas, planos, clientes e faturas', 'Simulação de estados de cobrança com dados fictícios']
  },
  nexa: {
    category: 'PRODUTO DIGITAL / INVESTIMENTOS', title: 'Nexa Invest',
    description: 'Uma carteira simulada e um monitor de mercado para explorar a apresentação de dados financeiros e cenários de investimento.',
    stack: { 'Frontend': 'React, TypeScript, Next.js e CSS', 'Backend': 'Rotas de API em TypeScript no Next.js', 'Dados': 'Cloudflare D1 (SQLite) com Drizzle ORM' },
    features: ['Visão de carteira e ativos simulados', 'Indicadores e leitura de cenários', 'Experiência de exploração sem operações reais']
  },
  luccari: {
    category: 'SITE & MARCA / CAFÉ', title: 'Luccari Café',
    description: 'Uma boutique fictícia de cafés com embalagens próprias, catálogo em inglês e seis produtos demonstrativos com preços em dólares.',
    stack: { 'Frontend': 'HTML5, CSS3 e JavaScript', 'Backend': 'Não há backend neste site demonstrativo' },
    features: ['Café em grãos, café moído tipo mocha e cápsulas', 'Três frappuccinos prontos para beber', 'Catálogo responsivo com preços em dólares']
  },
  passo: {
    category: 'SITE & MARCA / LOJA INFANTIL', title: 'Passo Leve',
    description: 'Uma loja demonstrativa de calçados infantis, com coleção colorida, navegação por categorias e uma sacola para explorar o fluxo de compra.',
    stack: { 'Frontend': 'HTML5, CSS3 e JavaScript', 'Backend': 'Sem backend; pedidos e sacola são demonstrativos' },
    features: ['Catálogo de tênis, galochas, botas e pantufas', 'Filtros e escolha de tamanhos', 'Sacola demonstrativa com valores em euros']
  },
  vitta: {
    category: 'SITE & MARCA / SAÚDE', title: 'Vitta Saúde',
    description: 'Um conceito de agendamento de consultas para tornar a escolha de especialidade, profissional e horário mais simples e acolhedora.',
    stack: { 'Frontend': 'HTML5, CSS3 e JavaScript', 'Backend': 'Sem backend; agendamentos não são enviados' },
    features: ['Seleção de especialidade e profissional', 'Escolha de data e horário disponíveis na demonstração', 'Confirmação simulada, sem reserva real']
  },
  morar: {
    category: 'SITE & MARCA / IMÓVEIS', title: 'Morar',
    description: 'Um catálogo demonstrativo de imóveis com apresentação editorial e ferramentas para explorar opções de moradia.',
    stack: { 'Frontend': 'HTML5, CSS3 e JavaScript', 'Backend': 'Sem backend; imóveis e conversas são fictícios' },
    features: ['Destaques de imóveis e informações de cada espaço', 'Filtros para explorar o catálogo', 'Fluxo demonstrativo de contato com corretores']
  }
};

// Substitua pelos links finais dos seus projetos quando estiverem publicados.
// Projetos com API e banco de dados precisam de hospedagem que execute o backend.
const projectLinks = {
  vexa: 'https://vexa-sabrina.limaucello.chatgpt.site/',
  insight: 'https://insight-pipeline-sabrina.limaucello.chatgpt.site/',
  ledger: 'https://ledgerflow-sabrina.limaucello.chatgpt.site/',
  nexa: 'https://nexa-invest-sabrina.limaucello.chatgpt.site/',
  luccari: 'https://luccari-cafe-boutique.limaucello.chatgpt.site/',
  passo: 'https://passo-leve-sabrina.limaucello.chatgpt.site/',
  vitta: 'https://vitta-saude-sabrina.limaucello.chatgpt.site/',
  morar: 'https://morar-imoveis-sabrina.limaucello.chatgpt.site/'
};

// Informe os endereços completos dos seus perfis para ativar os ícones no topo.
const socialLinks = { linkedin: '', github: '' };
document.querySelectorAll('[data-social]').forEach(link => {
  const url = socialLinks[link.dataset.social];
  if (url && /^https:\/\//i.test(url)) {
    link.href = url;
    link.hidden = false;
  }
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => {
    card.hidden = button.dataset.filter !== 'todos' && card.dataset.category !== button.dataset.filter;
  });
}));

const dialog = document.querySelector('.project-dialog');
let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = window.PortfolioI18n?.project(button.dataset.project, projects[button.dataset.project]) ?? projects[button.dataset.project];
  if (!project) return;
  lastTrigger = button;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = project.description;
  document.querySelector('#dialog-features').replaceChildren(...project.features.map(feature => {
    const item = document.createElement('li');
    item.textContent = feature;
    return item;
  }));
  document.querySelector('#dialog-stack').replaceChildren(...Object.entries(project.stack).flatMap(([label, value]) => {
    const term = document.createElement('dt');
    const detail = document.createElement('dd');
    term.textContent = label;
    detail.textContent = value;
    return [term, detail];
  }));
  const demo = document.querySelector('#dialog-demo');
  const url = projectLinks[button.dataset.project];
  demo.hidden = !url;
  if (url) demo.href = url;
  dialog.showModal();
}));
document.querySelectorAll('.close-dialog').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => lastTrigger?.focus());
