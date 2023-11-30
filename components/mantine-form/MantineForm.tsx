import React from 'react';
import { useForm } from '@mantine/form';
import { Button, Box, Title, Space } from '@mantine/core';
import { validateAge, validateEmail, validateName } from './valuesValidate';
import TextInputText from './inputs/TextInputText';
import TextInputNumber from './inputs/TextInputNumber';
import TextInputPassword from './inputs/TextInputPassword';
import { typeInputForm } from './customMantineInput';
import TextDataPicker from './inputs/TextDataPicker';
import TextTimePicker from './inputs/TextTimePicker';
import SelectItems from './inputs/SelectItems';

type MantineFormProps = {
  initialValuesForKeys?: {};
  validateForKeys?: {

  };
  onSubmit?: (form: any) => void; // Tipo de form puede variar según la implementación real
  listCustomInputMantine: any[]; // Tipo puede variar según la implementación real
  labelSubmit?: string;
  colorSubmit?: string;
  title?: string;
  extraClassName?: Object
}

const MantineForm = ({
  initialValuesForKeys = { name: '', email: '', age: 0 },
  validateForKeys = {

  },
  onSubmit = (value: any) => { },
  listCustomInputMantine = [],
  labelSubmit,
  colorSubmit = "blue",
  title,
  extraClassName
}: MantineFormProps) => {
  const form = useForm({
    initialValues: { ...initialValuesForKeys },
    // functions will be used to validate values at corresponding key
    validate: { ...validateForKeys },
  });

  return (
    <Box className={`w-full`}>
      {title && <Title className='text-center' order={4}>{title}</Title>}
      <form onSubmit={form.onSubmit(() => onSubmit(form))}>
        {listCustomInputMantine.map(inputMantine => {
          switch (inputMantine.typeInputForm) {
            case typeInputForm.TEXT:
              return (
                <TextInputText
                  key={inputMantine.valueKey}
                  {...inputMantine}
                  {...inputMantine.extraClassname}
                  form={form}
                  extraClassname={extraClassName}
                />
              );

            case typeInputForm.NUMBER:
              return (
                <TextInputNumber
                  key={inputMantine.valueKey}
                  {...inputMantine}
                  {...inputMantine.extraClassname}
                  form={form}
                  allowDecimal={inputMantine.allowDecimal}
                  maxValue={inputMantine.maxValue}
                  extraClassname={extraClassName}
                />
              );

            case typeInputForm.PASSWORD:
              return (
                <TextInputPassword
                  key={inputMantine.valueKey}
                  {...inputMantine}
                  {...inputMantine.extraClassname}
                  form={form}
                  extraClassname={extraClassName}
                />
              );

            case typeInputForm.DATEPICKER:
              return (
                <TextDataPicker
                  key={inputMantine.valueKey}
                  {...inputMantine}
                  {...inputMantine.extraClassname}
                  form={form}
                  extraClassname={extraClassName}
                  minDate={inputMantine.minDate}
                />
              );

            case typeInputForm.DATETIME:
              return (
                <TextTimePicker
                  key={inputMantine.valueKey}
                  {...inputMantine}
                  {...inputMantine.extraClassname}
                  form={form}
                  extraClassname={extraClassName}
                />
              );


            case typeInputForm.SELECTITEMS:
              return (
                <SelectItems
                  key={inputMantine.valueKey}
                  {...inputMantine}
                  {...inputMantine.extraClassname}
                  form={form}
                  extraClassname={extraClassName}
                  dataList={inputMantine.listItems}
                />
              );


            default:
              return <p>This typeInputForm doesn't exist: ${inputMantine.typeInputForm}</p>;
          }
        })}

        <Space h={"5px"} />

        {labelSubmit === undefined ? null : (
          <Button type="submit" mt="sm" color={colorSubmit} fullWidth>
            {labelSubmit}
          </Button>
        )}
      </form>
    </Box>
  );
};

export default MantineForm;