"use client";
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";

const baselightTheme = createTheme({
  palette: {
    primary: {
      main: "#7620FF",
    },
    secondary: {
      main: "#F3A92A",
    },
    success: {
      main: "#13DEB9",
    },
    text: {
      primary: "#000",
      secondary: "#F3A92A",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input.Mui-disabled, & .MuiOutlinedInput-input.Mui-disabled":
            {
              color: "rgba(0, 0, 0, 0.7)",
              fontWeight: 500,
              WebkitTextFillColor: "rgba(0, 0, 0, 0.9)",
              backgroundColor: "rgba(0, 0, 0, 0.030)",
            },
          "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "rgba(0, 0, 0, 0.12)",
            },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: "30px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "2px 6px",
        },
        head: {
          height: "30px",
          padding: "2px 6px",
        },
      },
    },
  },
  typography,
});

export { baselightTheme };
