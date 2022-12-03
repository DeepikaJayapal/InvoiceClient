import React, { useEffect, useState, useRef } from 'react'
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { RiPhoneFill } from 'react-icons/ri';
import { BsGlobe, BsPrinterFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import pic from "../pages/digitallogo.png";
import sign from "../pages/Signature.jpeg";
import { useReactToPrint } from "react-to-print";

export default function View() {
    const [lists, setLists] = useState([]);
    const [invoiceList, setInvoiceList] = useState([]);
    const { id } = useParams();
    // const InvId = searchParams.get("id");
    // console.log(id)

    const onViewData = () => {
        let apiURL = "http://localhost:4000/view/" + id;
        axios.get(apiURL).then((response) => {
            // console.log(response.data)
            setLists(response.data.productlist)
            setInvoiceList(response.data)
            // setLists(JSON.parse(response)['productlist']);
        })
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useEffect(() => {
        onViewData();
    }, []);
    if ("international" === invoiceList.type) {
        return (
            <div>
                <NavLink to="/list">
                    <button className='icons mx-2'><BsFillArrowLeftCircleFill  size={25} /></button>
                </NavLink>
                <button className="icons mx-2"  onClick={handlePrint}><BsPrinterFill size={25} /></button>
                <div ref={componentRef} className="font">
                    <div className='bodering international'>
                        <div className="row justify-content-center">
                            <div className="row">
                                <h3 className="font-weight-bold text-center text-sm-left" style={{ text_decoration: "underline" }} id="invoicehead">  Tax Invoice</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <label htmlFor="InvoiceNumber">Invoice Number : </label> {invoiceList.invoicenumber}
                                </div>
                                <div>
                                    <label htmlFor="InvoiceDate" >Invoice Date : </label> {invoiceList.date}
                                </div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv" />

                        <div className="d-flex">
                            <div style={{ width: "53%" }}>
                                <img src={pic} alt="Logo" className='image' />
                            </div>
                            <div>
                                <div className="vl"></div>
                            </div>
                            <div >
                                <div id="DtHeading">Digital Triumph Private Limited</div>
                                <div style={{ fontSize: "15px" }}> AC 149,Plot No 4920,AC Block,
                                    Achu Towers, 3rd Floor, 2nd Avenue
                                    Anna Nagar, Chennai 600040</div>
                                <div style={{ fontSize: "17px" }}>GSTIN : 33AAICD0696E1ZS</div>
                                <div style={{ fontSize: "17px" }}>LUT :  {invoiceList.lut}</div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv horizantaldiv" />
                        <form>
                            <div className="d-flex " style={{ height: "18%" }}>
                                <div style={{ width: "53%" }}>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Business-name">Business Name : </label> {invoiceList.businessname}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="ClientAddress"> Client Address : </label> {invoiceList.clientAddress}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="uennumber">UEN : </label> {invoiceList.uen}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Mobile-Number">Contact Number : </label> {invoiceList.mobilenumber}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="align mx-3" ></div>
                                </div>

                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="BuyerOrderNumber"> Buyer Order No : </label> {invoiceList.buyerordernumber}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Dated">Order Date : </label> {invoiceList.dated}
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className="col">
                                            <label htmlFor="PaymentTerms">Payment Terms : </label> {invoiceList.paymentterms}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* header end */}

                        <div>
                            <div className="row">
                                <div className="col">
                                    <div className="table-responsive top">
                                        <table className="table pad" id="tableid">
                                            <thead style={{ border_bottom: " 0px" }}>
                                                <tr>
                                                    <th className='pad' rowSpan="2">Description</th>
                                                    <th className='pad' rowSpan="2">HSN</th>
                                                    <th className='pad' rowSpan="2">Qty</th>
                                                    <th className='pad' rowSpan="2">Rate</th>
                                                    <th className='pad' rowSpan="2">Amt</th>
                                                    <th className='pad' colSpan="2">IGST</th>
                                                </tr>
                                                <tr>
                                                    <th className='pad'>Rate</th>
                                                    <th className='pad'>Amt</th>
                                                </tr>
                                            </thead>

                                            <tbody style={{ color: "black" }}>

                                                {lists.map((value) => {
                                                    return (
                                                        <tr key={value.id}>
                                                            <td>{value.productname}</td>
                                                            <td>{value.hsncode}</td>
                                                            <td>{value.quantity}</td>
                                                            <td>{value.price}</td>
                                                            <td>{value.amount}</td>
                                                            <td>{value.igsts}</td>
                                                            <td>{value.igsttotal}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td >{invoiceList.grandtotal}</td>
                                                <td></td>
                                                <td>{invoiceList.total}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr className="HorizontalLineDiv horizontal" />

                            <div className="row" style={{ paddingTop: "2px" }}>

                                <div className="col">
                                    <label>Amount in words : {invoiceList.amountinwords} </label>
                                </div>

                                <div className="col">
                                    <div className="row py-2" >
                                        <div className="col">
                                            <label htmlFor="IGSTPercent">GrandTotal </label>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" className="form-control input-sm printinput total" name="total" style={{ fontWeight: "bold" }} value={invoiceList.finalamount} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="HorizontalLineDiv horizantaldiv" />
                            </div>
                        </div>
                        {/* footer   */}

                        <div className="d-flex">
                            <div style={{ width: "53%" }}>
                                <div>Certified that the Particulars given above are true and correct</div>
                                <div id="CertifiedDT">For : Digital Triumph Private Limited</div>
                                <div> <img src={sign} alt="Signature" /></div>
                                <div id="AuthorisedSignature">Authorised Signatory</div>

                            </div>
                            <div>
                                <div className=" mx-3 vertical" ></div>
                            </div>
                            <div>
                                <div id="BankAccDetailsDiv" className="mb-2">Bank Account Details:</div>
                                <div>Account name :  Digital Triumph Pvt Ltd. </div>
                                <div>Account Number : 168305001781</div>
                                <div>IFSC Code : ICIC0001683</div>
                                <div> Branch Name : Anna Nagar Chennai </div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv horizantaldiv" />

                        <div className="col py-2 pb-5" style={{ marginBottom: "15px" }} >
                            <div id="termsConditions">Terms and Coditions:</div>
                            <div> We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct </div>
                        </div>
                        <div className='bottom'>
                            <div className='bottom-inner'>
                                <button className='buttons'><HiMail /></button>contact@digitaltriumph.in
                                <button className='buttons'><RiPhoneFill /></button>+91 9150564053/+91 4435575582
                                <button className='buttons'><BsGlobe /></button>www.digitaltriumph.in
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    } else if ("intrastate" === invoiceList.type) {
        return (
            <div>
                <NavLink to="/list">
                    <button className='icons mx-2'><BsFillArrowLeftCircleFill  size={25} /></button>
                </NavLink>
                <button className="icons mx-2"  onClick={handlePrint}><BsPrinterFill  size={25} /></button>
                <div ref={componentRef} className="font">
                    <div className='bodering intrastate'>
                        <div className="row justify-content-center">
                            <div className="row">
                                <h3 className="font-weight-bold text-center text-sm-left" style={{ text_decoration: "underline" }} id="invoicehead">  Tax Invoice</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <label htmlFor="InvoiceNumber">Invoice Number : </label> {invoiceList.invoicenumber}
                                </div>
                                <div>
                                    <label htmlFor="InvoiceDate" >Invoice Date : </label> {invoiceList.date}
                                </div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv" />
                        <div className="d-flex">
                            <div style={{ width: "53%" }}>
                                <img src={pic} alt="Logo" className='image' />
                            </div>
                            <div>
                                <div className="vl"></div>
                            </div>
                            <div >
                                <div id="DtHeading">Digital Triumph Private Limited</div>
                                <div style={{ fontSize: "15px" }}> AC 149,Plot No 4920,AC Block,
                                    Achu Towers, 3rd Floor, 2nd Avenue
                                    Anna Nagar, Chennai 600040</div>
                                <div style={{ fontSize: "17px" }}>GSTIN : 33AAICD0696E1ZS</div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv horizantaldiv" />

                        <form>
                            <div className="d-flex " style={{ height: "18%" }}>
                                <div style={{ width: "53%" }}>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Business-name">Business Name : </label> {invoiceList.businessname}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="ClientAddress"> Client Address : </label> {invoiceList.clientAddress}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="uennumber">GST : </label> {invoiceList.uen}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Mobile-Number">Contact Number : </label> {invoiceList.mobilenumber}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="align mx-3" ></div>
                                </div>

                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="BuyerOrderNumber"> Buyer Order No : </label> {invoiceList.buyerordernumber}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Dated">Order Date : </label> {invoiceList.dated}
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className="col">
                                            <label htmlFor="PaymentTerms">Payment Terms : </label> {invoiceList.paymentterms}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* header end */}

                        <div>
                            <div className="row">
                                <div className="col">
                                    <div className="table-responsive top">
                                        <table className="table pad" id="tableid">
                                            <thead style={{ border_bottom: " 0px" }}>
                                                <tr>
                                                    <th className='pad' rowSpan="2">Description</th>
                                                    <th className='pad' rowSpan="2">HSN</th>
                                                    <th className='pad' rowSpan="2">Qty</th>
                                                    <th className='pad' rowSpan="2">MFR</th>
                                                    <th className='pad' rowSpan="2">Rate</th>
                                                    <th className='pad' rowSpan="2">Amt</th>
                                                    <th className='pad' colSpan="2">CGST</th>
                                                    <th className='pad' colSpan="2">SGST</th>
                                                </tr>
                                                <tr>
                                                    <th className='pad'>Rate</th>
                                                    <th className='pad'>Amt</th>
                                                    <th className='pad'>Rate</th>
                                                    <th className='pad'>Amt</th>
                                                </tr>
                                            </thead>

                                            <tbody style={{ color: "black" }}>

                                                {lists.map((value) => {
                                                    return (
                                                        <tr key={value.id}>
                                                            <td>{value.productname}</td>
                                                            <td>{value.hsncode}</td>
                                                            <td>{value.quantity}</td>
                                                            <td>{value.mfr}</td>
                                                            <td>{value.price}</td>
                                                            <td>{value.amount}</td>
                                                            <td>{value.cgstrate}</td>
                                                            <td>{value.cgsttotal}</td>
                                                            <td>{value.cgstrate}</td>
                                                            <td>{value.cgsttotal}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td >{invoiceList.grandtotal}</td>
                                                <td></td>
                                                <td>{invoiceList.total}</td>
                                                <td></td>
                                                <td>{invoiceList.total}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr className="HorizontalLineDiv horizontal" />

                            <div className="row" style={{ paddingTop: "2px" }}>

                                <div className="col">
                                    <label>Amount in words : {invoiceList.amountinwords} </label>
                                </div>

                                <div className="col">
                                    <div className="row py-2" >
                                        <div className="col">
                                            <label htmlFor="IGSTPercent">GrandTotal </label>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" className="form-control input-sm printinput total" name="total" style={{ fontWeight: "bold" }} value={invoiceList.finalamount} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="HorizontalLineDiv horizantaldiv" />
                            </div>
                        </div>
                        {/* footer   */}

                        <div className="d-flex">
                            <div style={{ width: "53%" }}>
                                <div>Certified that the Particulars given above are true and correct</div>
                                <div id="CertifiedDT">For : Digital Triumph Private Limited</div>
                                <div> <img src={sign} alt="Signature" /></div>
                                <div id="AuthorisedSignature">Authorised Signatory</div>
                            </div>
                            <div>
                                <div className=" mx-3 vertical" ></div>
                            </div>
                            <div>
                                <div id="BankAccDetailsDiv" className="mb-2">Bank Account Details:</div>
                                <div>Account name :  Digital Triumph Pvt Ltd. </div>
                                <div>Account Number : 168305001781</div>
                                <div>IFSC Code : ICIC0001683</div>
                                <div> Branch Name : Anna Nagar Chennai </div>
                            </div>
                        </div>
                        <hr className="HorizontalLineDiv horizantaldiv" />
                        <div className="col py-2 pb-5" style={{ marginBottom: "15px" }}>
                            <div id="termsConditions">Terms and Coditions:</div>
                            <div> We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct </div>
                        </div>
                        <div className="bottom">
                            <div >
                                <button className='buttons'><HiMail /></button>contact@digitaltriumph.in
                                <button className='buttons'><RiPhoneFill /></button>+91 9150564053/+91 4435575582
                                <button className='buttons'><BsGlobe /></button>www.digitaltriumph.in
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div>
                <NavLink to="/list">
                    <button className='icons mx-2'><BsFillArrowLeftCircleFill  size={25} /></button>
                </NavLink>
                <button className="icons mx-2" onClick={handlePrint}><BsPrinterFill  size={25} /></button>
                <div ref={componentRef} className="font">
                    <div className='bodering interstate'>
                        <div className="row justify-content-center">
                            <div className="row">
                                <h3 className="font-weight-bold text-center text-sm-left" style={{ text_decoration: "underline" }} id="invoicehead">Tax Invoice</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <label htmlFor="InvoiceNumber">Invoice Number : </label> {invoiceList.invoicenumber}
                                </div>
                                <div>
                                    <label htmlFor="InvoiceDate" >Invoice Date : </label> {invoiceList.date}
                                </div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv" />

                        <div className="d-flex">
                            <div style={{ width: "53%" }}>
                                <img src={pic} alt="Logo" className='image' />
                            </div>
                            <div>
                                <div className="vl"></div>
                            </div>
                            <div >
                                <div id="DtHeading">Digital Triumph Private Limited</div>
                                <div style={{ fontSize: "15px" }}> AC 149,Plot No 4920,AC Block,
                                    Achu Towers, 3rd Floor, 2nd Avenue
                                    Anna Nagar, Chennai 600040</div>
                                <div style={{ fontSize: "17px" }}>GSTIN : 33AAICD0696E1ZS</div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv horizantaldiv" />
                        <form>
                            <div className="d-flex" >
                                <div style={{ width: "53%" }}>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Business-name">Business Name : </label> {invoiceList.businessname}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="ClientAddress"> Client Address : </label> {invoiceList.clientAddress}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="uennumber">GST : </label> {invoiceList.uen}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Mobile-Number">Contact Number : </label> {invoiceList.mobilenumber}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="align mx-3" ></div>
                                </div>

                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="BuyerOrderNumber"> Buyer Order No : </label> {invoiceList.buyerordernumber}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Dated">Order Date : </label> {invoiceList.dated}
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className="col">
                                            <label htmlFor="PaymentTerms">Payment Terms : </label> {invoiceList.paymentterms}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* header end */}

                        <div>
                            <div className="row">
                                <div className="col">
                                    <div className="table-responsive top">
                                        <table className="table pad" id="tableid">
                                            <thead style={{ border_bottom: " 0px" }}>
                                                <tr>
                                                    <th className='pad' rowSpan="2">Description</th>
                                                    <th className='pad' rowSpan="2">HSN</th>
                                                    <th className='pad' rowSpan="2">Qty</th>
                                                    <th className='pad' rowSpan="2">MFR</th>
                                                    <th className='pad' rowSpan="2">Rate</th>
                                                    <th className='pad' rowSpan="2">Amt</th>
                                                    <th className='pad' colSpan="2">IGST</th>
                                                </tr>
                                                <tr>
                                                    <th className='pad'>Rate</th>
                                                    <th className='pad'>Amt</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ color: "black" }}>

                                                {lists.map((value) => {
                                                    return (
                                                        <tr key={value.id}>
                                                            <td>{value.productname}</td>
                                                            <td>{value.hsncode}</td>
                                                            <td>{value.quantity}</td>
                                                            <td>{value.mfr}</td>
                                                            <td>{value.price}</td>
                                                            <td>{value.amount}</td>
                                                            <td>{value.igsts}</td>
                                                            <td>{value.igsttotal}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td >{invoiceList.grandtotal}</td>
                                                <td></td>
                                                <td>{invoiceList.total}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <hr className="HorizontalLineDiv horizontal" />

                            <div className="row" style={{ paddingTop: "2px" }}>

                                <div className="col">
                                    <label>Amount in words : {invoiceList.amountinwords} </label>
                                </div>

                                <div className="col">
                                    <div className="row py-2" >
                                        <div className="col">
                                            <label htmlFor="IGSTPercent">GrandTotal </label>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" className="form-control input-sm printinput total" name="total" style={{ fontWeight: "bold" }} value={invoiceList.finalamount} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="HorizontalLineDiv horizantaldiv" />
                            </div>
                        </div>
                        {/* footer   */}

                        <div className="d-flex">
                            <div style={{ width: "53%" }}>
                                <div>Certified that the Particulars given above are true and correct</div>
                                <div id="CertifiedDT">For : Digital Triumph Private Limited</div>
                                <div> <img src={sign} alt="Signature" /></div>
                                <div id="AuthorisedSignature">Authorised Signatory</div>
                            </div>
                            <div>
                                <div className=" mx-3 vertical" ></div>
                            </div>
                            <div>
                                <div id="BankAccDetailsDiv" className="mb-2">Bank Account Details:</div>
                                <div>Account name :  Digital Triumph Pvt Ltd. </div>
                                <div>Account Number : 168305001781</div>
                                <div>IFSC Code : ICIC0001683</div>
                                <div> Branch Name : Anna Nagar Chennai </div>
                            </div>
                        </div>
                        <hr className="HorizontalLineDiv horizantaldiv" />
                        <div className="col py-2 pb-5" style={{ marginBottom: "15px" }}>
                            <div id="termsConditions">Terms and Coditions:</div>
                            <div> We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct </div>
                        </div>
                        <div className="bottom">
                            <div>
                                <button className='buttons'><HiMail /></button>contact@digitaltriumph.in
                                <button className='buttons'><RiPhoneFill /></button>+91 9150564053/+91 4435575582
                                <button className='buttons'><BsGlobe /></button>www.digitaltriumph.in
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
