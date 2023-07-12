import { Dispatch, SetStateAction } from "react";
import { CustomTheme, themes } from "../themes";
import { IconButton, Toolbar } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
  Square as SquareIcon,
} from "@mui/icons-material";
import { useCustomTheme } from "../utils/theme";
import { useLocation, useNavigate } from "react-router-dom";
interface NavBarProps {
  setTheme: Dispatch<SetStateAction<CustomTheme>>;
}

const NavBar = (props: NavBarProps) => {
  const { setTheme } = props;
  const theme = useCustomTheme();

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const ThemeSwitcher = () => {
    const handleClick = (t: any) => {
      setTheme(t);
    };
    const res = [];
    for (const t of themes) {
      const tAny: any = t;
      res.push(
        <IconButton
          edge="start"
          aria-label="menu"
          disableRipple={true}
          sx={{ mr: 2, color: tAny.primary }}
          onClick={() => handleClick(tAny)}
        >
          <SquareIcon />
        </IconButton>
      );
    }
    return res;
  };

  return (
    <Toolbar
      sx={{
        justifyContent: pathname == "/" ? "right" : "space-between",
      }}
    >
      {pathname != "/" ? (
        <IconButton
          edge="start"
          aria-label="menu"
          disableRipple={true}
          sx={{ mr: 2, color: theme.primary }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon />
        </IconButton>
      ) : null}

      <div>{ThemeSwitcher()}</div>
    </Toolbar>
  );
};

export default NavBar;
