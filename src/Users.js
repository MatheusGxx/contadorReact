import React, {useState, useEffect} from 'react'
import Template from './Template'
import Loading from './loading'


function Users(){
    const[loading, setLoading] = useState(false)
    const[users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
           setUsers(data)
           setLoading(false)
        })
    }, [])
    return(
        <Template title="Users">
         <Loading visible={loading}/>
        {
            loading === true ? 'Carregando' : ''
        }

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
        </Template>
       
        
    )
}




export default  Users