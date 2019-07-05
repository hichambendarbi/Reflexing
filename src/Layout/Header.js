import React from "react";
import Flex, { Box } from "../reFlexing";
import styled from "styled-components";
import {
  Button,
  ButtonGroup,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Navbar1 from "../Component/Navbar1";
import "../styles.css";

//Nom de laboratoire
const LaboratoryName = styled.div`
  background-color: transparent;
  height: 30px;
  color: #57ccc3;
  flex: 1;
  margin-left: 10px;
  font-size: 20px;
`;

//Tele de laboratoire
const LaboratoryTele = styled.div`
  width: 210px;
  background-color: transparent;
  color: gray;

  flex: 1;
`;

//Adress de laboratoire
const LaboratoireAddress = styled.div`
  width: 40px;
  background-color: transparent;
  color: gray;
  flex: 1;
`;
const BoxPrincipale = styled.div`
  width: 100%;
`;

const BoxHeader1 = styled.div`
  width: 100%;
  font-size: 12px;
`;
const BoxHeader2 = styled.div`
  width: 100%;
  font-size: 20px;
  border-bottom: 1px solid black;
`;

const Header = () => (
  <BoxPrincipale>
    <Flex style={{ width: "100%" }}>
      <BoxHeader1>
        <Flex row>
          <Box flex={"4"}>
            <Flex row>
              <LaboratoryName>Laboratoire Fes</LaboratoryName>
              <LaboratoryTele>+212 523222211</LaboratoryTele>
              <LaboratoireAddress>El Atlass Rue des far</LaboratoireAddress>
            </Flex>
          </Box>
          <Box>
            <Nav>
              <NavItem>
                <NavLink href="#" style={{ color: "gray" }}>
                  Se connecter
                </NavLink>
              </NavItem>
            </Nav>
          </Box>
        </Flex>
      </BoxHeader1>
      <BoxHeader2>
        <Navbar1 />
      </BoxHeader2>
    </Flex>
  </BoxPrincipale>
);

export default Header;
