export interface IDoLogin {
    (input: DoLoginInput) : Promise<DoLoginOutput>
}

export type DoLoginInput = {
    username: string,
    password: string
}

export type DoLoginOutput = {
    token: string,
    status: "SUCCESS" | "FAIL"
}