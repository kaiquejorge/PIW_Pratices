import { Component } from "react"
/* função clássica

function MeusDados() {
    return
    <div>
        <h1>Kaique Jorge</h1>
        <h1>Design Digital</h1>
        <h1>UFC - Quixadá</h1>
    </div>
}
*/

/* função seta com return
const MeusDados = () => {
    return (
        <div>
            <h1>Kaique Jorge</h1>
            <h1>Design Digital</h1>
            <h1>UFC - Quixadá</h1>
        </div>
    )
}

/* função seta
const MeusDados = () => {
    <div>
        <h1>Kaique Jorge</h1>
        <h1>Design Digital</h1>
        <h1>UFC - Quixadá</h1>
    </div>
}

*/

class MeusDados extends Component {
    render() {
        return (
            <div>
                <h1>Kaique Jorge</h1>
                <h1>Design Digital</h1>
                <h1>UFC - Quixadá</h1>
            </div>
        )
    }
}


export default MeusDados