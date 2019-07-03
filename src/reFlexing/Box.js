import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  flex: 1 100%;
  grow: ${props => props.grow};
  shrink: ${props => props.shrink};
  basis: ${props => props.basis};
  order: ${props => props.order};
  self: ${props => props.self};
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
}) => (
  <StyledElement
    css={css}
    grow={grow}
    shrink={shrink}
    basis={basis}
    order={order}
    flex={flex}
    self={self}
  >
    {children}
  </StyledElement>
);
