export type ButtonDesings = "primary" | "secondary" | "tertiary";

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  design: ButtonDesings;
}
