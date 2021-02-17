import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { routing } from "~/constants/routing";

export const Footer: React.FC = () => {
  return (
    <Flex
      flexDirection={"column"}
      bgColor={"blue.700"}
      marginTop={"auto"}
      as={"nav"}
    >
      <Box p={2} cursor={"pointer"}>
        <Link href={routing.profile.root}>
          <Heading color={"white"} size={"md"}>
            Profile
          </Heading>
        </Link>
      </Box>
      <Box p={2} cursor={"pointer"}>
        <Link href={routing.contact.root}>
          <Heading color={"white"} size={"md"}>
            Contact
          </Heading>
        </Link>
      </Box>
    </Flex>
  );
};
