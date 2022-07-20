import React from "react";
import { PlayOutline } from "react-ionicons";

export default function FlashCard() {
  return (
    <>
      <div className="flashcard flex">
        <h3>Pergunta X</h3>
        <PlayOutline color={"#333"} height="23px" width="20px" />
      </div>
    </>
  );
}
