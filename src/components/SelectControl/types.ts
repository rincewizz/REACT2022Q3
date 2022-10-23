import { FieldValues, UseFormRegister } from 'react-hook-form';

export type SelectControlProps = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues | undefined;
  required: boolean;
  validationSchema: FieldValues;
  children: React.ReactNode;
};
