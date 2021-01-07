import styled from "@emotion/styled";
import React from "react";
import { Header } from "~/components/organisms/Header";

const Main = styled.main({
  padding: "32px 40px",
});

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};
