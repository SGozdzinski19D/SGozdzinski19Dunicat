const niedzialajacyalbum = document.querySelectorAll(".niedzialaalbum")
const niedzialajacanuta = document.querySelectorAll(".niedzialanuta")

function albumniedziala()
{
  alert ("Zawartość tego albumu nie została jeszcze wprowadzona na stronę. Spróbuj sprawdzić najnowszy album wybranego przez Ciebie artysty, on na pewno działa!");
}

function nutaniedziala()
{
  alert ("Teskt tego utworu nie został jeszcze wprowadzony na stronę. Spróbuj sprawdzić pierwszy utwór z wybranego przez Ciebie albumu, on na pewno działa!");
}

niedzialajacyalbum.forEach(item => item.addEventListener("click", albumniedziala))
niedzialajacanuta.forEach(item => item.addEventListener("click", nutaniedziala))