import React, { useState, useRef } from 'react';
import Footer from './Footer';
import Top from './Top';
import TableInter from '../components/TableInter';
import { useReactToPrint } from "react-to-print";
import pic from './digitallogo.png';
import sign from "./Signature.jpeg";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { HiMail } from "react-icons/hi";
import { RiPhoneFill } from 'react-icons/ri';
import { BsGlobe } from 'react-icons/bs';
import { ToWords } from 'to-words';
import Header from './header';

export default function IntraState() {
    
    const [invoicenumber, setInvoiceNumber] = useState("");
    const [date, setDate] = useState("");
    const [businessname, setBusinessname] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [uen, setUen] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [buyerordernumber, setBuyerordernumber] = useState("");
    const [paymentterms, setPaymentterms] = useState("");
    const [dated, setDated] = useState("");
    const [productname, setProductname] = useState("");
    const [hsncode, setHsncode] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [mfr, setMfr] = useState("");
    const [amount, setAmount] = useState("");
    const [total, setTotal] = useState("");
    const [grandtotal, setGrandtotal] = useState("");
    const [igsts, setIgsts] = useState("");
    const [lists, setLists] = useState([]);
    const [invoiceList, setInvoiceList] = useState([]);
    const [igsttotal, setIgsttotal] = useState("");
    const [finalamount, setFinalamount] = useState("");
    const type = "interstate";
    const toWords = new ToWords();
    const amountinwords = toWords.convert(Number(finalamount), { currency: true });

    const onSubmitForm = () => {
        let apiURL = "http://localhost:4000/create";
        axios.post(apiURL, {
            invoicenumber: invoicenumber,
            date: date,
            businessname: businessname,
            clientAddress: clientAddress,
            uen: uen,
            mobilenumber: mobilenumber,
            buyerordernumber: buyerordernumber,
            dated: dated,
            paymentterms: paymentterms,
            productlist: lists,
            amountinwords: amountinwords,
            total: total,
            grandtotal: grandtotal,
            finalamount: finalamount,
            type: type,
        }).then((res) => {
            console.log(res.data);
            setInvoiceList([...invoiceList])
        })
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <Header/>
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

                                    <Top
                                        invoicenumber={invoicenumber}
                                        setInvoiceNumber={setInvoiceNumber}
                                        date={date}
                                        setDate={setDate}
                                        businessname={businessname}
                                        setBusinessname={setBusinessname}
                                        clientAddress={clientAddress}
                                        setClientAddress={setClientAddress}
                                        uen={uen}
                                        setUen={setUen}
                                        mobilenumber={mobilenumber}
                                        setMobilenumber={setMobilenumber}
                                        buyerordernumber={buyerordernumber}
                                        setBuyerordernumber={setBuyerordernumber}
                                        dated={dated}
                                        setDated={setDated}
                                        paymentterms={paymentterms}
                                        setPaymentterms={setPaymentterms}
                                    />
                                    <hr className="HorizontalLineDiv" />
                                    <TableInter
                                        productname={productname}
                                        setProductname={setProductname}
                                        hsncode={hsncode}
                                        setHsncode={setHsncode}
                                        quantity={quantity}
                                        setQuantity={setQuantity}
                                        price={price}
                                        setPrice={setPrice}
                                        amount={amount}
                                        setAmount={setAmount}
                                        total={total}
                                        setTotal={setTotal}
                                        grandtotal={grandtotal}
                                        setGrandtotal={setGrandtotal}
                                        lists={lists}
                                        setLists={setLists}
                                        mfr={mfr}
                                        setMfr={setMfr}
                                        amountinwords={amountinwords}
                                        igsts={igsts}
                                        setIgsts={setIgsts}
                                        igsttotal={igsttotal}
                                        setIgsttotal={setIgsttotal}
                                        finalamount={finalamount}
                                        setFinalamount={setFinalamount}
                                    />
                                    <hr className="HorizontalLineDiv" style={{ marginTop: "0px" }} />
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavLink to="/list">
                <button type="button" className="btn btn-secondary btn-sm btns" onClick={handlePrint}>Print</button>
            </NavLink>

            <button type='submit' className='btn btn-secondary btn-sm btns' onClick={onSubmitForm}>Submit</button>

            <div style={{ display: "none" }}>
                <div ref={componentRef} className="font">
                    <div className='bodering'>
                        <div className="row justify-content-center ">
                            <div className="row">
                                <h3 className="font-weight-bold text-center text-sm-left" style={{ text_decoration: "underline" }} id="invoicehead">  Tax Invoice</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <label htmlFor="InvoiceNumber">Invoice Number : </label> {invoicenumber}
                                </div>
                                <div>
                                    <label htmlFor="InvoiceDate">Invoice Date : </label> {date}
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
                            <div>
                                <div id="DtHeading">Digital Triumph Private Limited</div>
                                <div style={{ fontSize: "15px" }}> AC 149,Plot No 4920,AC Block,
                                    Achu Towers, 3rd Floor, 2nd Avenue
                                    Anna Nagar, Chennai 600040</div>
                                <div style={{ fontSize: "17px" }}>GSTIN : 33AAICD0696E1ZS</div>
                            </div>
                        </div>

                        <hr className="HorizontalLineDiv horizantaldiv" />
                        <form>
                            <div className="d-flex">
                                <div style={{ width: "53%" }}>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Business-name">Business Name : </label> {businessname}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="ClientAddress"> Client Address : </label> {clientAddress}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="uennumber">GST : </label> {uen}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Mobile-Number">Mobile Number : </label> {mobilenumber}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="align mx-3" ></div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="BuyerOrderNumber"> Buyer Order No : </label> {buyerordernumber}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Dated">Order Date : </label> {dated}
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col">
                                            <label htmlFor="PaymentTerms">Payment Terms : </label> {paymentterms}
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
                                        <table className="table pad" id="tableid" >
                                            <thead style={{ border_bottom: "0px" }}>
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

                                            {lists.map(({ id, productname, hsncode, quantity, mfr, price, amount, igsts, igsttotal }) => (
                                                <tbody style={{ color: "black" }}>
                                                    <tr key={id}>
                                                        <td>{productname}</td>
                                                        <td>{hsncode}</td>
                                                        <td>{quantity}</td>
                                                        <td>{mfr}</td>
                                                        <td>{price}</td>
                                                        <td>{Number(amount).toFixed(2)}</td>
                                                        <td>{igsts}%</td>
                                                        <td>{Number(igsttotal).toFixed(2)}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td >{Number(grandtotal).toFixed(2)}</td>
                                                <td></td>
                                                <td>{Number(total).toFixed(2)}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <hr className="HorizontalLineDiv horizontal" />

                            <div className="row" style={{ paddingTop: "2px" }}>

                                <div className="col">
                                    <label>Amount in words : {amountinwords} </label>
                                </div>
                                <div className="col">
                                    <div className="row py-2" >
                                        <div className="col">
                                            <label htmlFor="IGSTPercent">GrandTotal </label>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <input type="text" className="form-control input-sm printinput total" name="total" value={Number(finalamount).toFixed(2)} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="HorizontalLineDiv horizantaldiv" />
                            </div>
                        </div>
                        {/* footer */}

                        <div className="d-flex">
                            <div style={{ width: "53%" }}>
                                <div>Certified that the Particulars given above are true and correct</div>
                                <div id="CertifiedDT">For : Digital Triumph Private Limited</div>
                                <div> <img src={sign} alt="Signature" /></div>
                                <div id="AuthorisedSignature">Authorised Signatory</div>
                            </div>
                            <div>
                                <div className=" mx-3 vertical"></div>
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
                        <div className="col py-2">
                            <div id="termsConditions">Terms and Coditions:</div>
                            <div> We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct </div>
                        </div>
                        <div className="bottom">
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
