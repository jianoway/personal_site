import ResumeTable from "./ResumeTable";
import "./Resume.scss";
import { IconButton } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-download-container">
        <a href="/JianWeiTAN-Resume(no_hp).pdf" download>
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
      <ResumeTable />
    </div>
  );
};

export default Resume;
