import React from "react";
import "../css/Header.css"
import Link from 'next/link'
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/">
                        <Image src="/../images/logo-itbank.png" alt="Logo del banco" width={120} height={120}/>
                    </Link>
                </div>
            </header>
        </>
    )
}