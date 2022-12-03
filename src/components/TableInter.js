import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"
import { TiDelete, TiEdit } from "react-icons/ti";
export default function TableInter({
    productname,
    setProductname,
    hsncode,
    setHsncode,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    total,
    setTotal,
    grandtotal,
    setGrandtotal,
    lists,
    setLists,
    mfr,
    setMfr,
    amountinwords,
    igsts,
    setIgsts,
    igsttotal,
    setIgsttotal,
    finalamount,
    setFinalamount,
}) {


    const [isEditing, setIsEditing] = useState(false)

    // Submit form function
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!productname || !quantity || !hsncode || !price || !igsts || !mfr) {
            alert("Please fill in all inputs")
        } else {
            const newItems = {
                id: uuidv4(),
                productname,
                hsncode,
                quantity,
                price,
                amount,
                mfr,
                igsts,
                igsttotal,
            }
            setProductname("")
            setHsncode("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setIgsts("")
            setMfr("")
            setIgsttotal("")
            setLists([...lists, newItems])
            setIsEditing(false)
        }
    }
    // Calculate items amount function
    useEffect(() => {
        const calculateAmount = (amounts) => {
            setAmount(quantity * price)
        }
        calculateAmount(amount)
    }, [amount, price, quantity, setAmount])

    // Calculate total amount of items in table
    useEffect(() => {
        let rows = document.querySelectorAll(".amounts")
        let sum = 0

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].className === "amounts") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setGrandtotal(sum)
            }
        }
    })

    useEffect(() => {
        const calculateIgsts = (igst) => {
            setIgsttotal(amount * (igsts / 100))
        }
        calculateIgsts(igsttotal)
    }, [igsttotal, amount, igsts, setIgsttotal])

    useEffect(() => {
        let rows = document.querySelectorAll(".igst")
        let sum = 0
        for (let j = 0; j < rows.length; j++) {
            if (rows[j].className === "igst") {
                sum += isNaN(rows[j].innerHTML) ? 0 : parseFloat(rows[j].innerHTML)
                setTotal(sum)
            }
        }
    })
    useEffect(() => {
        const FinalAmount = (finalamount) => {
            setFinalamount(grandtotal + total)
        }
        FinalAmount(finalamount)
    }, [finalamount, grandtotal, total, setFinalamount])

    // Edit function
    const editRow = (id) => {
        const editingRow = lists.find((row) => row.id === id)
        setLists(lists.filter((row) => row.id !== id))
        setIsEditing(true)
        setProductname(editingRow.productname)
        setHsncode(editingRow.hsncode)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
        setMfr(editingRow.mfr)
        setIgsts(editingRow.igsts)
    }

    // Delete function
    const deleteRow = (id) => setLists(lists.filter((row) => row.id !== id))


    return (
        <div>

            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <div className="table-responsive top">
                        <table className="table" id="tableid">
                            <thead style={{ border_bottom: "0px" }}>
                                <tr>
                                    <th className='pad' rowSpan="2">Description</th>
                                    <th className='pad' rowSpan="2">HSN</th>
                                    <th className='pad' rowSpan="2">Qty</th>
                                    <th className='pad' rowSpan="2">MFR</th>
                                    <th className='pad' rowSpan="2">Rate</th>
                                    <th className='pad' rowSpan="2">Amount</th>
                                    <th className='pad' colSpan="2">IGST</th>
                                    <th className='pad' rowSpan="2"></th>
                                </tr>
                                <tr >
                                    <th className='pad'>Rate</th>
                                    <th className='pad'>Amount</th>
                                </tr>
                            </thead>
                            <tbody style={{ color: "black" }}>
                                {lists.map(({ id, productname, hsncode, quantity, mfr, price, amount, igsts, igsttotal }) => (

                                    <tr key={id}>
                                        <td>{productname}</td>
                                        <td>{hsncode}</td>
                                        <td>{quantity}</td>
                                        <td>{mfr}</td>
                                        <td>{price}</td>
                                        <td className='amounts'>{Number(amount).toFixed(2)}</td>
                                        <td>{igsts}%</td>
                                        <td className='igst'>{Number(igsttotal).toFixed(2)}</td>
                                        <td >
                                            <button onClick={() => deleteRow(id)} style={{ color: "red", border: "none", background: "white" }}><TiDelete /></button>

                                            <button onClick={() => editRow(id)} style={{ color: "black", border: "none", background: "white" }}><TiEdit /></button>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                            <tfoot>
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
                            </tfoot>
                        </table>
                    </div>
                    <hr className="HorizontalLineDiv" style={{ marginTop: "0px" }} />

                    <form onSubmit={handleSubmit} className="d-flex">
                        <h5><input type="text" className="form-control input-sm " style={{ border: "none", paddingTop: "0px" }} name="productname" value={productname} onChange={(e) => setProductname(e.target.value)} placeholder="Description" /></h5>

                        <h5><input type="number" className="form-control input-sm " style={{ border: "none", paddingTop: "0px" }} name="hsncode" value={hsncode} onChange={(e) => setHsncode(e.target.value)} placeholder="Hsncode" /></h5>

                        <h5><input type="number" className="form-control input-sm Quantity" style={{ border: "none", paddingTop: "0px" }} name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" /></h5>

                        <h5><input type="number" className="form-control input-sm Rate " style={{ border: "none", paddingTop: "0px" }} name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Rate" /></h5>

                        <h5><input type="text" className="form-control input-sm  " style={{ border: "none", paddingTop: "0px" }} name="mfr" value={mfr} onChange={(e) => setMfr(e.target.value)} placeholder="MFR" /></h5>

                        <h5><input type="number" className="form-control input-sm Rate " style={{ border: "none", paddingTop: "0px" }} name="igsts" value={igsts} onChange={(e) => setIgsts(e.target.value)} placeholder="Igst in %" /></h5>

                        <button type="submit" style={{ border: "none", marginLeft: "15px", fontWeight: "bold" }} className="rounded">{isEditing ? "Edit Item" : "Add Item"}</button>
                    </form>
                </div>
            </div>

            <hr className="HorizontalLineDiv" />
            <div className="row">

                <div className="col">
                    <div className="row py-2" style={{ textAlign: "right", paddingRight: "80px", marginBottom: "0px" }}>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <label htmlFor="IGSTPercent">GrandTotal </label>
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12">
                            <div className="form-group">
                                <input type="text" className="total text-center finalamount" style={{ fontWeight: "bold" }} value={Number(finalamount).toFixed(2)} readOnly />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row py-2" style={{ textAlign: "right", paddingRight: "80px", marginBottom: "0px" }}>
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <label>Amount in words </label>
                </div>
                <div className="col-md-8 col-lg-8 col-sm-12">
                    <input type="text" className="form-control input-sm" name="amountinwords" style={{ fontWeight: "bold" }} value={amountinwords} placeholder='Amount in words' />
                </div>
            </div>
        </div>
    )
}
