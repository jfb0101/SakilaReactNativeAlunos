import React from 'react'
import { Login } from './Login'

export const LoginContainer = () => {
    return <Login onDoLogin={(username,password) => console.log(username,password)}/>
}