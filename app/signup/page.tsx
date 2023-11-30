"use client";
import { useForm } from "../../hooks/useForm";
import Background from "../../components/Background";
import CustomForm from "../../components/form/CustomForm";
import { CustomInput } from "../../components/form/CustomInput";
import { CustomInputPassword } from "../../components/form/CustomInputPassword";
import { patternEmail, patternNumberTel, patternPassword, patternUser } from "../../constants/formPattern";
import { LoginAccount } from "../../components/signup/LoginAccount";
import { CustomAlert } from "../../components/CustomAlert";
import { Space } from "@mantine/core";


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
    numTel,
  } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    user: "",
    showPassword: false,
    showConfirmPassword: false,
    showPasswordNotMatch: false,
    numTel: ""
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

  async function onSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      showMessageOfError(true);
      return;
    }

    showMessageOfError(false);

    // Crear un objeto que represente los datos del nuevo usuario
    const newUser = {
      name: user,
      email,
      password,
    };

    try {
      // Realiza una solicitud POST a la API utilizando fetch
      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      // Verifica la respuesta de la API
      if (response.status === 201) {
        // Registro exitoso, puedes redirigir al usuario a la página de inicio de sesión u realizar otras acciones
        console.log("Registro exitoso");
        cleanFields();
      } else {
        // La API respondió con un error, muestra un mensaje de error al usuario
        const responseData = await response.json(); // Lee el cuerpo de la respuesta en formato JSON si lo hay
        console.error("Error en el registro:", responseData);
        // Puedes mostrar el mensaje de error en un componente de alerta, por ejemplo.
      }
    } catch (error) {
      // Ocurrió un error en la solicitud
      console.error("Error en la solicitud:", error);
      // Puedes mostrar un mensaje de error genérico en este caso.
    }
  }

  return (
    <main className="relative">
      <Background />
      <CustomForm
        onSubmit={onSubmit}
        title={"Regístrate como empleado"}
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
          <CustomInput
            type={"tel"}
            placeholder={"Número de telefono; ejem: 646-123-45-67"}
            name={"numTel"}
            formTextError={"Por favor ingrese un telefono válido."}
            onChange={onChange}
            value={numTel}
            pattern={patternNumberTel}
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

        bottomComponent={<div>
          <LoginAccount extraClass="pt-3 pb-3" />
          <LoginAccount title="Registrate como doctor " subtile="Registrate" href="/signup-doctor"/>
        </div>}
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
