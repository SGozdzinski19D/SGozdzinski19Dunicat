const niedzialajacy = document.querySelectorAll(".niedziala")

function albumniedziala()
{
  alert ("Zawartość tego albumu nie została jeszcze wprowadzona na stronę. Spróbuj sprawdzić najnowszy album wybranego przez ciebie artysty, on na pewno działa!");
}

niedzialajacy.forEach(item => item.addEventListener("click", albumniedziala))

// for(let i = 0; i < niedzialajacy.length; i++)
// {
//     niedzialajacy[i].addEventListener("click", albumniedziala)
// }