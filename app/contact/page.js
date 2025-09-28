import ShowPicture  from "./showpic"

async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev/api/hotels");
   return res.json();
    

}




export default async function Home() {    

    const data = await getData();

         
    return (    
      
        <main>
           {data.map(hotel  =>
           <ShowPicture  key={hotel.id} id={hotel.id} name={hotel.name} capacity={hotel.status}/> )}


             </main>
    );
} 


