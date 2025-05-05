"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import { api } from "@/app/constants/api"
import { error } from "console";

interface IData {
    name: string;
    gender: string;
    status: string;
    species: string;
    image: string;
}

const AxiosPage = () => {
const [data, setData] = useState<IData[]>([])

useEffect(() => {
    api.get(`/character`).then((res) => {
        setData(res.data.results)
    }).catch((error) => {
        console.log("deu ruim tua requisicao")
    })
}, [])
    
    return(
        <>
            <h1>Axios page client side</h1>
            <Suspense fallback={<div>loading...</div>}>
                {data.map((item, index) =>(
                    <div key={index}>
                    <h2>{item.name}</h2>
                    <Image src={item.image} alt={item.name} width={50} height={50}/>
                    <p>{item.species}</p>
                    <p>{item.gender}</p>
                    <p>{item.status}</p>
                    </div>
                ))}
            </Suspense>
        </>
    )
}

export default AxiosPage