import { createContext, useState, useContext } from "react";
import { URI } from "../utils.js";
import DataContext from "./DataContext.js";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {

    const { user, setUser } = useContext(DataContext);

  const [usersList, setUsersList] = useState([]);

  async function login(user, setLogin) {
    try {
      let response = await fetch(`${URI}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
        setUser(responseData.user);

        setLogin(false);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getUsers() {
    try {
      const response = await fetch(`${URI}/api/users`);
      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
        setUsersList(responseData);
      } else {
        console.log(`Response Status ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      const response = await fetch(`${URI}/api/users/delete-user/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log("error:", error);
    }
  }

  async function register(newUser) {
    const { first_name, last_name, email, profession, job, password, isAdmin } =
      newUser;
    try {
      const response = await fetch(`${URI}/api/users/register`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          profession,
          job,
          password,
          isAdmin,
        }),
      });
      const responseData = await response.json();
      console.log(responseData.mensaje);
      // if (Response.status === 200) {
      //  const responseData = response.json()
      //  console.log(responseData)

      // } else {
      //   throw new Error ('error al crear usuario')
      // }
    } catch (error) {
      console.log("error al crear usuario");
    }
  }

  async function editUser(editedUser, idUser) {
    const { first_name, last_name, email, profession, job, isAdmin } =
      editedUser;

    try {
      const response = await fetch(`${URI}/api/users/edit-user/${idUser}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          profession,
          job,
          isAdmin,
        }),
      });
      const responseData = await response.json();
      console.log(responseData.mensaje);
    } catch (error) {
      console.log("error al crear usuario");
    }
  }

  const data = {
    getUsers,
    deleteUser,
    usersList,
    setUsersList,
    register,
    editUser,
    login,
  };

  return <UsersContext.Provider value={data}>{children}</UsersContext.Provider>;
};

export { UsersProvider };

export default UsersContext;
