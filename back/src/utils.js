import {dirname} from 'path'
import { fileURLToPath } from 'url'
import bcrypt from 'bcrypt'
export const __dirname = dirname(fileURLToPath(import.meta.url))

export const hashPassword = async(password)=>{
return bcrypt.hash(password,10)
}

export const comparePasswords = async(password,passwordBD)=>{
    return bcrypt.compare(password,passwordBD)
}

export const PORT = '8082'

//en el front, escribirle a 'https://epi-production.vercel.app/api/users' por ej