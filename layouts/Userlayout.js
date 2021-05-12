import React from "react";

// components

import UserNavbar from "../components/Navbars/UserNavbar";
import useSWR from "swr"

export default function Userlayout({ children }) {

 let elements = React.Children.toArray(children)

 const fetcher = url => fetch(url,{method:"POST"}).then(res => res.json())
  const { data: user, error } = useSWR("/api/user", fetcher)

  if (elements.length === 1) {
    elements = React.cloneElement(elements[0], { user })
  }
  else if (elements.length > 0) {
    let lastElement = elements[elements.length - 1]
    elements =
      [React.cloneElement(elements[0], { user})]
        .concat(elements.slice(1, -1))
        .concat(React.cloneElement(lastElement, { user }))
  }

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
          {elements}
        </section>
      </main>
    </>
  );
}
