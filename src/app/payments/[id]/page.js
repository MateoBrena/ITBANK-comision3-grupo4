import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import paymentsRepo from "@/app/helpers/payments-repo"
import style from "./page.module.css"


export default function PaymentDetail({params}){
    
    const payments = paymentsRepo.getAll()

    const selectedPayment = payments.filter((payment) => {
      if(payment.id == params.id) 
       return payment
    })
    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className={style.detalle}>
            <h1> Comprobante de pago </h1>
                <ul className={style.lista}>
                    <li>Pago número: <strong>{selectedPayment[0].id}</strong> </li>
                    <li>Fecha: <strong>{selectedPayment[0].fecha}</strong></li>
                    <li>Hora: <strong>{selectedPayment[0].horario}</strong></li>
                    <li>Medio: <strong>{selectedPayment[0].medio}</strong></li>
                    <li>Rubro: <strong>{selectedPayment[0].rubro}</strong></li>
                    <li>Beneficiario: <strong>{selectedPayment[0].beneficiario}</strong></li>
                    <li>Importe: $<strong>{selectedPayment[0].importe}</strong></li>
                </ul>
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}