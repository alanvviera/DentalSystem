'use client'
import TableComponent from '@/components/TableComponent'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
        <div className='text-xl m-10 '> Registro de clientes</div>
        <TableComponent/>
    </main>
  )
}
