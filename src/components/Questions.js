import React from "react";

import setinha from "../assets/img/setinha.png";

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

function QuestionCard({ Q }) {
  return (
    <>
      <div className="questionCard recursive">
        <p>{Q}</p>
        <img src={setinha} alt="viraCarta"></img>
      </div>
    </>
  );
}

export default function Questions() {
  return (
    <>
      {questions.map((question) => (
        <QuestionCard Q={question.Q} />
      ))}
    </>
  );
}
