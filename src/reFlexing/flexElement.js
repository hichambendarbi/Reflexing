import React from "react";
import styled from "styled-components";

const styledElement = styled.div`
  flex: 1 100%;
`;

export const FlexElement = ({
  children,
  grow,
  shrink,
  basis,
  order,
  flex,
  self
}) => <styledElement>Flex Element</styledElement>;
