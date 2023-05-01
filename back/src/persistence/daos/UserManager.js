import { userModel } from '../models/users.models.js'
import { hashPassword, comparePasswords } from '../../utils.js'


export default class UsersManager {

  async createUser(user) {
 
    const { email, password } = user
    try {
      const existeUsuario = await userModel.find({ email })
      if (existeUsuario.length === 0) {
        const hashNewPassword = await hashPassword(password)
        const newUser = { ...user, password: hashNewPassword }
        await userModel.create(newUser)
        return newUser
      } else {
        console.log('pasa por null')
        //return null
      }
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }


  async loginUser(user) {
console.log('usa localhost')
    try {
      const { email, password } = user
      const usuario = await userModel.findOne({ email })
      if (usuario) {
        const isPassword = comparePasswords(password, usuario.password)
        if (isPassword) {
          return usuario
        }
      }
      return null
    } catch (error) {
      console.log(error)
    }
   
  }


async getUsers () {
 
  try {
    const users = await userModel.find()


    if (users) { 


      return users
    } else {
    return null
    }
    } catch (error) {
      console.log(error)
    }
  
  } 

  async deleteUser (id) {
    try {
      const deletedUser = await userModel.findByIdAndDelete(id)
      if (deletedUser) {
        return deletedUser
      } else {
        return null
      }
    }  catch (error) {
      console.log(error)
  }
}

async editUser (id, editedUser) {
  console.log(editedUser)
 
   const { first_name, last_name, email, profession, job, rol} = newUser
  
   try {
    const editedUser = await userModel.findByIdAndUpdate(id, {
      first_name, 
      last_name,
      email,
      profession,
      job,
      rol
    }, {new: true})
    return editedUser

  } catch (error) {
    console.log(error)
  }
}



}

