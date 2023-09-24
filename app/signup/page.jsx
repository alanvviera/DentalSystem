"use client";
import Link from 'next/link';
import './style.css'
import { useForm } from '@/hooks/useForm';

function SignUp() {
    const { email, password, name, onChange, cleanFields } = useForm({
        email: "",
        password: "",
        name: ""
    },
    );

    function onSubmit(e) {
        e.preventDefault();
        // This is the code that is executed when the validations are correct and the form submit is executed
        console.log(`This is the name: ${name}, this is the email: ${email}, this is the password: ${password}`);
        cleanFields();
    }
    return (
        <div>
            <section>
                <div className='top-wave'></div>
                <div className='bottom-wave'></div>
            </section>
            <div className="flex flex-col justify-center min-h-[100vh]"> {/* body */}
                <div className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto"> {/* container */}
                    <form onSubmit={onSubmit} className='flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6'>
                        <div className="flex flex-col gap-4"> {/* head */}
                            <span className="font-bold text-black text-2xl">Regístrate</span>
                            <p className="text-[#7C6666] text-lg">Crea una cuenta gratis con tu correo.</p>
                        </div>
                        <div className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0"> {/* inputs */}
                            <input value={name} required minLength={4} name='name' onChange={onChange} className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]" type="text" placeholder="Nombre completo" />
                            <input value={email} required pattern='[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}' name='email' onChange={onChange} className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]" type="email" placeholder="Correo electrónico" />
                            <input value={password} required minLength={8} name='password' onChange={onChange} className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]" type="password" placeholder="Contraseña" />
                        </div>
                        <button type='submit' className='bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]'>Registrate</button>
                    </form>
                    <div className="bg-tertiary p-4 text-base text-center"> {/* form-footer */}
                        <p>¿Ya tienes una cuenta? <Link href="login/" className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000">Inicia sesión</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;