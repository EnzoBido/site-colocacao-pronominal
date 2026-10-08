# Site: Introdução à colocação pronominal

Site 100% estático (HTML, CSS e JavaScript). **Não precisa de Node, servidor nem instalação.**

## Como abrir
- Localmente: dê duplo clique em `index.html` (ou em `frontend/index.html`).
- Online: publique no GitHub Pages ou no Netlify (veja abaixo).

## Estrutura
```
index.html              # redireciona para frontend/index.html
frontend/
├── index.html
├── css/style.css
└── js/
    ├── app.js          # lógica da página e correção dos exercícios
    └── exercicios.js   # questões e gabaritos (edite aqui)
```

## Publicar no GitHub Pages
1. Suba esta pasta para um repositório no GitHub (o `index.html` na raiz do repositório).
2. Settings → Pages → Source: "Deploy from a branch" → branch `main`, pasta `/ (root)` → Save.
3. Em ~1 minuto o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Publicar no Netlify
Em app.netlify.com: Add new site → Deploy manually → arraste esta pasta.
