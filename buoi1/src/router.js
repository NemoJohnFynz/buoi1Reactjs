import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { Login } from './components/Login';
import { Hello } from './components/Hello';
import { Car } from './components/Car';

export default function RouterConfig() {
    return (
        <BrowserRouter>
      <Routes>
           <Route path="/" element={<App />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/car" element={<Car />} />
          <Route path="*" element={<h2>Không tìm thấy trang web theo yêu cầu</h2>} />
      </Routes>
    </BrowserRouter>
    )
}
export {RouterConfig}
