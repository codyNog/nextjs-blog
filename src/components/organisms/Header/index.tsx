import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { routing } from "~/constants/routing";

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
        <Link href={routing.root}>
          <Heading color={"white"} size={"md"} cursor={"pointer"}>
            codyNog&apos;s Labo
          </Heading>
        </Link>
      </Box>
    </Flex>
  );
};
