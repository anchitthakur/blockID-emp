import React from "react";
import Login from "./auth/login";
import Auth from "../layouts/Auth";

export default function Index() {
  return (
    <Auth>
        <Login/>
    </Auth>
  );
}
