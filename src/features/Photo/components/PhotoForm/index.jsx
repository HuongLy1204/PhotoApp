import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Label } from "reactstrap";
import NotFound from "../../../../components/NotFound";
import RandomPhoto from "../../../../components/RandomPhoto";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";

function PhotoForm({ infoPhoto }) {
  const { register, handleSubmit, control } = useForm();

  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) =>
    state.photo.find((x) => x.id === +photoId)
  );
  const [imageUrl, setImageUrl] = useState(
    isAddMode ? "https://picsum.photos/id/237/200/300" : editedPhoto.photo
  );
  const initalValue = {
    // title:"",
    // category:"",
    photo: imageUrl,
  };

  const onHandleSubmit = (data) => {
    data.photo = imageUrl;
    const random = Math.trunc(Math.random() * 2000);
    data.id = random;
    infoPhoto(data);
  };

  const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    setImageUrl(`https://picsum.photos/id/${randomId}/200/300`);
    console.log(imageUrl);
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div>
        <Label for="titleId">Title</Label>
        <input
          {...register("title")}
          value={isAddMode ? initalValue.title : editedPhoto.title}
          placeholder="Eg: Wow nature ... "
        />
      </div>

      <div>
        <Label for="categoryId">Category</Label>
        <select
          value={isAddMode ? initalValue.category : editedPhoto.category}
          id="categoryId"
          name="categoryId"
          {...register("category")}
        >
          {PHOTO_CATEGORY_OPTIONS.map((item) => (
            <option key={item.id}>{item.label}</option>
          ))}
        </select>
      </div>
      <div>
        <Label for="categoryId">Photo</Label>
        <button type="button" onClick={getRandomImageUrl}>
          Random a Photo
        </button>
      </div>

      <div>
        <Controller
          control={control}
          name="photo"
          {...register("photo")}
          render={({ field }) => (
            <RandomPhoto
              {...register("id")}
              imagesUrl={imageUrl}
            ></RandomPhoto>
          )}
        ></Controller>
      </div>
      <div>
        <Button type="submit" color="primary">
          Add to album
        </Button>
      </div>
    </form>
  );
}
export default PhotoForm;
