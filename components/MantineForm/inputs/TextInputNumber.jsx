import { TextInput,NumberInput } from '@mantine/core'
import React from 'react'

function TextInputNumber({label="Age",placeHolder="Age", valueKey="age",form,extraClassname={}}) {
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
  )
}

export default TextInputNumber