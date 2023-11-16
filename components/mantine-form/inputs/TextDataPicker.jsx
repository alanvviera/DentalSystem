import { useState } from 'react';
import { DatePickerInput, DatesProvider } from '@mantine/dates';


const TextDataPicker = ({ label = "date", placeHolder = "date", valueKey = "date", form, extraClassname = {}, initialDate=null }) => {
  const [value, setValue] = useState(initialDate);
  return (
    <DatesProvider settings={{ locale: 'mx', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
      <DatePickerInput
        label={label}
        placeholder={placeHolder}
        value={value}
        onChange={(dateNumber) => {

          form.setValues({
            [valueKey]: dateNumber.getTime().toString()
          });

          setValue(dateNumber);

        }}
        minDate={new Date()}
        error={form.getInputProps(valueKey)["error"]}
      />
    </DatesProvider>

  )
}

export default TextDataPicker