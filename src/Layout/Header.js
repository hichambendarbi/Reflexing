import React from "react";
import Flex, { Box } from "../reFlexing";
import styled from "styled-components";
import "../styles.css";

//Nom de laboratoire
const LaboratoryName = styled.div`
  width: 150px;
  background-color: transparent;
  margin-left: 50px;
  height: 30px;
  margin-right: 12px;
  color: #4caf50;
  font-size: 20px;
`;

//Tele de laboratoire
const LaboratoryTele = styled.div`
  width: 210px;
  background-color: transparent;
  margin-left: 70px;
  margin-top: 16px;
  color: #4caf50;
`;

//Adress de laboratoire
const LaboratoireAddress = styled.div`
  width: 40px;
  background-color: transparent;
  margin-left: 15px;
  margin-top: 16px;
  color: #4caf50;
`;

const Header = () => (
  <Box style={{ border: "1px solid red", width: "100%" }}>
    <Flex row>
      <Box flex={"4"}>
        <LaboratoryName>Laboratoire Fes</LaboratoryName>
      </Box>
      <Box flex={"1"}>
        <LaboratoryTele>06776667676767</LaboratoryTele>
      </Box>
      <Box flex={"2"}>1</Box>
    </Flex>
  </Box>
);

export default Header;
