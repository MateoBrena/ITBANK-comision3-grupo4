"use client"

import "../css/Login.css"
import { useState } from 'react';
import LoginHeader from "../components/LoginHeader"
import Form from 'react-bootstrap/Form';
import FloatingLabel  from "react-bootstrap/FloatingLabel";
import Link from 'next/link'
import Footer from "../components/Footer";
// import { redirect } from "next/dist/server/api-utils";

export default function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)
    }

    const handleClick = () => {
        if (validated === true) {
            // redirect("/accounts")
        }
    }

    return (
        <>
            <LoginHeader></LoginHeader>
            <section className="menu-ingreso">
                <div className="login">
                    <h1 className="header-centre"> Bienvenido/a Banco Río, tu banco de confianza</h1>
                    <h3 className="header-centre"> Para continuar, ingresa tus credenciales</h3>
                    <div className="contenedor-login">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="validationCustom01">
                                <FloatingLabel controlId="floatingInput" label="Usuario" className="m-3">
                                    <Form.Control required type="text" name="usuario" placeholder="nombre@ejemplo.com" />
                                    <Form.Control.Feedback type="invalid">Ingrese un usuario</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <FloatingLabel controlId="floatingPassword" label="Contraseña" className="m-3">
                                    <Form.Control required type="password" name="password" placeholder="Contraseña"/>
                                    <Form.Control.Feedback type="invalid">Contraseña inválida</Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <button type="submit" className="boton" onClick={handleClick}>Ingresar</button>
                        </Form>
                        <p className="center"> Todavía no tienes una cuenta? Puedes <Link href="#">crear una nueva cuenta</Link></p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}