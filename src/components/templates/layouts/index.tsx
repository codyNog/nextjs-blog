import { Container } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { Header } from "~/components/organisms/Header";
import { Outer } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  backgroundColor: "#efefef",
  minHeight: "100vh",
});

export const Layout: React.FC = ({ children }) => {
  return (
    <StyledOuter>
      <Header />
      <Container
        flex={1}
        as={"main"}
        paddingTop={"60px"}
        paddingBottom={"60px"}
        maxW={"5xl"}
      >
        {children}
      </Container>
    </StyledOuter>
  );
};
