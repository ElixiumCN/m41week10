import React from "react";
import { useState } from "react"
import { userdelete } from '../utils'

const DeleteTheUser = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await userdelete(username, email, password, setter)
        // console.log(username)
        // console.log(email)
        // console.log(password)
    }

    return (
        <form onSubmit = {submitHandler}>
            <label>Username: 
                <input onChange={(event)=> setUsername(event.target.value)} />
            </label>
            <br></br>

            <label>Email: 
                <input onChange={(event)=> setEmail(event.target.value)} />
            </label>
            <br></br>

            <label>Password: 
                <input onChange={(event)=> setPassword(event.target.value)} />
            </label>
            <br></br>

            <button type="submit">Click here to delete your account</button>
        </form>
    )
}

export default DeleteTheUser
