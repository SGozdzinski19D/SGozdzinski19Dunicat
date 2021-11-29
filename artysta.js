//Zegar główny

function ZegarGlowny()
{
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

//Licznik dni od wydania ostatniego albumu

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
  miejsce.innerText = "Od premiery ostatniej płyty minęło: " + parseInt(dni) + " dni"
  setTimeout(IleMineloArtysta, 1000)
}

//Alert niedziałającego albumu

const NiedzialajacyAlbum = document.querySelectorAll(".niedzialaalbum")

function AlbumNieDziala()
{
  alert ("Zawartość tego albumu nie została jeszcze wprowadzona na stronę. Spróbuj sprawdzić najnowszy album wybranego przez Ciebie artysty, on na pewno działa!");
}

NiedzialajacyAlbum.forEach(item => item.addEventListener("click", AlbumNieDziala))

//Zmiana trybu jasny/ciemny

let checker = 0

function ZmianaTrybu()
{
  if(checker == 0)
  {
    document.querySelector("body").style.backgroundColor = "#dbdbdb";
    document.querySelector(".menudol").style.backgroundColor = "#dbdbdb";
    document.querySelector("body").style.color = "#171717";
    document.querySelector("header").style.border = "1px solid #171717";
    document.querySelector("header").style.borderRight = "0";
    document.querySelector(".menu").style.backgroundColor = "#dbdbdb";
    document.querySelector(".menu").style.border = "1px solid #171717";
    let anastronie = document.querySelectorAll("a")
    for(i = 0 ; i < anastronie.length ; i++)
    {
      anastronie[i].style.color = "#171717";
    }
    document.querySelector(".glowny").style.borderLeft = "5px solid #171717";
    document.querySelector(".glowny").style.borderRight = "5px solid #171717";
    document.querySelector(".glowny").style.borderTop = "5px solid #171717";
    document.querySelector(".dol").style.borderTop = "5px solid #171717";

    let h3nastronie = document.querySelectorAll("h3")
    for(i = 0 ; i < h3nastronie.length ; i++)
    {
      h3nastronie[i].style.color = "#454649";
    }
    let palbum = document.querySelectorAll(".lewy p")
    for(i = 0 ; i < palbum.length ; i++)
    {
      palbum[i].style.color = "#454649";
    }
    let miesiac = document.querySelectorAll(".miesiac")
    for(i = 0 ; i < miesiac.length ; i++)
    {
      miesiac[i].style.color = "#454649";
    }
    let autor = document.querySelectorAll("article h5")
    for(i = 0 ; i < autor.length ; i++)
    {
      autor[i].style.color = "#454649";
    }
    let naglowek = document.querySelectorAll(".dol h4")
    for(i = 0 ; i < naglowek.length ; i++)
    {
      naglowek[i].style.color = "#454649";
    }
    let nazwaalbumu = document.querySelectorAll(".album h5")
    for(i = 0 ; i < nazwaalbumu.length ; i++)
    {
      nazwaalbumu[i].style.color = "#171717";
    }
    let rok = document.querySelectorAll(".album p")
    for(i = 0 ; i < rok.length ; i++)
    {
      rok[i].style.color = "#454649";
    }

    document.querySelector("header img").src = "unicatlogoblack.png"
    document.querySelectorAll(".menudol img")[0].src = "User2.png"
    document.querySelectorAll(".menudol img")[1].src = "Fire2.png"
    document.querySelectorAll(".menudol img")[2].src = "Folder2.png"
    document.querySelectorAll(".menudol img")[3].src = "Color2.png"

    checker = 1
  }
  else
  {
    document.querySelector("body").style.backgroundColor = "#1F1F1F";
    document.querySelector(".menudol").style.backgroundColor = "#1F1F1F";
    document.querySelector("body").style.color = "#ECEFF4";
    document.querySelector("header").style.border = "1px solid #CCD2E3";
    document.querySelector("header").style.borderRight = "0";
    document.querySelector(".menu").style.backgroundColor = "#1F1F1F";
    document.querySelector(".menu").style.border = "1px solid #CCD2E3";
    let anastronie = document.querySelectorAll("a")
    for(i = 0 ; i < anastronie.length ; i++)
    {
      anastronie[i].style.color = "#ECEFF4";
    }
    document.querySelector(".glowny").style.borderLeft = "5px solid #CCD2E3";
    document.querySelector(".glowny").style.borderRight = "5px solid #CCD2E3";
    document.querySelector(".glowny").style.borderTop = "5px solid #CCD2E3";
    document.querySelector(".dol").style.borderTop = "5px solid #CCD2E3";

    let h3nastronie = document.querySelectorAll("h3")
    for(i = 0 ; i < h3nastronie.length ; i++)
    {
      h3nastronie[i].style.color = "#8A8E96";
    }
    let palbum = document.querySelectorAll(".lewy p")
    for(i = 0 ; i < palbum.length ; i++)
    {
      palbum[i].style.color = "#8A8E96";
    }
    let miesiac = document.querySelectorAll(".miesiac")
    for(i = 0 ; i < miesiac.length ; i++)
    {
      miesiac[i].style.color = "#8A8E96";
    }
    let autor = document.querySelectorAll("article h5")
    for(i = 0 ; i < autor.length ; i++)
    {
      autor[i].style.color = "#8A8E96";
    }
    let naglowek = document.querySelectorAll(".dol h4")
    for(i = 0 ; i < naglowek.length ; i++)
    {
      naglowek[i].style.color = "#8A8E96";
    }
    let nazwaalbumu = document.querySelectorAll(".album h5")
    for(i = 0 ; i < nazwaalbumu.length ; i++)
    {
      nazwaalbumu[i].style.color = "#CCD2E3";
    }
    let rok = document.querySelectorAll(".album p")
    for(i = 0 ; i < rok.length ; i++)
    {
      rok[i].style.color = "#8A8E96";
    }
    
    document.querySelector("header img").src = "unicatlogowhite.png"
    document.querySelectorAll(".menudol img")[0].src = "User1.png"
    document.querySelectorAll(".menudol img")[1].src = "Fire1.png"
    document.querySelectorAll(".menudol img")[2].src = "Folder1.png"
    document.querySelectorAll(".menudol img")[3].src = "Color1.png"

    checker = 0
  }
}