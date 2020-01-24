import React from "react";

function InfoButton(props) {
  //Make id lowercase, kebab-case version of title
  let id = props.title.toLowerCase();
  id = id.replace(/ /g, "-");

  return (
    <button
      id={id}
      onClick={() => {
        props.onClick(id, props.title);
      }}
      className="info-button"
    >
      <h2>{props.title}</h2>
      <div className={props.hide ? "info hide" : "info"}>
        <hr />
        {props.children}
      </div>
    </button>
  );
}

export default InfoButton;
