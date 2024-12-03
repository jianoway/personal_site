// Import packages
import { IconButton } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

// Import components
import ExperienceTable from "./ExperienceTable";

// Import styles
import "./Experience.scss";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-download-container">
        <a href="/JianWeiTAN-Experience(no_hp).pdf" download>
          <IconButton
            edge="start"
            aria-label="menu"
            disableRipple={true}
            sx={{ mr: 2, color: "white", fontSize: "medium" }}
          >
            <code>Download</code> <DownloadIcon />
          </IconButton>
        </a>
      </div>
      <ExperienceTable />
    </div>
  );
};

export default Experience;
