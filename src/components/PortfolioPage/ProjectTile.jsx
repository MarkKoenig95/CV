import React from "react";

function ProjectTile(props) {
  return (
    <div className="tile">
      <h2>
        <a href={props.sourceCodeLink}>{props.title}</a>
      </h2>
      <p className="project-description">{props.children}</p>
      <a className="source-link" href={props.sourceCodeLink}>
        See the source code here
      </a>
      {props.liveLink && (
        <a className="live-link" href={props.liveLink}>
          {props.liveLinkText || "See the site here"}
        </a>
      )}
    </div>
  );
}

export default ProjectTile;
