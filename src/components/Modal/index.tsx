import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModalContainer, ModalContent, ModalHeader } from "./styled";

export const Modal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [shouldMinimize, setShouldMinimize] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setShouldMinimize(pathname === "/");
  }, [pathname]);

  return (
    <ModalContainer isIndex={shouldMinimize}>
      {!shouldMinimize && (
        <ModalHeader>
          <Link to={"/"}>+</Link>
        </ModalHeader>
      )}
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};
