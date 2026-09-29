/* Textos do portfólio; as tecnologias e os nomes próprios permanecem iguais em todos os idiomas. */
(() => {
  const rows = [
    ['Sabrina Lima — Portfólio','Sabrina Lima — Portfolio','Sabrina Lima — Portafolio','Sabrina Lima — Portfolio'],
    ['Ir para os projetos','Skip to projects','Ir a los proyectos','Zu den Projekten springen'],
    ['Projetos','Projects','Proyectos','Projekte'],['Sobre','About','Sobre mí','Über mich'],
    ['Idioma do portfólio','Portfolio language','Idioma del portafolio','Sprache des Portfolios'],
    ['PORTFÓLIO / 2026','PORTFOLIO / 2026','PORTAFOLIO / 2026','PORTFOLIO / 2026'],
    ['OLÁ, EU SOU A SABRINA','HI, I’M SABRINA','HOLA, SOY SABRINA','HALLO, ICH BIN SABRINA'],
    ['Ideias que ganham','Ideas taking','Ideas que cobran','Ideen, die im Web'],
    ['forma','shape','forma','Form'],['na web','on the web','en la web','annehmen'],
    ['Desenvolvo interfaces e produtos digitais, do HTML, CSS e JavaScript a aplicações com React, TypeScript, APIs e dados. Conheça abaixo o que foi usado em cada projeto.','I build interfaces and digital products, from HTML, CSS and JavaScript to apps with React, TypeScript, APIs and data. Explore the technologies behind each project below.','Desarrollo interfaces y productos digitales, desde HTML, CSS y JavaScript hasta aplicaciones con React, TypeScript, APIs y datos. Descubre las tecnologías de cada proyecto.','Ich entwickle digitale Oberflächen und Produkte: von HTML, CSS und JavaScript bis zu Anwendungen mit React, TypeScript, APIs und Daten. Entdecke die Technologien hinter jedem Projekt.'],
    ['APIs em TypeScript · Python / FastAPI','TypeScript APIs · Python / FastAPI','APIs en TypeScript · Python / FastAPI','TypeScript-APIs · Python / FastAPI'],
    ['Frontend','Frontend','Frontend','Frontend'],['Backend','Backend','Backend','Backend'],['Dados','Data','Datos','Daten'],
    ['Explorar projetos','Explore projects','Explorar proyectos','Projekte ansehen'],['Conheça meu trabalho','About my work','Conoce mi trabajo','Mehr über meine Arbeit'],
    ['CRIAR · TESTAR · EVOLUIR','CREATE · TEST · IMPROVE','CREAR · PROBAR · MEJORAR','GESTALTEN · TESTEN · VERBESSERN'],
    ['DESIGN & DESENVOLVIMENTO','DESIGN & DEVELOPMENT','DISEÑO Y DESARROLLO','DESIGN & ENTWICKLUNG'],
    ['↓ DESLIZE PARA EXPLORAR','↓ SCROLL TO EXPLORE','↓ DESLIZA PARA EXPLORAR','↓ WEITER SCROLLEN'],
    ['Produtos digitais','Digital products','Productos digitales','Digitale Produkte'],['Interfaces web','Web interfaces','Interfaces web','Weboberflächen'],['Experiências de marca','Brand experiences','Experiencias de marca','Markenerlebnisse'],
    ['01 / TRABALHOS SELECIONADOS','01 / SELECTED WORK','01 / TRABAJOS DESTACADOS','01 / AUSGEWÄHLTE ARBEITEN'],
    ['Projetos em','Featured','Proyectos','Ausgewählte'],['destaque','projects','destacados','Projekte'],
    ['Oito projetos demonstrativos, de ferramentas de gestão a experiências de compra e serviços.','Eight demo projects, from management tools to shopping and service experiences.','Ocho proyectos de demostración, desde herramientas de gestión hasta experiencias de compra y servicios.','Acht Demo-Projekte – von Verwaltungstools bis zu Shopping- und Serviceerlebnissen.'],
    ['Todos','All','Todos','Alle'],['Sites & marcas','Sites & brands','Sitios y marcas','Websites & Marken'],
    ['01 / PRODUTO DIGITAL','01 / DIGITAL PRODUCT','01 / PRODUCTO DIGITAL','01 / DIGITALES PRODUKT'],
    ['02 / PRODUTO DIGITAL','02 / DIGITAL PRODUCT','02 / PRODUCTO DIGITAL','02 / DIGITALES PRODUKT'],
    ['03 / PRODUTO DIGITAL','03 / DIGITAL PRODUCT','03 / PRODUCTO DIGITAL','03 / DIGITALES PRODUKT'],
    ['04 / PRODUTO DIGITAL','04 / DIGITAL PRODUCT','04 / PRODUCTO DIGITAL','04 / DIGITALES PRODUKT'],
    ['05 / SITE & MARCA','05 / SITE & BRAND','05 / SITIO Y MARCA','05 / WEBSITE & MARKE'],
    ['06 / SITE & MARCA','06 / SITE & BRAND','06 / SITIO Y MARCA','06 / WEBSITE & MARKE'],
    ['07 / SITE & MARCA','07 / SITE & BRAND','07 / SITIO Y MARCA','07 / WEBSITE & MARKE'],
    ['08 / SITE & MARCA','08 / SITE & BRAND','08 / SITIO Y MARCA','08 / WEBSITE & MARKE'],
    ['ATENDIMENTO','SUPPORT','ATENCIÓN','SUPPORT'],['DADOS','DATA','DATOS','DATEN'],['FINANÇAS','FINANCE','FINANZAS','FINANZEN'],['INVESTIMENTOS','INVESTMENTS','INVERSIONES','INVESTMENTS'],
    ['CAFÉ & MARCA','COFFEE & BRAND','CAFÉ Y MARCA','KAFFEE & MARKE'],['LOJA INFANTIL','KIDS’ STORE','TIENDA INFANTIL','KINDERGESCHÄFT'],['SAÚDE','HEALTHCARE','SALUD','GESUNDHEIT'],['IMÓVEIS','REAL ESTATE','INMUEBLES','IMMOBILIEN'],
    ['Central de atendimento para acompanhar chamados, responsáveis, prazos e histórico em uma só interface.','A support hub for tracking tickets, assignees, deadlines and history in one interface.','Un centro de atención para seguir solicitudes, responsables, plazos e historial en una sola interfaz.','Ein Support-Center für Anfragen, Zuständigkeiten, Fristen und Verlauf auf einer Oberfläche.'],
    ['Importação e validação de planilhas CSV com indicadores de vendas e atenção à qualidade dos dados.','CSV import and validation with sales indicators and data quality checks.','Importación y validación de archivos CSV con indicadores de ventas y control de calidad de datos.','CSV-Import und Validierung mit Verkaufskennzahlen und Prüfung der Datenqualität.'],
    ['Workspace demonstrativo para visualizar assinaturas, faturas, clientes e receita recorrente.','A demo workspace for subscriptions, invoices, customers and recurring revenue.','Un espacio de demostración para visualizar suscripciones, facturas, clientes e ingresos recurrentes.','Ein Demo-Arbeitsbereich für Abos, Rechnungen, Kunden und wiederkehrende Umsätze.'],
    ['Carteira simulada e monitor de mercado para explorar informações e cenários de investimento.','A simulated portfolio and market monitor for exploring investment data and scenarios.','Una cartera simulada y un monitor de mercado para explorar datos y escenarios de inversión.','Ein simuliertes Portfolio mit Marktübersicht für Investmentdaten und Szenarien.'],
    ['Boutique de café com catálogo de grãos, moído, cápsulas e três bebidas prontas, em inglês e com preços em dólares.','A coffee boutique with whole bean, ground, capsules and three ready-to-drink coffees, presented in English with USD prices.','Una boutique de café con granos, molido, cápsulas y tres bebidas listas para tomar, en inglés y con precios en dólares.','Eine Kaffee-Boutique mit Bohnen, gemahlenem Kaffee, Kapseln und drei Fertiggetränken, auf Englisch mit Dollarpreisen.'],
    ['Loja infantil demonstrativa com catálogo, filtros, seleção de tamanhos e sacola de compras.','A demo children’s shoe store with a catalog, filters, sizes and a shopping bag.','Una tienda infantil de demostración con catálogo, filtros, tallas y carrito.','Ein Demo-Shop für Kinderschuhe mit Katalog, Filtern, Größen und Warenkorb.'],
    ['Agendamento fictício de consultas com escolha de especialidade, profissional, data e horário.','A demo appointment flow for choosing a specialty, clinician, date and time.','Una reserva de citas ficticia para elegir especialidad, profesional, fecha y hora.','Eine Demo-Terminbuchung mit Auswahl von Fachbereich, Fachkraft, Datum und Uhrzeit.'],
    ['Catálogo demonstrativo de imóveis com apresentação visual, filtros e contato com corretores.','A demo property catalog with visual listings, filters and a way to contact agents.','Un catálogo inmobiliario de demostración con fichas visuales, filtros y contacto con agentes.','Ein Demo-Immobilienkatalog mit visuellen Exposés, Filtern und Kontakt zu Maklern.'],
    ['Stack','Stack','Tecnologías','Technik'],['Tecnologias e detalhes','Technology & details','Tecnologías y detalles','Technik & Details'],
    ['Abrir produto','Open product','Abrir producto','Produkt öffnen'],['Abrir site','Open site','Abrir sitio','Website öffnen'],
    ['Projetos de portfólio com marcas e dados fictícios. As interações demonstram conceitos e não realizam transações ou atendimentos reais.','Portfolio projects with fictional brands and data. Interactions demonstrate concepts; they do not process real transactions or support requests.','Proyectos de portafolio con marcas y datos ficticios. Las interacciones son demostrativas y no realizan transacciones ni atenciones reales.','Portfolio-Projekte mit fiktiven Marken und Daten. Die Interaktionen zeigen Konzepte; es finden keine echten Transaktionen oder Supportvorgänge statt.'],
    ['02 / SOBRE MIM','02 / ABOUT ME','02 / SOBRE MÍ','02 / ÜBER MICH'],
    ['Curiosidade para criar. Cuidado para','Curiosity to create. Care to','Curiosidad para crear. Dedicación para','Neugier beim Gestalten. Sorgfalt beim'],['entregar.','deliver.','entregar.','Umsetzen.'],
    ['Sou Sabrina Lima. Gosto de transformar ideias em experiências digitais fáceis de entender e agradáveis de usar.','I’m Sabrina Lima. I enjoy turning ideas into digital experiences that are easy to understand and pleasant to use.','Soy Sabrina Lima. Me gusta transformar ideas en experiencias digitales fáciles de entender y agradables de usar.','Ich bin Sabrina Lima. Ich setze Ideen gern in digitale Erlebnisse um, die leicht verständlich und angenehm zu nutzen sind.'],
    ['Nestes projetos, explorei diferentes contextos: atendimento, dados, finanças, comércio, saúde e imóveis. Cada interface é uma oportunidade de aprender, experimentar e melhorar.','These projects span support, data, finance, retail, healthcare and real estate. Each interface is a chance to learn, experiment and improve.','Estos proyectos abarcan atención, datos, finanzas, comercio, salud e inmuebles. Cada interfaz es una oportunidad para aprender, experimentar y mejorar.','Die Projekte reichen von Support und Daten über Finanzen und Handel bis zu Gesundheit und Immobilien. Jede Oberfläche bietet Raum zum Lernen, Ausprobieren und Verbessern.'],
    ['Voltar aos projetos','Back to projects','Volver a los proyectos','Zurück zu den Projekten'],['Portfólio de projetos · 2026','Project portfolio · 2026','Portafolio de proyectos · 2026','Projektportfolio · 2026'],
    ['O que você pode explorar','What you can explore','Qué puedes explorar','Was du erkunden kannst'],['Projeto demonstrativo de portfólio.','Demo portfolio project.','Proyecto de demostración para portafolio.','Demo-Projekt für das Portfolio.'],
    ['Visitar demonstração','Visit live demo','Ver demostración','Demo ansehen'],['Fechar','Close','Cerrar','Schließen'],
    ['Navegação principal','Main navigation','Navegación principal','Hauptnavigation'],['Filtrar projetos','Filter projects','Filtrar proyectos','Projekte filtern'],['Sabrina Lima, início','Sabrina Lima, home','Sabrina Lima, inicio','Sabrina Lima, Startseite'],
    ['LinkedIn de Sabrina Lima','Sabrina Lima on LinkedIn','LinkedIn de Sabrina Lima','Sabrina Lima auf LinkedIn'],['GitHub de Sabrina Lima','Sabrina Lima on GitHub','GitHub de Sabrina Lima','Sabrina Lima auf GitHub'],
    ['Retrato de Sabrina Lima','Portrait of Sabrina Lima','Retrato de Sabrina Lima','Porträt von Sabrina Lima'],
    ['Tela real da central de atendimento Vexa, com indicadores e tabela de chamados','Actual Vexa support dashboard with metrics and a ticket table','Pantalla real del centro de atención Vexa, con métricas y tabla de solicitudes','Echte Ansicht des Vexa-Support-Centers mit Kennzahlen und Ticket-Tabelle'],
    ['Tela real do Insight Pipeline com importação de CSV e indicadores de vendas','Actual Insight Pipeline dashboard with CSV import and sales metrics','Pantalla real de Insight Pipeline con importación CSV e indicadores de ventas','Echte Ansicht von Insight Pipeline mit CSV-Import und Verkaufskennzahlen'],
    ['Tela real do LedgerFlow com receita recorrente, faturas e indicadores financeiros','Actual LedgerFlow dashboard with recurring revenue, invoices and financial metrics','Pantalla real de LedgerFlow con ingresos recurrentes, facturas y métricas','Echte Ansicht von LedgerFlow mit wiederkehrenden Umsätzen, Rechnungen und Kennzahlen'],
    ['Tela real do Nexa Invest com cotações e gráficos de carteira simulada','Actual Nexa Invest dashboard with quotes and simulated portfolio charts','Pantalla real de Nexa Invest con cotizaciones y gráficos de cartera simulada','Echte Ansicht von Nexa Invest mit Kursen und simulierten Portfolio-Grafiken'],
    ['Três embalagens Luccari em pé: café em grãos, cápsulas e café moído mocha','Three upright Luccari packages: whole bean, capsules and mocha ground coffee','Tres envases Luccari de pie: café en grano, cápsulas y café mocha molido','Drei aufrecht stehende Luccari-Packungen: Bohnen, Kapseln und gemahlener Mocha-Kaffee'],
    ['Tela real da loja Passo Leve com crianças usando os calçados e a coleção','Actual Passo Leve store with children wearing shoes and the collection','Pantalla real de Passo Leve con niños usando zapatos y la colección','Echte Ansicht des Passo Leve-Shops mit Kindern in Schuhen und Kollektion'],
    ['Tela real do site Vitta Saúde com apresentação da clínica e formulário de agendamento','Actual Vitta Saúde site with clinic introduction and appointment form','Pantalla real de Vitta Saúde con presentación de la clínica y formulario de citas','Echte Ansicht der Vitta Saúde-Website mit Klinikvorstellung und Terminformular'],
    ['Tela real do site Morar com imóvel em destaque e busca de casas e apartamentos','Actual Morar site with featured property and home search','Pantalla real de Morar con inmueble destacado y búsqueda de viviendas','Echte Ansicht der Morar-Website mit Immobilie und Haussuche'],
    ['Perfis profissionais','Professional profiles','Perfiles profesionales','Berufliche Profile'],['Tecnologias presentes nos projetos','Technologies used in the projects','Tecnologías utilizadas en los proyectos','Technologien in den Projekten'],
    ['Áreas de trabalho','Areas of work','Áreas de trabajo','Arbeitsbereiche'],['Voltar ao início','Back to top','Volver arriba','Zurück nach oben'],['Fechar detalhes','Close details','Cerrar detalles','Details schließen'],
    ['Portfólio de Sabrina Lima: produtos digitais, experiências web e projetos de interface.','Sabrina Lima’s portfolio: digital products, web experiences and interface projects.','Portafolio de Sabrina Lima: productos digitales, experiencias web y proyectos de interfaz.','Sabrina Limas Portfolio: digitale Produkte, Web-Erlebnisse und Interface-Projekte.']
  ];
  const locales = ['pt','en','es','de'];
  const lookup = Object.fromEntries(locales.map((locale, index) => [locale, new Map(rows.map(row => [row[0], row[index]]))]));
  const projectCopy = {
    en: {
      vexa: ['DIGITAL PRODUCT / SUPPORT','A demo support hub that gives teams a clear view of requests, assignees and deadlines without losing the context of each conversation.',['Ticket dashboard and support metrics','Tracking assignees, priorities and deadlines','Conversation history and different operational views']],
      insight: ['DIGITAL PRODUCT / DATA','A sales analytics app. The live demo processes CSV files in the browser; the repository also includes a Python/FastAPI API and PostgreSQL persistence for a full Docker Compose setup.',['Import CSV files in the browser','Validate and review inconsistent records','Revenue, order and data quality metrics']],
      ledger: ['DIGITAL PRODUCT / FINANCE','A demo subscription and billing workspace for tracking customers, invoices and recurring revenue together.',['Consolidated view of finance operations','Subscriptions, plans, customers and invoices','Simulated billing states with fictional data']],
      nexa: ['DIGITAL PRODUCT / INVESTMENTS','A simulated portfolio and market monitor for exploring financial data and investment scenarios.',['Simulated portfolio and asset views','Metrics and scenario exploration','Exploration without real trades']],
      luccari: ['SITE & BRAND / COFFEE','A fictional coffee boutique with custom packaging, an English catalog and six demo products priced in USD.',['Whole bean coffee, mocha ground coffee and capsules','Three ready-to-drink frappuccinos','Responsive catalog with USD prices']],
      passo: ['SITE & BRAND / KIDS’ STORE','A demo children’s shoe store with a colorful collection, category navigation and a shopping bag to explore the purchase flow.',['Sneakers, rain boots, snow boots and slippers','Filters and size selection','Demo shopping bag with prices in euros']],
      vitta: ['SITE & BRAND / HEALTHCARE','An appointment booking concept designed to make choosing a specialty, clinician and time feel simple and welcoming.',['Choose a specialty and clinician','Select a date and demo time slot','Simulated confirmation without a real booking']],
      morar: ['SITE & BRAND / REAL ESTATE','A demo property catalog with an editorial presentation and tools for exploring housing options.',['Featured properties and listing details','Filters for browsing the catalog','Demo contact flow with property agents']]
    },
    es: {
      vexa: ['PRODUCTO DIGITAL / ATENCIÓN','Un centro de atención de demostración para ver solicitudes, responsables y plazos sin perder el contexto de cada conversación.',['Panel de solicitudes e indicadores','Seguimiento de responsables, prioridades y plazos','Historial y distintas vistas de la operación']],
      insight: ['PRODUCTO DIGITAL / DATOS','Una aplicación de análisis de ventas. La demostración procesa CSV en el navegador; el repositorio también incluye una API Python/FastAPI y PostgreSQL para la ejecución completa con Docker Compose.',['Importación de CSV en el navegador','Validación y revisión de registros inconsistentes','Indicadores de ingresos, pedidos y calidad de datos']],
      ledger: ['PRODUCTO DIGITAL / FINANZAS','Un espacio de demostración de suscripciones y facturación para seguir clientes, cobros e ingresos recurrentes.',['Vista consolidada de operaciones financieras','Suscripciones, planes, clientes y facturas','Estados de cobro simulados con datos ficticios']],
      nexa: ['PRODUCTO DIGITAL / INVERSIONES','Una cartera simulada y un monitor de mercado para explorar datos financieros y escenarios de inversión.',['Vista de cartera y activos simulados','Indicadores y lectura de escenarios','Exploración sin operaciones reales']],
      luccari: ['SITIO Y MARCA / CAFÉ','Una boutique de café ficticia con empaques propios, catálogo en inglés y seis productos de demostración con precios en dólares.',['Café en grano, café molido tipo mocha y cápsulas','Tres frappuccinos listos para beber','Catálogo adaptable con precios en dólares']],
      passo: ['SITIO Y MARCA / TIENDA INFANTIL','Una tienda de calzado infantil de demostración, con colección colorida, categorías y carrito para explorar el proceso de compra.',['Catálogo de zapatillas, botas de lluvia, botas de nieve y pantuflas','Filtros y selección de tallas','Carrito demostrativo con precios en euros']],
      vitta: ['SITIO Y MARCA / SALUD','Una propuesta de reservas de citas para elegir especialidad, profesional y horario de forma sencilla.',['Selección de especialidad y profesional','Elección de fecha y horario de demostración','Confirmación simulada sin reserva real']],
      morar: ['SITIO Y MARCA / INMUEBLES','Un catálogo inmobiliario de demostración con presentación editorial y herramientas para explorar viviendas.',['Inmuebles destacados y detalles','Filtros para explorar el catálogo','Contacto simulado con agentes']]
    },
    de: {
      vexa: ['DIGITALES PRODUKT / SUPPORT','Ein Demo-Support-Center, das Anfragen, Zuständigkeiten und Fristen übersichtlich macht, ohne den Gesprächskontext zu verlieren.',['Ticketübersicht und Support-Kennzahlen','Zuständigkeiten, Prioritäten und Fristen','Verlauf und verschiedene Ansichten']],
      insight: ['DIGITALES PRODUKT / DATEN','Eine Anwendung für Verkaufsanalysen. Die veröffentlichte Demo verarbeitet CSV-Dateien im Browser; das Repository enthält außerdem eine Python/FastAPI-Schnittstelle und PostgreSQL für den vollständigen Betrieb mit Docker Compose.',['CSV-Import im Browser','Prüfung fehlerhafter Datensätze','Kennzahlen zu Umsatz, Bestellungen und Datenqualität']],
      ledger: ['DIGITALES PRODUKT / FINANZEN','Ein Demo-Arbeitsbereich für Abos und Abrechnung, mit Kunden, Rechnungen und wiederkehrenden Umsätzen an einem Ort.',['Gesamtübersicht der Finanzabläufe','Abos, Tarife, Kunden und Rechnungen','Simulierte Zahlungszustände mit fiktiven Daten']],
      nexa: ['DIGITALES PRODUKT / INVESTMENTS','Ein simuliertes Portfolio und Marktmonitor für Finanzdaten und Investment-Szenarien.',['Simuliertes Portfolio und Anlagen','Kennzahlen und Szenarien','Erkundung ohne echte Transaktionen']],
      luccari: ['WEBSITE & MARKE / KAFFEE','Eine fiktive Kaffee-Boutique mit eigener Verpackung, englischem Katalog und sechs Demo-Produkten mit Dollarpreisen.',['Ganze Bohnen, gemahlener Mocha-Kaffee und Kapseln','Drei trinkfertige Frappuccinos','Responsiver Katalog mit Dollarpreisen']],
      passo: ['WEBSITE & MARKE / KINDERSCHUHE','Ein Demo-Shop für Kinderschuhe mit bunter Kollektion, Kategorien und Warenkorb, um den Kaufablauf zu erkunden.',['Sneaker, Gummistiefel, Winterstiefel und Hausschuhe','Filter und Größenauswahl','Demo-Warenkorb mit Euro-Preisen']],
      vitta: ['WEBSITE & MARKE / GESUNDHEIT','Ein Konzept für die Terminbuchung, das die Wahl von Fachbereich, Fachkraft und Uhrzeit einfach macht.',['Fachbereich und Fachkraft wählen','Demo-Datum und Uhrzeit auswählen','Simulierte Bestätigung ohne echte Buchung']],
      morar: ['WEBSITE & MARKE / IMMOBILIEN','Ein Demo-Immobilienkatalog mit redaktioneller Präsentation und Werkzeugen zur Wohnungssuche.',['Immobilien und Details im Überblick','Filter für den Katalog','Simulierter Kontakt zu Maklern']]
    }
  };
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) { return node.parentElement?.closest('script,style,svg') || !node.textContent.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
  });
  while (walker.nextNode()) nodes.push([walker.currentNode, walker.currentNode.textContent]);
  const attributes = [];
  document.querySelectorAll('[alt],[aria-label],[title]').forEach(element => {
    for (const attribute of ['alt','aria-label','title']) if (element.hasAttribute(attribute)) attributes.push([element, attribute, element.getAttribute(attribute)]);
  });
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description?.content;
  let locale = 'pt';
  function t(key) { return lookup[locale].get(key) ?? key; }
  function setLocale(next) {
    locale = locales.includes(next) ? next : 'pt';
    document.documentElement.lang = {pt:'pt-BR',en:'en',es:'es',de:'de'}[locale];
    document.title = t('Sabrina Lima — Portfólio');
    if (description) description.content = t(originalDescription);
    for (const [node, original] of nodes) {
      const trimmed = original.trim();
      if (trimmed) node.textContent = original.replace(trimmed, t(trimmed));
    }
    for (const [element, attribute, original] of attributes) element.setAttribute(attribute, t(original));
    document.querySelector('#language-select').value = locale;
    try { localStorage.setItem('sabrina-portfolio-language', locale); } catch (_) {}
    const dialog = document.querySelector('.project-dialog');
    if (dialog?.open) dialog.close();
  }
  document.querySelector('#language-select').addEventListener('change', event => setLocale(event.target.value));
  let preferred = 'pt';
  try { preferred = localStorage.getItem('sabrina-portfolio-language') || 'pt'; } catch (_) {}
  setLocale(preferred);
  window.PortfolioI18n = {
    project(id, original) {
      if (!original || locale === 'pt') return original;
      const [category, description, features] = projectCopy[locale]?.[id] || [];
      const stack = Object.fromEntries(Object.entries(original.stack).map(([key, value]) => [t(key), value
        .replace('Rotas de API em TypeScript no Next.js', locale === 'en' ? 'TypeScript API routes in Next.js' : locale === 'es' ? 'Rutas API en TypeScript con Next.js' : 'TypeScript-API-Routen in Next.js')
        .replace('Cloudflare D1 (SQLite) com Drizzle ORM', locale === 'en' ? 'Cloudflare D1 (SQLite) with Drizzle ORM' : locale === 'es' ? 'Cloudflare D1 (SQLite) con Drizzle ORM' : 'Cloudflare D1 (SQLite) mit Drizzle ORM')
        .replace('Não há backend neste site demonstrativo', locale === 'en' ? 'No backend in this demo site' : locale === 'es' ? 'Sin backend en este sitio demostrativo' : 'Kein Backend auf dieser Demo-Website')
        .replace('Sem backend; pedidos e sacola são demonstrativos', locale === 'en' ? 'No backend; orders and bag are a demo' : locale === 'es' ? 'Sin backend; pedidos y carrito son demostrativos' : 'Kein Backend; Bestellungen und Warenkorb sind eine Demo')
        .replace('Sem backend; agendamentos não são enviados', locale === 'en' ? 'No backend; appointments are not submitted' : locale === 'es' ? 'Sin backend; las citas no se envían' : 'Kein Backend; Termine werden nicht gesendet')
        .replace('Sem backend; imóveis e conversas são fictícios', locale === 'en' ? 'No backend; properties and chats are fictional' : locale === 'es' ? 'Sin backend; inmuebles y chats son ficticios' : 'Kein Backend; Immobilien und Chats sind fiktiv')
        .replace('Python com FastAPI (execução completa)', locale === 'en' ? 'Python with FastAPI (full setup)' : locale === 'es' ? 'Python con FastAPI (versión completa)' : 'Python mit FastAPI (vollständiger Betrieb)')
        .replace('PostgreSQL na versão completa; CSV local na demonstração', locale === 'en' ? 'PostgreSQL in full setup; local CSV in demo' : locale === 'es' ? 'PostgreSQL en versión completa; CSV local en demo' : 'PostgreSQL im Vollbetrieb; lokales CSV in der Demo')
        .replace(' e ', locale === 'en' ? ' and ' : locale === 'es' ? ' y ' : ' und ')]));
      return {...original,category:category || original.category,description:description || original.description,features:features || original.features,stack};
    },
    getLocale: () => locale
  };
})();
