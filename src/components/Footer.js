import React from "react";

export default function Footer({ qtdPerguntas }) {
  return (
    <>
      <div className="footer flex">
        <h3 className="recursive">0/{qtdPerguntas} CONCLUÍDOS</h3>
      </div>
    </>
  );
}
