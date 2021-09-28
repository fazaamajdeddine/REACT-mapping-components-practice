import React from "react";
import Emoji from "./Emoji";

function Dictionary(props) {
  return (
  <dl className="dictionary">
        <div className="term">
          <dt>
            < Emoji emoji= {props.emoji}/>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
      
      </dl>);
}

export default Dictionary;
