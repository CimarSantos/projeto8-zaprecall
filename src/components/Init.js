import React from "react";
import Logo from "../assets/img/logo.png";

export default function Init({ setTela }) {
  return (
    <>
      <div className="init">
        <img src={Logo} alt="logo"></img>
        <h1 className="righteous">ZapRecall</h1>
        <button onClick={setTela}>Iniciar Recall!</button>
      </div>
    </>
  );
}
