import { useForm } from '@mantine/form';
import { Button, Box, Title } from '@mantine/core';
import { validateAge, validateEmail, validateName } from './valuesValidate';
import TextInputText from './inputs/TextInputText';
import TextInputNumber from './inputs/TextInputNumber';
import TextInputPassword from './inputs/TextInputPassword';
import { typeInputForm } from './customMantineInput';

export default function MantineForm({ initialValuesForKeys = { name: '', email: '', age: 0 }, validateForKeys = {
    name: validateName,
    email: validateEmail,
    age: validateAge
}, onSubmit = () => { }, listCustomInputMantine = [], labelSubmit, title = "",colorSubmit="blue",extraClass="" } ) {
    const form = useForm({
        initialValues: { ...initialValuesForKeys },
        // functions will be used to validate values at corresponding key
        validate: { ...validateForKeys },
    });
// maw={340} mx="auto"
    return (
        <Box className={`bg-gradient-to-b from-cyan-100 via-sky-200 to-blue-200 p-3 w-full min-h-screen md:w-60 md:min-h-min ${extraClass}`}>
            <Title className='text-center' order={4}>{title}</Title>
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