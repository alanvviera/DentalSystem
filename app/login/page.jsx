import Link from "next/link";
import './style.css';

export default function Login() {
  return (
    <div>
      <section>
        <div className='top-wave'></div>
        <div className='bottom-wave'></div>
      </section>
      <div className="body">
        <div className="container">
          <form>
            <div className="head">
              <span>Iniciar Sesión</span>
              <p>Con una cuenta existente.</p>
            </div>
            <div className="inputs">
              <input type="email" placeholder="Correo electrónico" />
              <input type="password" placeholder="Contraseña" />
            </div>
            <div>
              <a href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button>Inicia sesión</button>
          </form>
          <div className="form-footer">
            <p>¿No tienes una cuenta? <Link href="/signup">Crea una.</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
