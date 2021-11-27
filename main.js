//Zegar główny
function ZegarGlowny() {
  let czas = new Date()
  let godziny = czas.getHours()
  let minuty = czas.getMinutes()
  let sekundy = czas.getSeconds()
  
  godziny = (godziny < 10) ? "0" + godziny : godziny
  minuty = (minuty < 10) ? "0" + minuty : minuty
  sekundy = (sekundy < 10) ? "0" + sekundy : sekundy
  
  let zegar = godziny + ":" + minuty + ":" + sekundy
  
  document.querySelector(".zegar").innerText = zegar;
  setTimeout(ZegarGlowny, 1000)
}
ZegarGlowny()

function IleMineloAlbum()
{
  let teraz = new Date()
  let album = document.querySelector("#nazwa").innerText
  let dataalbum = 0
  
  switch (album)
  {
    case 'Ognisko Niedomowe':
      dataalbum = new Date(2021,10,12)
      break;
    case 'Hustle As Usual':
      dataalbum = new Date(2021,5,25)
      break;
    case 'Moody Tapes, Volume One':
      dataalbum = new Date(2021,5,10)
      break;
    case 'Dziki & Nietoperze':
      dataalbum = new Date(2019,5,20)
      break;
    case 'Młody Matczak':
      dataalbum = new Date(2021,9,1)
      break;
    case 'ZL Epilog':
      dataalbum = new Date(2021,10,20)
      break;
    case 'NIC':
      dataalbum = new Date(2021,10,19)
      break;
    case 'Hulanki':
      dataalbum = new Date(2021,8,23)
      break;
    default:
      console.log("Błąd");
  }
  let dzis = new Date(teraz.getFullYear(), teraz.getMonth(), teraz.getDate())
  let dni = (dzis.getTime() - dataalbum.getTime()) / 86400000

  let miejsce = document.querySelector(".plyta")
  miejsce.innerText = "Od premiery płyty minęło: " + parseInt(dni) + " dni"
  setTimeout(IleMineloAlbum, 1000)
}

function IleMineloArtysta()
{
  let teraz = new Date()
  let artysta = document.querySelector("#nazwa").innerText
  let dataalbum = 0
  
  switch (artysta)
  {
    case 'Adi Nowak':
      dataalbum = new Date(2021,10,12)
      break;
    case 'Belmondo':
      dataalbum = new Date(2021,5,25)
      break;
    case 'Hodak':
      dataalbum = new Date(2021,5,10)
      break;
    case 'Leh':
      dataalbum = new Date(2019,5,20)
      break;
    case 'Mata':
      dataalbum = new Date(2021,9,1)
      break;
    case 'Sentino':
      dataalbum = new Date(2021,10,20)
      break;
    case 'Sokół':
      dataalbum = new Date(2021,10,19)
      break;
    case 'Young Leosia':
      dataalbum = new Date(2021,8,23)
      break;
    default:
      console.log("Błąd");
  }
  let dzis = new Date(teraz.getFullYear(), teraz.getMonth(), teraz.getDate())
  let dni = (dzis.getTime() - dataalbum.getTime()) / 86400000

  let miejsce = document.querySelector(".plyta")
  miejsce.innerText = "Od premiery płyty minęło: " + parseInt(dni) + " dni"
  setTimeout(IleMineloAlbum, 1000)
}

//Alerty od niedziałających rzeczy
const NiedzialajacyAlbum = document.querySelectorAll(".niedzialaalbum")
const NiedzialajacaNuta = document.querySelectorAll(".niedzialanuta")

function AlbumNieDziala()
{
  alert ("Zawartość tego albumu nie została jeszcze wprowadzona na stronę. Spróbuj sprawdzić najnowszy album wybranego przez Ciebie artysty, on na pewno działa!");
}

function NutaNieDziala()
{
  alert ("Teskt tego utworu nie został jeszcze wprowadzony na stronę. Spróbuj sprawdzić pierwszy utwór z wybranego przez Ciebie albumu, on na pewno działa!");
}

NiedzialajacyAlbum.forEach(item => item.addEventListener("click", AlbumNieDziala))
NiedzialajacaNuta.forEach(item => item.addEventListener("click", NutaNieDziala))