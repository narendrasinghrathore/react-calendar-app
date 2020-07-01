import { CSSProperties } from "react";

/**
 * Constructs a type with all properties of T set to optional.
 * This utility will return a type that represents
 * all subsets of a given type
 */
type MyStyles = Partial<CSSProperties>;

const cardsContainerLayout: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const cards: CSSProperties = {
  boxShadow: "2px 2px 1px 0px #999",
  margin: 3,
  padding: 10,
  borderRadius: 3,
  width: 50,
  height: 50,
};

const cardsContainer: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};

export { cards, cardsContainer, cardsContainerLayout };
