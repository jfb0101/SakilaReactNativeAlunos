export class FilmApi {
    async listAll(token:string) : Promise<FilmApi_ListAllOutputItem[]> {
        const response = await fetch("https://6e46-2804-2b04-26a-5000-18c9-e12f-4670-98cf.ngrok.io/api/Films",{
            headers: {
                Authorization: token
            }
        })

        return (await response.json())
    }
}

export type FilmApi_ListAllOutputItem = {
    filmId: number,
    title: string
}