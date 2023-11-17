import React from 'react';
import { PasswordInput } from '@mantine/core';

type TextInputPasswordProps = {
  label?: string;
  placeHolder?: string;
  valueKey?: string;
  form: any; // Tipo de form puede variar según la implementación real
  extraClassname?: any; // Tipo de extraClassname puede variar
}

const TextInputPassword = ({
  label = "Password",
  placeHolder = "Password",
  valueKey = "password",
  form,
  extraClassname = {}
}: TextInputPasswordProps) => (
    <PasswordInput
      label={label}
      placeholder={placeHolder}
      {...form.getInputProps(valueKey)}
      {...extraClassname}
      className='my-3'
    />
  );
export default TextInputPassword;
