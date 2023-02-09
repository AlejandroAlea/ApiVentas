import { Auth } from "../intarfaces/auth.interface"
import { User } from "../intarfaces/user.interface"
import UserModel from "../models/user.model"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return "User se encuentra registrado"
    const passHash = await encrypt(password) //la contrasenna pasa por aqui
    const registerNewUser = await UserModel.create({ email, password: passHash, name })

    return registerNewUser
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return "NOT_FOUND_USER"

    const passwordHash = checkIs.password //la contrasenna encriptada
    const isCorrect = await verified(password, passwordHash)

    if (!isCorrect) return "PASSWORD_INCORRECT"

    const token = generateToken(checkIs.email)
    const data ={
        token,
        user:checkIs
    }
    return data 
}

export { registerNewUser, loginUser }