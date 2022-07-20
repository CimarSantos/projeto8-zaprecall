import React from "react";

import LogoSmll from "../assets/img/logo-pequeno.png";

import FlashCard from "./FlashCard";
import Footer from "./Footer";

export default function TelaFlashcards() {
  return (
    <>
      <div className="flashcardSrc">
        <div className="flshtop flex">
          <img src={LogoSmll} alt="logo"></img>
          <h2 className="righteous">ZapRecall</h2>
        </div>
        <div className="deck">
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </div>
        <Footer />
      </div>
    </>
  );
}
