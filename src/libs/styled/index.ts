import styled from "@emotion/styled";

interface Props {
  as?: string;
  styleProps?: object;
  onClick?: () => void;
}

export interface StyleProps {
  style?: object;
}

export const Outer = styled.div<Props>(({ styleProps }) => ({
  ...styleProps,
  outline: "none",
}));
