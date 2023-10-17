"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { LoadingScreen } from '@/components/LoadingScreen';

const Documents = () => {
  const {data: session, status} = useSession();
  if (status === "loading") return <LoadingScreen/>
  return (
    <div>Documentos</div>
  )
}
export default Documents