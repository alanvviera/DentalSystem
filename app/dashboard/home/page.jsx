"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';

const Home = () => {
  const {data: session, status} = useSession();
  if (status === "loading") return <LoadingScreen/>
  return (
    <div className='m-auto'>Inicio</div>
  )
}
export default Home