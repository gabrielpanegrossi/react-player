import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Logo, PublicPageTemplate } from "../../components";
import { Input } from "../../components/Input";
import { StyledForm } from "./style";
import { FormValues } from "./types";
import { useMutation } from "react-query";
import { TPostLoginResponse, postLogin } from "../../services/postLogin";
import { TCredentials } from "../../types/credentials";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("access_token") || "";
    if (token) if (JSON.parse(atob(token.split(".")[1]))) navigate("/");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutateAsync, isLoading } = useMutation(
    "postLogin",
    (credentials: TCredentials) => postLogin(credentials)
  );

  const onSubmit = async (data: FormValues) => {
    mutateAsync(data)
      .then((loginResponse) => {
        window.localStorage.setItem("access_token", loginResponse.data.access);
        window.localStorage.setItem(
          "refresh_token",
          loginResponse.data.refresh
        );

        navigate("/");
      })
      .catch(() =>
        alert("Erro ao executar o login por favor tente novamente.")
      );
  };

  return (
    <PublicPageTemplate>
      <Logo />
      <StyledForm onSubmitFunction={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          placeholder="Digite o seu email"
          errorMessage={errors?.email?.message}
          {...register("email")}
        />
        <Input
          label="Senha"
          errorMessage={errors.password?.message}
          placeholder="Digite a sua senha"
          type={"password"}
          {...register("password")}
        />
        <button disabled={isLoading}>Login</button>
      </StyledForm>
    </PublicPageTemplate>
  );
};
