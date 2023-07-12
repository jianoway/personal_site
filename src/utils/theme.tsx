import { useTheme } from "@emotion/react";

export const useCustomTheme = () => {
  const theme: any = useTheme();
  return theme;
};
