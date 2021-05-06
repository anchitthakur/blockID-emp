import React from "react";

// components

import UserNavbar from "../components/Navbars/UserNavbar";

export default function Userlayout({ children }) {
  return (
    <>
      <UserNavbar transparent />
       <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}
