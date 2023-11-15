"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

const Home = () => {

  const { data: session, status } = useSession();
  const router = useRouter()
  if (status === "loading") return <LoadingScreen />

  return (
    <div className='flex flex-row w-full justify-center content-center items-center min-h-screen gap-2 flex-wrap'>
      <Button onClick={()=>{router.push("/form_example/create")}}>Formulario alta</Button>
      <Button  onClick={()=>{router.push("/form_example/update")}} >Formulario update</Button>
      <Button onClick={()=>{router.push("/form_example/visualize")}}  >Formulario para visualizar</Button>
    </div>
  )
}
export default Home