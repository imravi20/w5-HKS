function updateCounter() {
  const button = document.getElementById("button1");
  const value = parseFloat(button.innerText.split(" ")[1]);
  document.getElementById("button1").innerText = `Counter ${value + 1}`;
  if (value + 1 == 11) {
    alert("Completed");
  }
}
