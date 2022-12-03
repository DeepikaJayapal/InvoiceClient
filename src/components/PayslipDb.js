import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const PayslipDb = () => {
    //"http://payslip.digitaltriumph.in/datas"
    const getEmployees = () => {
        axios.get("http://localhost:4000/datas").then((response) => {
            setEmployeeList(response.data);
        });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    const [employeeList, setEmployeeList] = useState([]);

    return (
        // database values shown in table 
        <div className="container-sm">
            <div className="d-flex justify-content-between">
                <NavLink to='/payslip'>
                    <button className='icons'><BsFillArrowLeftCircleFill size={32} /></button>
                </NavLink>
            </div>

            <table className="table-sm table-success table-striped">
                <thead>
                    <tr>
                        <th className="PaySlipDetails">Month</th>
                        <th className="PaySlipDetails">Name</th>
                        <th className="PaySlipDetails">Department</th>
                        <th className="PaySlipDetails">DateOfJoining</th>
                        <th className="PaySlipDetails">BankName</th>
                        <th className="PaySlipDetails">BankAccountNumber</th>
                        <th className="PaySlipDetails">PanNumber</th>
                        <th className="PaySlipDetails">WorkingDays</th>
                        <th className="PaySlipDetails">LopDays</th>
                        <th className="PaySlipDetails">Salary</th>
                        <th className="PaySlipDetails">HouseRentAllowance</th>
                        <th className="PaySlipDetails">MedicalAllowance</th>
                        <th className="PaySlipDetails">SpecialAllowance</th>
                        <th className="PaySlipDetails">ConveyanceAllowance</th>
                        <th className="PaySlipDetails">PF</th>
                        <th className="PaySlipDetails">IncomeTax</th>
                        <th className="PaySlipDetails">LopAmount</th>
                        <th className="PaySlipDetails">ProfessionalTax</th>
                        <th className="PaySlipDetails">GrossSalary</th>
                        <th className="PaySlipDetails">TotalDeductions</th>
                        <th className="PaySlipDetails">NetSalary</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((value, index) => {
                        return (
                            <tr key={value.id} >
                                <th scope="row">{value.month}</th>
                                <td className="payslip">{value.name}</td>
                                <td className="payslip">{value.department}</td>
                                <td className="payslip">{value.dateOfJoining}</td>
                                <td className="payslip">{value.bankName}</td>
                                <td className="payslip">{value.bankAccountNumber}</td>
                                <td className="payslip">{value.panNumber}</td>
                                <td className="payslip">{value.workingDays}</td>
                                <td className="payslip">{value.lopDays}</td>
                                <td className="payslip">{value.salary}</td>
                                <td className="payslip">{value.houseRentAllowance}</td>
                                <td className="payslip">{value.medicalAllowance}</td>
                                <td className="payslip">{value.specialAllowance}</td>
                                <td className="payslip">{value.conveyanceAllowance}</td>
                                <td className="payslip">{value.pf}</td>
                                <td className="payslip">{value.incomeTax}</td>
                                <td className="payslip">{value.lopAmount}</td>
                                <td className="payslip">{value.professionalTax}</td>
                                <td className="payslip">{value.grossSalary}</td>
                                <td className="payslip">{value.totalDeductions}</td>
                                <td className="payslip">{value.netSalary}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PayslipDb;