import React, { useState } from "react"
import Counter from './pages/Counter'
import Albuns from './pages/Albuns'
import Users from './pages/Users'
import Template from './templates/Template'




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

    return(
        <>
        
        <Template  pages={pages} activePage={page} onChangePage={handleChancePage}>
        {Page && <Page/>}
        </Template>
        
        
        </>
        
    )
}

export default App