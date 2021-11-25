import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { LoginContainer } from "../components/login/LoginContainer"
import { StackParamList } from "./StackParamList"

type Props = NativeStackScreenProps<StackParamList, 'Login'>

export const LoginScreen = ({navigation}: Props) => {
    return <LoginContainer
        onLoggedIn={token => {
            navigation.navigate('ListFilms',{token})
        }}/>
}