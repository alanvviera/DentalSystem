// components/DetailPage.js
'use client'
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); // Obtener el ID del parámetro de la URL

  // Aquí deberías realizar la lógica para obtener los detalles del registro con el ID proporcionado

  return (
    <div>
      <h2>Detalles del Registro #{id}</h2>
      {/* Mostrar todos los detalles del registro aquí */}
    </div>
  );
};

export default DetailPage;