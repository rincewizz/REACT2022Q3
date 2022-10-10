import ButtonControl from 'components/ButtonControl/ButtonControl';
import InputControl from 'components/InputControl/InputControl';
import SelectControl from 'components/SelectControl/SelectControl';
import React, { createRef, FormEvent } from 'react';
import { FormProp, FormState } from 'types/types';
import styles from './Form.module.scss';

export default class Form extends React.Component<FormProp, FormState> {
  form: React.RefObject<HTMLFormElement>;
  nameField: React.RefObject<InputControl>;
  dateField: React.RefObject<InputControl>;
  countryField: React.RefObject<SelectControl>;
  agreeField: React.RefObject<InputControl>;
  receiveNotificationsField: React.RefObject<InputControl>;
  fileField: React.RefObject<InputControl>;
  submitButton: React.RefObject<ButtonControl>;

  constructor(props: FormProp) {
    super(props);
    this.form = createRef();
    this.nameField = createRef();
    this.dateField = createRef();
    this.countryField = createRef();
    this.agreeField = createRef();
    this.receiveNotificationsField = createRef();
    this.fileField = createRef();
    this.submitButton = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isFirstChange: true,
      isError: false,
      valid: {
        name: true,
        date: true,
        country: true,
        agree: true,
        receiveNotifications: true,
        file: true,
      },
    };
  }

  disableButton() {
    const isValid =
      this.state.valid.name &&
      this.state.valid.date &&
      this.state.valid.file &&
      this.state.valid.agree &&
      this.state.valid.receiveNotifications;
    this.submitButton.current?.disable(!isValid || this.state.isFirstChange || this.state.isError);
  }

  formValidate(): boolean | undefined {
    const isNameValid =
      this.nameField.current?.validate((value: string | boolean) => {
        if (typeof value !== 'string') return;
        if (value.length < 2) return 'Name should be more than 3 letters';
        if (value.search(/^[a-zA-Z]+$/g) === -1) return 'Name should contain only alphabets';
        return '';
      }) ?? false;

    const isDateValid =
      this.dateField.current?.validate((value: string | boolean) => {
        if (typeof value !== 'string') return;
        if (!value.length) return 'Date is required';
        return '';
      }) ?? false;

    const isAgreeValid =
      this.agreeField.current?.validate((value: string | boolean) => {
        if (typeof value !== 'boolean') return;
        if (!value) return 'You should agree';
        return '';
      }) ?? false;

    const isReceiveNotificationsValid =
      this.receiveNotificationsField.current?.validate((value: string | boolean) => {
        if (typeof value !== 'string') return;
        if (!value) return 'You should choose answer';
        return '';
      }) ?? false;

    const isFileValid =
      this.fileField.current?.validate((value: string | boolean) => {
        if (typeof value !== 'boolean') return;
        if (!value) return 'You should choose image';
      }) ?? false;

    this.setState((prevState) => {
      return {
        valid: {
          ...prevState.valid,
          name: isNameValid,
          date: isDateValid,
          agree: isAgreeValid,
          receiveNotifications: isReceiveNotificationsValid,
          file: isFileValid,
        },
      };
    });

    return isNameValid && isDateValid && isAgreeValid && isFileValid && isReceiveNotificationsValid;
  }

  clearForm() {
    this.form.current?.reset();

    this.setState((prevState) => {
      return {
        ...prevState,
        isFirstChange: true,
        isError: false,
      };
    }, this.disableButton);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (this.formValidate()) {
      this.setState((prevState) => {
        return { ...prevState, isError: false };
      }, this.disableButton);
      let img;
      if (this.fileField.current?.input.current?.files) {
        img = URL.createObjectURL(this.fileField.current?.input.current?.files[0]);
      }
      this.props.createCard({
        name: String(this.nameField.current?.value),
        date: String(this.dateField.current?.value),
        agree: String(this.agreeField.current?.value),
        receiveNotifications: String(this.receiveNotificationsField.current?.value),
        country: this.countryField.current?.value,
        img: img,
      });
      this.clearForm();
    } else {
      this.setState((prevState) => {
        return { ...prevState, isError: true };
      }, this.disableButton);
    }
  }

  handleChange(control: InputControl | SelectControl) {
    const name = control.input.current?.name;

    if (name) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isFirstChange: false,
          isError: false,
          valid: { ...prevState.valid, [name]: true },
        };
      }, this.disableButton);
    }
  }

  render() {
    const {
      form,
      nameField,
      dateField,
      countryField,
      agreeField,
      receiveNotificationsField,
      fileField,
    } = this;
    return (
      <form action="" className={styles.form} ref={form} onSubmit={this.handleSubmit}>
        <label htmlFor="" className={styles.form__label}>
          Name:
          <InputControl
            type="text"
            ref={nameField}
            name="name"
            id=""
            className={styles.form__field}
            onChangeInputControll={this.handleChange}
          />
        </label>
        <label htmlFor="" className={styles.form__label}>
          Birthday:
          <InputControl
            type="date"
            ref={dateField}
            name="date"
            id=""
            className={styles.form__field}
            onChangeInputControll={this.handleChange}
          />
        </label>
        <label htmlFor="" className={styles.form__label}>
          Country:
          <SelectControl
            name="country"
            onChangeInputControll={this.handleChange}
            className={styles.form__field}
            ref={countryField}
          >
            <option value="USA">USA</option>
            <option value="Belarus">Belarus</option>
          </SelectControl>
        </label>
        <label htmlFor="agree" className={styles.form__label}>
          <InputControl
            type="checkbox"
            ref={agreeField}
            name="agree"
            id=""
            onChangeInputControll={this.handleChange}
            description="Agree to data processing"
          />
        </label>
        <label htmlFor="" className={styles.form__label}>
          I want to receive notifications about promo:
          <InputControl
            type="switcher"
            ref={receiveNotificationsField}
            name="receiveNotifications"
            id=""
            className={styles.form__field}
            onChangeInputControll={this.handleChange}
          />
        </label>
        <label htmlFor="" className={styles.form__label}>
          File upload :
          <InputControl
            type="file"
            ref={fileField}
            name="file"
            id=""
            className={styles.form__field}
            onChangeInputControll={this.handleChange}
          />
        </label>

        <div className={styles['form__button-wrap']}>
          <ButtonControl type="submit" ref={this.submitButton} className={styles.form__button}>
            Create Card
          </ButtonControl>
        </div>
      </form>
    );
  }
}
