import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Label } from "reactstrap";
import NotFound from "../../../../components/NotFound";
import RandomPhoto from "../../../../components/RandomPhoto";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";

function PhotoForm({ infoPhoto }) {
  const { register, handleSubmit, control } = useForm();
  const [imageUrl, setImageUrl] = useState(
    "https://picsum.photos/id/237/200/300"
  );

  const onHandleSubmit = (data) => {
    data.photo = imageUrl;
    const random = Math.trunc(Math.random() * 2000);
    data.id = random;
    infoPhoto(data);
  };

  const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    setImageUrl(`https://picsum.photos/id/${randomId}/200/300`);
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div>
        <Label for="titleId">Title</Label>
        <input
          {...register("title")}
          // name="title"
          // id="titleId"
          placeholder="Eg: Wow nature ... "
        />
      </div>

      <div>
        <Label for="categoryId">Category</Label>
        <select id="categoryId" name="categoryId" {...register("category")}>
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
            <RandomPhoto {...register("id")} imagesUrl={imageUrl}></RandomPhoto>
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
