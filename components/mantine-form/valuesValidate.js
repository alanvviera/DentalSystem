
const validateName = (value) => {
    return (value.length < 2 ? 'El nombre debe de tener mínimo 5 letras' : null);
}

const validaFieldsNotEmpty = (value) => {
    return (value.length < 4 ? "Por favor llene el campo solicitado" : null);
}

const validateEmail = (value) => {
    return (/^\S+@\S+$/.test(value) ? null : 'Correo inválido');
}

const validateAge = (value) => {
    return (value < 18 ? 'Su edad debe de ser mayor a 18 años' : null);
}

const validateNumberInteger = (value) => {
    return (/^\d+$/.test(value) ? null : "Por favor seleccione un número");
}

const validatePrice = (value)=>{
    return (/(\-?\d+\.?\d{0,2})/.test(value)?null:"Por favor ingrese un precio correcto");
}

const validatePassword = (value, values) => {
    return (value !== values.password ? 'Las contraseñas no coinciden' : (value.length === 0 || values.password === 0) ? "Las contraseñas no pueden estar vacías" : null);
}

const allValuesAvailable = (value) => null;

const validateDate = (value) => {

    return ((value === null || value === undefined || value === "") ? "Por favor seleccione una fecha" : null);
}
const validateNumber = (value) => {
    return ((value === null || value === undefined || value === "NaN" || value === "") ? "Por favor seleccione una hora" : null);
}

const validateNumberTel = (value) => {
    return (/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(value) ? null : "Por favor ingrese un número válido");
}

export {
    validateName,
    validateEmail,
    validatePrice,
    validateAge,
    validatePassword,
    allValuesAvailable,
    validateDate,
    validateNumber,
    validaFieldsNotEmpty,
    validateNumberInteger,
    validateNumberTel
}