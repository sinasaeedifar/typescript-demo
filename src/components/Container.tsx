import React from "react";

type ContainerProps = {
  style: React.CSSProperties;
};

export const Container = ({style}: ContainerProps) => {
  return <div style={style}>this is a text</div>;
};
