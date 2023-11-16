import { TextInput } from '@mantine/core'
import React from 'react'

 function TextInputText({label="Name",placeHolder="Name", valueKey="name",form, extraClassname={}}) {
  return (
    <TextInput label={label} placeholder={placeHolder} {...form.getInputProps(valueKey)} {...extraClassname} className='my-3' />
  )
}

export default TextInputText