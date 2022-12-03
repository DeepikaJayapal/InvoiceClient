import React, { useEffect, useState } from 'react'
import axios from "axios";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

export default function List() {
    const [invoiceList, setInvoiceList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filterResults, setFilterResults] = useState([]);

    const onShowData = () => {
        let apiURL = "http://localhost:4000/list";
        axios.get(apiURL).then((response) => {
            setInvoiceList(response.data);
        })
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== "") {
            const filteredData = invoiceList.filter((invoiceList) => {
                // return Object.keys(invoiceList).some(key => {
                //     return invoiceList[key].toString().toLowerCase().includes(searchInput.toLowerCase());
                // })
                 return Object.values(invoiceList).join("").toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilterResults(filteredData)
        }
        else {
            setFilterResults(invoiceList)
        }
    }

    useEffect(() => {
        onShowData();
    }, []);
//  const invoiceList.date = new Intl.DateTimeFormat('en-US', { month: '2-digit',day: '2-digit',year: 'numeric'}).format(invoiceList.date);    
//     console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(invoiceList.date));
    return (
        <div>
            <div>
                <NavLink to="/intrastate">
                    <button className='icons'><BsFillArrowLeftCircleFill size={25} /></button>
                </NavLink>
                <input icon='search'
                    placeholder='Type to Search Here...'
                    onChange={(e) => searchItems(e.target.value)} className="m-3 w-25"
                />
            </div>
            <table className="table-sm table-success table-striped">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>InvoiceNumber</th>
                        <th>Date</th>
                        <th>BusinessName</th>
                        <th>Total</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    {searchInput.length > 1 ? (
                        filterResults.map((invoiceList) => {
                            return (
                                <tr>
                                    <td>{invoiceList.id}</td>
                                    <td>{invoiceList.invoicenumber}</td>
                                    <td>{invoiceList.date}</td>
                                    <td>{invoiceList.businessname}</td>
                                    <td>{invoiceList.finalamount}</td>
                                    <td><a style={{ textDecoration: "none" }} href={'/view/' + invoiceList.id}>View</a></td>
                                </tr>
                            )
                        })
                    ) : (
                        invoiceList.map((value, index) => {
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.invoicenumber}</td>
                                    <td>{value.date}</td>
                                    <td>{value.businessname}</td>
                                    <td>{value.finalamount}</td>
                                    <td><a style={{ textDecoration: "none" }} href={'/view/' + value.id}>View</a></td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}
