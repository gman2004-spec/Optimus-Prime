import { Metadata } from 'next'
import { Suspense } from 'react'



export const metadata: Metadata = {
    title: "Lista de personagens RM",
    description: "Aplicação teste com consumo de api"
}

const ServerSide = () => {
  return (
    <div>Server Side Page try</div>
  )
}

export default ServerSide