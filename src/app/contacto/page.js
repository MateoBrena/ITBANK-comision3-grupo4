"use client"

import LoginHeader from "../components/LoginHeader"
import Footer from "../components/Footer"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import style from "./page.module.css"

export default function Contacto() {

    const [email, setEmail ] = useState("")
    const [asunto, setAsunto ] = useState("")
    const [descripcion, setDescripcion ] = useState("")

    return (
        < >
            <LoginHeader></LoginHeader>
            <section>
                <h1 className={style.headers}> Formulario de contacto</h1>
                <h5 className={style.headers}>Por cualquier consulta o reclamo, complete el formulario a continuación. Nos contactaremos con usted a la brevedad</h5>
                <div className={style.container}>
                    <Form action="" method="" className={style.formulario}>
                        <Form.Label htmlFor="email">Email:</Form.Label>
                        <Form.Control type="text" name="email" placeholder="Ingrese un email para poder ser contactado"
                         value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                        <Form.Label htmlFor="asunto">Asunto:</Form.Label>
                        <Form.Control type="text" name="asunto" placeholder="ej: Consulta, reclamo, etc"
                         value={asunto} onChange={e => setAsunto(e.target.value)}></Form.Control>
                        <Form.Label htmlFor="descripcion">Descripción:</Form.Label>
                        <Form.Control as="textarea" rows={5} name="descripcion" placeholder="Describa su consulta"
                        value={descripcion} onChange={e => setDescripcion(e.target.value)}></Form.Control>
                    </Form>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}