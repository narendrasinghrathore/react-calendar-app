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

/**
 * Styles for ul in EventListComponent
 */
const eventListUL: CSSProperties = {
  color: "black",
  overflowY: "auto",
  margin: 0,
  padding: 0,
  height: "75%",
  overflowX: "hidden",
  maxWidth: "250",
};

const eventListLI: CSSProperties = {
  listStyle: "none",
  margin: "3px 0",
  padding: "0 0 0 5px",
  textOverflow: "ellipsis",
  borderLeft: "3px solid green",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

export {
  cards,
  cardsContainer,
  cardsContainerLayout,
  eventListUL,
  eventListLI,
};
