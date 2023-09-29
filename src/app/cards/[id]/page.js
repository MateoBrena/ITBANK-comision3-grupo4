import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import cardsRepo from "@/app/helpers/cards.helper";
import paymentsRepo from "@/app/helpers/payments-repo";
import PaymentTableRow from "@/app/components/PaymentTableRow";
import style from "./page.module.css"

export default function CardsDetail({ params }) {
    const cards = cardsRepo.getAll()

    const payments = paymentsRepo.getAll()

    const selectedCard = cards.filter((card) => {
        if (card.id == params.id)
            return card
    })

    const selectedPayments = payments.filter((payment) => {
        if(selectedCard[0].tipo == payment.medio)
        return payment
    })

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className={style.container}>
                    <h1 className={style.header}>Detalle tarjeta terminada en {selectedCard[0].ultimos}</h1>
                    <ul className={style.lista}>
                        <li>Tipo: {selectedCard[0].tipo}</li>
                        <li>Marca: {selectedCard[0].marca}</li>
                        <li>Código: {selectedCard[0].codigo}</li>
                        <li>Vencimiento: {selectedCard[0].vencimiento}</li>
                        <li>Saldo: { selectedCard[0].saldo ? "$"+selectedCard[0].saldo : "N/A"}</li>
                        <li>Próximo Vencimiento: { selectedCard[0].proximo ? selectedCard[0].proximo : "N/A"}</li>
                        <li>Límite: { selectedCard[0].limite ? "$"+selectedCard[0].limite : "N/A"}</li>
                    </ul>
                    <h3 className={style.movimientos}> Movimientos:</h3>
                    <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Fecha</th>
                            <th className="oculto">Medio de pago</th>
                            <th className="oculto">Beneficiario</th>
                            <th>Importe</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {selectedPayments.map((payment) => {
                                return <PaymentTableRow key={payment.id} id={payment.id} fecha={payment.fecha} medio={payment.medio}  
                                beneficiario={payment.beneficiario} importe={payment.importe}></PaymentTableRow>
                            })}
                    </tbody>
                </table>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}