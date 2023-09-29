"use client"

import "../css/DropDownMenu.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faReceipt,
    faCreditCard,
    faArrowRightArrowLeft,
    faDollarSign,
    faPiggyBank
} from "@fortawesome/free-solid-svg-icons";


export default function DropdownMenu() {
    const [open, setOpen] = useState(false);
    const [abierto, setAbierto] = useState(false);
    return (
        <>
            <DropdownButton id="menu-dropdown" title="Menu" variant="dark">
                <Dropdown.Item><Link href="/" className="dropdown-item"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Inicio</Link></Dropdown.Item>
                <Dropdown.Item><Link href="/accounts" className="dropdown-item"><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> Cuentas</Link></Dropdown.Item>
                <Button id="payment-collapse-button-2"
                    onClick={() => setOpen(!open)}
                    aria-controls="opciones-pagos2"
                    aria-expanded={open}><FontAwesomeIcon icon={faReceipt}></FontAwesomeIcon> Pagos
                </Button>
                <Collapse in={open} align="center">
                    <div id="opciones-pagos2">
                        <div><Link href="/payments">Comprobantes</Link></div>
                        <div><Link href="/newpayment">Pagar facturas</Link></div>
                    </div>
                </Collapse>
                <Button id="transfer-collapse-button2"
                    onClick={() => setAbierto(!abierto)}
                    aria-controls="opciones-transferencias2"
                    aria-expanded={abierto}><FontAwesomeIcon icon={faArrowRightArrowLeft}></FontAwesomeIcon> Transferencias
                </Button>
                <Collapse in={abierto} align="center">
                    <div id="opciones-transferencias2">
                        <div><Link href="/transfers">Comprobantes</Link></div>
                        <div><Link href="/newtransfer">Nueva transferencia</Link></div>
                    </div>
                </Collapse>
                <Dropdown.Item><Link href="/conversor" className="dropdown-item"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> Conversor</Link></Dropdown.Item>
                <Dropdown.Item><Link href="/loansimulator" className="dropdown-item"><FontAwesomeIcon icon={faPiggyBank}></FontAwesomeIcon> Préstamos</Link></Dropdown.Item>
            </DropdownButton>
        </>
    )
}