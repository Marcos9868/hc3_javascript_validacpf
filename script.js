console.log('Javascript carregado')

function validaCPF (cpf) {
  return true
}

function validacao() {
  console.log('Validando CPF')
  const cpfDigitado = document.getElementById('input_cpf').value
  console.log(cpfDigitado)

  const resultado = validaCPF(cpfDigitado)

  if (resultado) {
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display = 'block'
  }
}