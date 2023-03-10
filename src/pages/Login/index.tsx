import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PublicPageTemplate } from "../../components";
import { Input } from "../../components/Input";
import { StyledForm } from "./style";
import { FormValues } from "./types";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    navigate("/Home");
  };

  return (
    <PublicPageTemplate>
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
        <button>Login</button>
      </StyledForm>
    </PublicPageTemplate>
  );
};
