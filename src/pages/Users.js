import React, {useState, useEffect} from 'react'
import Loading from '../components/loading'


function Users(){
    const[loading, setLoading] = useState(false)
    const[users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
           setUsers(data)
           setLoading(false)
        })
    }, [])
    return(
        <>
         <Loading visible={loading}/>
        
        {
            users.map(user =>{
                return(
                    <div>
                        <b>Nome:</b> {user.name}<br/>
                        <b>Nome:</b> {user.name}<br/>
                        <b>Nome:</b> {user.name}<br/>
                        <b>Nome:</b> {user.name}<br/>
                        <b>Email:</b> {user.email}<br/>
                        <b>Email:</b> {user.email}<br/>
                        <b>Email:</b> {user.email}<br/>
                        <b>Email:</b> {user.email}<br/>
                    </div>
                   
                )
            })
        }
        </>
       
        
    )
}




export default  Users