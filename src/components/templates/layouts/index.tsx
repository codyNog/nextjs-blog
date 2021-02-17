import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "~/components/organisms/Footer";
import { Header } from "~/components/organisms/Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <Flex flexDirection={"column"} minHeight={"100vh"} maxWidth={"100vw"}>
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
      <Footer />
    </Flex>
  );
};
