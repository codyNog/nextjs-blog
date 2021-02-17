import { Box, Flex, Img } from "@chakra-ui/react";
import { Card } from "~/components/atoms/Card";

export const ContactLinks: React.FC = () => {
  return (
    <Card>
      <h1>Contact</h1>
      <Box marginTop={2}>
        <a href={"https://www.facebook.com/kouki.yonemoto/"}>
          <Flex alignItems={"center"}>
            <Img
              width={100}
              src={"/flogo_RGB_HEX-BRC-Site-250.png"}
              alt={"facebook"}
              marginRight={2}
            />
            <h2>facebook</h2>
          </Flex>
        </a>
      </Box>
      <Box marginTop={2}>
        <a href={"https://www.wantedly.com/id/codynog"}>
          <Flex alignItems={"center"}>
            <Img
              width={100}
              src={"/wantedly_mark.png"}
              alt={"wantedly"}
              marginRight={2}
            />
            <h2>wantedly</h2>
          </Flex>
        </a>
      </Box>
    </Card>
  );
};
