import styled from "@emotion/styled";
import Link from "next/link";
import { routing } from "~/constants/routing";
import { Flex } from "~/libs/styled";

const StyledOuter = styled(Flex)({
  width: "100%",
  backgroundColor: "black",
  color: "white",
  padding: "8px 16px",
  fontSize: 20,
});

const Links = styled(Flex)({
  marginLeft: 240,
});

const A = styled.a({
  textDecoration: "none",
  cursor: "pointer",
});

export const Header: React.FC = () => {
  return (
    <StyledOuter as={"nav"}>
      codyNog&apos;s Labo
      <Links>
        <Link href={routing.trpg.root}>
          <A>TRPG</A>
        </Link>
      </Links>
    </StyledOuter>
  );
};
