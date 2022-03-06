import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home';
import Admin from './pages/admin/Admin';
import AttacksAdmin from './pages/admin/attacks/AttacksList';
import AttacksForm from './pages/admin/attacks/AttacksForm';
import MonstersAdmin from './pages/admin/MonstersAdmin';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/admin" exact element={<Admin/>}/>
        <Route path="/admin/attacks" element={<AttacksAdmin/>}/>
        <Route path="/admin/attacks/new" element={<AttacksForm/>}/>
        <Route path="/admin/attacks/edit/:id" element={<AttacksForm/>}/>      
        <Route path="/admin/monsters" element={<MonstersAdmin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router