async function fetchdata() {
  const user = await fetch("https://isro.vercel.app/api/customer_satellites", {
    method: "GET",
  });
  const data = await user.json();
  console.log(data.customer_satellites);

  
  const satellites = document.createElement("div");
  data.customer_satellites.forEach((users) => {
    console.log(users);
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
        <div class="id">ID: ${users.id}</div>
        
        <div>Country: ${users.country}</div>
        <div>Launch Date: ${users.launch_date}</div>
        <div>Mass: ${users.mass}</div>
        <div>Launcher: ${users.launcher}</div><br>
        `;
    satellites.append(container);
  });
  document.body.append(satellites);
}
fetchdata();