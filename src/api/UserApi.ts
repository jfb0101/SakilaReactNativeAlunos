export class UserApi {
    async login(input:UserApi_LoginInput) : Promise<UserApi_LoginOutput> {
        const response = await fetch("https://6e46-2804-2b04-26a-5000-18c9-e12f-4670-98cf.ngrok.io/api/Users/login", {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return (await response.json()) as UserApi_LoginOutput
    }


}

export type UserApi_LoginInput = {
    username: string,
    password: string
}

export type UserApi_LoginOutput = {
    id: string,
    userId: number
}