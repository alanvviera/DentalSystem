import React from 'react';
import { TextInput, NumberInput } from '@mantine/core';

type TextInputNumberProps = {
  label?: string;
  placeHolder?: string;
  valueKey?: string;
  form: any; // Tipo de form puede variar según la implementación real
  extraClassname?: any; // Tipo de extraClassname puede variar
  allowDecimal?: boolean;
  maxValue?: number
}

const TextInputNumber = ({
  label = "Age",
  placeHolder = "Age",
  valueKey = "age",
  form,
  extraClassname = {},
  allowDecimal = true,
  maxValue = 99
}: TextInputNumberProps) => (
  <NumberInput
    allowNegative={false}
    mt="sm"
    label={label}
    placeholder={placeHolder}
    min={0}
    max={maxValue}
    {...form.getInputProps(valueKey)}
    {...extraClassname}
    className='my-3'
    allowDecimal={allowDecimal}
    {...extraClassname}

  />
);

export default TextInputNumber;
