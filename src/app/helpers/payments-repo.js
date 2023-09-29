import fs from "fs"
import payments from "../db/payments.json"
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

const paymentFile = path.join(process.cwd(), "/src/app/db/payments.json")

const paymentsRepo = {
    getAll : () => payments,
    create,
}

function create(payment) {
    // generate new payment id
    payment.id = payments.length ? Math.max(...payments.map(x => x.id)) + 1 : 1;

    // set date created 
    payment.fecha = new Intl.DateTimeFormat("en-GB").format(fecha)
    payment.horario = horario

    // add and save payment
    payments.push(payment);
    saveData();
}

function saveData() {
    fs.writeFileSync(paymentFile, JSON.stringify(payments, null, 2));
}

export default paymentsRepo