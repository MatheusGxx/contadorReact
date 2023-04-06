import React, { useState, useEffect} from 'react'
import Template from './Template'
import Loading from './loading'



function Albuns(){
    const [loading, setLoading] = useState(false)
    const [albuns, setAlbuns] = useState([])

    useEffect(() =>{
        setLoading(true)
       fetch('https://jsonplaceholder.typicode.com/albums')
       .then(response => response.json())
       .then(data => {
          setAlbuns(data)
          setLoading(false)
       })
    }, [])
    return(
        <Template title="Albuns">
         <Loading visible={loading}/>
         {
            albuns.map(album => {
                return(
                    <div>
                        <span>{album.title}- id: {album.id}</span><br/>
                    </div>
                )

            })
         }
        </Template>
    )
}

export default Albuns