import React from "react";
import ReactDOM from "react-dom";
import { Box, Box1, Box2 } from "./reFlexing/Box";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Box>
        <Box1>
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
            Maps : EL ATlasse Rue des far{" "}
          </div>
        </Box1>
        <Box2>
          <div className="dtc w5 v-mid pa3">
            <img
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
        </Box2>
      </Box>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
