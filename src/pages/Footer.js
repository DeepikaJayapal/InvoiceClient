import React from 'react';
import sign from "./Signature.jpeg";

export default function Footer() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div>Certified that the Particulars given above are true and correct</div>
                    <div id="CertifiedDT">For : Digital Triumph Private Limited</div>
                    <div> <img src={sign} alt="Signature" /></div>
                    <div id="AuthorisedSignature">Authorised Signatory</div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div id="BankAccDetailsDiv" className="mb-2">Bank Account Details:</div>
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            Account name :
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12">
                            Digital Triumph Private Limited.
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            Account Number :
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12">
                            168305001781
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            IFSC Code :
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12">
                            ICIC0001683
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            Branch Name :
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12">
                            Anna Nagar Chennai
                        </div>
                    </div>
                </div>
                <hr className="HorizontalLineDiv" />
                <div className="col py-2">
                    <div id="termsConditions">Terms and Coditions:</div>
                    <div> We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct </div>
                </div>
                <div style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "0px" }}>
                    <i className="fa fa-envelope px-2"> contact@digitaltriumph.in</i>
                    <i className="fa fa-phone px-2">  +91 9150564053/+91 4435575582</i>
                    <i className="fa fa-globe"> www.digitaltriumph.in </i>
                </div>
            </div>
        </div>
    )
}
