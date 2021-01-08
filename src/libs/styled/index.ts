import styled from "@emotion/styled";

interface Props {
  as?: string;
  styleProps?: object;
}

export interface StyleProps {
  style?: object;
}

export const Outer = styled.div<Props>(({ styleProps }) => ({ ...styleProps }));

export const Flex = styled(Outer)({ display: "flex", alignItems: "center" });
