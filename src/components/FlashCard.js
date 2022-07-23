import React, { useState } from "react";
import { PlayOutline } from "react-ionicons";

import Setinha from "../assets/img/setinha.png";

export default function FlashCard({
  question,
  answer,
  posicao,
  icons,
  setIcons,
}) {
  const [iniciado, setIniciado] = useState(false);
  const [respondido, setRespondido] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  return (
    <>
      <div className="deck flex">
        {!iniciado && !respondido && (
          <div className="flashcard flex recursive">
            <h3>Pergunta {posicao}</h3>
            <PlayOutline
              onClick={() => setIniciado(true)}
              color={"#333"}
              height="23px"
              width="20px"
            />
          </div>
        )}

        {iniciado && !respondido && (
          <div className="questionCard recursive">
            <p>{question}</p>
            <img
              onClick={() => setRespondido(true)}
              src={Setinha}
              alt="setinha"
            ></img>
          </div>
        )}

        {iniciado && respondido && !finalizado && (
          <div className="answerCard recursive">
            <p>{answer}</p>
            <div className="answers flex">
              <div className="answerEsqueci flex recursive">
                <p>Não lembrei</p>
              </div>
              <div className="answerQuase flex recursive">
                <p>Quase não lembrei</p>
              </div>
              <div className="answerZap flex recursive">
                <p>Zap!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
