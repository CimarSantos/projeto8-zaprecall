import React from "react";
import { PlayOutline } from "react-ionicons";

export default function FlashCard({ key, question, answer, posicao }) {
  return (
    <>
      <div className="flashcard flex recursive">
        <h3>Pergunta {posicao}</h3>
        <PlayOutline color={"#333"} height="23px" width="20px" />
      </div>
    </>
  );
}
