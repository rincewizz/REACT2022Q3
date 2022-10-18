import InputControl from './InputControl';

export type InputType = 'text' | 'checkbox' | 'file' | 'radio' | 'date' | 'switcher';

export type InputControlProps = {
  type: InputType;
  name: string;
  id?: string;
  className?: string;
  description?: string;
  onChangeInputControll: (control: InputControl) => void;
  changeHandler?: (event: React.ChangeEvent) => void;
};
