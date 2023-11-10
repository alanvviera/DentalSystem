"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';

import { SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';
import { Rating } from '@mantine/core';

const Home = () => {

  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  const { data: session, status } = useSession();
  if (status === "loading") return <LoadingScreen />

  
  return (
    <div className='flex flex-col w-full justify-center content-center items-center'>
      <div className='m-auto'>Inicio</div>
      <SimpleGrid cols={2}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>

    <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
         <Rating defaultValue={2} />

    </div>
  )
}
export default Home