import paymentsRepo from '../../helpers/payments-repo'

export async function POST(request) { 
  const res = await request.json()

  paymentsRepo.create(res.form_values)  
  // Aca podemos llamar el save del pago de la transferencia.
  return Response.json({ res })
}

export async function GET(){
  return Response.json(paymentsRepo.getAll())
}