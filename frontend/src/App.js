import React from "react";
import AdminForm from "./components/adminform/AdminForm";
import Main from "./components/main/Main";
import Allatok from "./components/allatok/Allatok";
import Kapcsolat from "./components/kapcsolat/Kapcsolat";
import Kutyak from "./components/kutyak/Kutyak";
import Macskak from "./components/macskak/Macskak";
import OrokbefogadasForm from "./components/orokbefogadasform/OrokbefogadasForm";
import Fileupload from "./components/fileupload/Fileupload";
import Todo from "./components/todo/Todo";
import HozzaadForm from "./components/todo/HozzaadForm";
import ModositForm from "./components/todo/ModositForm";
import OrokbefogadottForm from "./components/todo/OrokbefogadottForm";
import Onkentes from "./components/segitseg/Onkentes";
import IdeiglenesBefogado from "./components/segitseg/IdeiglenesBefogado";
import Tamogatas from "./components/segitseg/Tamogatas";
import Elerhetoseg from "./components/elerhetosegek/Elerhetoseg";

import "tachyons";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/admin" element={<AdminForm />}></Route>
        <Route path="/allatok" element={<Allatok />}></Route>
        <Route path="/kutyak" element={<Kutyak />}></Route>
        <Route path="/macskak" element={<Macskak />}></Route>
        <Route path="/kapcsolat" element={<Kapcsolat />}></Route>
        <Route path="/orokbefogadas" element={<OrokbefogadasForm />}></Route>
        <Route path="/fileupload" element={<Fileupload />}></Route>
        <Route path="/todo/HozzaadForm" element={<HozzaadForm />}></Route>{" "}
        <Route path="/update/:allatid" element={<ModositForm />}></Route>
        <Route path="/orokbefogadott" element={<OrokbefogadottForm />}></Route>
        <Route path="/onkentes" element={<Onkentes />}></Route>
        <Route
          path="/ideiglenesBefogado"
          element={<IdeiglenesBefogado />}
        ></Route>
        <Route path="/tamogatas" element={<Tamogatas />}></Route>
        <Route path="/elerhetoseg" element={<Elerhetoseg />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
