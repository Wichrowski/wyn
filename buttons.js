var refeicoes = {
  cafe: ["Iogurte Light + Fruta", "Iogurte Desnatado + Fruta", "Bebida Láctea Light + Fruta", "Leite Fermentado + Fruta"],
  almoco: ["ovo"],
  lanche1: [],
  lanche2: ["Fruta", "Mix de Frutas e Oleaginosas - damasco, ameixa, castanhas (Pará ou caju), amêndoas, nozes e uva passa"],
  jantar: [],
  ceia: ["Fruta"]
}

var ST = document.getElementById('ST')
var GS = document.getElementById('GS')
var checkboxes = document.querySelectorAll('input[type="checkbox"]')
var cafeDaManhaWrapper = document.getElementById('cafe-da-manha-wrapper')

ST.addEventListener("click", function () {
  console.log(checkboxes)
  checkboxes.forEach(function (checkbox, index) {
    checkbox.checked = true
  })
})

GS.addEventListener("click", function () {
  var listaSelecionados = []
  for (var checkbox of checkboxes) {
    if (checkbox.checked === true) {
      listaSelecionados.push(checkbox.id)
    }
  }

  // var selections = checkboxes.filter(checkbox => checkbox.checked === true)

  if (listaSelecionados.includes("cafe")) {
    var elemento = document.createElement("p")
    elemento.innerText = refeicoes.cafe[Math.floor(Math.random() * refeicoes.cafe.length)]
    cafeDaManhaWrapper.appendChild(elemento)
  }
})
