let btnCalcular = document.getElementById('calcular')
let numUsuario = document.getElementById('numUsuario')

let tablas = document.getElementById('tablas')
let factoriales = document.getElementById('factoriales')

let output = document.getElementById('output')
let message = document.getElementById('message')

btnCalcular.addEventListener('click', () => {
    let numUsuarioVal = parseInt(numUsuario.value)
    validaNumero(numUsuarioVal)
})

const validaNumero = (numero) => {
    if (numero < 1 || numero > 20) {

        message.classList.add('show')
        setTimeout( () => {
            message.classList.remove('show')
        }, 2000)
        message.textContent = 'El numero ingresado esta fuera del rango!'

    } else {

        output.classList.add('show')
        let factorial = 1
        for (let i = 1; i <= numero; i++) {
            
            let tablaItem = document.createElement('li')
            let tablaItemVal = `${i} x ${numero} = ${ i * numero }`
            tablaItem.textContent = tablaItemVal
            tablas.appendChild(tablaItem)
            
            let factorialItem = document.createElement('li')
            let factorialItemVal = `Factorial de ${i} es: ${ factorial = factorial * i }`
            factorialItem.textContent = factorialItemVal
            factoriales.appendChild(factorialItem)

        }

    }
}
