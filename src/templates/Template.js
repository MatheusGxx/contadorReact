import React from 'react'
import Header from '../partials/header'
import Nav from '../partials/nav'



function Template({pages, activePage, children, onChangePage}){
    const title = pages[activePage].text
    return(
        <>
        <Header title={title} />
        <Nav pages={pages} onChangePage={onChangePage}/>
            { children }
        </>
    )
}



export default Template