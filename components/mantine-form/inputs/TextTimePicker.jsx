import { rem } from '@mantine/core';
import { DatesProvider, TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import dayjs from 'dayjs';
var utc = require('dayjs/plugin/utc')

const TextTimePicker = ({ label = "date", placeHolder = "date", valueKey = "date", form, extraClassname = {},initialDate }) => {

    return (
        <DatesProvider settings={{ locale: 'mx', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC', }}>
            <TimeInput
                label={label}
                defaultValue={initialDate&& `${dayjs(initialDate).utc().format("HH:mm")}`}
                placeholder={placeHolder}
                leftSection={<IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                onChange={(dateNumber) => {
                    form.setValues({
                        [valueKey]: dateNumber.target.valueAsNumber.toString()
                    });
                }}
                error={form.getInputProps(valueKey)["error"]}
            />
        </DatesProvider>

    );
}

export default TextTimePicker