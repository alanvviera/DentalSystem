import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';


const TextDataPicker = ({ label = "date", placeHolder = "date", valueKey = "date", form, extraClassname = {} }) => {
  const [value, setValue] = useState(null);

  return (
    <DatePickerInput
      label={label}
      placeholder={placeHolder}
      value={value}
      onChange={(dateNumber) => {

        form.setValues({
          [valueKey]: dateNumber
        });

        setValue(dateNumber);

      }}
      minDate={new Date()}
      error={form.getInputProps(valueKey)["error"]}
    />
  )
}

export default TextDataPicker