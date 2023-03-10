export type inputErrorMessage = string | undefined;

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  errorMessage?: inputErrorMessage;
}
