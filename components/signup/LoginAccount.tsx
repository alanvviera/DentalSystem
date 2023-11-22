import Link from 'next/link'
import React from 'react'

export const LoginAccount = ({title="¿Ya tienes una cuenta? ",subtile="Inicia sesión", href="login/", extraClass=""}) => {
    return (
        <section className={`w-full bg-tertiary text-base text-center md:bottom-0 md:min-h-[35px] ${extraClass}`}>
            {" "}
            <p>
               {title}
                <Link
                    href={href}
                    className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
                >
                    {subtile}
                </Link>
            </p>
        </section>
    )
}
