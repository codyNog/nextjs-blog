import styled from "@emotion/styled";
import React from "react";
import { Outer, StyleProps } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  padding: "16px 12px",
  boxShadow: "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)",
  backgroundColor: "white",
});

export const Card: React.FC<StyleProps> = ({ children, style }) => {
  return <StyledOuter styleProps={style}>{children}</StyledOuter>;
};
