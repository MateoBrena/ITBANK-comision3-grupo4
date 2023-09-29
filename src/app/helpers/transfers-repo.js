import fs from "fs"
import transfers from "../db/transfers.json"
import path from "path"

const fecha = new Date()

function agregarCero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

let hora = agregarCero(fecha.getHours())
let minutos = agregarCero(fecha.getMinutes())
let segundos = agregarCero(fecha.getSeconds())

const horario = hora +":"+ minutos+":"+ segundos

const transferFile = path.join(process.cwd(), "/src/app/db/transfers.json")

const transfersRepo = {
    getAll : () => transfers,
    create,
}

function create(transfer) {
    // generate new transfer id
    transfer.id = transfers.length ? Math.max(...transfers.map(x => x.id)) + 1 : 1;

    // set date created 
    transfer.fecha = new Intl.DateTimeFormat("en-GB").format(fecha)
    transfer.horario = horario

    // add and save transfer
    transfers.push(transfer);
    saveData();
}

function saveData() {
    fs.writeFileSync(transferFile, JSON.stringify(transfers, null, 2));
}

export default transfersRepo