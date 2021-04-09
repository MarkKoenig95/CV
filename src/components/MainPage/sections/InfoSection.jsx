import React from "react";

export default function InfoSection({ children, hide, title }) {
  //Make id lowercase, kebab-case version of title
  let id = title.toLowerCase();
  id = id.replace(/ /g, "-");

  return (
    <div id={id} className={hide ? "info hide" : "info"}>
      <h2>{title}</h2>
      <hr />
      {children}
    </div>
  );
}
