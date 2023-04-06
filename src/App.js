import React, { useState } from "react"
import Counter from './Counter'
import Albuns from './Albuns'
import Users from "./Users"




const PaginaPadrao = 'albuns'

const pages = {
    albuns:{
        text:'Albuns',
        componente:Albuns,
    },
    counter:{
        text:'Counter',
        componente:Counter,
    },
    users:{
        text: 'Users',
        componente: Users,
    }
}

function App(){
    const [ page, setPage] = useState(PaginaPadrao)

    const handleChancePage = (page) => { // O parametro que passa antes da arrow function dentro do () representa a string do lado da variavel handleChangePage;
       setPage(page)
    }
     
    const Page = pages[page].componente

    const pageName = Object.keys(pages)
    return(
        <>
        {
            pageName.map(page => <button onClick={() => handleChancePage(page)}>{pages[page].text}</button>)
        }
        {Page && <Page/> }
        
        </>
        
    )
}

export default App