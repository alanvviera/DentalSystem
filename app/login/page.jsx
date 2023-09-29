"use client";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import { EyeOutlined, EyeInvisibleOutlined, 
  FacebookFilled, GoogleCircleFilled, GithubFilled} from "@ant-design/icons";
import Background from "@/components/Background";
import FormTextError from "@/components/form/FormTextError";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { ButtonIcon } from "@/components/ButtonIcon";

export default function Login() {

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  const { email, password, showPassword, onChange, cleanFields } = useForm({
    email: "",
    password: "",
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
      `This is the email: ${email}, this is the password: ${password}`
    );
    cleanFields();
  }

  return (
    <main>
      <Background />
      <section className="flex flex-col justify-center min-h-[100vh] bg-secondary lg:bg-transparent">
        {/* form container */}
        <article className="relative  w-full lg:max-w-[30vw] lg:min-h-min lg:rounded-2xl overflow-hidden m-auto lg:bg-secondary">
          {" "}
          {/* form */}
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
                Inicia sesión
              </span>
              <p className="text-[#7C6666] text-lg">
                Con una cuenta existente.
              </p>
            </header>
            <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
              {/* inputs */}
              <input
                className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] peer"
                type="email"
                placeholder="Correo electrónico"
                name="email"
                onChange={onChange}
                value={email}
                required
                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
              />
              <FormTextError text="Por favor ingrese un correo válido." />
              <div className="relative grid grid-cols-1">
                <input
                  className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] peer"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={onChange}
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$"
                  required
                />
                <FormTextError text=" La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial." />
                {password && (
                  <button
                    className="absolute right-0 top-0 px-2 py-1 border-none"
                    onClick={toggleShowPassword}
                    type="button"
                  >
                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </button>
                )}
              </div>
            </section>
            <Link
              href="passwordforgot/"
              className="font-light text-[#0066ff] transition-all ease-in-out duration-3000"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <button
              type="submit"
              className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl 
                text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6] 
                group-invalid:pointer-events-none group-invalid:opacity-30"
            >
              Inicia sesión
            </button>
            {/* <button
                onClick={() => signIn("github")}
                className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl 
                text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]"
              >
                Inicia sesión con Github
              </button> */}
            {/* <button
                onClick={() => signIn("google")}
                className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl 
                text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6]"
              >
                Inicia sesión con Google
              </button> */}
          </form>
          {/*Authetication options*/}
          <section className="flex justify-center flex-wrap gap-2 pb-5">
            <ButtonIcon
              onClick={
                () => signIn("facebook")
              }
              icon={<FacebookFilled
                className="mr-3 text-xl text-white"
              />}
              text={"Facebook"}
            />
            <ButtonIcon
              onClick={
                () => signIn("google")
              }
              icon={<GoogleCircleFilled
                className="mr-3 text-xl text-white"
              />}
              text={"Google"}
            />
            <ButtonIcon
              onClick={
                () => signIn("github")
              }
              icon={<GithubFilled
                className="mr-3 text-xl text-white"
              />}
              text={"Github"}
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
        </article>
      </section>
    </main>
  );
}
