import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;
const BoxContainer1 = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  min-width: 400px;
  color: black;
  font-size: 15px;
  border-bottom: 1px solid gray;
`;
const BoxContainer2 = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-flow: row;
  box-sizing: border-box;
  width: 100%;
  min-width: 400px;
  flex-grow: 1;
  margin-left: 0px;
  background-color: seagreen;
`;

export const Box = ({ children }) => <BoxContainer>{children}</BoxContainer>;
export const Box1 = ({ children }) => <BoxContainer1>{children}</BoxContainer1>;
export const Box2 = ({ children }) => <BoxContainer2>{children}</BoxContainer2>;
