

const Temperatura = () => {

    const celsiusParaFahrenheit = (celsius) => (9*celsius + 160) /5
    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32) * (5/9)
    const kelvin = (kelvin) => {
        const celsius = kelvin - 273.15
        const fahrenheit = (kelvin - 273.15) * (9/5) + 32
        return  {celsius, fahrenheit}
    }  

    //main
    const c = 30
    const f = 67
    const k = 0
    return (
        <>
            <h1>A temperatura {c} Celsius para Fahrenheit é: {celsiusParaFahrenheit(c)}</h1>
            <h1>A temperatura {f} de Fahrenheit para Celsius é: {fahrenheitParaCelsius(c)}</h1>
            <h1>A temperatura {k} de Kelvin para Celsius é: {kelvin(k).celsius}</h1>
        </>
    )
}

export default Temperatura