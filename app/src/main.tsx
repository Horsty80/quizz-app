import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="violet" grayColor="olive" radius="large" scaling="95%">
        <App />
    </Theme>
  </React.StrictMode>
);
