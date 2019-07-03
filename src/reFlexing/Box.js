import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  flex: 1 100%;
  ${props => props.css}
`;

export const Box = ({
  children,
  css,
  grow,
  shrink,
  basis,
  order,
  flex,
  self
}) => <StyledElement css={css}>{children}</StyledElement>;
