# vic-felas

Minha Linktree pessoal, uma página única com meus links, estilizada como um terminal Linux (neofetch-style).

🔗 **Live:** _adicione aqui o link do GitHub Pages ou Vercel depois do deploy_

## Preview

A página simula uma janela de terminal `zsh`, com um resumo estilo `neofetch` (ASCII art + infos) e os links listados como `$ ls ~/links`.

## Stack

- HTML
- CSS (variáveis CSS puras, sem framework)
- JavaScript vanilla

## Como editar os links

Os links ficam em `script.js`, no array `links`. Basta editar `label`, `url`, `path` e `color` de cada item:

```js
const links = [
  { label: "github", url: "https://github.com/vicbaltazar", path: "github.com/vicbaltazar", color: "var(--sage)" },
  // ...
];
```

## Rodando localmente

Não tem build nem dependências — é só abrir o `index.html` no navegador, ou usar a extensão Live Server do VS Code.

---

Feito por [Vitória Baltazar](https://github.com/vicbaltazar).