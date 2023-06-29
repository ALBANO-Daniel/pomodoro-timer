import { BottomNavigation, BottomNavigationAction, useTheme } from "@mui/material";
import { RestoreOutlined } from "@mui/icons-material";
import { useState } from "react";
import React from "react";
import { tokens } from "../theme";

function Footer() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState("");

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Form" icon={<RestoreOutlined />} />
      <BottomNavigationAction label="Timer" icon={<RestoreOutlined />} />
      <BottomNavigationAction label="Git Repository" icon={<RestoreOutlined />} />
    </BottomNavigation>
  );
}

export default Footer;
