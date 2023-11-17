import React from 'react'
import TableComponent from '../../components/TableComponent'
import '@mantine/core/styles.css'

const page = () => {

    const headers = ['ID', 'Nombre', 'Edad', 'Ciudad', 'Fecha'];

  return (
    <main className="flex flex-col items-center">
    <div className='text-xl m-10 '> Registro de clientes</div>
    <TableComponent headers={headers}/>
</main>
  )
}

export default page