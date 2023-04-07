/*const MyProps = (props) => {
    const {nome, idade, curso} = props
    return (
        <div>
            <h1>O meu nome é: {props.nome}</h1>
            <h1>A minha idade é: {props.idade}</h1>
            <h1>O meu curso é: {props.curso}</h1>
        </div>
    )
}*/

const MyProps = ({nome, idade, curso}) => {
    return (
        <div>
            <h1>O meu nome é: {nome}</h1>
            <h1>A minha idade é: {idade}</h1>
            <h1>O meu curso é: {curso}</h1>
        </div>
    )
}

export default MyProps