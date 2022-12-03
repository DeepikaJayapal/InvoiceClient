import React from 'react';
import pic from "./digitallogo.png";

export default function TopInternational({
    invoicenumber, setInvoiceNumber, date, setDate, setBusinessname, businessname, clientAddress, setClientAddress, uen, setUen, mobilenumber, setMobilenumber, buyerordernumber, setBuyerordernumber, dated, setDated, paymentterms, setPaymentterms, lut, setLut
}) {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left" style={{ padding: "10px", text_decoration: "underline" }} id="invoicehead">  Tax Invoice</h3>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <label htmlFor="InvoiceNumber">Invoice Number:</label>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12">
                            <div className="form-group" id="invoicenumberdiv">
                                <input type="text" className="form-control input-sm" name='invoicenumber' value={invoicenumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <label htmlFor="InvoiceDate">Invoice Date:</label>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12">
                            <div className="form-group" id="invoicedatediv">
                                <input type="date" className="form-control input-sm" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="HorizontalLineDiv" />

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={pic} alt="Logo" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div id="DtHeading">Digital Triumph Private Limited</div>
                    <div style={{ fontSize: "15px" }}> AC 149,Plot No 4920,AC Block,
                        Achu Towers, 3rd Floor, 2nd Avenue
                        Anna Nagar, Chennai 600040</div>
                    <div style={{ fontSize: "18px" }}>GSTIN : 33AAICD0696E1ZS</div>
                </div>
            </div>
            <hr className="HorizontalLineDiv" />
            <form>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="Business-name">Business Name:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="form-group mb-2">
                                    <input type="text" className="form-control input-sm" name='businessname' value={businessname} onChange={(e) => setBusinessname(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="ClientAddress"> Client Address:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="form-group mb-2">
                                    <input type="textarea" className="form-control input-sm" rows="2" name="clientAddress" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="uennumber">UEN:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="form-group mb-2">
                                    <input type="text" className="form-control input-sm" name="uen" value={uen} onChange={(e) => setUen(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="Mobile-Number">Contact Number:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="form-group mb-2">
                                    <input type="text" className="form-control input-sm" name="mobilenumber" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="BuyerOrderNumber"> Buyer Order No:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="htmlForm-group mb-2">
                                    <input type="text" className="form-control input-sm" name="buyerordernumber" value={buyerordernumber} onChange={(e) => setBuyerordernumber(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="Dated">Order Date:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="form-group">
                                    <input type="date" className="form-control input-sm" name="dated" value={dated} onChange={(e) => setDated(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="lut"> LUT:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="htmlForm-group">
                                    <input type="number" className="form-control input-sm" name="lut" value={lut} onChange={(e) => setLut(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <label htmlFor="PaymentTerms">Payment Terms:</label>
                            </div>
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="htmlForm-group">
                                    <input type="text" className="form-control input-sm" name="paymentterms" value={paymentterms} onChange={(e) => setPaymentterms(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
