import React, { useState } from "react";

export default function AccordionItem({
  number,
  question,
  answer,
  curOpen,
  onOpen,
}) {
  const isOpen = number === curOpen;

  function handelToggle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ? ${isOpen ? "open" : ""}`} onClick={handelToggle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}
