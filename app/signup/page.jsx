"use client";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import Background from "@/components/Background";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import FormTextError from "@/components/form/FormTextError";
import CustomForm from "@/components/form/CustomForm";
import { CustomInput } from "@/components/form/CustomInput";
import { CustomInputPassword } from "@/components/form/CustomInputPassword";
import { patternEmail, patternPassword } from "@/constans/formPattern";

function SignUp() {
  const {
    email,
    password,
    confirmPassword,
    user,
    showPassword,
    showConfirmPassword,
    showPasswordNotMatch,
    onChange,
    cleanFields,
  } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    user: "",
    showPassword: false,
    showConfirmPassword: false,
    showPasswordNotMatch: false,
  });

  const toggleShowPassword = (name, value) => {
    onChange({
      target: {
        name,
        value,
      },
    });
  };

  const showMessageOfError = (value) => {
    onChange({
      target: {
        name: "showPasswordNotMatch",
        value: value,
      },
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    // This is the code that is executed when the validations are correct and the form submit is executed
    if (password != confirmPassword) {
      showMessageOfError(true);
      return;
    }
    showMessageOfError(false);

    console.log(
      `This is the email: ${email}, this is the password: ${password}, this is the confirmPassword: ${confirmPassword}, this is the user: ${user}`
    );
    cleanFields();
  }

  return (
    <main>
      <Background />



      <section className="flex flex-col justify-center min-h-[100vh] bg-secondary lg:bg-transparent">
        {/* form container */}
        <article className="relative  w-full lg:max-w-[30vw] lg:min-h-min lg:rounded-2xl  overflow-hidden m-auto lg:bg-secondary">
          {" "}
          <form
            className="flex flex-col items-center justify-center gap-4 text-center pt-8 px-6 pb-6 group"
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
          >
            {/*form header */}
            <header className="flex flex-col gap-4">
              {" "}
              <span className="font-bold text-black text-2xl">Regístrate</span>
              <p className="text-[#7C6666] text-lg">
                Crea una cuenta gratis con tu correo.
              </p>
            </header>
            {/* inputs */}
            <section className="overflow-hidden bg-[#fff] w-[100%] mx-4 my-2 border-none rounded-lg outline-0">
              {" "}
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
                      onClick={() => {
                        toggleShowPassword("showPassword", !showPassword);
                      }}
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
                <div className="relative grid grid-cols-1">
                  <input
                    className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] bg-[#fff] pr-10 peer"
                    type={showConfirmPassword ? "text" : "password"}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$"
                    placeholder="Confirme la contraseña"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    required
                  />
                  <FormTextError text="La contraseña debe contener mínimo ocho caracteres, una letra, un número y un carácter especial." />
                  {confirmPassword && (
                    <button
                      className="absolute right-0 top-0 px-2 py-1 border-none"
                      onClick={() => {
                        toggleShowPassword(
                          "showConfirmPassword",
                          !showConfirmPassword
                        );
                      }}
                      type="button"
                    >
                      {showConfirmPassword ? (
                        <EyeInvisibleOutlined />
                      ) : (
                        <EyeOutlined />
                      )}
                    </button>
                  )}
                </div>
            </section>
            {showPasswordNotMatch && (
              <section role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-2 py-2 text-sm">
                  Lo sentimos
                </div>
                <div className="border border-t-0 text-sm border-red-400 rounded-b bg-red-100 px-3 py-2 text-red-700">
                  <p>Las contraseñas no coinciden.</p>
                </div>
              </section>
            )}
            <button className="bg-primary text-white w-full h-10 pt-2 pb-2 border-0 overflow-hidden rounded-3xl 
            text-base font-semibold cursor-pointer transition-all ease-in-out duration-1000 hover:bg-[#005ce6] 
            group-invalid:pointer-events-none group-invalid:opacity-30">
              Regístrate
            </button>
          </form>
          {/* form-footer */}
          <section className="w-full bg-tertiary p-4 text-base text-center md:bottom-0 md:min-h-[50px] md:rounded-lg">
            {" "}
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
