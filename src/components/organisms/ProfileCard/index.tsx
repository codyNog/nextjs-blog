import { Box, Flex, Img } from "@chakra-ui/react";
import { Card } from "~/components/atoms/Card";

export const ProfileCard = () => {
  return (
    <Card>
      <Box overflow="hidden">
        <Flex justifyContent={"center"}>
          <Img
            src={"/icon-192x192.png"}
            borderRadius={"full"}
            objectFit={"cover"}
            alt={"codynog"}
          />
        </Flex>
      </Box>
      <Box textAlign={"center"}>
        <h3>Kohki Noguchi / codyNog</h3>
        <div>
          フロントエンドエンジニア。
          <br />
          front: React / Next.js
          <br />
          app: React Native
        </div>
      </Box>
    </Card>
  );
};
