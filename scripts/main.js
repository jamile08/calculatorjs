class Calculadora {
  inputResultado = document.getElementById('inputDisplayResultado').value

  calculation = {
    firstValue: 0,
    secondValue: 0,
    calculator: null
  }

  constructor() {
    // Adicionar evento para iniciar quando a janela carregar
    window.addEventListener('load', this.atribuirEventos())
  }

  // Atribuir eventos para os botões da calculadora
  atribuirEventos() {
    for (let index = 0; index <= 9; index++) {
      document
        .getElementById('btnValor' + index)
        .addEventListener('click', this.inserirNumero)
    }
  }

  // Inserir um número no display da calculadora
  inserirNumero() {
    if (isNaN(this.inputResultado) || this.inputResultado == 0) {
      this.inputResultado = event.target.innerText
    } else {
      this.inputResultado += event.target.innerText
    }
  }
}

new Calculadora()
