import { createSlice } from "@reduxjs/toolkit";

const photos = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      state.push(newPhoto);
    },
    removePhoto: (state, action) => {
      const removeItem = action.payload
      state = state.filter((item) => item.id !== removeItem);
      return state
    },
  },
});
const { reducer, actions } = photos;
export const { addPhoto ,removePhoto} = actions;
export default reducer;
