import { createTheme } from "@mui/material/styles";

export type CustomTheme = {
  primary: string;
  white: string;
  background: string;
};
const makeTheme = (t: CustomTheme) => {
  return createTheme({}, t);
};

const coralTheme = makeTheme({
  primary: "#f88379",
  white: "#ffffff",
  background: "#282c34",
});

const skyBlueTheme = makeTheme({
  primary: "#61DBFB",
  white: "#ffffff",
  background: "#282c34",
});

export const themes = [coralTheme, skyBlueTheme];
