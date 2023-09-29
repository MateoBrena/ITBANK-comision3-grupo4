import Link from "next/link"

export default function CardsDetail({id, ultimos, marca, tipo, vencimiento}) {

    return (
        <div className="container p-2 bg-secondary text-white cada-cuenta">
            <h4 >Tarjeta de terminada en {ultimos}</h4>
            <p>{marca}</p>
            <p>{tipo}</p>
            <p>Vencimiento: {vencimiento}</p>
            <Link href={`/cards/${id}`} className="btn btn-primary">Ver detalle</Link>
        </div>
    )
}