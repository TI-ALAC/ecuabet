const URI = "https://apibeeyond.alacoohperu.pe/api/ecuabet";
var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
var reproductor = document.getElementById("reproductor");

const URL = window.location.href;

async function init() {
  await getUser();
  // Play function to start the content exhibition
  function play() {
    console.log('Playing content');
    // Get video element and play it if exists
    var video = document.getElementsByTagName('video')[0];
    if (video) {
      video.play();
    }
  }

  // This function is called when the content is exhibited on a BroadSign player
  function BroadSignPlay() {
    play();
  }

  // If the content is loaded on a BroadSign player, but is inside an iframe, we need make a redirect to the parent window
  if (typeof BroadSignObject != 'undefined') {
    // If this content is loaded inside an iframe
    if (window.self !== window.top) {
      // Put this content in the top window
      window.top.location.href = window.self.location.href;
    }
  }

  // If this page is loaded Broadsign Player, play the content instantly
  if (typeof BroadSignObject === 'undefined') {
    play();
  }
}

init();

async function getUser() {

  const resp = await axios.get(URI);
  const xmlData = resp.data.entry;

  console.log(xmlData)

  reproductor.innerHTML = `<video muted="" preload="auto" ><source src="${xmlData}" type="video/mp4"></video>`;  // if (xmlData) {
  //   // America
  //   const dataItem1  = xmlData.competidores[0].Name;
  //   document.getElementById('cuota3').innerHTML = dataItem5;
  // }
}