import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { Login } from './ApiComponents/Login';
import { Hello } from './components/Hello';
import { Car } from './components/Car';
import { Register } from './ApiComponents/Register';
import { Group } from './ApiComponents/group';
import { ProductForGroup } from './ApiComponents/Productforgr';

export default function RouterConfig() {
    return (
        <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/car" element={<Car />} />
          <Route path="/register" element={<Register />} />
          <Route path="/group" element={<Group />} />
          <Route path="/products/group/:idnhom" element={<ProductForGroup />} />
          <Route path="*" element={<h2>Không tìm thấy trang web theo yêu cầu</h2>} />
      </Routes>
    </BrowserRouter>
    )
}
export {RouterConfig}
