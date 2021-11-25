import React from 'react'
import { doLogin } from '../../use-cases/do-login/doLogin'
import { Login } from './Login'

export type LoginContainerProps = {
    onLoggedIn: (token:string) => void
}

export const LoginContainer = (props: LoginContainerProps) => {
    return <Login onDoLogin={async (username,password) => {
        const {token} = await doLogin({username,password})

        props.onLoggedIn(token)
    }}/>
}

