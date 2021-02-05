import React from "react";
import { AccordionStyles } from "./AccordionStyles";

interface AccordionProps {
  title: String;
  children: JSX.Element | string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
}): JSX.Element => {
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);
  return (
    <AccordionStyles>
      <div
        className={`accordion-title ${isAccordionOpen ? "open" : ""}`}
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isAccordionOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </AccordionStyles>
  );
};
