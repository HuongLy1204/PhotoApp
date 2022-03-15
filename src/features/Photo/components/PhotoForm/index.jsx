import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature ... " />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Input
          id="categoryId"
          name="categoryId"
          type="select"
          
        >
            {PHOTO_CATEGORY_OPTIONS.map(item=>
                <option key={item.id}>{item.label}</option>
            )}
        </Input>
      </FormGroup>
      <FormGroup>
          <Label for="categoryId">Photo</Label>
          <div>
              <Button type="button" >Random a photo</Button>
          </div>
          <div>

          <img width="200px" height="200px" src={Images.SUNSET_BG} />
          </div>
      </FormGroup>
      <FormGroup>
          <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  );
}
export default PhotoForm;
