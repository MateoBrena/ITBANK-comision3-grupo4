"use client"

import Link from 'next/link'
import "../css/HomeBankingAccess.css"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function HomeBankingAccess() {
    return (
        <>
            <DropdownButton id="dropdown-basic-button" variant="dark" title='Ingresar' className="btn-dark">
                <Dropdown.Item> <Link href="/login"><FontAwesomeIcon icon={faArrowRightToBracket} /> Home Banking</Link> </Dropdown.Item>
            </DropdownButton>
        </>
    )
}