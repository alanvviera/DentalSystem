import Link from 'next/link'
import React from 'react'

const CustomForm = ({ onSubmit, title, subTile, textSubmit, textForgetPassword, inputsForm = [], bottomComponent, topComponent }) => {
    return (
        <section className="flex flex-col justify-center min-h-[100vh] bg-secondary lg:bg-transparent">
            <article className="relative  w-full lg:max-w-[30vw] lg:min-h-min lg:rounded-2xl overflow-hidden m-auto lg:bg-secondary">
                <form
                    className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6 group"
                    onSubmit={onSubmit}
                    noValidate
                    autoComplete="off"
                >
                    {/* head */}
                    <header className="flex flex-col gap-4">
                        {" "}
                        <span className="font-bold text-black text-2xl">
                            {title}
                        </span>
                        <p className="text-[#7C6666] text-lg">
                            {subTile}
                        </p>
                    </header>
                    <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
                        {" "}
                        {/* inputs */}
                        {
                            ...inputsForm
                        }
                    </section>
                    {
                        textForgetPassword ? <Link
                            href="passwordforgot/"
                            className="font-light text-[#0066ff] transition-all ease-in-out duration-3000"
                        >
                            {textForgetPassword}
                        </Link> : null
                    }

                    {
                        topComponent ? topComponent : null
                    }

                    <button
                        type="submit"
                        className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl 
        text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6] 
        group-invalid:pointer-events-none group-invalid:opacity-30"
                    >
                        {textSubmit}
                    </button>
                </form>
                {
                    bottomComponent ? bottomComponent : null
                }
            </article>
        </section>
    )
}

export default CustomForm