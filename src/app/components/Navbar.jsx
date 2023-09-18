"use client"

import "../css/Navbar.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faReceipt,
  faCreditCard,
  faArrowRightArrowLeft,
  faDollarSign,
  faPiggyBank
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="menu-desplegado">
                <ul className="lista">
                    <li><Link href="/"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Inicio</Link></li>
                    <li><Link href="/accounts"><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> Cuentas</Link></li>
                    <li><Link href="/payments"><FontAwesomeIcon icon={faReceipt}></FontAwesomeIcon> Pagos</Link></li>
                    <li><Button id="transfer-collapse-button"
                        onClick={() => setOpen(!open)}
                        aria-controls="opciones-transferencia"
                        aria-expanded={open}><FontAwesomeIcon icon={faArrowRightArrowLeft}></FontAwesomeIcon> Transferencias
                        </Button></li>
                    <Collapse in={open}>
                        <div id="opciones-transferencias">
                            <div><Link href="/transfers">Comprobantes</Link></div>
                            <div><Link href="/newtransfer">Nueva transferencia</Link></div>
                        </div>
                    </Collapse>
                    <li><Link href="/conversor"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> Conversor</Link></li>
                    <li><Link href="/loansimulator"><FontAwesomeIcon icon={faPiggyBank}></FontAwesomeIcon> Préstamos</Link></li>
                </ul>
            </nav >
        </>
    )
}

