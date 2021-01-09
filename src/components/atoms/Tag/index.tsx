import styled from "@emotion/styled";
import React from "react";
import { Outer, StyleProps } from "~/libs/styled";

const StyledOuter = styled(Outer)({
  backgroundColor: "black",
  color: "white",
  padding: "0 4px",
  borderRadius: 4,
  outline: "none",
  fontSize: 20,
});

const Negative = styled(StyledOuter)({
  backgroundColor: "white",
  color: "black",
});

interface Props extends StyleProps {
  onClick?: () => void;
}

const tagFactory = (type?: string): React.FC<Props> => ({
  onClick,
  children,
  style,
}) => {
  if (type === "negative")
    return (
      <Negative
        as={onClick ? "button" : "div"}
        onClick={onClick}
        styleProps={style}
      >
        {children}
      </Negative>
    );

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

export const Tag = tagFactory();

export const NegativeTag = tagFactory("negative");
