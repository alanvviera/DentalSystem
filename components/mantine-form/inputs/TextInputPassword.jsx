import { PasswordInput } from '@mantine/core'
import React from 'react'

function TextInputPassword({ label = "Password", placeHolder = "Password", valueKey = "password", form, extraClassname = {} }) {
  return (
    <PasswordInput
      label={label}
      placeholder={placeHolder}
      {...form.getInputProps(valueKey)}
      {...extraClassname}
      className='my-3'
    />
  )
}

export default TextInputPassword