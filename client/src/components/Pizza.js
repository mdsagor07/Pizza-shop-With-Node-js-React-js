import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'

import pizzas from '../pizzasdata'

export default function Pizza({ pizza }) {

    const [quantity, setquentitiy] = useState(1);
    const [varient, setvarient] = useState("small");
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '40px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
           <div onClick={handleShow}>
           <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />

           </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients:</p>
                    <select className="form-control" value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.varients.map(varients => {
                            return <option value={varients}>{varients}</option>
                        })}

                    </select>
                </div>

                <div className="w-100 m-1">
                    <p>Quantity:</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setquentitiy(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <h1 className="mt-2"> Price:{pizza.prices[0][varient] * quantity}BDT/=</h1>
                </div>
                <div className="w-100 m-.5 ">
                    <button className="btn"> ADD to CART</button>
                </div>

            </div>

            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{height: '400px'}} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                   <button className="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
