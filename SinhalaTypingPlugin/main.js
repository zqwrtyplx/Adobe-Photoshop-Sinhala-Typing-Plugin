function convertToSinhala(text) {
  const map = {
    "ayubowan": "ආයුබෝවන්",
    "kohomada": "කොහොමද",
    "mama": "මම",
    "sehas": "සෙහස්"
  };

  return map[text.toLowerCase()] || text;
}

function convert() {
  const input = document.getElementById("inputText").value;
  const output = convertToSinhala(input);

  document.getElementById("preview").innerText = output;
}