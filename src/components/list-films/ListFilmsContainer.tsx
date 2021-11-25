import React, { useEffect, useState } from 'react'
import { Film } from '../../models/Film'
import { listFilms } from '../../use-cases/do-login/list-films/listFilms'

import { ListFilms } from "./ListFilms"

export type ListFilmsContainerProps = {
    token: string
}

export const ListFilmsContainer = (props: ListFilmsContainerProps) => {

    const [films, setFilms] = useState<Film[]>([])

    const updateFilms = async () => {
        setFilms(
            await listFilms(props.token)
        )
    }

    useEffect(() => {
        updateFilms()
    },[])

    return <>
        <ListFilms films={films}/>
    </>
}