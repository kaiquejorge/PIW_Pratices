const Calculadora = () => {

    const somar = (x,y) => {
        return x + y
    }

    const subtrair = (x, y) => x - y

    function multiplicar(x, y) {
        return x * y
    }

    let dividir = (x, y) => x / y

    const chamarDivisao = (funcaoDeDividir) => {
        return funcaoDeDividir(25, 5)

    }

    return (
        <div>
            <h1>O resultado é: {somar (60,5)}</h1>
            <h1>O resultado da subtração é: {subtrair (60,5)}</h1>
            <h1>O resultado da multiplicação é: {multiplicar (60, 5)}</h1>
            <h1>O resultado da divisão é: {chamarDivisao (dividir)}</h1>
            <h1>O resultado da divisão é: {
                
                chamarDivisao(
                    (x, y) => {
                        return x/y
                    }
                )
            }
            {
                dividir = (x,y) => x**y
            }
            </h1>
            <h1>O resultado potência é: {dividir(2,3)}</h1>
        </div>
    )   
}

export default Calculadora