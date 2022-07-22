import React, { useState } from "react";

import Topo from "./Topo";
import FlashCard from "./FlashCard";
import Footer from "./Footer";

const questions = [
  {
    Q: "O que é JSX?",
    R: "Uma extensão de linguagem do JavaScript",
  },
  {
    Q: "O React é __ ",
    R: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    Q: "Componentes devem iniciar com __",
    R: "letra maiúscula",
  },
  {
    Q: "Podemos colocar __ dentro do JSX",
    R: "expressões",
  },
  {
    Q: "O ReactDOM nos ajuda __",
    R: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    Q: "Usamos o npm para __",
    R: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    Q: "Usamos props para __",
    R: "passar diferentes informações para componentes",
  },
  {
    Q: "Usamos estado (state) para __",
    R:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

export default function TelaFlashcards() {
  const [icons, setIcons] = useState([]);
  return (
    <>
      <div className="flashcardSrc flex">
        <Topo />
        <div className="deck">
          {questions.map((question, index) => (
            <FlashCard
              key={index}
              question={question.Q}
              answer={question.R}
              posicao={index + 1}
              icons={icons}
              setIcons={setIcons}
            />
          ))}
        </div>
        <Footer icons={icons.length} qtdPerguntas={questions.length} />
      </div>
    </>
  );
}
