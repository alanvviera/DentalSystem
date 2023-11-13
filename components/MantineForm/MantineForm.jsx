import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Title } from '@mantine/core';
import { validateAge, validateEmail, validateName } from './valuesValidate';
import TextInputText from './TextInputText';
import { typeInputForm } from './customMantineInput';
import TextInputNumber from './TextInputNumber';
import TextInputPassword from './TextInputPassword';

export default function MantineForm({ initialValuesForKeys = { name: '', email: '', age: 0 }, validateForKeys = {
    name: validateName,
    email: validateEmail,
    age: validateAge
}, onSubmit = () => { }, listCustomInputMantine = [], labelSubmit, title = "",colorSubmit="blue" }, ) {
    const form = useForm({
        initialValues: { ...initialValuesForKeys },
        // functions will be used to validate values at corresponding key
        validate: { ...validateForKeys },
    });

    return (
        <Box maw={340} mx="auto">
            <Title order={4}>{title}</Title>
            <form onSubmit={form.onSubmit(() => onSubmit(form))}>
                {
                    listCustomInputMantine.map(inputMantine => {
                        switch (inputMantine.typeInputForm) {
                            case typeInputForm.TEXT:
                                return <TextInputText
                                    key={inputMantine.valueKey}
                                    {
                                    ...inputMantine
                                    }
                                    {
                                    ...inputMantine.extraClassname
                                    }
                                    form={form}
                                />;

                            case typeInputForm.NUMBER:
                                return <TextInputNumber
                                    key={inputMantine.valueKey}
                                    {
                                    ...inputMantine
                                    }
                                    {
                                    ...inputMantine.extraClassname
                                    }
                                    form={form}
                                />;

                            case typeInputForm.PASSWORD:
                                return <TextInputPassword
                                    key={inputMantine.valueKey}
                                    {
                                    ...inputMantine
                                    }
                                    {
                                    ...inputMantine.extraClassname
                                    }
                                    form={form}
                                />;
                            default:
                                return <p>This typeInputForm don't exist: ${inputMantine.typeInputForm}</p>
                        }

                    })
                }
                {
                    labelSubmit === undefined ? null : (<Button type="submit" mt="sm" color={colorSubmit} >
                        {labelSubmit}
                    </Button>)
                }

            </form>
        </Box>
    );
}