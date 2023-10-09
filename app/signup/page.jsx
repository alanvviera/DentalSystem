"use client";
import { useForm } from "@/hooks/useForm";
import Background from "@/components/Background";
import CustomForm from "@/components/form/CustomForm";
import { CustomInput } from "@/components/form/CustomInput";
import { CustomInputPassword } from "@/components/form/CustomInputPassword";
import { patternEmail, patternPassword, patternUser } from "@/constants/formPattern";
import { LoginAccount } from "@/components/signup/LoginAccount";
import { CustomAlert } from "@/components/CustomAlert";

function SignUp() {
  const {
    email,
    password,
    confirmPassword,
    user,
    showPassword,
    showConfirmPassword,
    showPasswordNotMatch,
    onChange,
    cleanFields,
  } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    user: "",
    showPassword: false,
    showConfirmPassword: false,
    showPasswordNotMatch: false,
  });

  const toggleShowPassword = (name, value) => {
    onChange({
      target: {
        name,
        value,
      },
    });
  };

  const showMessageOfError = (value) => {
    onChange({
      target: {
        name: "showPasswordNotMatch",
        value: value,
      },
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    // This is the code that is executed when the validations are correct and the form submit is executed
    if (password != confirmPassword) {
      showMessageOfError(true);
      return;
    }
    showMessageOfError(false);

    console.log(
      `This is the email: ${email}, this is the password: ${password}, this is the confirmPassword: ${confirmPassword}, this is the user: ${user}`
    );
    cleanFields();
  }

  return (
    <main>
      <Background />
      <CustomForm
        onSubmit={onSubmit}
        title={"Regístrate"}
        subTile={"Crea una cuenta gratis con tu correo."}
        textSubmit={"Regístrate"}
        textForgetPassword={false}
        inputsForm={[
          <CustomInput
            type={"text"}
            placeholder={"Nombre completo"}
            name={"user"}
            formTextError={"El nombre debe de contener mínimo 4 caracteres."}
            onChange={onChange}
            value={user}
            pattern={patternUser}
          />,
          <CustomInput
            type={"email"}
            placeholder={"Correo electrónico"}
            name={"email"}
            formTextError={"Por favor ingrese un correo válido."}
            onChange={onChange}
            value={email}
            pattern={patternEmail}
          />,
          <CustomInputPassword
            showPassword={showPassword}
            name={"password"}
            placeholder={"Contraseña"}
            onChange={onChange}
            password={password}
            pattern={patternPassword}
            placeholderError={"La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."}
            toggleShowPassword={() => {
              toggleShowPassword("showPassword", !showPassword);
            }}
          />,
          <CustomInputPassword
            showPassword={showConfirmPassword}
            name={"confirmPassword"}
            placeholder={"Confirme la contraseña"}
            onChange={onChange}
            password={confirmPassword}
            pattern={patternPassword}
            placeholderError={"La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial."}
            toggleShowPassword={() => {
              toggleShowPassword(
                "showConfirmPassword",
                !showConfirmPassword
              );
            }}
          />
        ]
        }
        bottomComponent={<LoginAccount showPasswordNotMatch={showPasswordNotMatch} />}
        topComponent={<CustomAlert
          showAlert={showPasswordNotMatch}
          title={"Lo sentimos"}
          subtile={"Las contraseñas no coinciden."}
        />
      
      }
      />
    </main>
  );
}

export default SignUp;
