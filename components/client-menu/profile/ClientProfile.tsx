"use client";
import React, { useEffect, useState } from 'react';
import MantineForm from '../../mantine-form/MantineForm';
import CustomInputMantine, { typeInputForm } from '../../mantine-form/customMantineInput';
import { allValuesAvailable, validaFieldsNotEmpty, validateDate, validateName, validateNumber, validateNumberTel } from '../../mantine-form/valuesValidate';
import SkeletonForm from '../../custom-skeleton/SkeletonForm';
import { notifications } from "@mantine/notifications";

const onSubmit = async (body) => {
  const bodyParse = {
 
    name: body.client,
    last_name: body.last_name,
    email: body.email,
    password: body.password,
    curp: body.curp,
    phone_number: body.phone_number,
    home_address: body.home_address,
    birthday: new Date(body.birthday),
    gender: body.gender
  };

  const response = await fetch(`/api/clientprofile`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(bodyParse),
  });
  const data = await response.json();
  if (data.error) {
    notifications.show({
      color: "red",
      title: "Error",
      message: "Al intentar actualizar el usuario.",
    })
  }
  else {
    notifications.show({
      title: "Perfil actualizado con exito",
      message: "Cambios completados...",
    })
  }

}


const getData = async () => {
  try {
    const response = await fetch("/api/clientprofile", {
      method: "GET", // o "POST" si lo prefieres
      headers: {
        "Content-Type": "application/json",
        // Agrega cualquier encabezado adicional que pueda necesitar (como tokens de autorización, etc.)
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}

const ClientProfile = () => {
  const [dataProfile, setdataProfile] = useState(null);

  useEffect(() => {

    getData().then((profile) => {
      const { userProfile } = profile;
      const { user_data } = userProfile;
      console.log(profile)
      setdataProfile(
        {
          client: user_data.name,
          last_name: user_data.last_name,
          clinic: "Bienestar dental",
          description: "Debe de ser atentido por el doctor Similares del consultorio 8",
          curp: user_data.curp ?? "No disponible",
          email: user_data.email ?? "angelo@gmail.com",
          phone_number: user_data.phone_number ?? "646-123-23-23",
          home_address: user_data.home_address ?? "Bella vista #23",
          birthday: user_data.birthday != null ? user_data.birthday.getTime() : 944463754000,
          gender: user_data.gender ?? "Hombre",
          password: user_data.password
        }
      )
    });
  }, [])


  if (!dataProfile) {
    return <SkeletonForm />
  }

  return <div className='m-5'>
    <MantineForm
      title={"Actualizar mi perfil"}
      initialValuesForKeys={dataProfile}
      validateForKeys={{
        client: validateName,
        curp: validateName,
        email: validaFieldsNotEmpty,
        phone_number: validateNumberTel,
        home_address: validaFieldsNotEmpty,
        last_name: validateName,
        clinic: allValuesAvailable,
        birthday: validateDate,
        description: allValuesAvailable,
        gender: validaFieldsNotEmpty
      }}
      listCustomInputMantine={[
        new CustomInputMantine("Nombre", "Nombre", "client", typeInputForm.TEXT),
        new CustomInputMantine("Apellido", "Apellido", "last_name", typeInputForm.TEXT),
        new CustomInputMantine("Sexo", "Sexo", "gender", typeInputForm.SELECTITEMS,
          undefined,
          undefined,
          undefined,
          ["Hombre", "Mujer"]),
        new CustomInputMantine("Nombre de la clinica", "Clinica", "clinic", typeInputForm.TEXT),
        new CustomInputMantine("Curp", "Curp", "curp", typeInputForm.TEXT),
        new CustomInputMantine("Telefono", "Telefono", "phone_number", typeInputForm.TEXT),
        new CustomInputMantine("Correo electrónico", "Correo electrónico", "email", typeInputForm.TEXT),
        new CustomInputMantine("Dirección", "Dirección", "home_address", typeInputForm.TEXT),
        new CustomInputMantine("Fecha de nacimiento", "Fecha de nacimiento", "birthday", typeInputForm.DATEPICKER, new Date(dataProfile.birthday)),
        new CustomInputMantine("Descripción", "Descripción de la cita", "description", typeInputForm.TEXT),
      ]}
      onSubmit={(form: any) => {
        // All fields were validated
        // form.setInitialValues();
        onSubmit(form.values);
      }}
      labelSubmit='Actualizar'

    />
  </div>
};

export default ClientProfile;

