import { createSlice } from "@reduxjs/toolkit";


const initialPhoto=JSON.parse(localStorage.getItem('infoPhoto'));
const photos = createSlice({
  name: "photos",
  initialState:  initialPhoto,
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
    editPhoto:(state,action)=>{
      const editPhoto=action.payload
      
    }
  },
});
const { reducer, actions } = photos;
export const { addPhoto ,removePhoto} = actions;
export default reducer;
