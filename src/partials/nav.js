import React from 'react'



function Nav({pages, onChangePage}){
    const pageName = Object.keys(pages)

    return(
        <nav>
            {
            pageName.map(page => <button onClick={() => onChangePage(page)}>{pages[page].text}</button>)
            }
        </nav>
    )
}



export default Nav