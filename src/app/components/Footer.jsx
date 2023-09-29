import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer>
                <Link href="#"><p>Términos de uso</p></Link>
                <Link href="#"><p>Políticas de privacidad</p></Link>
                <Link href="/contacto"><p>Contacto</p></Link>
            </footer>
        </>
    )
}