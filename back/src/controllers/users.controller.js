import UsersManager from "../persistence/daos/UserManager.js";

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
    res.json({ mensaje: "no hay usuarios en la base de datos" });
  }
};

export const createUserController = async (req, res) => {
  const newUser = await usersManager.createUser(req.body);
  if (newUser) {
    res.json({ mensaje: "usuario creado con éxito" });
  } else {
    res.json({ mensaje: "error al crear usuario" });
  }
};

export const loginUserController = async (req, res) => {
  console.log("llega acá");
  const { email, password } = req.body;
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
    return null;
    //   let mensaje = 'Usuario o contraseña inválidos'
    // res.json({mensaje: mensaje})
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
    res.json({ mensaje: `usuario ${deletedUser} eliminado con éxito` });
  } else {
    res.json({ mensaje: "usuario no encontrado" });
  }
};
