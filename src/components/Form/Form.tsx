import ButtonControl from 'components/ButtonControl/ButtonControl';
import InputControl from 'components/InputControl/InputControl';
import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';
import { FormProp } from './types';
import { useForm, FieldValues } from 'react-hook-form';
import SwitcherControl from 'components/SwitcherControl/SwitcherControl';
import Notification from '../Notification/Notification';
import SelectControl from 'components/SelectControl/SelectControl';
import { v4 as uuidv4 } from 'uuid';

const validationOptions = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name should be more than 1 letters',
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯЁ]+$/,
      message: 'Name should contain only alphabets',
    },
  },
  date: {
    required: 'Date is required',
  },
  country: {
    required: 'County is required',
  },
  agree: {
    required: 'You should agree',
  },
  file: {
    required: 'You should choose image',
  },
  receiveNotifications: {
    required: 'You should choose answer',
  },
};

export default function Form({ createCard }: FormProp) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty, isValid, isSubmitted, isSubmitSuccessful },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' });

  const [isShowMessage, setIsShowMessage] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setValue('agree', '');
      setIsShowMessage(true);
      setTimeout(() => setIsShowMessage(false), 2000);
    }
  }, [isSubmitSuccessful]);

  const handleSuccess = ({
    name,
    date,
    agree,
    receiveNotifications,
    country,
    file,
  }: FieldValues) => {
    createCard({
      type: 'form',
      id: uuidv4(),
      name,
      date,
      agree: agree ? 'on' : 'off',
      receiveNotifications,
      country,
      img: URL.createObjectURL(file[0]),
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSuccess)} data-testid="form">
      <InputControl
        type="text"
        name="name"
        label="Name"
        errors={errors}
        register={register}
        validationSchema={validationOptions.name}
        required
      />
      <InputControl
        type="date"
        name="date"
        label="Birthday"
        errors={errors}
        register={register}
        validationSchema={validationOptions.date}
        required
      />
      <SelectControl
        name="country"
        label="Country"
        errors={errors}
        register={register}
        validationSchema={validationOptions.country}
        required
      >
        <option value="USA">USA</option>
        <option value="Belarus">Belarus</option>
      </SelectControl>
      <InputControl
        type="checkbox"
        name="agree"
        label="Agree to data processing"
        errors={errors}
        register={register}
        validationSchema={validationOptions.agree}
        required
      />
      <SwitcherControl
        name="receiveNotifications"
        label="I want to receive notifications about promo"
        errors={errors}
        register={register}
        validationSchema={validationOptions.receiveNotifications}
        required
      />
      <InputControl
        type="file"
        name="file"
        label="File upload"
        errors={errors}
        register={register}
        validationSchema={validationOptions.file}
        required
      />
      <div className={styles['form__button-wrap']}>
        <ButtonControl
          type="submit"
          disabled={!isDirty || (isDirty && !isValid && isSubmitted)}
          className={styles.form__button}
        >
          Create Card
        </ButtonControl>
      </div>

      {isShowMessage && <Notification type="message">Data has been saved</Notification>}
    </form>
  );
}
