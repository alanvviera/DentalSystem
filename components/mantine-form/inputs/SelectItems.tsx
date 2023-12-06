import { Select } from '@mantine/core';


export default function SelectItems({ label, placeHolder, dataList = [], form, extraClassname = {}, valueKey}) {
    return (
        <Select
            label={label}
            placeholder={placeHolder}
            data={dataList}
            {...form.getInputProps(valueKey)}
            {...extraClassname}
            className='my-3'
        />
    );
}