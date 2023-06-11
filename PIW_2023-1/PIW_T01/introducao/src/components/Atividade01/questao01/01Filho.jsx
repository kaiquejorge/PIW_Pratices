import Pai from './01Pai';

const Filho = ({altura, peso}) => {

    const calcularIMC = (altura, peso) => peso/(altura*altura)

    const renderizarMensagem = (imc) => {
        if (imc < 18) return <h1> Abaixo do Peso </h1>
        else if (imc > 25) return <h1> Acima do Peso </h1>
        return <h1> Peso ideal </h1>
    }

    const imc = calcularIMC(altura, peso)

    return (
        <div>
            <h1>Meu IMC é: {imc.toFixed(1)}</h1>
            {renderizarMensagem(imc)}
        </div>
    );
}

export default Filho