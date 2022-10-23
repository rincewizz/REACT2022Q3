import { FieldValues, UseFormRegister } from 'react-hook-form';

export type SwitcherControlProps = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues | undefined;
  required: boolean;
  validationSchema: FieldValues;
};
