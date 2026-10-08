/* Questões e gabaritos (site estático: não precisa de servidor). Edite aqui para mudar os exercícios. */
const QUESTOES = [
  {
    "id": 1,
    "tipo": "alternativas",
    "titulo": "Questão 1",
    "enunciado": "Indique a alternativa em que há erro de colocação pronominal.",
    "alternativas": [
      {
        "letra": "a",
        "texto": "Ninguém viu-o sair para o trabalho."
      },
      {
        "letra": "b",
        "texto": "Alguém o viu sair esta manhã."
      },
      {
        "letra": "c",
        "texto": "Não o vejo desde ontem."
      },
      {
        "letra": "d",
        "texto": "Foram eles que o viram."
      },
      {
        "letra": "e",
        "texto": "Certamente o viram sair esta manhã."
      }
    ],
    "gabarito": "a",
    "correcao": "Ninguém o viu sair para o trabalho.",
    "explicacao": "A próclise (pronome antes do verbo) é utilizada quando a oração contém palavras que expressam negação, tal como “ninguém”."
  },
  {
    "id": 2,
    "tipo": "classificacao",
    "titulo": "Questão 2",
    "enunciado": "Classifique cada frase em próclise, mesóclise ou ênclise.",
    "opcoes": [
      "Próclise",
      "Mesóclise",
      "Ênclise"
    ],
    "itens": [
      {
        "letra": "a",
        "texto": "Onde te deram os livros usados?",
        "gabarito": "Próclise",
        "explicacao": "A palavra interrogativa “onde” no início da oração atrai o pronome."
      },
      {
        "letra": "b",
        "texto": "Tinham-lhe chamado antes do almoço.",
        "gabarito": "Ênclise",
        "explicacao": "Não há palavra atrativa antes do verbo, então o pronome vem depois dele."
      },
      {
        "letra": "c",
        "texto": "Todos lhe aconselham a ficar.",
        "gabarito": "Próclise",
        "explicacao": "O pronome indefinido “todos” atrai o pronome."
      },
      {
        "letra": "d",
        "texto": "Vender-lhes-ei todos os quadros que pintei.",
        "gabarito": "Mesóclise",
        "explicacao": "O verbo está no futuro do presente (venderei) e não há palavra que atraia a próclise, então o pronome vai no meio do verbo."
      },
      {
        "letra": "e",
        "texto": "O autor, cujo livro nos deu.",
        "gabarito": "Próclise",
        "explicacao": "O pronome relativo “cujo” atrai o pronome."
      },
      {
        "letra": "f",
        "texto": "Quem nos convidou?",
        "gabarito": "Próclise",
        "explicacao": "A palavra interrogativa “quem” no início da oração atrai o pronome."
      },
      {
        "letra": "g",
        "texto": "Esteve contando-me os pormenores da festa.",
        "gabarito": "Ênclise",
        "explicacao": "“Contando” é um gerúndio (oração reduzida de gerúndio), caso em que se usa a ênclise."
      },
      {
        "letra": "h",
        "texto": "Levaram-na para casa.",
        "gabarito": "Ênclise",
        "explicacao": "O verbo, fora do futuro, está no início da oração e não há palavra atrativa."
      }
    ]
  },
  {
    "id": 3,
    "tipo": "alternativas",
    "titulo": "Questão 3",
    "enunciado": "Complete a frase: Senhores, __________ quando __________.",
    "alternativas": [
      {
        "letra": "a",
        "texto": "me avisem, telefonarem-vos"
      },
      {
        "letra": "b",
        "texto": "avisem-me, telefonarem-vos"
      },
      {
        "letra": "c",
        "texto": "avisem-me, vos telefonarem"
      },
      {
        "letra": "d",
        "texto": "me avisem, vos telefonarem"
      }
    ],
    "gabarito": "c",
    "correcao": "Senhores, avisem-me quando vos telefonarem.",
    "explicacao": "A ênclise (pronome depois do verbo) deve ser usada quando a oração contém verbo no imperativo afirmativo, como “avisem-me”. Por sua vez, a próclise (pronome antes do verbo) deve ser usada quando a oração contém advérbio, pois o advérbio atrai o pronome, como é o caso de “quando”."
  },
  {
    "id": 4,
    "tipo": "alternativas",
    "titulo": "Questão 4",
    "enunciado": "Indique a opção em que há erro na colocação do pronome oblíquo átono.",
    "alternativas": [
      {
        "letra": "a",
        "texto": "Tampouco nos visita nas férias."
      },
      {
        "letra": "b",
        "texto": "Quem atendeu-lhe?"
      },
      {
        "letra": "c",
        "texto": "Isto me traz boas recordações."
      },
      {
        "letra": "d",
        "texto": "Ainda que nos convidem, será tarde."
      },
      {
        "letra": "e",
        "texto": "Cozinhem-lhe o seu prato favorito."
      }
    ],
    "gabarito": "b",
    "correcao": "Quem lhe atendeu?",
    "explicacao": "As palavras interrogativas que começam as orações atraem o pronome, que por esse motivo deve ser colocado antes do verbo (próclise)."
  },
  {
    "id": 5,
    "tipo": "alternativas",
    "titulo": "Questão 5",
    "enunciado": "Complete a frase: Nada __________ conter.",
    "alternativas": [
      {
        "letra": "a",
        "texto": "poderia-a"
      },
      {
        "letra": "b",
        "texto": "poder-lhe-ia"
      },
      {
        "letra": "c",
        "texto": "a poderia"
      },
      {
        "letra": "d",
        "texto": "poderia a"
      }
    ],
    "gabarito": "c",
    "correcao": "Nada a poderia conter.",
    "explicacao": "Apesar de o verbo estar conjugado no futuro do pretérito, um dos casos em que se usa a mesóclise (pronome no meio do verbo), a oração contém uma palavra que expressa negação e que, por isso, atrai a próclise (pronome antes do verbo). Como o uso da próclise deve ser priorizado, a oração fica: Nada a poderia conter."
  }
];
