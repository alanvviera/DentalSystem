"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Grid, } from '@mantine/core';
import { useState } from 'react';
import MantineForm from '@/components/MantineForm/MantineForm';
import { validateAge, validateEmail, validateName, validatePassword } from '@/components/MantineForm/valuesValidate';
import CustomInputMantine, { typeInputForm } from '@/components/MantineForm/customMantineInput';

const Home = () => {

  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  const { data: session, status } = useSession();
  if (status === "loading") return <LoadingScreen />


  return (
    <div className='flex flex-row w-full justify-center content-center items-center'>

      <Grid grow>
        <Grid.Col span={4}>
          <MantineForm
            initialValuesForKeys={{ name: "", email: "", age: "", password: "", validatePassword: "" }}
            validateForKeys={{
              name: validateName,
              email: validateEmail,
              age: validateAge,
              validatePassword: validatePassword
            }}
            listCustomInputMantine={
              [
                new CustomInputMantine("Nombre del paciente", "paco el chato", "name", typeInputForm.TEXT),
                new CustomInputMantine("Ingrese su correo", "algo@gmail.com", "email", typeInputForm.TEXT),
                new CustomInputMantine("Ingrese su edad", "18 años", "age", typeInputForm.NUMBER),
                new CustomInputMantine("Ingrese su contraseña", "contraseña", "password", typeInputForm.PASSWORD),
                new CustomInputMantine("Confirme su contraseña", "confirmar contraseña", "validatePassword", typeInputForm.PASSWORD),
              ]
            }
            title='Altas'
            onSubmit={(form) => {
              //All fields were validated
              console.log(form.values);
              form.setInitialValues();
            }}
            labelSubmit='Crear'
          />
        </Grid.Col>

        <Grid.Col span={4}>  <MantineForm
          initialValuesForKeys={{ name: "Pedro", email: "pedro@gmail.com", age: "28", password: "patitas12", validatePassword: "patitas12" }}
          validateForKeys={{
            name: validateName,
            email: validateEmail,
            age: validateAge,
            validatePassword: validatePassword
          }}
          listCustomInputMantine={
            [
              new CustomInputMantine("Nombre del paciente", "paco el chato", "name", typeInputForm.TEXT,),
              new CustomInputMantine("Ingrese su correo", "algo@gmail.com", "email", typeInputForm.TEXT),
              new CustomInputMantine("Ingrese su edad", "18 años", "age", typeInputForm.NUMBER),
              new CustomInputMantine("Ingrese su contraseña", "contraseña", "password", typeInputForm.PASSWORD),
              new CustomInputMantine("Confirme su contraseña", "confirmar contraseña", "validatePassword", typeInputForm.PASSWORD),
            ]
          }
          onSubmit={(form) => {
            //All fields were validated
            console.log(form.values);
            form.setInitialValues();
          }}
          labelSubmit='Altualizar'
          title='Modificaciones'
        /></Grid.Col>

        <Grid.Col span={4}>  <MantineForm
          initialValuesForKeys={{ name: "Pedro", email: "pedro@gmail.com", age: "28", password: "patitas12", validatePassword: "patitas12" }}
          validateForKeys={{
            name: validateName,
            email: validateEmail,
            age: validateAge,
            validatePassword: validatePassword
          }}
          listCustomInputMantine={
            [
              new CustomInputMantine("Nombre del paciente", "paco el chato", "name", typeInputForm.TEXT, { disabled: true }),
              new CustomInputMantine("Ingrese su correo", "algo@gmail.com", "email", typeInputForm.TEXT, { disabled: true }),
              new CustomInputMantine("Ingrese su edad", "18 años", "age", typeInputForm.NUMBER, { disabled: true }),
              new CustomInputMantine("Ingrese su contraseña", "contraseña", "password", typeInputForm.PASSWORD, { disabled: true }),
              new CustomInputMantine("Confirme su contraseña", "confirmar contraseña", "validatePassword", typeInputForm.PASSWORD, { disabled: true }),
            ]
          }
          onSubmit={(form) => {
            //All fields were validated
            console.log(form.values);
            form.setInitialValues();
          }}
          title='Visualizacion'
        /></Grid.Col>


        <Grid.Col span={4}>  <MantineForm
          initialValuesForKeys={{ name: "Pedro", email: "pedro@gmail.com", age: "28", password: "patitas12", validatePassword: "patitas12" }}
          validateForKeys={{
            name: validateName,
            email: validateEmail,
            age: validateAge,
            validatePassword: validatePassword
          }}
          listCustomInputMantine={
            [
              new CustomInputMantine("Nombre del paciente", "paco el chato", "name", typeInputForm.TEXT, { disabled: true }),
              new CustomInputMantine("Ingrese su correo", "algo@gmail.com", "email", typeInputForm.TEXT, { disabled: true }),
              new CustomInputMantine("Ingrese su edad", "18 años", "age", typeInputForm.NUMBER, { disabled: true }),
              new CustomInputMantine("Ingrese su contraseña", "contraseña", "password", typeInputForm.PASSWORD, { disabled: true }),
              new CustomInputMantine("Confirme su contraseña", "confirmar contraseña", "validatePassword", typeInputForm.PASSWORD, { disabled: true }),
            ]
          }
          onSubmit={(form) => {
            //All fields were validated
            console.log(form.values);
            form.setInitialValues();
          }}
          title='Eliminación'
          labelSubmit={"Eliminar"}
          colorSubmit='red'
        /></Grid.Col>
      </Grid>

    </div>
  )
}
export default Home