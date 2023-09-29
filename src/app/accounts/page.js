import "../css/Accounts.css"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountInfo from "../components/AccountInfo";
import accountsRepo from "../helpers/accounts.helper";
import cardsRepo from "../helpers/cards.helper";
import CardsDetail from "../components/CardsDetail";

export default function Accounts() {
    const accounts = accountsRepo.getAll()

    const cards = cardsRepo.getAll()

    return (
        <>
            <Header></Header>
            <div className="principal">
                <Navbar></Navbar>
                <div className="container-m m-3 contenedor-cuentas" >
                    {accounts.map((account) => {
                        return <AccountInfo key={account.id} id={account.id} cbu={account.cbu}
                            alias={account.alias} info={account.info} saldo={account.saldo}></AccountInfo>
                    })}
                    {cards.map((card) => {
                        return <CardsDetail key={card.id} id={card.id} ultimos={card.ultimos} tipo={card.tipo}
                            marca={card.marca} vencimiento={card.vencimiento}></CardsDetail>
                    })}
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}