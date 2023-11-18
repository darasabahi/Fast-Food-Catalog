import { styled } from "@mui/material/styles";

import { grey } from "@mui/material/colors";
export const HeaderComponent = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    "& .bootstrap": {
      display: "none",
    },
    "& .materialui": {
      display: "show",
      with: "100%",
      height: 100,
      textAlign: "center",
    },

    backgroundColor: grey[500],
  },
  [theme.breakpoints.up("md")]: {
    "& .materialui": {
      display: "none",
    },
  },
  [theme.breakpoints.up("lg")]: {},
}));
