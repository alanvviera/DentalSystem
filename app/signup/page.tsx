"use client";
import { useForm } from "../../hooks/useForm";
import Background from "../../components/Background";
import CustomForm from "../../components/form/CustomForm";
import { CustomInput } from "../../components/form/CustomInput";
import { CustomInputPassword } from "../../components/form/CustomInputPassword";
import { patternDate, patternEmail, patternNumberTel, patternPassword, patternUser } from "../../constants/formPattern";
import { LoginAccount } from "../../components/signup/LoginAccount";
import { CustomAlert } from "../../components/CustomAlert";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

function SignUp() {
  const {
    email,
    password,
    confirmPassword,
    user,
    lastName,
    showPassword,
    showConfirmPassword,
    showPasswordNotMatch,
    onChange,
    cleanFields,
    address,
    numTel,
    sex,
    role,
    studyDegree
  } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    user: "",
    lastName: "",
    showPassword: false,
    showConfirmPassword: false,
    showPasswordNotMatch: false,
    address: "",
    numTel: "",
    sex: "",
    studyDegree:"",
    role:""
  });

  const router = useRouter();

  useEffect(() => {
    const session = getCookie("userType");
    if(session) {
      router.push("/menu");
    }
  }, [])

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
      last_name: lastName,
      email,
      password,
      phone: numTel,
      sex,
      address,
      role,
      study_degree: studyDegree
    };

    try {
      const response = await fetch("alt-api/signup/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.status === 201) {
        console.log("Registro exitoso");
        cleanFields();
        router.push("/login");

      } else {
        const responseData = await response.json();
        console.error("Error en el registro:", responseData);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
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
            placeholder={"Nombre"}
            name={"user"}
            formTextError={"El nombre debe de contener mínimo 4 caracteres."}
            onChange={onChange}
            value={user}
            pattern={patternUser}
          />,
          <CustomInput
            type={"text"}
            placeholder={"Apellidos"}
            name={"lastName"}
            formTextError={"El apellido debe de contener mínimo 4 caracteres."}
            onChange={onChange}
            value={lastName}
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
          <CustomInput
            type={"text"}
            placeholder={"Dirección"}
            name={"address"}
            formTextError={"Este campo no puede estar vacio"}
            onChange={onChange}
            value={address}
            pattern={patternUser}
          />,
          <CustomInput
            type={"text"}
            placeholder={"Sexo"}
            name={"sex"}
            formTextError={"Este campo no puede estar vacio"}
            onChange={onChange}
            value={sex}
            pattern={patternUser} />,

          <CustomInput
            type={"text"}
            placeholder={"Nivel de estudios"}
            name={"studyDegree"}
            formTextError={"Este campo no puede estar vacio."}
            onChange={onChange}
            value={studyDegree}
            pattern={patternUser}
          />,
          <CustomInput
            type={"text"}
            placeholder={"Cargo"}
            name={"role"}
            formTextError={"Este campo no puede estar vacio."}
            onChange={onChange}
            value={role}
            pattern={patternUser}
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
          <LoginAccount title="Registrate como cliente " subtile="Registrate" href="/signup-client" />
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
