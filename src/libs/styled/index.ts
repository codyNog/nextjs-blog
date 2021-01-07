import styled from "@emotion/styled";

interface Props {
  as?: string;
  styleProps?: object;
}

export const Outer = styled.div<Props>(({ styleProps }) => ({ ...styleProps }));
