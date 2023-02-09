import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service"

const registerCtrl = async ({ body }: Request, res: Response) => {
    const responseUser = await registerNewUser(body)
    res.send(responseUser)
}

const loginCtrl = async ({ body }: Request, res: Response) => { //paso por el body
    const { email, password } = body                            // entro el email y el pass
    const responseUser = await loginUser({ email, password })   // guardar en responseUser lo pasado por el body email y pass


    if (responseUser === "PASSWORD_INCORRECT") {
        res.status(403)
        res.send(responseUser)
    }
    else {
        res.send(responseUser)                                //send que envia
    }

}

export { loginCtrl, registerCtrl }