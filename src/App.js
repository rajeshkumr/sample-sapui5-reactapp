import React from "react";
import { Base } from "./Base";
import { ThemeProvider } from "@ui5/webcomponents-react/dist/ThemeProvider";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <ThemeProvider>
      <Base />
    </ThemeProvider>
    </HashRouter>
  );
}

export default App;