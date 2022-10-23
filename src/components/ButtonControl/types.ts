export type ButtonType = 'button' | 'reset' | 'submit';

export type ButtonControlProps = {
  type: ButtonType;
  name?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
  disabled: boolean;
};
