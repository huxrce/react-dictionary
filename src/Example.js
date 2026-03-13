import React from "react";

export default function Example(props) {
  console.log(props.example);
  if (props.example) {
    return (
      <span className="Example">
        <strong>Example: </strong>
        <em>{props.example}</em>
      </span>
    );
  } else {
    return null;
  }
}
