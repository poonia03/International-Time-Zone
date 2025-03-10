async function get() {
  const loc = document.getElementById("loc").value;
  const result = document.getElementById("response");
  const api = "81583fed3f0e4f9c876c352dc58c9564";

  if (!loc) {
    result.innerHTML = "Please enter a location";
    return;
  }

  try {
    const response = await fetch(
      `https://api.ipgeolocation.io/timezone?apiKey=${api}&location=${loc}`
    );

    
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const data = await response.json();

    
    if (data && data.date_time) {
      result.innerHTML = `Timezone: ${data.timezone} <br> Local Time: ${data.date_time}`;
    } else {
      result.innerHTML = "Unable to retrieve time information.";
    }
  } catch (error) {
    result.innerHTML = "Error in fetching data";
    console.error("Error:", error);
  }
}
