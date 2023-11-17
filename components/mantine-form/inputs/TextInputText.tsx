import React from 'react';
import { TextInput } from '@mantine/core';

type TextInputTextProps = {
  label?: string;
  placeHolder?: string;
  valueKey?: string;
  form: any; // Tipo de form puede variar según la implementación real
  extraClassname?: any; // Tipo de extraClassname puede variar
}

const TextInputText = ({
  label = "Name",
  placeHolder = "Name",
  valueKey = "name",
  form,
  extraClassname = {}
}:TextInputTextProps) => (
    <TextInput
      label={label}
      placeholder={placeHolder}
      {...form.getInputProps(valueKey)}
      {...extraClassname}
      className='my-3'
    />
  );

export default TextInputText;
