"use client"

import Image from "next/image";

export default function Hotelnames({id,name,capacity}){ 
    const imageLoader = ({src}) => {
    return `./hotels/${src}.png`;
  };

    return <div>
         <h4>{name}</h4>
         <h1>{capacity}</h1>
         <h3>{id} </h3>
         <Image src={id} width={300} height={300} loader={imageLoader} alt="Hotle iamge name" />


            </div>
}
