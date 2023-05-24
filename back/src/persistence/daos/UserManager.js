import { userModel } from "../models/users.models.js";
import { hashPassword, comparePasswords } from "../../utils.js";
import CustomError from "../../utils/errors/CustomError.js";
import {
  ErrorsCause,
  ErrorsMessage,
  ErrorsName,
} from "../../utils/errors/errorsEnum.js";
import logger from "../../utils/winston.js";

export default class UsersManager {
  async getUsers() {
    try {
      const users = await userModel.find();
      if (users) {
        logger.info("Users obtained successfully");
        return users;
      } else {
        logger.error("User not found in database");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(user) {
    const { email, password } = user;
    try {
      const existeUsuario = await userModel.find({ email });
      if (existeUsuario.length === 0) {
        const hashNewPassword = await hashPassword(password);
        const newUser = { ...user, password: hashNewPassword };
        await userModel.create(newUser);
        logger.info("User registration successfully");
        return newUser;
      } else {
        CustomError.createCustomError({
          name: ErrorsName.USER_DATA_ALLREADY_EXISTS,
          cause: ErrorsCause.USER_DATA_ALLREADY_EXISTS,
          message: ErrorsMessage.USER_DATA_ALLREADY_EXISTS,
        });

        logger.error("User register error. Mail allready exists in database");

        //return null
      }
    } catch (error) {
      logger.error("Error while creating user", error);
      throw new Error(error);
    }
  }

  async loginUser(user) {
    try {
      const { email, password } = user;
      const usuario = await userModel.findOne({ email });

      if (!usuario) {
        CustomError.createCustomError({
          name: ErrorsName.USER_DATA_INCOMPLETE,
          cause: ErrorsCause.USER_DATA_INCOMPLETE,
          message: ErrorsMessage.USER_DATA_INCOMPLETE,
        });
        logger.error("Loggin error. Mail not found in database");
      }

      if (usuario) {
        const isPassword = comparePasswords(password, usuario.password);
        if (isPassword) {
          logger.info("Login successfully");
          return usuario;
        }
      }
      return null;
    } catch (error) {
      logger.error("Login error", error);
    }
  }

  async deleteUser(id) {
    try {
      const deletedUser = await userModel.findByIdAndDelete(id);
      if (deletedUser) {
        logger.info("User deleted successfully");
        return deletedUser;
      } else {
        CustomError.createCustomError({
          name: ErrorsName.USER_DATA_NOT_FOUND_IN_DATABASE,
          cause: ErrorsCause.USER_DATA_NOT_FOUND_IN_DATABASE,
          message: ErrorsMessage.USER_DATA_NOT_FOUND_IN_DATABASE,
        });
        return null;
      }
    } catch (error) {
      logger.error("Delete user error", error);
    }
  }

  async editUser(editedUser, id) {
    const { first_name, last_name, email, profession, job, isAdmin } =
      editedUser;
    try {
      const editedUser = await userModel.findByIdAndUpdate(
        id,
        {
          first_name,
          last_name,
          email,
          profession,
          job,
          isAdmin,
        },
        { new: true }
      );

      if (editedUser) {
        logger.info("User edited successfully");
        return editedUser;
      } else {
        CustomError.createCustomError({
          name: ErrorsName.USER_DATA_INCOMPLETE,
          cause: ErrorsCause.USER_DATA_INCOMPLETE,
          message: ErrorsMessage.USER_DATA_INCOMPLETE,
        });
        logger.error("User edition error");
      }
    } catch (error) {
      logger.error("Edit user error", error);
    }
  }

  async changePassword (userId, newPassword) {
try {
  const password = await hashPassword(newPassword)
  console.log(password)
  const response= await userModel.findByIdAndUpdate(userId,{password}, {new:true})
  console.log(response);
  return response
} catch (error) {
  logger.error("Change password error", error);
}
  
  }
}
