import React from "react";

function entry(props){
    return (
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={props.name}>
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
          {props.meaning}
        </dd>
      </div>
    );
}
export default entry;