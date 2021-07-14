let inputResultado = document.getElementById('inputDisplayResultado')

let calculation = {
  firstValue: 0,
  secondValue: 0,
  calculator: null
}

// Adicionar evento para iniciar quando a janela carregar
window.addEventListener('load', function () {
  atribuirEventos()
})

// Atribuir eventos para os botões da calculadora
function atribuirEventos() {
  for (let index = 0; index <= 9; index++) {
    document
      .getElementById('btnValor' + index)
      .addEventListener('click', inserirNumero)
  }
}

// Inserir um número no display da calculadora
function inserirNumero() {
  if (!isNaN(inputResultado.value)) {
    if (inputResultado.value == 0) {
      inputResultado.value = event.target.innerText
    } else {
      inputResultado.value += event.target.innerText
    }
  }
}
