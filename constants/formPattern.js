// Regular expression pattern for validating an email address
const patternEmail = "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}";

// Regular expression pattern for validating a password with specific requirements
const patternPassword = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,30}$";

// Regular expression pattern for validating a user input with a minimum length of 4 characters
const patternUser = "(.{4,})";

// Export the regular expression patterns for external use
export {
    patternEmail,
    patternPassword,
    patternUser
}