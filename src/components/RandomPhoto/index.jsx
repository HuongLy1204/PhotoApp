import { useState } from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

function RandomPhoto(props) {
  return (
    <div className="random-photo">
      <div value={props.imagesUrl} className="random-photo__photo">
        <img
          value={props.imagesUrl}
          src={props.imagesUrl}
          alt="oop... please choose again"
        />
      </div>
    </div>
  );
}
export default RandomPhoto;
