import Link from "next/link";
import './style.css';

export default function Login() {
  return (
    <div>
      <section>
        <div className="top-wave"></div> {/* top-wave */}
        <div className="bottom-wave"></div> {/* bottom-wave */}
      </section>
      <div className="flex flex-col justify-center min-h-[100vh]">
        {/* body */}
        <div className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto">
          {" "}
          {/* container */}
          <form className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6">
            <div className="flex flex-col gap-4">
              {" "}
              {/* head */}
              <span className="font-bold text-black text-2xl">Regístrate</span>
              <p className="text-[#7C6666] text-lg">
                Con una cuenta existente.
              </p>
            </div>
            <div className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              {/* inputs */}
              <input
                className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]"
                type="email"
                placeholder="Correo electrónico"
              />
              <input
                className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c]"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <p>
                <Link
                  href="passwordforgot/"
                  className="font-light text-[#0066ff] transition-all ease-in-out duration-3000"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </p>
            </div>
            <button className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]">
              Inicia sesión
            </button>
          </form>
          <div className="bg-tertiary p-4 text-base text-center">
            {" "}
            {/* form-footer */}
            <p>
              ¿No tienes una cuenta?{" "}
              <Link
                href="/"
                className="font-bold text-[#0066ff] transition-all ease-in-out duration-3000"
              >
                Crea una
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
