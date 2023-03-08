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
      <body className='rootContainer'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className='errorPanel'>error: {error}</div>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
