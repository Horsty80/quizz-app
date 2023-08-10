import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./store";

import makeServer from "./server";

if (process.env.NODE_ENV === "development" && typeof makeServer === "function") {
  // makeServer();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="violet" grayColor="olive" radius="large" scaling="95%">
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>
);
