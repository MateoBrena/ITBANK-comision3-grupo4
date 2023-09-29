import Link from "next/link"
import style from "../css/Payments.module.css"

export default function PaymentTableRow({id, fecha, medio ,beneficiario, importe}) {
    return (
        <tr>
            <td>{fecha}</td>
            <td className={style.oculto}>{medio}</td>
            <td className={style.oculto}>{beneficiario}</td>
            <td>${importe}</td>
            <td className={style.detalle}><Link href={`/payments/${id}`}>Ver</Link></td>
        </tr>
    )
}