import { useState } from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

function RandomPhoto(props) {
 
  

  // const handleRandomPhotoClick = async () => {
  //   if (onImageUrlChange) {
  //     const randomImageUrl = getRandomImageUrl();
  //     onImageUrlChange(randomImageUrl);
  //   }
  // };
  return (
    <div className="random-photo">
      {/* <div className="random-photo__button">
       
      </div> */}
      <div value={props.imagesUrl} className="random-photo__photo">
        <img value={props.imagesUrl}
         src={props.imagesUrl} alt="oop... please choose again" />
        
      </div>
    </div>
  ); 
}
export default RandomPhoto;
