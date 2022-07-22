import React from "react";

import LogoSmll from "../assets/img/logo-pequeno.png";

export default function Topo() {
  return (
    <>
      <div className="flshtop flex">
        <img src={LogoSmll} alt="logo"></img>
        <h2 className="righteous">ZapRecall</h2>
      </div>
    </>
  );
}
