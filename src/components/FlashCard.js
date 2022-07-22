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
      <div className="deck">
        <div className="flashcard flex recursive">
          {!iniciado && !respondido && (
            <>
              <h3>Pergunta {posicao}</h3>
              <PlayOutline
                onClick={() => setIniciado(true)}
                color={"#333"}
                height="23px"
                width="20px"
              />
            </>
          )}
        </div>
        {iniciado && !respondido && (
          <>
            <div className="questionCard recursive">
              <p>{question}</p>
              <img src={Setinha} alt="setinha"></img>
            </div>
          </>
        )}
      </div>
    </>
  );
}
