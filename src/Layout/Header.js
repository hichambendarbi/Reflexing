import React from "react";
import Flex, { Box } from "../reFlexing";
import { flexbox } from "@material-ui/system";
import "../styles.css";
const Header = () => (
  <Box
    backgroundC={"#f8f9fa"}
    width={"100%"}
    padding={"3px"}
    height={"50px"}
    display={"flex"}
    marginT="0px"
  >
    <Box
      width="150px"
      backgroundC="transparent"
      marginL="50px"
      height="30px"
      marginT="12px"
      color="#4CAF50"
      fontS="20px"
    >
      <div id="lab">Laboratoire Fes</div>
    </Box>
    <Box
      width="210px"
      backgroundC="transparent"
      marginL="70px"
      marginT="16px"
      color="#4CAF50"
    >
      <div id="Tel">Telephone: +212 521222223</div>
    </Box>
    <Box
      width="40px"
      backgroundC="transparent"
      marginL="15px"
      marginT="16px"
      color="#4CAF50"
    >
      <div id="Adress">Adress: EL atlass avenue</div>
    </Box>

    <Box width="100px" backgroundC="transparent" marginL="29%" marginT="5px">
      <button
        id="cn"
        style={{
          backgroundColor: "white",
          border: "2px solid #4CAF50",
          cursor: "pointer",
          color: "black",
          width: "100px",
          height: "40px",
          fontSize: "15px"
        }}
      >
        Connecter
      </button>
    </Box>
  </Box>
);

export default Header;
