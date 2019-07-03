import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  flex-grow: 0;
`;

export const Flex = ({ children, row }) => (
  <BoxContainer row={row}>{children}</BoxContainer>
);
