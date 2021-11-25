import { FilmApi } from "../../../api/FilmApi";
import { Film } from "../../../models/Film";
import { IListFilms } from "./IListFilms";

export const listFilms: IListFilms = async (token:string) : Promise<Film[]> => {
    const filmApi = new FilmApi()

    return await filmApi.listAll(token)
}