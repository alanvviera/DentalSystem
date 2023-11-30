import { Select } from '@mantine/core';

type SelectItemsProps = {
    label?: string;
    placeHolder?: string;
    dataList?: Array<string>;
    form?: any
    extraClassname?: any; // Tipo de extraClassname puede variar
    valueKey: string
}

export default function SelectItems({ label, placeHolder, dataList = [], form, extraClassname = {}, valueKey}: SelectItemsProps) {
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