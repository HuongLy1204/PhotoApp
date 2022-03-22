import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoItem from "../../components/PhotoItem";
import { removePhoto } from "../../photoSlice";
import "./Main.scss";

function MainPage(props) {
  const listPhoto = useSelector((state) => state.photo);
  const dispatch = useDispatch()

  const onHandleRemovePhoto= (data)=>{
    dispatch(removePhoto(data))
  }
  return (
    <div className="photo-main">
      <Banner title="Yours awesome photos " backgroundUrl={Images.SEA_BG} />
      <Container className="photo-main__text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
      <div className="photo-main__photo-list">
        {listPhoto.map((item) => {
          return<PhotoItem 
          infoPhoto={item}
          removePhoto={onHandleRemovePhoto} ></PhotoItem>;
        })}
      </div>
    </div>
  );
}
export default MainPage;
