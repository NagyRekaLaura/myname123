function kuldes() {
  fetch("http://localhost:3000/display", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      szoveg: document.getElementById("szoveg").value,
      szin: document.getElementById("szin").value,
      meret: parseInt(document.getElementById("meret").value),
    }),
  })
}
