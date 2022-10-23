import { FieldValues, UseFormRegister } from 'react-hook-form';

export type InputType = 'text' | 'checkbox' | 'file' | 'radio' | 'date' | 'switcher';

export type InputControlProps = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues | undefined;
  required: boolean;
  type: InputType;
  validationSchema: FieldValues;
};
