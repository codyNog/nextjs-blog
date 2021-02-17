import { Box, Flex, Heading } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Flex
      width={"100%"}
      as={"nav"}
      position={"fixed"}
      top={0}
      bgColor={"blue.700"}
    >
      <Box p={2}>
        <Heading color={"white"} size={"md"}>
          codyNog&apos;s Labo
        </Heading>
      </Box>
    </Flex>
  );
};
