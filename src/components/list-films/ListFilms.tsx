import { FlatList, View, Text } from "react-native"
import React from 'react'

export type ListFilmsProps = {
    films: {
        filmId: number,
        title: string
    }[]
}

export const ListFilms = (props: ListFilmsProps) => {
    return <View>
        <FlatList
            data={props.films.map(f => ({...f, key: f.filmId}))}
            renderItem={({item}) => <Text>{item.title}</Text>}/>
    </View>
}