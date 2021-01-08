import styled from "@emotion/styled";
import React from "react";
import { Outer, StyleProps } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  backgroundColor: "black",
  color: "white",
  padding: "0 4px",
  borderRadius: 4,
});

export const Tag: React.FC<StyleProps> = ({ children, style }) => {
  return <StyledOuter styleProps={style}>{children}</StyledOuter>;
};
