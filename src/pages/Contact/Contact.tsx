import { useCustomTheme } from "../../utils/theme";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";
import "./Contact.scss";
import { SvgIcon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { makeToast } from "../../components/Toast/Toast";

const EMAIL = "tanjwkeith@gmail.com";

const Contact = () => {
  const theme = useCustomTheme();

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    makeToast("Copied!", theme.primary);
  };
  const contactLink = (
    title: string,
    link: string,
    Icon: typeof SvgIcon,
    color: string
  ) => {
    return (
      <div className="contact-content-item" style={{ color }}>
        <Icon />
        <Link to={link} style={{ color }}>
          <code>{title}</code>
        </Link>
      </div>
    );
  };
  const copyButton = (title: string, Icon: typeof SvgIcon, color: string) => {
    return (
      <div className="contact-content-item" style={{ color }}>
        <Icon />
        <code>{EMAIL}</code>
        <IconButton
          disableRipple={true}
          sx={{ mr: 2, color, fontSize: "sm" }}
          onClick={() => copyText(EMAIL)}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </div>
    );
  };
  return (
    <div className="contact_container">
      <div className="contact_body">
        <div className="contact-title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-content">
          {contactLink(
            "LinkedIn",
            "https://www.google.com",
            LinkedInIcon,
            theme.primary
          )}
          {contactLink(
            "GitHub",
            "https://www.google.com",
            GitHubIcon,
            theme.white
          )}
          {copyButton("tanjwkeith@gmail.com", EmailIcon, theme.primary)}
        </div>
      </div>
    </div>
  );
};

export default Contact;
