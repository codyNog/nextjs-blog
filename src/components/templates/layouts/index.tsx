import styled from "@emotion/styled";
import React from "react";
import { Header } from "~/components/organisms/Header";
import { Outer } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  backgroundColor: "#efefef",
  minHeight: "100vh",
});

const Main = styled.main({
  maxWidth: 960,
  padding: "16px 12px",
  margin: "0 auto",
});

export const Layout: React.FC = ({ children }) => {
  return (
    <StyledOuter>
      <Header />
      <Main>{children}</Main>
    </StyledOuter>
  );
};
