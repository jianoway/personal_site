import { useState } from "react";

import { Paper, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Link, useLocation } from "react-router-dom";
import "./Projects.scss";
import Home from "@mui/icons-material/Home";
import { useCustomTheme } from "../../utils/theme";

interface CarouselItemProps {
  title: string;
  description: string;
  image: string;
  linkTitle: string;
  link: string;
}

const Item = (props: CarouselItemProps) => {
  const theme = useCustomTheme();
  return (
    <div
    // elevation={0}
    // sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "top",
    //   bgcolor: "transparent",
    //   width: "300px",
    //   paddingBottom: "20px",
    //   height: "500px",
    // }}
    >
      <div>
        <div>
          <img
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            src={props.image}
          />
        </div>
        <h3 style={{ color: theme.primary }}>
          <code>{props.title}</code>
        </h3>
        <p className="projects-description">{props.description}</p>
        {props.link ? (
          <div className="projects-link" style={{ color: theme.primary }}>
            <Link
              to={props.link}
              style={{ color: theme.primary }}
              target="_blank"
            >
              <code>{props.linkTitle}</code>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
const Projects = () => {
  const theme = useCustomTheme();

  const items: CarouselItemProps[] = [
    {
      title: "O$P$ Telegram Bot",
      description: "A full-stack Telegram bot built with Python and MySQL",
      image: "/projects/o$p$.gif",
      linkTitle: "GitHub",
      link: "https://github.com/Owe-Pay/OPBot",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-list-container">
        <div className="projects-list-container_content">
          <div style={{ color: theme.primary }}>
            <h2>Projects</h2>
          </div>
          <Carousel
            interval={6000}
            sx={{ width: "300px", height: "600px" }}
            indicatorContainerProps={{
              style: {
                display: items.length < 2 ? "none" : "inherit",
                paddingTop: "20px",
              },
            }}
            navButtonsAlwaysInvisible={items.length < 2}
            navButtonsWrapperProps={{ style: { height: "400px" } }}
          >
            {items.map((item, i) => (
              <Item key={i} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
