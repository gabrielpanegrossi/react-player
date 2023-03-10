import React from "react";
import { ContentDropdown, Form, Modal } from "../../components";
import { Input } from "../../components/Input";
import { Player } from "../../components/Player";

export const Promocoes: React.FC = () => {
  const promocoes = ["Promoções 1", "Promoções 2", "Promoções 3"];

  return (
    <>
      {promocoes.map((playlist) => (
        <div>{playlist}</div>
      ))}
      <ContentDropdown title="Inserir nova midia de promoção">
        <Form onSubmitFunction={console.log}>
          <Input label="Selecione o arquivo desejado" type="file" />
        </Form>
      </ContentDropdown>
    </>
  );
};
