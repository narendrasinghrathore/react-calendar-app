/**
 * Interface to use with Lazy loading component, to pass properties
 * for creating Skeleton like variant, width and height.
 */
export interface ILazyLoadingComponent {
  /**
   * https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
   */
  [index: string]: number | string | undefined;
  width?: number;
  height?: number;
  variant?: "text" | "rect" | "circle";
}
