"use client";
import React from "react";
import Background from "@/components/Background";
import { useForm } from "@/hooks/useForm";
import CustomForm from "@/components/form/CustomForm";
import { patternPassword } from "@/constants/formPattern";
import { LoginAccount } from "@/components/signup/LoginAccount";
import { CustomInputPassword } from "@/components/form/CustomInputPassword";
import { CustomAlert } from "@/components/CustomAlert";
/**
 * Component for resetting the password.
 */
export default function NewPassword() {
  const {
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    showPasswordNotMatch,
    onChange,
    cleanFields,
  } = useForm({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    showPasswordNotMatch: false,
  });

  /**
   * Toggle password visibility.
   */
  const toggleShowPassword = () => {
    onChange({
      target: {
        name: "showPassword",
        value: !showPassword,
      },
    });
  };

  /**
   * Toggle confirm password visibility.
   */
  const toggleShowConfirmPassword = () => {
    onChange({
      target: {
        name: "showConfirmPassword",
        value: !showConfirmPassword,
      },
    });
  };

  /**
   * Show or hide a password not matching error message.
   * @param {boolean} value - Indicates whether to show the error message.
   */
  const showMessageOfError = (value) => {
    onChange({
      target: {
        name: "showPasswordNotMatch",
        value: value,
      },
    });
  };

  /**
   * Handle form submission.
   * @param {Event} e - Form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showMessageOfError(true);
      return;
    }
    showMessageOfError(false);

    // This is the code that is executed when the validations are correct and the form is submitted
    console.log(
      `This is the new password: ${password}, this is the confirm password: ${confirmPassword}`
    );
    cleanFields();
  };

  return (
    <main>
      <Background />
      <CustomForm
        onSubmit={handleSubmit}
        title={"Reset Password"}
        subTitle={"Enter a new password to use for logging in."}
        textSubmit={"Submit"}
        inputsForm={[
          <CustomInputPassword
            showPassword={showPassword}
            name={"password"}
            placeholder={"New Password"}
            onChange={onChange}
            password={password}
            pattern={patternPassword}
            placeholderError={"Password must contain at least eight characters, one letter, one number, and one special character."}
            toggleShowPassword={toggleShowPassword}
          />,
          <CustomInputPassword
            showPassword={showConfirmPassword}
            name={"confirmPassword"}
            placeholder={"Confirm Password"}
            onChange={onChange}
            password={confirmPassword}
            pattern={patternPassword}
            placeholderError={"Password must contain at least eight characters, one letter, one number, and one special character."}
            toggleShowPassword={toggleShowConfirmPassword}
          />
        ]
        }
        bottomComponent={<LoginAccount />}
        topComponent={<CustomAlert
          showAlert={showPasswordNotMatch}
          title={"Sorry"}
          subTitle={"Passwords do not match."}
        />
        }
      />
    </main>
  );
}