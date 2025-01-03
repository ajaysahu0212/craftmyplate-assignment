import "./index.css";
import App from "./App.jsx";
import theme from "./theme.jsx";
import store from "./redux/store.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={2} 
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <CssBaseline /> {/* Resets default browser styles */}
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
