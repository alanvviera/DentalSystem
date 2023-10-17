"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';

const Settings = () => {
  const {data: session, status} = useSession();
  if (status === "loading") return <LoadingScreen/>
  return (
    <div className='m-auto'>Configuración</div>
  )
}
export default Settings