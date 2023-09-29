import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import accountsRepo from "@/app/helpers/accounts.helper";
import transfersRepo from "@/app/helpers/transfers-repo";
import TransferTableRow from "@/app/components/TransferTableRow";
import style from "./page.module.css"

export default function AccountDetail({ params }) {

    const accounts = accountsRepo.getAll()

    const selectedAccount = accounts.filter((account) => {
        if (account.id == params.id)
            return account
    })

    const transfers = transfersRepo.getAll()

    const SelectedTransfers = transfers.filter((transferencia) => {
        if( transferencia.origen  == selectedAccount[0].info) {
            return transferencia
        } else if (transferencia.destinatario  == selectedAccount[0].info) {
            return transferencia
        }
    })

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className={style.container}>
                    <h1 className={style.header}> Detalle {selectedAccount[0].info}</h1>
                
                <ul className={style.lista}>
                    <li> CBU: {selectedAccount[0].cbu}</li>
                    <li> Alias: {selectedAccount[0].alias}</li>
                    <li> Saldo: ${selectedAccount[0].saldo}</li>
                </ul>
                <h3 className={style.movimientos}> Movimientos: </h3>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Fecha</th>
                            <th>Origen</th>
                            <th>Destinatario</th>
                            <th>Monto</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {SelectedTransfers.map((transfer) => {
                            return <TransferTableRow key={transfer.id} id={transfer.id} fecha={transfer.fecha} origen={transfer.origen} destinatario={transfer.destinatario}
                                monto={transfer.monto}></TransferTableRow>
                        })}
                    </tbody>
                </table>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}