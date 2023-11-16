
const validateName = (value) => {
    return (value.length < 2 ? 'El nombre debe de tener minimo 5 letras' : null);
}

const validateEmail = (value) => {
    return (/^\S+@\S+$/.test(value) ? null : 'Correo invalido');
}

const validateAge = (value) => {
    return (value < 18 ? 'Su edad debe de ser mayor a 18 años' : null);
}

const validatePassword = (value, values) => {
    return (value !== values.password ? 'Las contraseñas no coinciden' : (value.length === 0 || values.password === 0) ? "Las contraseñas no pueden estar vacias" : null);
}

const allValuesAvailable = (value) => null;

const validateDate = (value) => {

    return ((value === null || value === undefined || value === "") ? "Por favor seleccione una fecha" : null);
}


export {
    validateName,
    validateEmail,
    validateAge,
    validatePassword,
    allValuesAvailable,
    validateDate
}