// pages/client-menu/debts/[debtId]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Text } from '@mantine/core';
import CustomTile from '../../../tiles-viewer/CustomTile';

type Debt = {
  id: number;
  debt: number;
  date: string;
  descripcion: string;
};

const getData = async (id: number) => {
  // Simulando la obtención de datos de una deuda específica
  const res = [
    { id: 1, debt: 1500, date: '2023-11-14', descripcion: 'Se realizo una limpieza completa' },
    { id: 2, debt: 1500, date: '2023-11-15', descripcion: 'Se realizaron distintas radiografias para diagnostico' },
    { id: 3, debt: 405, date: '2023-11-15', descripcion: 'Se realizo extraccion dental de las muelas del juicio' },
  ].find(debt => debt.id === id);

  return res;
};

const ClientDebtId: React.FC = () => {
  const [debt, setDebt] = useState<Debt | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener debtId desde location.pathname
        const debtId = parseInt(window.location.pathname.split('/').pop() || '', 10);

        if (isNaN(debtId)) {
          throw new Error('Invalid debtId');
        }

        const res = await getData(debtId);
        setDebt(res);
      } catch (error) {
        console.error('Error obteniendo detalles de la deuda', error);
      }
    };

    fetchData();
  }, []); // No es necesario pasar dependencias

  if (!debt) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div style={{ margin: '20px' }}>
      <CustomTile>
      <Text size="lg">
        <strong>Descripción:</strong> {debt.descripcion}
      </Text>
      <Text size="lg">
        <strong>Deuda:</strong> {debt.debt}
      </Text>
      <Text size="lg">
        <strong>Fecha:</strong> {debt.date}
      </Text>
      </CustomTile>
    </div>
  );
};

export default ClientDebtId;
