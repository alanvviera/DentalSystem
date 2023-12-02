import React from 'react'
import { ButtonIcon } from '../ButtonIcon'
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons'
import Link from 'next/link'

export const SignInOptions = () => {
    return (
      <>
        {/* form-footer section */}
        <section className=" w-full bg-tertiary p-4 text-base text-center md:bottom-0 md:min-h-[50px] md:rounded-lg">
          <p>
            ¿No tienes una cuenta?{" "}
            <Link
              href="signup"
              className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
            >
              Crea una
            </Link>
          </p>
        </section>
      </>
    )
  }
  