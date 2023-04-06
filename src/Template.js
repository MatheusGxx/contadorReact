import React from 'react'
import Header from './header'





function Template({title, children}){
    return(
        <>
        <Header title={title}/>
            { children }
        </>
    )
}










export default Template