import style from "../css/Transfers.module.css"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TransferTableRow from "../components/TransferTableRow";
import Footer from "../components/Footer";
import transfersRepo from "../helpers/transfers-repo";

export default function Transfers() {

    const transfers = transfersRepo.getAll()

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className={style.tablaBootstrap}>
                    <h2>Transferencias enviadas/recibidas</h2>
                    <p><strong>ATENCION:</strong> Recuerde verificar la identidad de los destinatarios y transferir solamente a personas de confianza. En caso de recibir transferencias por error, por favor contacte al banco.</p>
                    <table className="table table-hover" id={style.transferencias}>
                        <thead className="table-dark">
                            <tr>
                                <th>Fecha</th>
                                <th className={style.oculto}>Origen</th>
                                <th className={style.oculto}>Destinatario</th>
                                <th>Monto</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transfers.map((transfer) => {
                                return <TransferTableRow key={transfer.id} id={transfer.id} fecha={transfer.fecha}
                                 horario={transfer.horario} origen={transfer.origen}  
                                 destinatario={transfer.destinatario}monto={transfer.monto}></TransferTableRow>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}