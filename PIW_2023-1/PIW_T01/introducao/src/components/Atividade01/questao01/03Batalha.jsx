import {Children, cloneElement} from 'react'

const Hero = ({name, arena}) => {
    return (
        <div>
            <h1>Sou Herói e Meu nome é: {name} estou na Arena {arena}</h1>
            <img src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/IMG_5261-e1528236686735-1-e1565125544566.jpg"
            alt="Paulo"
            style = {{width: "200px"}}
            />
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Sou Inimigo e Meu nome é: {name}</h1>
            <img src="https://media.licdn.com/dms/image/C4D03AQFj7DrHwg6iYg/profile-displayphoto-shrink_800_800/0/1568246299882?e=2147483647&v=beta&t=N6qLZMlyjuNnZBxYkJw1xO1CsSSv5aYoazzYDUBNTJI"
            alt="Fulana"
            style = {{width: "500px"}}
            />
        </div>
    )
}

const Arena = ({name}) => {
    return (
        <div>
            <h1>Arena: {name}</h1>
            <Hero name="Super Aragas" />
            <Enemy emy name="Super Fulana" />
        </div>
    )
}

const Arena2 = ({name, children}) => {
    return (
        <div>
            <h1>Arena: {name}</h1>
            {
            Children.map(
                children, 
                (child) => {
                    return cloneElement(child, {arena:name})
                }
            )
            }
        </div>
    )
}

const World = (props) => {
    return (
        <div>
        {props.children}
        </div>
    )
}

export {Hero, Enemy, Arena, Arena2, World}