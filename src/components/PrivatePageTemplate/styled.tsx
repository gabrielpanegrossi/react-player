import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const PageContent = styled.main`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  padding: 8px 16px;
`;
