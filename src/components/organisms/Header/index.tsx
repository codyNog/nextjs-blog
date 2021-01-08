import styled from "@emotion/styled";
import { Outer } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  width: "100%",
  backgroundColor: "black",
  color: "white",
  padding: "8px 16px",
  fontSize: 20,
});

export const Header: React.FC = () => {
  return <StyledOuter as={"nav"}>codyNog&apos;s Labo</StyledOuter>;
};
