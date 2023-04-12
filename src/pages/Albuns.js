import React, { useState, useEffect} from 'react'
import Loading from '../components/loading'



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
        <>
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
        </>
    )
}

export default Albuns