import { ListItem, Stack } from "@mui/material";
import { useCustomTheme } from "../../utils/theme";
import { Link } from "react-router-dom";

import "./Home.scss";

const HomeNav = () => {
  const theme = useCustomTheme();
  const makeLink = (href: string, title: string) => {
    return (
      <ListItem sx={{ display: "flex", justifyContent: "end" }}>
        <Link to={`/${href}`} style={{ color: theme.primary }}>
          {title}
        </Link>
      </ListItem>
    );
  };
  return (
    <div className="home-content_container">
      <Stack>
        {makeLink("projects", "Projects")}
        {makeLink("experience", "Experience")}
        {makeLink("contact", "Contact")}
      </Stack>
    </div>
  );
};

export default HomeNav;
