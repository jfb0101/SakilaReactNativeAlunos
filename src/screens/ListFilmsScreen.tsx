import React from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ListFilmsContainer } from "../components/list-films/ListFilmsContainer"
import { StackParamList } from "./StackParamList"

export type ListFilmsScreenParams = {
    token: string
}

type Props = NativeStackScreenProps<StackParamList, 'ListFilms'>

export const ListFilmsScreen = ({navigation, route} : Props) => {
    return <ListFilmsContainer
        token={route.params.token}/>
}