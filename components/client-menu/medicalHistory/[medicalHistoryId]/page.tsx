// pages/client-menu/medical-history/[medicalHistoryId]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Text } from '@mantine/core';
import CustomTile from '../../../../components/tiles-viewer/CustomTile';

type History = {
  clinica: string;
  imageUrl?: string;
  fecha: string;
  hora: string;
  descripcion: string;
  receta?: string;
};

const getData = async (id: number) => {
  // Simulando la obtención de datos de un historial médico específico
  const res = [
    {
      id: 1,
      clinica: 'Dental Gama',
      imageUrl: '',
      fecha: '2023-04-21',
      hora: '10:30',
      descripcion: 'Valoración para posible tratamiento de ortodoncia',
      receta: 'No aplica',
    },
    {
      id: 2,
      clinica: 'Medichal Tecnologies',
      imageUrl: '',
      fecha: '2023-07-14',
      hora: '10:30',
      descripcion: 'Extracción de muelas del juicio',
      receta: 'Medicamento: Ibuprofeno 400 mg \nCantidad: 20 tabletas \nInstrucciones: Tomar 1 tableta cada 8 horas con alimentos.',
    },
    {
      id: 3,
      clinica: 'Smiles',
      imageUrl: '',
      fecha: '2023-01-02',
      hora: '11:30',
      descripcion: 'Revisión y limpieza bucal',
      receta: 'No aplica',
    },
  ].find(history => history.id === id);

  return res;
};

const ClientMedicalHistoryId: React.FC = () => {
  const [history, setHistory] = useState<History | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener medicalHistoryId desde location.pathname
        const medicalHistoryId = parseInt(window.location.pathname.split('/').pop() || '', 10);

        if (isNaN(medicalHistoryId)) {
          throw new Error('Invalid medicalHistoryId');
        }

        const res = await getData(medicalHistoryId);
        setHistory(res);
      } catch (error) {
        console.error('Error obteniendo detalles del historial médico', error);
      }
    };

    fetchData();
  }, []); // No es necesario pasar dependencias

  if (!history) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div style={{ margin: '20px' }}>
        <CustomTile>
            <Text size="lg">
                    <strong>Clínica:</strong> {history.clinica}
            </Text>
            <Text size="md">
                    <strong>Fecha:</strong> {history.fecha}
            </Text>
            <Text size="md">
                    <strong>Hora:</strong> {history.hora}
            </Text>
            <Text size="md">
                    <strong>Detalles de la cita:</strong> {history.descripcion}
            </Text>
            <Text size="md">
                    <strong>Receta:</strong> {history.receta}
            </Text>
        </CustomTile>
    </div>
  );
};

export default ClientMedicalHistoryId;
