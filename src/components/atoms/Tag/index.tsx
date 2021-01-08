import styled from "@emotion/styled";
import React from "react";
import { Outer, StyleProps } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  backgroundColor: "black",
  color: "white",
  padding: "0 4px",
  borderRadius: 4,
  outline: "none",
});

interface Props extends StyleProps {
  onClick?: () => void;
}

export const Tag: React.FC<Props> = ({ onClick, children, style }) => {
  return (
    <StyledOuter
      as={onClick ? "button" : "div"}
      onClick={onClick}
      styleProps={style}
    >
      {children}
    </StyledOuter>
  );
};
