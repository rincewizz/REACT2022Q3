import SelectControl from './SelectControl';

export type SelectControlProps = {
  children: React.ReactNode;
  name: string;
  id?: string;
  className?: string;
  onChangeInputControll: (control: SelectControl) => void;
  changeHandler?: (event: React.ChangeEvent) => void;
};
