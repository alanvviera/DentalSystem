import React from 'react'
import { ButtonIcon } from '../ButtonIcon'
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
/**
 * SignInOptions component for displaying authentication options.
 *
 * @param {Object} props - Component properties.
 * @param {string} [callbackUrl="/"] - The URL to which the user will be redirected after authentication.
 * @returns {JSX.Element} JSX element representing the authentication options.
 */

export const SignInOptions = ({callbackUrl = "/"}) => {
    return (
      <>
        {/*Authetication options*/}
        <section className="flex justify-center flex-wrap gap-2 pb-5">
          <ButtonIcon
            onClick={
              () => signIn("facebook", {callbackUrl})
            }
            icon={<FacebookFilled
              className="mr-3 text-xl text-white"
            />}
            text={"Facebook"}
          />
          <ButtonIcon
            onClick={
              () => signIn("google", {callbackUrl})
            }
            icon={<GoogleCircleFilled
              className="mr-3 text-xl text-white"
            />}
            text={"Google"}
          />
        </section>
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
  