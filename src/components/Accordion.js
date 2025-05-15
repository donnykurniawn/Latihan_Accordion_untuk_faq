import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setOnOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          number={index + 1}
          question={faq.question}
          answer={faq.answer}
          curOpen={curOpen}
          onOpen={setOnOpen}
          key={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
