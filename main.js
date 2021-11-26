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
  if(album == "Ognisko Niedomowe")
  {
    dataalbum = new Date(2021,10,12)
  }
  else
  {
    if(album == "Hustle As Usual")
    {
      dataalbum = new Date(2021,5,25)
    }
    else
    {
      if(album == "Moody Tapes, Volume One")
      {
        dataalbum = new Date(2021,5,10)
      }
      else
      {
        if(album == "Dziki & Nietoperze")
        {
          dataalbum = new Date(2019,5,20)
        }
        else
        {
          if(album == "Młody Matczak")
          {
            dataalbum = new Date(2021,9,1)
          }
          else
          {
            if(album == "ZL Epilog")
            {
              dataalbum = new Date(2021,10,20)
            }
            else
            {
              if(album == "NIC")
              {
                dataalbum = new Date(2021,10,19)
              }
              else
              {
                if(album == "Hulanki")
                {
                  dataalbum = new Date(2021,8,23)
                }
              }
            }
          }
        }
      }
    }
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
  if(artysta == "Adi Nowak")
  {
    dataalbum = new Date(2021,10,12)
  }
  else
  {
    if(artysta == "Belmondo")
    {
      dataalbum = new Date(2021,5,25)
    }
    else
    {
      if(artysta == "Hodak")
      {
        dataalbum = new Date(2021,5,10)
      }
      else
      {
        if(artysta == "Leh")
        {
          dataalbum = new Date(2019,5,20)
        }
        else
        {
          if(artysta == "Mata")
          {
            dataalbum = new Date(2021,9,1)
          }
          else
          {
            if(artysta == "Sentino")
            {
              dataalbum = new Date(2021,10,20)
            }
            else
            {
              if(artysta == "Sokół")
              {
                dataalbum = new Date(2021,10,19)
              }
              else
              {
                if(artysta == "Young Leosia")
                {
                  dataalbum = new Date(2021,8,23)
                }
              }
            }
          }
        }
      }
    }
  }
  let dzis = new Date(teraz.getFullYear(), teraz.getMonth(), teraz.getDate())
  let dni = (dzis.getTime() - dataalbum.getTime()) / 86400000

  let miejsce = document.querySelector(".plyta")
  miejsce.innerText = "Od wydania ostatniej płyty minęło: " + parseInt(dni) + " dni"
  setTimeout(IleMineloArtysta, 1000)
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
