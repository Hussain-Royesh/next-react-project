
import Hotelnames from "./hotelnames"

async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev/api/hotels");
   return res.json();
    

}


export default async function Hotel(){
const data = await getData();
return (

<main>
    <h1>Hotel Page</h1>
{data.map(hotel =>
     <Hotelnames key={hotel.id} name={hotel.name} capacity={hotel.capacity}  id= {hotel.id}/>)}

    </main>

)}
