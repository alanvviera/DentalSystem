import React from 'react';
import { TextInput, NumberInput } from '@mantine/core';

interface TextInputNumberProps {
  label?: string;
  placeHolder?: string;
  valueKey?: string;
  form: any; // Tipo de form puede variar según la implementación real
  extraClassname?: any; // Tipo de extraClassname puede variar
}

const TextInputNumber: React.FC<TextInputNumberProps> = ({
  label = "Age",
  placeHolder = "Age",
  valueKey = "age",
  form,
  extraClassname = {}
}) => {
  return (
    <NumberInput
      mt="sm"
      label={label}
      placeholder={placeHolder}
      min={0}
      max={99}
      {...form.getInputProps(valueKey)}
      {...extraClassname}
      className='my-3'
    />
  );
};

export default TextInputNumber;
