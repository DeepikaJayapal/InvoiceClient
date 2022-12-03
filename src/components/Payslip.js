import React, { useState, useRef } from 'react';
import pic from "../pages/digitallogo.png";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { ToWords } from 'to-words';
import { useReactToPrint } from "react-to-print";
import "./payslip.css";

function Payslip() {

    const handleClick = () => {
        localStorage.clear();
        window.location.replace("http://localhost:3000/");
    }

    const [employeeId, setEmployeeId] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState(0);
    const [houseRentAllowance, setHouse] = useState(0);
    const [conveyanceAllowance, setConvayance] = useState(0);
    const [medicalAllowance, setMedical] = useState(0);
    const [specialAllowance, setSpecial] = useState(0);
    const [name, setName] = useState();
    const [department, setDepartment] = useState();
    const [incomeTax, setIncome] = useState(0);
    const [month, setMonth] = useState(0);
    const [workingDays, setWorkingDays] = useState(30);
    const [lopDays, setLopDays] = useState(0);
    const [dateOfJoining, setDateOfJoining] = useState(0);
    const [bankName, setBankName] = useState();
    const [bankAccountNumber, setBankAccountNumber] = useState(0);
    const [panNumber, setPanNumber] = useState(0);
    const [uanNumber, setUanNumber] = useState(0);

    const grossSalary = parseInt(salary) + parseInt(houseRentAllowance) + parseInt(conveyanceAllowance) + parseInt(medicalAllowance) + parseInt(specialAllowance) || "";
    const pf = salary * 0.12 || "";
    const professionalTax = 210;
    const lopAmount = lopDays * (salary / workingDays) || 0;
    const totalDeductions = parseInt(pf) + parseInt(incomeTax) + parseInt(professionalTax) + parseInt(lopAmount) || "";
    const netSalary = grossSalary - totalDeductions || "";
    const toWords = new ToWords();
    const amountinwords = toWords.convert(Number(netSalary), { currency: true });

    const [employeeList, setEmployeeList] = useState([]);
    // posting data to backend

    // "http://payslip.digitaltriumph.in/create"
    const onSubmitForm = () => {
        let apiURL = "http://localhost:4000/createpayslip";
        axios.post(apiURL, {
            salary: salary,
            houseRentAllowance: houseRentAllowance,
            conveyanceAllowance: conveyanceAllowance,
            medicalAllowance: medicalAllowance,
            specialAllowance: specialAllowance,
            grossSalary: grossSalary,
            pf: pf,
            incomeTax: incomeTax,
            professionalTax: professionalTax,
            workingDays: workingDays,
            lopAmount: lopAmount,
            lopDays: lopDays,
            totalDeductions: totalDeductions,
            netSalary: netSalary,
            name: name,
            department: department,
            month: month,
            bankAccountNumber: bankAccountNumber,
            bankName: bankName,
            panNumber: panNumber,
            dateOfJoining: dateOfJoining,
        }).then(() => {
            setEmployeeList([...employeeList])
        })
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <div className='d-flex justify-content-between p-2'>
                <NavLink to="/start">
                    <button className='icons'><BsFillArrowLeftCircleFill size={32} /></button>
                </NavLink>
                <button onClick={handleClick} style={{ border: "none", background: "none", color: "#f66700" }} className="fs-4">Logout</button>
            </div>
            <div className="container card-0 justify-content-center body" >
                <div className="card-body px-sm-4 px-0">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-10 col">
                            <p className="mt-md-4 ml-md-0 ml-2 text-center text-sm-left"></p>
                        </div>
                    </div>
                    <div className="row justify-content-center round">
                        <div className="col-lg-10 col-md-12 " style={{ width: "95%" }}>
                            <div className="card shadow-lg card-1">
                                <div className="card-body inner-card" >
                                    <div>
                                        {/* header */}
                                        <div className="d-flex">
                                            <div style={{ width: "53%" }}>
                                                <img src={pic} alt="Logo" className='logo' />
                                            </div>
                                            <div>
                                                <div className="vls"></div>
                                            </div>
                                            <div>
                                                <div id="DtHeading">Digital Triumph Private Limited</div>
                                                <div style={{ fontSize: "15px" }}> AC 149,Plot No 4920,AC Block,<br />
                                                    Achu Towers, 3rd Floor, 2nd Avenue<br />
                                                    Anna Nagar, Chennai - 600040.</div>
                                            </div>
                                        </div>
                                        <hr className="HorizontalLineDiv" style={{ marginTop: "0px" }} />
                                        <div className=' d-flex justify-content-between' style={{ paddingBottom: "10px" }}>
                                            <div className="row">
                                                <label className="col-7 col-form-label" style={{ paddingRight: "0px", width: "54%" }} >Pay Slip for the month of</label>
                                                <div className="col-5 px-0 text-left " >
                                                    <input type="text" className="form-control inputs month" name='month' onChange={(event) => setMonth(event.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        {/* table content */}
                                        <table className="table table-bordered table-sm" >
                                            <tbody>
                                                <tr className="trs">
                                                    <th className="ths">Employee Name</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='name' onChange={(event) => setName(event.target.value)} /></td>
                                                    <th className="ths">Total Working Days</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='workingDays' onChange={(event) => setWorkingDays(event.target.value)} /></td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Employee ID</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='employeeId' onChange={(event) => setEmployeeId(event.target.value)} /></td>
                                                    <th className="ths">LOP Days</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control " name='lopDays' onChange={(event) => setLopDays(event.target.value)} /></td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Designation</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name=' designation' onChange={(event) => setDesignation(event.target.value)} /></td>
                                                    <th className="ths">Bank Name</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='bankName' onChange={(event) => setBankName(event.target.value)} /></td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Department</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='department' onChange={(event) => setDepartment(event.target.value)} /></td>
                                                    <th className="ths">Bank A/c No.</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='bankAccountNumber' onChange={(event) => setBankAccountNumber(event.target.value)} /></td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Date of Joining</th>
                                                    <td className="tds"><input type="date" className="border border-0 form-control" name='dateOfJoining' onChange={(event) => setDateOfJoining(event.target.value)} /></td>
                                                    <th className="ths">PAN</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='panNumber' onChange={(event) => setPanNumber(event.target.value)} /></td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">UAN</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='uanNumber' onChange={(event) => setUanNumber(event.target.value)} /></td>
                                                    <td className="tds"></td>
                                                    <td className="tds"></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table className="table table-bordered table-sm" >
                                            <tbody>
                                                <tr className="trs">
                                                    <th colSpan="2" className='text-center'><h3>Earnings</h3></th>
                                                    <th colSpan="2" className='text-center'><h3>Deductions</h3></th>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Basic Salary</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='salary' onChange={(event) => setSalary(event.target.value)} /></td>
                                                    <th className="ths">PF</th>
                                                    <td className="tds">{pf}</td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">House Rent Allowances</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='houseRentAllowance ' onChange={(event) => setHouse(event.target.value)} /></td>
                                                    <th className="ths">Income Tax</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='incomeTax' onChange={(event) => setIncome(event.target.value)} /></td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Conveyance Allowances</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name="conveyanceAllowance " onChange={(event) => setConvayance(event.target.value)} /></td>
                                                    <th className="ths">Professional Tax</th>
                                                    <td className="tds">{professionalTax}</td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Medical Allowances</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='medicalAllowance' onChange={(event) => setMedical(event.target.value)} /></td>
                                                    <th className="ths">LOP Amount</th>
                                                    <td className="tds">{lopAmount}</td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Special Allowances</th>
                                                    <td className="tds"><input type="text" className="border inputs border-0 form-control" name='specialAllowance' onChange={(event) => setSpecial(event.target.value)} /></td>
                                                    <td className="tds"></td>
                                                    <td className="tds"></td>
                                                </tr>
                                                <tr className="trs">
                                                    <th className="ths">Gross Salary</th>
                                                    <td className="tds">{grossSalary}</td>
                                                    <th className="ths">Total Deductions</th>
                                                    <td className="tds">{totalDeductions}</td>
                                                </tr>
                                                <tr className="trs">
                                                    <th colSpan="2" className='text-center'>Net Salary</th>
                                                    <td colSpan="2">{netSalary}</td>
                                                </tr>
                                                <tr className="trs">
                                                    <th colSpan="2" className='text-center'>Amount in Words</th>
                                                    <td colSpan="2" className="tds"><input type="text" className="border inputs border-0 form-control" value={amountinwords} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* footer */}
                                        <h5 style={{ paddingTop: "8px" }}>Employee Signature :</h5>
                                        <div className='d-flex justify-content-between' style={{ paddingTop: "18px" }}>
                                            <p>This is an autogenerated document. It does not need any official signature.</p>
                                            <div className='d-flex'>
                                                <div>
                                                    <button onClick={onSubmitForm} type="button" className="btn btn-secondary btn-sm" style={{ height: "26px", paddingTop: "0px", marginRight: "10px" }}>Submit</button>
                                                </div>
                                                <div>
                                                    <NavLink to="/payslipdb">
                                                        <button onClick={handlePrint} type="button" className="btn btn-secondary btn-sm" style={{ height: "26px", paddingTop: "0px" }}>Print</button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "none" }}>
                <div ref={componentRef} className="font spacing">
                    <div className="d-flex">
                        <div style={{ width: "50%" }}>
                            <img src={pic} alt="Logo" className='logo' />
                        </div>
                        <div>
                            <div className="vls"></div>
                        </div>
                        <div>
                            <div id="DtHeading">Digital Triumph Private Limited</div>
                            <div style={{ fontSize: "15px" }}> AC 149,Plot No 4920,AC Block,<br />
                                Achu Towers, 3rd Floor, 2nd Avenue<br />
                                Anna Nagar, Chennai - 600040.</div>
                        </div>
                    </div>
                    <hr className="HorizontalLineDiv" style={{ marginTop: "0px" }} />
                    <div className='pb-3'>
                        <label>Pay Slip for the month of   </label>   {month}
                    </div>
                    <table className="table table-bordered table-sm tables" >
                        <tbody>
                            <tr>
                                <th className="ths">Employee Name</th>
                                <td className="tds">{name}</td>
                                <th className="ths">Total Working Days</th>
                                <td className="tds">{workingDays}</td>
                            </tr>
                            <tr>
                                <th className="ths">Employee ID</th>
                                <td className="tds">{employeeId}</td>
                                <th className="ths">LOP Days</th>
                                <td className="tds">{lopDays}</td>
                            </tr>
                            <tr>
                                <th className="ths">Designation</th>
                                <td className="tds">{designation}</td>
                                <th className="ths">Bank Name</th>
                                <td className="tds">{bankName}</td>
                            </tr>
                            <tr>
                                <th className="ths">Department</th>
                                <td className="tds">{department}</td>
                                <th className="ths">Bank A/c No.</th>
                                <td className="tds">{bankAccountNumber}</td>
                            </tr>
                            <tr>
                                <th className="ths">Date of Joining</th>
                                <td className="tds">{dateOfJoining}</td>
                                <th className="ths">PAN</th>
                                <td className="tds">{panNumber}</td>
                            </tr>
                            <tr>
                                <th className="ths">UAN</th>
                                <td className="tds">{uanNumber}</td>
                                <td className="tds"></td>
                                <td className="tds"></td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-bordered table-sm tables" >
                        <tbody>
                            <tr>
                                <th colSpan="2" className='text-center'><h3>Earnings</h3></th>
                                <th colSpan="2" className='text-center'><h3>Deductions</h3></th>
                            </tr>
                            <tr>
                                <th className="ths">Basic Salary</th>
                                <td className="tds">{salary}</td>
                                <th className="ths">PF</th>
                                <td className="tds">{pf}</td>
                            </tr>
                            <tr>
                                <th className="ths">House Rent Allowances</th>
                                <td className="tds">{houseRentAllowance}</td>
                                <th className="ths">Income Tax</th>
                                <td className="tds">{incomeTax}</td>
                            </tr>
                            <tr>
                                <th className="ths">Conveyance Allowances</th>
                                <td className="tds">{conveyanceAllowance}</td>
                                <th className="ths">Professional Tax</th>
                                <td className="tds">{professionalTax}</td>
                            </tr>
                            <tr>
                                <th className="ths">Medical Allowances</th>
                                <td className="tds">{medicalAllowance}</td>
                                <th className="ths">LOP Amount</th>
                                <td className="tds">{lopAmount}</td>
                            </tr>
                            <tr>
                                <th className="ths">Special Allowances</th>
                                <td className="tds">{specialAllowance}</td>
                                <td className="tds"></td>
                                <td className="tds"></td>
                            </tr>
                            <tr>
                                <th className="ths">Gross Salary</th>
                                <td className="tds">{grossSalary}</td>
                                <th className="ths">Total Deductions</th>
                                <td className="tds">{totalDeductions}</td>
                            </tr>
                            <tr>
                                <th colSpan="2" className='text-center ths'>Net Salary</th>
                                <td colSpan="2" className='tds'>{netSalary}</td>
                            </tr>
                            <tr>
                                <th colSpan="2" className='text-center ths'>Amount in Words</th>
                                <td colSpan="2" className='tds'>{amountinwords}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 style={{ paddingTop: "8px" }}>Employee Signature :</h5>
                    <p className='footer'>This is an autogenerated document. It does not need any official signature.</p>
                </div>
            </div>
        </div>
    )
}

export default Payslip