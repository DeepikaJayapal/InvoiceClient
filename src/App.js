import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IntraState from "./pages/intrastate";
import InterState from "./pages/interstate";
import BillInternational from "./components/BillInternational";
import List from "./components/list";
import View from "./components/view";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Start from "./components/Start";
import Payslip from "./components/Payslip";
import PayslipDb from "./components/PayslipDb";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="start" element={<Start/>}></Route>
            <Route path="intrastate" element={<IntraState />}></Route>
            <Route path="interstate" element={<InterState />}></Route>
            <Route path="international" element={<BillInternational />}></Route>
            <Route path="list" element={<List />}></Route>
            <Route path="view/:id" element={<View />}></Route>
            <Route path="payslip" element={<Payslip/>}></Route>
            <Route path="payslipdb" element={<PayslipDb/>}></Route>
            {/* <Route path="registration" element={<Registration />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;