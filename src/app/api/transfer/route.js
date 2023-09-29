import transfersRepo from '../../helpers/transfers-repo'

export async function POST(request) { 
  const res = await request.json()

  transfersRepo.create(res.form_values)  
  // Aca podemos llamar el save del pago de la transferencia.
  return Response.json({ res })
}

export async function GET(){
  return Response.json(transfersRepo.getAll())
}