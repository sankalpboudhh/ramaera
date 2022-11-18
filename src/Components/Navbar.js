import React from "react";
import "../App.css";
import { Box } from "@mui/material";

export default function Navbar() {
  return (
    <Box className="navbar">
      <h1>asqwfasadfasdjakljsdkajs;djas</h1>
      <Box
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "space-between",
        }}
      >
        <h4 className="title">Ramaera Industries</h4>
      </Box>
    </Box>
  );
}
