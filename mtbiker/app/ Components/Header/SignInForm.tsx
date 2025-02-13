import React, { useState } from "react";
import { Input } from "../Shared/Input";
import Link from "next/link";
import * as yup from "yup";

import { SignInSchema } from "@/app/Validation/SignInSchema";

interface FormErrors {
  email?: string;
  password?: string;
  [key: string]: string | undefined;
}

export const SignInForm = ({
  setModalOpen,
}: {
  setModalOpen: (e: boolean) => boolean | void;
}) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const logUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    let data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      await SignInSchema.validate(data, { abortEarly: false });
      setErrors({});
      localStorage.setItem("logged", "true");
      setModalOpen(false);
    } catch (err: unknown) {
      const newErrors: FormErrors = {};
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
      }
      setErrors(newErrors);
    }
  };
  return (
    <div {...{ className: "w-full" }}>
      <form {...{ onSubmit: logUser }}>
        <div {...{ className: "flex flex-row gap-5 p-3" }}>
          <div {...{ className: "w-[50%]" }}>
            <img
              {...{
                alt: "sign in",
                src: "https://includes.mtbiker.sk/images/login-img.jpg",
                className: "w-[100%] h-[100%]",
              }}
            />
          </div>
          <div {...{ className: "flex flex-col gap-5" }}>
            <div {...{ className: "flex flex-col gap-2" }}>
              <span {...{ className: "font-extrabold text-lg font-sans" }}>
                Prihlásenie do účtu
              </span>
              <div {...{ className: "flex flex-col" }}>
                <div>
                  <span {...{ className: "font-extrabold text-xs font-sans" }}>
                    Prihlasovacie meno alebo email
                  </span>
                </div>
                <div>
                  <Input {...{ placeholder: "email", name: "email" }} />
                  {errors.email ? (
                    <span {...{ className: "text-xs text-red-500" }}>
                      {errors.email}
                    </span>
                  ) : null}
                </div>
              </div>

              <div {...{ className: "flex flex-col" }}>
                <div>
                  <span {...{ className: "font-extrabold text-xs font-sans" }}>
                    Heslo
                  </span>
                </div>

                <div>
                  <Input
                    {...{
                      placeholder: "heslo",
                      name: "password",
                      type: "password",
                    }}
                  />
                  {errors.password ? (
                    <span {...{ className: "text-xs text-red-500" }}>
                      {errors.password}
                    </span>
                  ) : null}
                </div>
              </div>
              <span
                {...{
                  className:
                    "text-xs text-orange-400 hover:underline font-extrabold",
                }}
              >
                Zabudnuté heslo
              </span>
            </div>
            <div {...{ className: "flex flex-row gap-5" }}>
              <div
                {...{
                  className: "flex flex-row gap-1 items-center",
                }}
              >
                <span {...{ className: "font-sans text-sm" }}>Nemáš účet?</span>
                <Link
                  {...{
                    href: "https://www.mtbiker.sk/?",
                    className:
                      "font-sans text-sm text-orange-500 hover:underline",
                  }}
                >
                  Zaregistruj sa
                </Link>
              </div>
              <button
                {...{
                  className:
                    "btn text-white bg-orange-400 hover:bg-orange-500 rounded-none",
                  type: "submit",
                }}
              >
                Prihlásiť sa
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
