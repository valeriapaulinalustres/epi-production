import UsersManager from "../persistence/daos/UserManager.js";
import CustomError from "../utils/errors/CustomError.js";
import { ErrorsCause, ErrorsMessage, ErrorsName } from "../utils/errors/errorsEnum.js";

const usersManager = new UsersManager();

export const getUsersController = async (req, res) => {
  const users = await usersManager.getUsers();
  const newUsers = [];
  if (users) {
    for (let i = 0; i < users.length; i++) {
      let user = {
        _id: users[i]._id,
        first_name: users[i].first_name,
        last_name: users[i].last_name,
        email: users[i].email,
        profession: users[i].profession,
        job: users[i].job,
        isAdmin: users[i].isAdmin,
      };
      newUsers.push(user);
    }
    res.json(newUsers);
  } else {
    res.json({ error: "no hay usuarios en la base de datos" });
  }
};

export const createUserController = async (req, res) => {
  const newUser = await usersManager.createUser(req.body);
  if (newUser) {
    res.json({ message: "Usuario creado con éxito" });
  } else {
    res.json({ message: "Error al crear usuario" });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // if (!email || !password) {
    //   CustomError.createCustomError({
    //     name: ErrorsName.USER_DATA_INCORRECT_TYPE,
    //     cause: ErrorsCause.USER_DATA_INCORRECT_TYPE,
    //     message: ErrorsMessage.USER_DATA_INCORRECT_TYPE,
    //   });
    // }

    const user = await usersManager.loginUser(req.body);
    if (user) {
      const { first_name, last_name, profession, job, email, isAdmin } = user;
      //  res.set('Access-Control-Allow-Origin', '*')
      //    req.session.name = first_name
      req.session.email = email;
      req.session.password = password;
      res.json({
        user: { first_name, last_name, profession, job, email, isAdmin },
      });
    } else {
      return res
        .status(401)
        .json({ message: "Incorrect user or password", error: "Login error" });
      //   let mensaje = 'Usuario o contraseña inválidos'
      // res.json({mensaje: mensaje})
    }
  } catch (error) {
    console.log(error);
  }
};

export const editUserController = async (req, res) => {
  console.log("del router", req.body);
  const editedUser = await usersManager.editUser(req.body, req.params.id);
  if (editedUser) {
    return res.json({
      mensaje: `Usuario ${editedUser.first_name} actualizado con éxito`,
    });
  } else {
    res.json({ mensaje: "Error al editar usuario" });
  }
};

export const deleteUserController = async (req, res) => {
  const deletedUser = await usersManager.deleteUser(req.params.id);
  if (deletedUser) {
    res.json({ mensaje: `Usuario eliminado con éxito` });
  } else {
    res.json({ mensaje: "Error al eliminar el usuario" });
  }
};

export const changePasswordController = async(req,res) =>{
  console.log('llega')
  const newPassword = req.body.newPassword
  const userId = req.body.userId
  const response = await usersManager.changePassword(userId, newPassword)
  res.json({user: response , status: 'succes', message: 'Contraseña actualizada correctamente'})
}
