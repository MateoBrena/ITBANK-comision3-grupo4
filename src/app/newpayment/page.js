"use client"

import "../css/NewTransfer.css"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form"
import { useState } from "react";

export default function NewPayment() {

    const [rubro, setRubro] = useState("Servicios")
    const [beneficiario, setBeneficiario] = useState("")
    const [medio, setMedio] = useState("")
    const [importe, setImporte] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
        setRubro("")
        setBeneficiario("")
        setMedio("")
        setImporte("")
        alert("Pago realizado correctamente")
        
        const res = await fetch('http://localhost:3000/api/payment', {
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
                    <h1> Pagar factura </h1>
                    <Form  className="formulario-transfer" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="rubro">Rubro:</label>
                            <Form.Select name="rubro" id="rubro" required value={rubro} onChange={e => setRubro(e.target.value)}>
                                <option value="Servicios">Servicios</option>
                                <option value="Educación">Educación</option>
                                <option value="Salud">Salud</option>
                                <option value="Préstamo">Préstamo</option>
                                <option value="Seguro">Seguro</option>
                                <option value="Varios">Varios</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="beneficiario">Beneficiario:</label>
                            <Form.Control type="text" name="beneficiario" id="beneficiario" placeholder="Nombre del comercio, empresa" required
                            value={beneficiario} onChange={e => setBeneficiario(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="medio">Medio de pago:</label>
                            <Form.Select name="medio" id="medio" required value={medio} onChange={e => setMedio(e.target.value)}>
                                <option value="Débito">Débito</option>
                                <option value="Crédito">Crédito</option>
                            </Form.Select>
                        </div>
                        <div>
                            <label htmlFor="importe">Importe:</label>
                            <Form.Control type="number" name="importe" id="importe" 
                            required value={importe} onChange={e => setImporte(e.target.value)} placeholder="Ej: 1000"/>
                        </div>
                        <button type="submit" className="boton-transferencia">Enviar</button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}