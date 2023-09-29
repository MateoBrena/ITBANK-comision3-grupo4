"use client"

import React from "react";
import Link from 'next/link'
import HomeBankingAccess from "./HomeBankingAccess";
import Image from "next/image";


export default function HomeHeader() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/">
                        <Image src="/../images/logo-itbank.png" alt="Logo del banco" width={120} height={120}/>
                    </Link>
                </div>
                <HomeBankingAccess></HomeBankingAccess>
            </header>
        </>
    )
}
