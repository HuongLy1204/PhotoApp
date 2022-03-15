import { Suspense } from "react";
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Photo from "./features/Photo";
import "./App.scss";


function App() {
  return (
    <div className="photo-app">
      <Header />
      <Routes>
        <Route path="/*" element={<Photo />} />
      </Routes>
    </div>
  );
}

export default App;
