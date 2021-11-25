import { UserApi } from "../../api/UserApi";
import { DoLoginInput, DoLoginOutput, IDoLogin } from "./IDoLogin";

export const doLogin: IDoLogin = async (input: DoLoginInput) : Promise<DoLoginOutput> => {
    const userApi = new UserApi()

    const loginResponse = await userApi.login({username: input.username, password: input.password})

    return {
        status: "SUCCESS",
        token: loginResponse.id
    }
}