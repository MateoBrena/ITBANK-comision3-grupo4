import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import transfersRepo from "@/app/helpers/transfers-repo"
import style from "./page.module.css"


export default function TransferDetail({params}){
    
    const transfers = transfersRepo.getAll()

    const selectedTransfer = transfers.filter((transfer) => {
      if(transfer.id == params.id) 
       return transfer
    })

    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className={style.detalle}>
            <h1> Comprobante de transferencia </h1>
                <ul className={style.lista}>
                    <li>Transferencia número: <strong>{selectedTransfer[0].id}</strong></li>
                    <li>Fecha: <strong>{selectedTransfer[0].fecha}</strong></li>
                    <li>Hora: <strong>{selectedTransfer[0].horario}</strong></li>
                    <li>Origen: <strong>{selectedTransfer[0].origen}</strong></li>
                    <li>Destinatario: <strong>{selectedTransfer[0].destinatario}</strong></li>
                    <li>Monto: $<strong>{selectedTransfer[0].monto}</strong></li>
                    <li>Motivo: <strong>{selectedTransfer[0].motivo}</strong></li>
                    <li>Referencia: {selectedTransfer[0].referencia == "" ? "No se incluyó una referencia" : <strong>{selectedTransfer[0].referencia}</strong>}</li>
                </ul>
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}