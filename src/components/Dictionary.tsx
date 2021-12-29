import * as React from "react";

function Flight(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.definition}</dd>
    </div>
  );
}

export default Flight;
