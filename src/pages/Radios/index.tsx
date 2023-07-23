import React from "react";
import { useQuery } from "react-query";
import { getRadioList } from "../../services/getRadioList";
import { RadioItem, RadioList } from "./style";
import { Button, Loading } from "../../components";
import { useNavigate } from "react-router-dom";

export const Radios: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("getRadioList", getRadioList);

  const handleRadioClick = (radioId: string | undefined) => {
    navigate(`/radio/${radioId}`);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h2>Radio List</h2>
      <RadioList>
        {data?.data.map((radio, index) => (
          <RadioItem key={radio.name + index}>
            <h3>{radio.name}</h3>
            <Button
              onClick={() => handleRadioClick(radio?.url?.split("/")?.[5])}
              design="secondary"
            >
              Ver radio
            </Button>
          </RadioItem>
        ))}
      </RadioList>
    </>
  );
};
