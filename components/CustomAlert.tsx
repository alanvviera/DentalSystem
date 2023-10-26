import React from 'react'

export const CustomAlert = ({showAlert, title, subtile}) => {
  return (
    (showAlert && (
        <section role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-2 py-2 text-sm">
            {title}
            </div>
            <div className="border border-t-0 text-sm border-red-400 rounded-b bg-red-100 px-3 py-2 text-red-700">
                <p>{subtile}</p>
            </div>
        </section>
    ))
  )
}
