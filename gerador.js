var bebidas = {
  iogurte: [" Iogurte Light (200 ml)", " Bebida Láctea Light (200 ml)", " Iogurte Desnatado (200 ml)", " Leite Fermentado (2 unid.)"],
  suco: [" Suco de Fruta Natural (200 ml)", " Suco de Fruta Light (200 ml)", " Suco de Fruta Integral (150 ml)"]
}

var saladas = {
  salada: [" Alface", " Espinafre", " Mostarda", " Salsão"]
}

var legumesVerduras = {
  legumeVerdura: [" Abobrinha", " Berinjela", " Brócolis", " Cebola", " Couve-flor", " Pimentão", " Palmito", " Abóbora", " Alho-poró", " Cenoura", " Chuchu"]
}

var carboidratos = {
  almocoJanta: [" Arroz Integral/Parabolizado (4 colh. de sopa)", " Arroz Branco (3 colh. de sopa)", " Batata Inglesa (1 unid. média)", " Macarrão (1/3 do prato)", " Mandioca (1 pedaço médio)", " Farinha de mandioca (2 colh. de sopa)", " Polenta (4 colh. de sopa)", " Milho (1 espiga média ou 4 colh. de sopa)"],
  lancheJanta: [" Pão Francês (sem miolo - 1 unid.)", " Pão Francês Integral (sem miolo - 1 unid.)", " Torradinhas Bauducco Integral ou Light (3 unid.)", " Pão Sírio (1 unid.)", " Pão de Forma Integral (2 fatias)", " Nesfit (1 pacotinho)", " BelVita (1 pacotinho)", " Cookies Integrais (Jasmine/Vitao – 5 unid.)", " Bolacha Água e Sal (4 unid.)", " Bolacha Salgada Integral (5 unid.)"],
  janta: [" Pão de Forma Branco Light (2 fatias)", " Rap 10 Integral ou Light (2 unid.)", " Pizza de Frigideira Integral (2 unid.)"]
}

var proteinasVegetais = {
  proteinaVegetal: [" Feijão - caldo (1 concha pequena)", " Lentilha (1 concha pequena)"]
}

var proteinasAnimais = {
  almoco: [" Carne Moída (4 colh. de sopa)", " Coxa de Frango sem pele (2 unid. pequenas)", " Salsicha de frango ou peru (2 unid.)", " Ovo cozido (1 unid.)", " Almôndega (3 unid. pequenas)"],
  janta: [" Peito de Chester ou Peru (1 fatia)", " Presunto Magro (1 fatia)", " Lombo Canadense (1 fatia)", " Carne Moída (4 colh. de sopa)", " Coxa de Frango (sem pele - 2 unid. pequenas)", " Salsicha de frango ou peru (2 unid.)", " Ovo cozido (1 unid.)"]
}

var friosAdicionais = {
  lancheTarde: [" Requeijão Light (1 colh. de sobremesa)", " Geléia Light (1 colh. de sobremesa)", " Margarina Light Sem Sal (1 colh. de chá)"],
  janta: [" Queijo Lanche ou Mussarela (1 fatia)", " Ricota ou Minas (1 fatia média)", " Requeijão Light (1 colh. de sopa)", " Cream Cheese Light (1 colh. de sopa)", " (Polenguinho Light (2 unid)"]
}

var frutas = {
  fruta: [" Banana (1 unid. pequena)", " Laranja (1 unid. média)", " Maçã (1 unid. pequena)", " Pêra (1 unid.)", " Morango (1/2 copo)", " Melão (1 fatia média)", " Uva (1 cacho pequeno)", " Ameixa (2 unid. médias)", " Bergamota (1 unid. média)", " Mamão Papaya (1/2 unid.)", " Melancia (1 fatia fina)", " Kiwi (1 unid. média)"]
}

var c1 = bebidas.iogurte[Math.floor(Math.random() * bebidas.iogurte.length)]
var c2 = bebidas.suco[Math.floor(Math.random() * bebidas.suco.length)]
var c3 = saladas.salada[Math.floor(Math.random() * saladas.salada.length)]
var c4 = legumesVerduras.legumeVerdura[Math.floor(Math.random() * legumesVerduras.legumeVerdura.length)]
var c5 = carboidratos.almocoJanta[Math.floor(Math.random() * carboidratos.almocoJanta.length)]
var c6 = carboidratos.lancheJanta[Math.floor(Math.random() * carboidratos.lancheJanta.length)]
var c7 = carboidratos.janta[Math.floor(Math.random() * carboidratos.janta.length)]
var c8 = proteinasVegetais.proteinaVegetal[Math.floor(Math.random() * proteinasVegetais.proteinaVegetal.length)]
var c9 = proteinasAnimais.almoco[Math.floor(Math.random() * proteinasAnimais.almoco.length)]
var c10 = proteinasAnimais.janta[Math.floor(Math.random() * proteinasAnimais.janta.length)]
var c11 = friosAdicionais.lancheTarde[Math.floor(Math.random() * friosAdicionais.lancheTarde.length)]
var c12 = friosAdicionais.janta[Math.floor(Math.random() * friosAdicionais.janta.length)]
var c13 = frutas.fruta[Math.floor(Math.random() * frutas.fruta.length)]

var refeicoes = {
  cafe: [c1, c13],
  almoco: [c3, c4, c5, c8, c9, c13],
  lanche1: [c1,c2, c6, c11],
  lanche2: [c13],
  jantar: [c1, c2, c6, c7, c12, c10],
  ceia: [c13]
}

var ST = document.getElementById('ST')
var GS = document.getElementById('GS')
var checkboxes = document.querySelectorAll('input[type="checkbox"]')
var cafeDaManhaWrapper = document.getElementById('cafe-da-manha-wrapper')
var almocoWrapper = document.getElementById('almoco-wrapper')
var lanche1Wrapper = document.getElementById('lanche1-wrapper')
var lanche2Wrapper = document.getElementById('lanche2-wrapper')
var jantarWrapper = document.getElementById('jantar-wrapper')
var ceiaWrapper = document.getElementById('ceia-wrapper')

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
    elemento.innerText = refeicoes.cafe
    cafeDaManhaWrapper.appendChild(elemento)
  }

  if (listaSelecionados.includes("almoco")) {
    var elemento = document.createElement("p")
    elemento.innerText = refeicoes.almoco
    almocoWrapper.appendChild(elemento)
  }

  if (listaSelecionados.includes("lanche1")) {
    var elemento = document.createElement("p")
    elemento.innerText = refeicoes.lanche1
    lanche1Wrapper.appendChild(elemento)
  }

  if (listaSelecionados.includes("lanche2")) {
    var elemento = document.createElement("p")
    elemento.innerText = refeicoes.lanche2
    lanche2Wrapper.appendChild(elemento)
  }

  if (listaSelecionados.includes("jantar")) {
    var elemento = document.createElement("p")
    elemento.innerText = refeicoes.jantar
    jantarWrapper.appendChild(elemento)
  }

  if (listaSelecionados.includes("ceia")) {
    var elemento = document.createElement("p")
    elemento.innerText = refeicoes.ceia
    ceiaWrapper.appendChild(elemento)
  }
})
