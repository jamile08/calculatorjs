class Calculadora {
  inputResultado = document.getElementById('inputDisplayResultado')

  calculo = {
    valor1: 0,
    valor2: 0,
    operacao: null
  }

  isCalculando = false

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
        .addEventListener('click', this.clicarNumero)
    }

    // Atribuir evento para o botão C que limpa dos dados da calculadora
    document
      .getElementById('btnLimpar')
      .addEventListener('click', this.limparDados)

    // Atribuir evento ao botão de .
    document
      .getElementById('btnPonto')
      .addEventListener('click', this.clicarPonto)

    // Atribuir evento aos botões de operador
    document
      .getElementById('btnSomar')
      .addEventListener('click', this.clicarOperador)
    document
      .getElementById('btnSubtrair')
      .addEventListener('click', this.clicarOperador)
    document
      .getElementById('btnMultiplicar')
      .addEventListener('click', this.clicarOperador)
    document
      .getElementById('btnDividir')
      .addEventListener('click', this.clicarOperador)

    // Atribuir evento ao botão =
    document
      .getElementById('btnResultado')
      .addEventListener('click', this.clicarResultado)
  }

  // Inserir um número no display da calculadora
  clicarNumero = () => {
    if (this.isCalculando) {
      this.calculo.valor2 = Number(event.target.innerText)
      this.inputResultado.value = event.target.innerText
      this.isCalculando = false
    } else {
      if (isNaN(this.inputResultado.value) || this.inputResultado.value == 0) {
        this.inputResultado.value = event.target.innerText
      } else {
        this.inputResultado.value += event.target.innerText
      }
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
    this.calculo.valor1 = 0
    this.calculo.valor2 = 0
    this.calculo.operacao = null
  }

  // Função para inserir o ponto
  clicarPonto = () => {
    if (this.inputResultado.value === '' || isNaN(this.inputResultado.value)) {
      this.inputResultado.value = '0.'
    } else if (!this.inputResultado.value.includes('.')) {
      this.inputResultado.value += '.'
    }
  }

  // Função para atualizar o atributo calculation ao clicar nos operadores
  clicarOperador = () => {
    this.isCalculando = true
    if (!isNaN(this.inputResultado.value)) {
      this.calculo.valor1 = Number(this.inputResultado.value)
    }

    let operador = event.target.innerText

    this.atribuirOperacao(operador)

    this.inputResultado.value = operador
  }

  // Função para atribuir a operação ao atributo calculo.operacao
  atribuirOperacao = operador => {
    switch (operador) {
      case '+':
        this.calculo.operacao = this.somar
        break
      case '-':
        this.calculo.operacao = this.subtracao
        break
      case '*':
        this.calculo.operacao = this.multiplicacao
        break
      case '/':
        this.calculo.operacao = this.divisao
        break
      default:
        break
    }
  }

  // Função ao clicar no botão = com o resultado
  clicarResultado = () => {
    if (this.calculo.operacao != null) {
      let resultado = this.calculo.operacao(
        this.calculo.valor1,
        this.calculo.valor2
      )
      this.inputResultado.value = resultado
    }
  }
}

calculadora = new Calculadora()
