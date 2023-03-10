import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 400px;
`;

export const ImageContainer = styled.div`
  max-width: 100%;
  max-height: calc(100% - 54px);

  img {
    display: flex;
    height: 100%;
    object-fit: contain;
  }
`;
