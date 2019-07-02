import React from "react";
import styled from "styled-components";

const Ab = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;

export const Bx = ({ children }) => <Ab>{children}</Ab>;
