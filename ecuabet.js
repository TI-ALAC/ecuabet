const URI = "https://apiecuabet.alacoohecuador.com/api/ecuabet";
var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
const URL = window.location.href;

async function init() {
  await getUser();
  setTimeout(() => {
    content.style.display = "none";
    content3.style.display = "block";
    content2.style.display = "none";
  }, 7500);
}

init();
async function getUser(){

  const resp = await axios.get(URI);
  const xmlData = resp.data.data;

  console.log(xmlData)

  if (xmlData) {
    // America
    const dataItem1  = xmlData.competidores[0].Name;
    const dataItem2  = xmlData.competidores[1].Name;
    const dataItem3  = xmlData.cuotas[0].Price.toFixed(2);
    const dataItem4  = xmlData.cuotas[1].Price.toFixed(2);
    const dataItem5  = xmlData.cuotas[2].Price.toFixed(2);
    
    document.getElementById('title1').innerHTML = "";
    document.getElementById('title2').innerHTML = "";
    document.getElementById('title3').innerHTML = "";
    document.getElementById('cuota1').innerHTML = dataItem3;
    document.getElementById('cuota2').innerHTML = dataItem4;
    document.getElementById('cuota3').innerHTML = dataItem5;
  }
}