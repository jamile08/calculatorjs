class Calculadora {
  inputResultado = document.getElementById('inputDisplayResultado')

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
  atribuirEventos = () => {
    // Atribuir eventos para os botões de número de 0 a 9
    for (let index = 0; index <= 9; index++) {
      document
        .getElementById('btnValor' + index)
        .addEventListener('click', this.inserirNumero)
    }

    // Atribuir evento para o botão C que limpa dos dados da calculadora
    document
      .getElementById('btnLimpar')
      .addEventListener('click', this.limparDados)

    // Atribuir evento ao botão de .
    document
      .getElementById('btnPonto')
      .addEventListener('click', this.inserirPonto)
  }

  // Inserir um número no display da calculadora
  inserirNumero = () => {
    if (isNaN(this.inputResultado.value) || this.inputResultado.value == 0) {
      this.inputResultado.value = event.target.innerText
    } else {
      this.inputResultado.value += event.target.innerText
    }
  }

  // Funções com operações matemática
  somar = (valor1, valor2) => valor1 + valor2

  subtracao = (valor1, valor2) => valor1 - valor2

  divisao = (valor1, valor2) => (valor2 != 0 ? valor1 / valor2 : undefined)

  multiplicacao = (valor1, valor2) => valor1 * valor2

  // Função para limpar dados da calculadora
  limparDados = () => {
    this.inputResultado.value = ''
    this.calculation.firstValue = 0
    this.calculation.secondValue = 0
    this.calculation.calculator = null
  }

  // Função para inserir o ponto
  inserirPonto = () => {
    if (this.inputResultado.value === '' || isNaN(this.inputResultado.value)) {
      this.inputResultado.value = '0.'
    } else if (!this.inputResultado.value.includes('.')) {
      this.inputResultado.value += '.'
    }
  }
}

calculadora = new Calculadora()
