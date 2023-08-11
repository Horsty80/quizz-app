import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";
import SelectionModeScreen from "./screens/SelectionModeScreen.tsx";
import SelectPlaylistScreen from "./screens/SelectPlaylistScreen.tsx";
import StartScreen from "./screens/StartScreen.tsx";
import EndScreen from "./screens/EndScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SelectionModeScreen />,
      },
      {
        path: "/start",
        element: <SelectPlaylistScreen />,
      },
      {
        path: "/start/:playlistId",
        element: <StartScreen />,
      },
      {
        path:"/end",
        element: <EndScreen/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="violet" grayColor="olive" radius="large" scaling="95%">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
