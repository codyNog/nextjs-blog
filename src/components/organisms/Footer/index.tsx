import { Box, Flex, Heading } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Flex
      flexDirection={"column"}
      bgColor={"blue.700"}
      marginTop={"auto"}
      as={"nav"}
    >
      <Box p={2}>
        <Heading color={"white"} size={"md"}>
          Profile
        </Heading>
      </Box>
      <Box p={2}>
        <Heading color={"white"} size={"md"}>
          Works
        </Heading>
      </Box>
      <Box p={2}>
        <Heading color={"white"} size={"md"}>
          Contact
        </Heading>
      </Box>
    </Flex>
  );
};
