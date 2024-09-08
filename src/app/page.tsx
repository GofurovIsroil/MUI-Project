"use client";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { MainPageForm } from "@/components/MainPageForm/MainPageForm";
import { createTheme, ThemeProvider } from "@mui/material";
import createEmotionCache from "../../createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});

export default function Home() {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <div>
          <MainPageForm />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
