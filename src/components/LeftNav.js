import React from "react";

export default function Component() {
  const globalStyles = {
    cursor: "pointer",
    textDecoration: "none",
    color: "rgb(74, 74, 74)",
    display: "block",
    textAlign: "left",
  };
  return (
    <>
      <div
        className="sidebar"
        style={{
          borderRight: "1px solid rgb(226, 228, 230)",
          height: "100%",
          position: "fixed",
          width: "250px",
          left: "0px",
          top: "0px",
          zIndex: 99999,
          backgroundColor: "rgb(246, 248, 250)",
          overflowY: "scroll",
        }}
      >
        <div className="sidebar-header" style={{ height: "56px" }}>
          <a
            className="logo"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              padding: "12px 16px 0px",
              display: "inline-block",
              color: "rgb(74, 74, 74)",
            }}
          >
            Flx ChatBot
          </a>
        </div>
        <div className="sidebar-links">
          <div className="selected">
            <ul
              className="sub-links"
              style={{
                overflow: "hidden",
                listStyle: "none",
                margin: "0px",
                transition: "all 0.4s ease 0s",
                listStyleType: "none",
                color: "rgb(74, 74, 74)",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "24px",
                padding: "12px 0px 12px 30px",
                maxHeight: "300px",
              }}
            >
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>Previous Value</a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>Speech Recognition</a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>Speech Synthesis</a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>Options</a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>Validator</a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>Custom Component</a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>Simple Form</a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a
                  className="selected-link"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "block",
                    textAlign: "left",
                    color: "rgb(148, 78, 184)",
                  }}
                >
                  End Callback
                </a>
              </li>
              <li style={{ padding: "6px 0px" }}>
                <a style={globalStyles}>BMI</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
