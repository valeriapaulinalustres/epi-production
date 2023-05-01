import { Router } from "express";
import UsersManager from "../daos/UserManager.js";

const router = Router();
const usersManager = new UsersManager();


router.get("/", async (req, res) => {
  //traerá la lista de usuarios y la mostrará en perfil
  const users = await usersManager.getUsers();
  const newUsers= []
  if (users) {

    for (let i = 0; i < users.length; i++) {
      let user = {
      _id: users[i]._id,
        first_name: users[i].first_name,
        last_name: users[i].last_name,
        email: users[i].email,
        profession: users[i].profession,
        job: users[i].job,
      isAdmin: users[i].isAdmin
      }
        newUsers.push(user)
            }



    res.json(newUsers);
  } else {
    res.json({ mensaje: "no hay usuarios en la base de datos" });
  }
});

router.post("/register", async (req, res) => {
  //desde el perfil, botón de agregar usuarios, registra usuarios nuevos
  const newUser = await usersManager.createUser(req.body);
  if (newUser) {
    res.json({ mensaje: "usuario creado con éxito" });
  } else {
    res.json({ mensaje: "error al crear usuario" });
  }
});

router.post("/login", async (req, res) => {
  //login
  const { email, password } = req.body;
  console.log("ruta", req.body);

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
});

router.put("/edit-user/:id", async (req, res) => {
  //editará usuarios
  const editedUser = await usersManager.editUser(req.params.id, req.body);
  if (editedUser) {
    return res.json({
      mensaje: `Usuario ${editedUser.first_name} actualizado con éxito`,
    });
  } else {
    res.json({ mensaje: "Error al editar usuario" });
  }
});

router.delete("/delete-user/:id", async (req, res) => {
  //eliminará un usuario

  const deletedUser = await usersManager.deleteUser(req.params.id);
  if (deletedUser) {
    res.json({ mensaje: `usuario ${deletedUser} eliminado con éxito` });
  } else {
    res.json({ mensaje: "usuario no encontrado" });
  }
});

router.get("/logout", async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.json({ mensaje: error });
    } else {
      res.json({ mensaje: "sesión eliminada" });
    }
  });
});

export default router;
