/* ===== Frontend: exercícios + destaque do menu ===== */

const listaEl = document.getElementById("lista-questoes");
const placarEl = document.getElementById("placar");
const placarAcertos = document.getElementById("placar-acertos");
const placarTotal = document.getElementById("placar-total");
const placarResp = document.getElementById("placar-resp");
const btnReiniciar = document.getElementById("btn-reiniciar");

let questoes = [];
const resultados = new Map(); // chave -> true (acertou) | false (errou)

/* ---------- utilitários ---------- */

/** Cria elementos de forma segura (sem innerHTML). */
function el(tag, props = {}, ...filhos) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") e.className = v;
    else if (k === "text") e.textContent = v;
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const f of filhos.flat()) {
    if (f == null) continue;
    e.append(f.nodeType ? f : document.createTextNode(f));
  }
  return e;
}

function totalDeItens() {
  return questoes.reduce((n, q) => n + (q.tipo === "classificacao" ? q.itens.length : 1), 0);
}

function atualizarPlacar() {
  const acertos = [...resultados.values()].filter(Boolean).length;
  placarAcertos.textContent = acertos;
  placarTotal.textContent = totalDeItens();
  placarResp.textContent = resultados.size;
  placarEl.hidden = false;
}

/** Confere a resposta localmente (sem servidor). Retorna null se a resposta for inválida. */
function conferirResposta(q, corpo) {
  if (q.tipo === "alternativas") {
    const alt = q.alternativas.find((a) => a.letra === corpo.resposta);
    if (!alt) return null;
    const gab = q.alternativas.find((a) => a.letra === q.gabarito);
    return {
      correta: corpo.resposta === q.gabarito,
      gabarito: `${gab.letra}) ${gab.texto}`,
      correcao: q.correcao || null,
      explicacao: q.explicacao,
    };
  }
  if (q.tipo === "classificacao") {
    const item = q.itens.find((i) => i.letra === corpo.item);
    if (!item || !q.opcoes.includes(corpo.resposta)) return null;
    return {
      correta: corpo.resposta === item.gabarito,
      gabarito: item.gabarito,
      correcao: null,
      explicacao: item.explicacao,
    };
  }
  return null;
}

async function enviarResposta(idQuestao, corpo) {
  const q = QUESTOES.find((x) => x.id === idQuestao);
  const r = q && conferirResposta(q, corpo);
  if (!r) throw new Error("Resposta inválida");
  return r;
}

function montarFeedback(r) {
  const caixa = el("div", { class: `feedback ${r.correta ? "ok" : "erro"}`, role: "status" });
  caixa.append(el("p", { class: "status", text: r.correta ? "✓ Resposta correta!" : "✗ Resposta incorreta." }));
  caixa.append(el("p", {}, el("span", { class: "rotulo", text: "Gabarito: " }), r.gabarito));
  if (r.correcao) {
    caixa.append(el("p", {}, el("span", { class: "rotulo", text: "Correção: " }), r.correcao));
  }
  caixa.append(el("p", {}, el("span", { class: "rotulo", text: "Explicação: " }), r.explicacao));
  return caixa;
}

/* ---------- questões de alternativas ---------- */

function montarQuestaoAlternativas(q) {
  const chave = `q${q.id}`;
  const ul = el("ul", { class: "alternativas" });
  const botoes = [];
  let feedback = null;
  let btnRefazer = null;

  q.alternativas.forEach((alt) => {
    const btn = el(
      "button",
      { type: "button", class: "alt-btn", "data-letra": alt.letra },
      el("span", { class: "letra", text: alt.letra }),
      el("span", { class: "texto", text: alt.texto })
    );
    btn.addEventListener("click", async () => {
      botoes.forEach((b) => (b.disabled = true));
      try {
        const r = await enviarResposta(q.id, { resposta: alt.letra });
        btn.classList.add(r.correta ? "certa" : "errada");
        botoes.forEach((b) => { if (b !== btn) b.classList.add("apagada"); });
        resultados.set(chave, r.correta);
        feedback = montarFeedback(r);
        btnRefazer = el("button", { type: "button", class: "botao-sec refazer", text: "Tentar de novo", onclick: refazer });
        card.append(feedback, btnRefazer);
        atualizarPlacar();
      } catch (e) {
        botoes.forEach((b) => (b.disabled = false));
        alert("Não foi possível conferir a resposta.");
      }
    });
    botoes.push(btn);
    ul.append(el("li", {}, btn));
  });

  function refazer() {
    botoes.forEach((b) => { b.disabled = false; b.classList.remove("certa", "errada", "apagada"); });
    feedback?.remove();
    btnRefazer?.remove();
    resultados.delete(chave);
    atualizarPlacar();
  }

  const card = el(
    "article",
    { class: "questao" },
    el("h3", { text: q.titulo }),
    el("p", { class: "enunciado", text: q.enunciado }),
    ul
  );
  return card;
}

/* ---------- questão de classificação ---------- */

function montarQuestaoClassificacao(q) {
  const card = el(
    "article",
    { class: "questao" },
    el("h3", { text: q.titulo }),
    el("p", { class: "enunciado", text: q.enunciado })
  );

  q.itens.forEach((item) => {
    const chave = `q${q.id}:${item.letra}`;
    const botoes = [];
    let feedback = null;
    let btnRefazer = null;

    const grupo = el("div", { class: "opcoes-class" });
    q.opcoes.forEach((opcao) => {
      const btn = el("button", { type: "button", class: "alt-btn", text: opcao });
      btn.addEventListener("click", async () => {
        botoes.forEach((b) => (b.disabled = true));
        try {
          const r = await enviarResposta(q.id, { item: item.letra, resposta: opcao });
          btn.classList.add(r.correta ? "certa" : "errada");
          botoes.forEach((b) => { if (b !== btn) b.classList.add("apagada"); });
          resultados.set(chave, r.correta);
          feedback = montarFeedback(r);
          btnRefazer = el("button", { type: "button", class: "botao-sec refazer", text: "Tentar de novo", onclick: refazer });
          bloco.append(feedback, btnRefazer);
          atualizarPlacar();
        } catch (e) {
          botoes.forEach((b) => (b.disabled = false));
          alert("Não foi possível conferir a resposta.");
        }
      });
      botoes.push(btn);
      grupo.append(btn);
    });

    function refazer() {
      botoes.forEach((b) => { b.disabled = false; b.classList.remove("certa", "errada", "apagada"); });
      feedback?.remove();
      btnRefazer?.remove();
      resultados.delete(chave);
      atualizarPlacar();
    }

    const bloco = el(
      "div",
      { class: "item-class" },
      el("p", { class: "item-frase" }, el("span", { class: "letra", text: `${item.letra})` }), item.texto),
      grupo
    );
    card.append(bloco);
  });

  return card;
}

/* ---------- carregamento ---------- */

function renderizar() {
  listaEl.replaceChildren();
  resultados.clear();
  questoes.forEach((q) => {
    listaEl.append(q.tipo === "classificacao" ? montarQuestaoClassificacao(q) : montarQuestaoAlternativas(q));
  });
  atualizarPlacar();
}

function carregarExercicios() {
  questoes = QUESTOES;
  renderizar();
}

btnReiniciar.addEventListener("click", renderizar);

/* ---------- destaque do item atual no menu ---------- */

const links = [...document.querySelectorAll(".menu a")];
const secoes = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        links.forEach((a) => a.classList.toggle("ativo", a.getAttribute("href") === `#${entrada.target.id}`));
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
secoes.forEach((s) => observador.observe(s));

carregarExercicios();
