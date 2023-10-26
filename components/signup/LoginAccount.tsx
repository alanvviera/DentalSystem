import Link from 'next/link'
import React from 'react'

export const LoginAccount = () => {
    return (
        <section className="w-full bg-tertiary p-4 text-base text-center md:bottom-0 md:min-h-[50px] md:rounded-lg">
            {" "}
            <p>
                ¿Ya tienes una cuenta?{" "}
                <Link
                    href="login/"
                    className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
                >
                    Inicia sesión
                </Link>
            </p>
        </section>
    )
}
