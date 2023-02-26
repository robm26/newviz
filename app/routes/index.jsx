import { Outlet } from "@remix-run/react";

import { Menu } from "~/components/menu";

export default function Index() {
  return (
    <div className="rootContainer">
      <Menu />
      <Outlet/>
    </div>
  );
}
