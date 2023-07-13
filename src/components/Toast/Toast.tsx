import toast, { Toaster } from "react-hot-toast";
import { useCustomTheme } from "../../utils/theme";

import "./Toast.scss";
import { Button } from "@mui/material";

export const makeToast = (message: string, color: string) => {
  const toastId = toast.custom(
    <Button
      className="custom-toast"
      sx={{
        color: "white",
        ":hover": { background: "transparent" },
      }}
      disableRipple
      disableTouchRipple
      onClick={() => {
        toast.dismiss(toastId);
        toast.remove(toastId);
      }}
    >
      <code>{message}</code>
    </Button>,
    {
      duration: 2000,
    }
  );
  return toastId;
};
