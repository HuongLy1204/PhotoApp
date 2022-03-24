import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto } from "../../photoSlice";
import "./AddEdit.scss";

function AddEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const onHandleSubmit = (values) => {
    const action = addPhoto(values);

    dispatch(action);
    navigate("/photos");
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />
      <div className="photo-edit__form">
        <PhotoForm infoPhoto={onHandleSubmit} />
      </div>
    </div>
  );
}
export default AddEdit;
