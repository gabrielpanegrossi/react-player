import React from "react";
import { PageContainer, PageContent } from "./styled";

export const PublicPageTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <PageContainer>
    <PageContent>{children}</PageContent>
  </PageContainer>
);
