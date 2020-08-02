import { CSSProperties } from "react";

const cardsContainerLayout: CSSProperties = {
  display: "grid-inline",
  gridTemplateAreas: "auto auto auto auto",
};

const cards: CSSProperties = {
  boxShadow: "2px 2px 1px 0px #999",
  margin: 3,
  padding: 10,
  borderRadius: 3,
  width: "200px",
  height: "200px",
};

const cardsContainer: CSSProperties = {
  display: "grid",
  gridTemplateAreas: "auto auto auto auto auto",
  gridGap: "10px",
};

export { cards, cardsContainer, cardsContainerLayout };
