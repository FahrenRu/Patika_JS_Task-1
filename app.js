const name = prompt("Adınız Nedir ?")
const getName = document.querySelector("#welcome");
getName.innerHTML = `Merhaba, ${name}! Hoş Geldin!`

let now = new Date().toLocaleDateString('tr-tr', { weekday:"long"});
const d = new Date()

const date = document.querySelector("#time").innerHTML = d.getHours()+ ":" +String(d.getMinutes())+ ":" + String(d.getSeconds())+ " " + now

