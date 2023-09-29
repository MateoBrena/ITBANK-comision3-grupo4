import Link from "next/link"
import style from "../css/Transfers.module.css"

export default function TransferTableRow({id, fecha, origen ,destinatario, monto}) {
    return (
        <tr>
            <td>{fecha}</td>
            <td className={style.oculto}>{origen}</td>
            <td className={style.oculto}>{destinatario}</td>
            {origen.includes("Caja de ahorro") ? <td className="table-danger">${monto}</td> : <td className="table-success">${monto}</td>}
            <td className={style.detalle}><Link href={`/transfers/${id}`}>Ver</Link></td>
        </tr>
    )
}