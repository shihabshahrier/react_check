import React from 'react'
import Home from './Pages/Home'
import Updatetask from './Pages/Updatetask'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update-task/:id" element={<Updatetask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
