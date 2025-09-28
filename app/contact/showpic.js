"use client"
import Image from "next/image";



export default function Home({id, name, capacity}){

    const imageLoader = ({ src }) => {return `./Hotels/${src}.jpg`;
}   

    return <div>

        <h3> Gallery </h3>
        <p> {id}</p>
        <h2> {name} </h2>
        <Image src={id} width={300} height={300} alt="hey" loader={imageLoader} />
         



        </div>
}
