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
  padding-left:0px;
  padding-right:0px;
`;

//Tele de laboratoire
const LaboratoryTele = styled.div`
  
  background-color: transparent;
  color: gray;
  margin-left:0px;
  flex: 1;
  padding-left:0px;
  padding-right:0px;
`;

//Adress de laboratoire
const LaboratoireAddress = styled.div`
  width: 40px;
  color: gray;
  flex: 1;
  padding-left:0px;
  padding-right:0px;
`;
const BoxPrincipale = styled.div`
  width: 100%;
`;

const BoxHeader1 = styled.div`
  width: 100%;
  font-size: 12px;
  background-color: greenyellow;

`;
const BoxHeader2 = styled.div`
  width: 100%;
  font-size: 20px;
  border-bottom: 1px solid black;
`;

const Header = () => (
  <BoxPrincipale style={{ width: "100%" }}>
    <Flex style={{ width: "100%" }}>
      <BoxHeader1 >
        <Flex row style={{ width: "100%" }}>
               <LaboratoryName>
                 Laboratoire Fes
               </LaboratoryName>
               <LaboratoryTele>
                 Tel : +212 521213244
               </LaboratoryTele>
               <LaboratoireAddress>
                Adress : EL Atlass rue des far
              </LaboratoireAddress>
                <Box>
                  ok
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
