async function getData( ) {
  const rest = await fetch("https://snowtooth-api-rest.fly.dev");
  return rest.json();
  
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <h1>Mountains</h1>
      <p>List of Mountains</p>
   
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Region</th>
            <th>Height (m)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mountain) => (
            <tr key={mountain.id}>
              <td>{mountain.name}</td>
              <td>{mountain.country}</td>
              <td>{mountain.region}</td>
              <td>{mountain.height}</td>  
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}