import React, { useState, useEffect } from 'react' 
import './Counter.css'


// UseState = Manipulaçao do estado do compenente

function Counter(){
    const [ contador, setContador] = useState(0) // contador significado o valor do estado do componente passado pelo useState(0) e o SetContador é um funçao 

    useEffect(() =>{ // User effect Serve Para validar se voce passou por alguma ou nenhuma variavel e se voce passar por alguma ou nenhuma variavel ele toma uma atitude a apartir dai.
        console.log('Renderizou')
    }, [contador])
     
    const handleOnClick = (operador) => {
         let novoValor = operador === '+' ? contador + 1 : contador -1 // if ternario 
        setContador(novoValor)
    }
    return(
        <div className="Counter">
            <span>{contador}</span>
            <button onClick={() => handleOnClick('-')}>-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
        </div>
    )
}

export default Counter