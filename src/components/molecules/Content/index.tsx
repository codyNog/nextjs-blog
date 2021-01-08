import React from "react";
import { StyleProps } from "~/libs/styled";

interface Props extends StyleProps {
  body: string;
}

export const Content: React.FC<Props> = ({ body }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${body}`,
      }}
    />
  );
};
