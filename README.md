# Portfólio — Sabrina Lima

Site pessoal estático com oito projetos: Vexa, Insight Pipeline, LedgerFlow, Nexa Invest, Luccari Café, Passo Leve, Vitta Saúde e Morar.

## Publicar pelo GitHub Pages

1. Na conta GitHub `Sabrinaliimma`, crie um repositório **público** chamado exatamente `Sabrinaliimma.github.io`. Se ele já existir, use esse repositório.
2. Extraia o ZIP e envie **os arquivos dentro da pasta** para a raiz do repositório: `index.html`, `style.css`, `script.js`, `i18n.js`, `README.md` e a pasta `assets`. O `index.html` precisa aparecer ao lado de `README.md` na página principal do repositório. Não envie apenas o ZIP nem uma pasta que contenha esses arquivos.
3. Abra **Settings → Pages → Build and deployment**. Em **Source**, escolha **Deploy from a branch**; selecione `main` e `/(root)` e clique **Save**.
4. Aguarde o GitHub mostrar a publicação e abra `https://sabrinaliimma.github.io/`. Esse endereço só funcionará após a publicação. O navegador normalmente carrega o `index.html` automaticamente, sem precisar exibir o nome do arquivo.

## Links das demonstrações

Os oito cartões agora mostram imagens reais dos projetos e abrem as demonstrações publicadas. Os links atuais estão em `index.html` (botões dos cartões) e em `script.js` (janela de detalhes). Quando publicar uma nova versão, troque o endereço nos dois lugares. Para os sites estáticos, um link do GitHub Pages pode ficar assim:

```js
passo: 'https://SEU-USUARIO.github.io/passo-leve/index.html'
```

GitHub Pages hospeda arquivos estáticos. Os projetos Vexa, LedgerFlow e Nexa Invest têm API e banco de dados; a versão interativa completa precisa permanecer em hospedagem que execute o backend. O Insight Pipeline inclui FastAPI e PostgreSQL para execução completa, mas a demonstração publicada é uma versão React que processa CSV localmente no navegador.

## Seus perfis profissionais

No início de `script.js`, preencha `socialLinks.linkedin` e `socialLinks.github` com os endereços completos dos seus perfis. Os ícones aparecerão no topo do portfólio. Evite usar perfis de outra pessoa com nome parecido.

## Editar no VS Code

- `index.html`: textos e estrutura da página.
- `style.css`: cores, fontes e layout.
- `script.js`: filtros, detalhes técnicos, links das demonstrações e perfis profissionais.
- `i18n.js`: traduções do portfólio para português, inglês, espanhol e alemão. A escolha é guardada neste navegador.
- `assets/*-site.jpg`: imagens das interfaces reais dos oito projetos.
- `assets/sabrina-lima.webp`: foto de perfil.

Os projetos são demonstrações com marcas e dados fictícios; não representam serviços, atendimentos ou transações reais. O portfólio não utiliza servidor ou banco de dados.
