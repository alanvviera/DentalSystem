"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';

const Appointments = () => {
  const {data: session, status} = useSession();
  if (status === "loading") return <LoadingScreen/>
  return (
    <div className='m-auto'>Citas</div>
  )
}
export default Appointments