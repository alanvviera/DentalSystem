"use client";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import Background from "@/components/Background";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import FormTextError from "@/components/form/FormTextError";

function SignUp() {
  const { email, password, user, showPassword, onChange, cleanFields } =
    useForm({
      email: "",
      password: "",
      user: "",
      showPassword: false,
    });

    const toggleShowPassword = () => {
        onChange({
          target: {
            name: "showPassword",
            value: !showPassword,
          },
        });
      };
    


  function onSubmit(e) {
    e.preventDefault();
    // This is the code that is executed when the validations are correct and the form submit is executed
    console.log(
      `This is the email: ${email}, this is the password: ${password}, this is the user: ${user}`
    );
    cleanFields();
  }

  return (
    <main>
      <Background />
      <section className="flex flex-col justify-center min-h-[100vh]">
        {" "}
        {/* body */}
        <article className="bg-secondary max-w-[300px] rounded-2xl overflow-hidden m-auto">
          {" "}
          {/* form container */}
          <form
            className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6 group"
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
          >
            <header className="flex flex-col gap-4">
              {" "}
              {/* head */}
              <span className="font-bold text-black text-2xl">Regístrate</span>
              <p className="text-[#7C6666] text-lg">
                Crea una cuenta gratis con tu correo.
              </p>
            </header>
            <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              {/* inputs */}
              <div>
                <input
                  className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] peer"
                  type="text"
                  name="user"
                  onChange={onChange}
                  value={user}
                  placeholder="Nombre completo"
                  pattern="(.{4,})"
                  required // required field
                />

                <FormTextError text="El nombre debe de contener mínimo 4 caracteres." />
              </div>
              <div>
                <input
                  className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] peer"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Correo electrónico"
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  required // required field
                />
                <FormTextError text="Por favor ingrese un correo válido." />
              </div>
              <section className="relative">
                {" "}
                {/* Password field container */}
                <div className="relative grid grid-cols-1">
                  <input
                    className={`outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] pr-10 relative peer`}
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required // Required field
                  />
                  <FormTextError text="La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial." />
                  {password && (
                  <button
                    className="absolute right-0 top-0 px-2 py-1 border rounded"
                    onClick={toggleShowPassword}
                    type="button"
                    style={{ border: "none" }}
                  >
                    {showPassword ? (
                      <EyeInvisibleOutlined />
                    ) : (
                      <EyeOutlined />
                    )}
                  </button>
                )}
                </div>
              </section>
            </section>
            <button className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6] group-invalid:pointer-events-none group-invalid:opacity-30">
              Regístrate
            </button>
          </form>
          <section className="bg-tertiary p-4 text-base text-center">
            {" "}
            {/* form-footer */}
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
        </article>
      </section>
    </main>
  );
}

export default SignUp;
