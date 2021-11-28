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
IleMineloAlbum()

//Alert niedziałającej piosenki

const NiedzialajacaNuta = document.querySelectorAll(".niedzialanuta")

function NutaNieDziala()
{
  alert ("Teskt tego utworu nie został jeszcze wprowadzony na stronę. Spróbuj sprawdzić pierwszy utwór z wybranego przez Ciebie albumu, on na pewno działa!");
}

NiedzialajacaNuta.forEach(item => item.addEventListener("click", NutaNieDziala))

//Zmiana trybu jasny/ciemny

let checker = 0

function ZmianaTrybu()
{
  if(checker == 0)
  {
    document.querySelector("body").style.backgroundColor = "#dbdbdb";
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
    let numerki = document.querySelectorAll(".nanumerki p")
    for(i = 0 ; i < numerki.length ; i++)
    {
      numerki[i].style.color = "#454649";
    }
    let tytuly = document.querySelectorAll(".natytuly h5")
    for(i = 0 ; i < tytuly.length ; i++)
    {
      tytuly[i].style.color = "#171717";
    }
    document.querySelector(".natytuly p").style.color = "#454649"

    document.querySelector("header img").src = "unicatlogoblack.png"

    checker = 1
  }
  else
  {
    document.querySelector("body").style.backgroundColor = "#1F1F1F";
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
    let numerki = document.querySelectorAll(".nanumerki p")
    for(i = 0 ; i < numerki.length ; i++)
    {
      numerki[i].style.color = "#8A8E96";
    }
    let tytuly = document.querySelectorAll(".natytuly h5")
    for(i = 0 ; i < tytuly.length ; i++)
    {
      tytuly[i].style.color = "#CCD2E3";
    }
    document.querySelector(".natytuly p").style.color = "#8A8E96"
    
    document.querySelector("header img").src = "unicatlogowhite.png"

    checker = 0
  }
}