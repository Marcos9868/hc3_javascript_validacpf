console.log('Javascript carregado')

function validaCPF (cpf) {
  console.log(cpf.length)
  if (cpf.length != 11) {
    return false
  } else {
    let numeros = cpf.substring(0, 9)
    let digitos = cpf.substring(9)

    let soma = 0
    for (let i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i
    }
    console.log(soma)

    const resultadoValidacao = soma % 11 < 2 ? 0 : 11 - (soma % 11)

    if (resultadoValidacao != digitos.charAt(0)) {
      return false
    }

    console.log(digitos.toString().charAt(0))
    return true
  } 
}

function validacao() {
  console.log('Validando CPF')
  const cpfDigitado = document.getElementById('input_cpf').value
  const resultado = validaCPF(cpfDigitado)

  if (resultado) {
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display = 'block'
  }
}