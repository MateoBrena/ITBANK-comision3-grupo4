import Link from "next/link"

export default function AccountInfo({id, cbu, alias, info, saldo}) {

    return (
        <div className="container p-2 bg-secondary text-white cada-cuenta">
            <h4 >{info}</h4>
            <p>CBU: {cbu}</p>
            <p>Alias: {alias}</p>
            <p>Saldo: ${saldo}</p>
            <Link href={`/accounts/${id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
    )
}