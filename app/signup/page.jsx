"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function SignUp() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValid, setPasswordValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Resto del código para enviar el formulario si la validación es exitosa.
    };

    const validatePassword = (value) => {
        // Utiliza una expresión regular para validar la contraseña.
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
        return passwordRegex.test(value);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordValid(validatePassword(newPassword));
    };

    return (
        <main>
            <section>
                <article className='top-wave'></article>
                <article className='bottom-wave'></article>
            </section>
            <section className="flex flex-col justify-center min-h-[100vh]"> {/* body */}
                <article className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto"> {/* form container */}
                    <form className='flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6' onSubmit={handleSubmit}>
                        <header className="flex flex-col gap-4"> {/* head */}
                            <span className="font-bold text-black text-2xl">Regístrate</span>
                            <p className="text-[#7C6666] text-lg">Crea una cuenta gratis con tu correo.</p>
                        </header>
                        <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0"> {/* inputs */}
                            <input
                                className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]"
                                type="text"
                                placeholder="Nombre completo"
                                required // required field
                            />
                            <input
                                className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]"
                                type="email"
                                placeholder="Correo electrónico"
                                required // required field
                            />
                            <section className="relative"> {/* Password field container */}
                                <input
                                    className={`outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-${passwordValid ? '[#8080804c]' : 'red'} pr-10 relative`}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required // Required field
                                />
                                <button
                                    type="button"
                                    className="show-password-button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? '👁️' : '🔒'}
                                </button>
                            </section>
                            {!passwordValid && (
                                <p className="text-red-500 text-xs mt-1">
                                    La contraseña debe contener al menos 6 caracteres, 1 letra mayúscula y 1 símbolo.
                                </p>
                            )}
                        </section>
                        <button className='bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]'>Regístrate</button>
                    </form>
                    <section className="bg-tertiary p-4 text-base text-center"> {/* form-footer */}
                        <p>¿Ya tienes una cuenta? <Link href="login/" className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000">Inicia sesión</Link></p>
                    </section>
                </article>
            </section>
        </main>
    );
}

export default SignUp;

