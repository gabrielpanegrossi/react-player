import React from "react";
import { Modal } from "../Modal";
import { PlayerContainer } from "../PlayerContainer";
import { PageContainer, PageContent } from "./styled";

export const PrivatePageTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <PageContainer>
    <PageContent>
      <Modal>
        <PlayerContainer />
      </Modal>
      {children}
    </PageContent>
  </PageContainer>
);
