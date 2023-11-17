"use client";
import React from 'react';
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className='flex flex-row w-full justify-center content-center items-center min-h-screen gap-2 flex-wrap'>
      <Button onClick={() => {router.push("/form-example/create")}}>Formulario alta</Button>
      <Button onClick={() => {router.push("/form-example/update")}}>Formulario update</Button>
      <Button onClick={() => {router.push("/form-example/visualize")}}>Formulario para visualizar</Button>
    </div>
  );
};

export default Home;
