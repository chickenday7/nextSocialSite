import React from "react";
import {render} from "react-dom"
import App from "./components/App";
import theme from "./theme";
import LibraryThemeProvider from "./theme/LibraryThemeProvider";




render(
  <React.StrictMode>
   <LibraryThemeProvider theme={theme}>
      <App/>
    </LibraryThemeProvider>
  </React.StrictMode>,  
  document.getElementById("app")
)