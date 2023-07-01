import { createContext, useState, useContext } from 'react';
import { URI } from '../utils.js';
import DataContext from './DataContext.js';
import { toastAlert } from '../alerts.js';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const { user, setUser } = useContext(DataContext);

  const [usersList, setUsersList] = useState([]);
  const [errorLogin, setErrorLogin] = useState(false);

  async function login(user, setLogin) {
    try {
      let response = await fetch(`${URI}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
        toastAlert(
          'success',
          `Hola ${responseData.user.first_name} 👋🏻. ¿Cómo estás?`
        );
        setUser(responseData.user);

        setLogin(false);
      } else {
        setErrorLogin(true);
        toastAlert('error', 'Error al login');
        throw new Error('error');
      }
    } catch (error) {
      toastAlert('error', 'Error al login');
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
        toastAlert('error', 'Error al obtener los usuarios');
      }
    } catch (error) {
      toastAlert('error', 'Error al obtener los usuarios');
    }
  }

  async function deleteUser(id) {
    try {
      const response = await fetch(`${URI}/api/users/delete-user/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
      });
      const responseData = await response.json();

      toastAlert('success', responseData.mensaje);
    } catch (error) {
      toastAlert('error', 'Error al eliminar el usuario');
    }
  }

  async function register(newUser) {
    const { first_name, last_name, email, profession, job, password, isAdmin } =
      newUser;
    try {
      const response = await fetch(`${URI}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
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

      toastAlert('success', responseData.message);
    } catch (error) {
      toastAlert('error', 'Error al crear el usuario');
    }
  }

  async function editUser(editedUser, idUser) {
    const { first_name, last_name, email, profession, job, isAdmin } =
      editedUser;

    try {
      const response = await fetch(`${URI}/api/users/edit-user/${idUser}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
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

      toastAlert('success', responseData.mensaje);
    } catch (error) {
      toastAlert('error', 'Error al editar el usuario');
    }
  }

  async function logout() {
    try {
      const response = await fetch(`${URI}/api/users/logout`);
      const responseData = await response.json();
      console.log(responseData.mensaje);
      toastAlert(
        'success',
        `Adios ${user.first_name}. ¡Que tengas muy lindo día! 🌞`
      );
    } catch (error) {
      toastAlert('error', 'Error al logout');
    }
  }

  async function saveNewPassword(id, password) {
    try {
      const response = await fetch(`${URI}/api/users/change-password`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          userId: id,
          newPassword: `${password}`,
        }),
      });
      const responseData = await response.json();

      console.log(responseData);

      if (responseData?.status) {
        toastAlert('success', responseData.message);
      } else {
        toastAlert('error', 'Error al cambiar la contraseña');
      }
    } catch (error) {
      toastAlert('error', 'Error, no funciona la ruta');
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
    logout,
    errorLogin,
    setErrorLogin,
    saveNewPassword,
  };

  return <UsersContext.Provider value={data}>{children}</UsersContext.Provider>;
};

export { UsersProvider };

export default UsersContext;
