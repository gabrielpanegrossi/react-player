import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const PageContent = styled.main`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  padding: 12px 16px;
`;
