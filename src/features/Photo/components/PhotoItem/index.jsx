import { useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import "./PhotoItem.scss";

function PhotoItem({ infoPhoto , removePhoto}) {
  const handleRemovePhoto=()=>{
   removePhoto(infoPhoto.id)

  }
  return (
    <div className="photo-item">
      <Card className="photo-item__container">
        <CardImg
          className="photo-item__container__photo"
          alt="Card image cap"
          src={infoPhoto.photo}
        />
        <CardImgOverlay className="photo-item__container__context">
          <CardTitle tag="h5">{infoPhoto.title}</CardTitle>
          <CardText>{infoPhoto.category}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
        <div className="photo-item__container__button">
          <Button color="info" outline>
            Edit
          </Button>
          <Button onClick={handleRemovePhoto} color="warning" outline>
            Remove
          </Button>
        </div>
      </Card>
    </div>
  );
}
export default PhotoItem;
