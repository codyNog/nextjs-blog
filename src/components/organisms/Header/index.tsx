import styled from "@emotion/styled";
import { Outer } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  width: "100%",
  backgroundColor: "black",
});

export const Header: React.FC = () => {
  return <StyledOuter>Header</StyledOuter>;
};
