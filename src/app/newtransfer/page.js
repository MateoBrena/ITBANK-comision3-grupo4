"use client"

import "../css/NewTransfer.css"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form"
import { useState } from "react";

export default function NewTransfer() {
    const [destinatario, setDestinatario] = useState("")
    const [origen, setOrigen] = useState("Caja de ahorro ARS")
    const [motivo, setMotivo] = useState("")
    const [monto, setMonto] = useState("")
    const [referencia, setReferencia] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
        setDestinatario("")
        setOrigen("")
        setMotivo("")
        setMonto("")
        setReferencia("")
        alert("Transferencia realizada correctamente")
        
        const res = await fetch('http://localhost:3000/api/transfer', {
            method: 'POST',
            body: JSON.stringify({ form_values }),
        })
    }

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className="contenedor-form">
                    <h1> Nueva transferencia</h1>
                    <Form  className="formulario-transfer" onSubmit={handleSubmit}>
                        <div className="destinatario-wrapper">
                            <label htmlFor="destinatario">Destinatario:</label>
                            <Form.Control type="text" name="destinatario" id="destinatario" placeholder="Nombre y Apellido" 
                            value={destinatario} onChange={e => setDestinatario(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor="origen">Cuenta de origen:</label>
                            <Form.Select name="origen" id="origen" value={origen} onChange={e => setOrigen(e.target.value)} required>
                                <option value="Caja de ahorro ARS">CA $ARS 000215684156</option>
                                <option value="Caja de ahorro USD">CA $USD 000215684157</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="monto">Monto:</label>
                            <Form.Control type="number" id="monto" name="monto" value={monto} 
                            onChange={e => setMonto(e.target.value)} placeholder="Ej: 1000" required/>
                        </div>
                        <div>
                            <label htmlFor="motivo">Motivo:</label>
                            <Form.Select name="motivo" id="motivo" value={motivo} onChange={e => setMotivo(e.target.value)} required>
                                <option value="Alquiler">Alquiler</option>
                                <option value="Expensas">Expensas</option>
                                <option value="Facturas">Facturas</option>
                                <option value="Prestamo">Préstamo</option>
                                <option value="Seguro">Seguro</option>
                                <option value="Varios">Varios</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="referencia">Referencia:</label>
                            <Form.Control type="text" id="referencia" name="referencia" 
                            value={referencia} onChange={e => setReferencia(e.target.value)} placeholder="Referencia"/>
                        </div>
                        <button className="boton-transferencia" >Enviar</button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}