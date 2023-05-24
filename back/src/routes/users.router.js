import { Router } from "express";
import usersManager from "../persistence/daos/UserManager.js";
import {
  getUsersController,
  createUserController,
  loginUserController,
  deleteUserController,
  editUserController,
  changePasswordController
} from "../controllers/users.controller.js";

const router = Router();


router.get("/", getUsersController);

router.post("/register", createUserController);

router.post("/login", loginUserController);

router.put("/edit-user/:id", editUserController);

router.delete("/delete-user/:id", deleteUserController);

router.put("/change-password", changePasswordController)

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
