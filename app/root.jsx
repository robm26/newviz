import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "DDB VIZ",
  viewport: "width=device-width,initial-scale=1",
});

import stylesShared from "./styles/shared.css";
import stylesGrid from "./styles/grid.css";

export const links = () => {
    return [
        {rel:"stylesheet", href:stylesShared },
        {rel:"stylesheet", href:stylesGrid }
    ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon"  type="image/png" href="/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
