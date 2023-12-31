import React, { useState } from 'react';
import { DatePickerInput, DatesProvider } from '@mantine/dates';

type TextDataPickerProps = {
  label?: string;
  placeHolder?: string;
  valueKey?: string;
  form: any; 
  extraClassname?: any;
  initialDate?: Date | null;
  minDate?: Date
}

const TextDataPicker = ({
  label = "date",
  placeHolder = "date",
  valueKey = "date",
  form,
  extraClassname = {},
  initialDate = null,
  minDate
}: TextDataPickerProps) => {
  const [value, setValue] = useState<Date | null>(initialDate);

  return (
    <DatesProvider settings={{ locale: 'mx', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}>
      <DatePickerInput
        label={label}
        placeholder={placeHolder}
        value={value}
        minDate={minDate}
        onChange={(dateNumber) => {
          form.setValues({
            [valueKey]: dateNumber.getTime()
          });

          setValue(dateNumber);
        }}
        // minDate={new Date()}
        error={form.getInputProps(valueKey)["error"]}
        {...extraClassname}
      />
    </DatesProvider>
  );
};

export default TextDataPicker;
