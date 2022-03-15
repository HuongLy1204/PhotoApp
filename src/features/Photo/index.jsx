import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "../../components/Banner";
import AddEdit from "./pages/AddEdit";
import MainPage from "./pages/Main";

function Photo() {
  return (
    <>
      <Routes>
        <Route path="photos" element={<MainPage />} />
        <Route path="photos/add" element={<AddEdit />} />
      </Routes>
    </>
  );
}

export default Photo;
