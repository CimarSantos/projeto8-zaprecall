import React from "react";
import { PlayOutline } from "react-ionicons";

import Questions from "./Questions";

export default function FlashCard({ Q }) {
  return (
    <>
      <div className="flashcard flex recursive">
        <h3>Pergunta {Questions.length + 1}</h3>
        <PlayOutline color={"#333"} height="23px" width="20px" />
      </div>
    </>
  );
}
