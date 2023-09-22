import Link from 'next/link';
import './style.css'

function SignUp() {
    return (
        <div>
           <section>
                <div className='top-wave'></div>
                <div className='bottom-wave'></div>
            </section>
            <div className="body ">
                <div className="container">
                    <form>
                        <div className="head">
                            <span>Regístrate</span>
                            <p>Crea una cuenta gratis con tu correo.</p>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder="Nombre completo" />
                            <input type="email" placeholder="Correo electrónico" />
                            <input type="password" placeholder="Contraseña" />
                        </div>
                        <button className='bg-primary'>Registrate</button>
                    </form>
                    <div className="form-footer">
                        <p>Ya tienes una cuenta? <Link href="login/">Inicia sesión</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;