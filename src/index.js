import React from "react";
import ReactDOM from "react-dom";
import Flex, { Box } from "./reFlexing";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Flex>
        <Box
          css={
            "display: flex; flex-flow: row;  width: 100%;  min-width: 400px;  color: black;  font-size: 15px;  border-bottom: 1px solid gray;"
          }
        >
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "5px"
            }}
          >
            Email : LaboFes@Gmail.com
          </div>
          <div
            style={{
              marginLeft: "40px",
              marginBottom: "5px"
            }}
          >
            Adress : EL ATlasse Rue des far{" "}
          </div>
        </Box>
        <Box
          css={
            "display: flex; align-self: flex-start;  align-items: center; flex-flow: row; box-sizing: border-box; width: 100%; min-width: 400px; flex-grow: 1; margin-left: 0px; background-color: seagreen;"
          }
        >
          <div className="dtc w5 v-mid pa3">
            <img
              alt="Laboratoire fes logo"
              src="https://storage.mindeskvr.com/static/mindesk-logo-white-50.png"
              style={{
                marginLeft: "40px",
                marginBottom: "5px"
              }}
            />
          </div>
          <div
            className="dtc v-mid tr"
            id="navWide"
            style={{
              marginLeft: "390px",
              display: "flex",
              marginBottom: "5px"
            }}
          >
            <div id="wideDiv">
              <a
                className="f6 fw3 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/"
                style={{
                  marginRight: "40px",
                  marginBottom: "5px",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",

                  flexFlow: "row"
                }}
              >
                Acceuil
              </a>
              <a
                className="f6 fw3 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                href="/"
                style={{
                  marginRight: "40px",
                  marginBottom: "5px",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px"
                }}
              >
                Personnels
              </a>
              <a
                className="f6 fw3 hover-white no-underline white-70 dn dib-l pv2 ph3"
                href="/"
                style={{
                  marginRight: "40px",
                  marginBottom: "5px",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px"
                }}
              >
                Materiels
              </a>
              <a
                className="f6 fw3 hover-white no-underline white-70 dn dib-l pv2 ph3"
                href="/"
                style={{
                  marginRight: "40px",
                  marginBottom: "5px",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px"
                }}
              >
                Services
              </a>
              <a
                className="f6 fw3 hover-white no-underline white-70 dn dib-l pv2 ph3"
                href="/"
                style={{
                  marginRight: "40px",
                  marginBottom: "5px",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px"
                }}
              >
                Analyses
              </a>
              <a
                className="f6 fw3 hover-white no-underline white-70 dib mh4 pv2 ph3 ba"
                href="/"
                style={{
                  marginRight: "40px",
                  marginBottom: "5px",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px"
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </Box>
      </Flex>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
