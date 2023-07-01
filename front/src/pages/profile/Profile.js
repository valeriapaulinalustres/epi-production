import { BsPencil } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './profile.css';
import {  useEffect, useContext } from 'react';
import DataContext from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { BiCheckboxChecked, BiCheckbox } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';
import UsersContext from '../../context/UsersContext.js';
import Swal from 'sweetalert2';

function Profile({ setLogin }) {
  const { user, setUser, userToEdit, setUserToEdit } = useContext(DataContext);

  const { getUsers, deleteUser, usersList, setUsersList, logout } =
    useContext(UsersContext);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  function handleDelete(el) {
    Swal.fire({
      icon: 'warning',
      iconColor: 'red',
      title: `¿Está seguro de querer eliminar el usuario ${el.first_name} ${el.last_name}?`,

      showConfirmButton: true,
      confirmButtonText: 'SI',
      confirmButtonColor: 'red',

      showCancelButton: true,
      cancelButtonText: 'NO',
      cancelButtonColor: 'grey',
    }).then(res => {
      if (res.isConfirmed === true) {
        deleteUser(el._id).then(() => getUsers());
      }
    });
  }

  function handleAddUser() {
    //para indicar que la vista AddUser será usada para add
    setUserToEdit({});
    navigate('/profile/add-user');
  }

  function handleEditUser(el) {
    //para indicar que la vista AddUser será usada para edit

    setUserToEdit(el);
    navigate('/profile/add-user');
  }

  function handleChangePassword(el) {
    setUserToEdit(el);
    console.log('profile', el);
    navigate('/profile/change-password');
  }

  function handleLogout() {
    logout().then(() => {
      setUser(null);
      setLogin(true);
      navigate('/');
    });
  }

  //rol user sólo verá el principio
  return (
    <div className='profile-container'>
      <div className='profile-user'>
        <h1>Hola usuario 👋 {user.first_name}</h1>
        <div className='profile-userData'>
          <h3>
            Nombre y apellido: {user.first_name} {user.last_name}
          </h3>
          <h3>Profesión: {user.profession}</h3>
          <h3>Puesto: {user.job}</h3>
          <h3>Rol: {user.isAdmin ? 'Admin' : 'user'}</h3>
        </div>
        <button className='button' onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>

      {user?.isAdmin && (
        <div className='profile-usersList'>
          <div className='title-users'>
            <h2 className='add-user-title'>Lista de usuarios</h2>
            <IoMdCloseCircleOutline
              className='close-icon'
              onClick={() => {
                navigate('/');
              }}
            />
          </div>

          <div className='secondBlock'>
            <table className='table'>
              <thead className='thead'>
                <tr className='tr'>
                  <th className='th'>Nombre</th>
                  <th className='th'>Apellido</th>
                  <th className='th'>Profesión</th>
                  <th className='th'>Puesto</th>
                  <th className='th'>Mail</th>
                  <th className='th'>Admin</th>
                  <th className='th' colSpan='3'>
                    Edición
                  </th>
                </tr>
              </thead>

              <tbody className='tbody'>
                {usersList.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td className='td'>{el.first_name}</td>
                      <td className='td'>{el.last_name}</td>
                      <td className='td'>{el.profession}</td>
                      <td className='td'>{el.job}</td>
                      <td className='td'>{el.email}</td>
                      <td className='td'>
                        {el?.isAdmin ? (
                          <BiCheckboxChecked className='close-icon' />
                        ) : (
                          <BiCheckbox className='close-icon' />
                        )}
                      </td>

                      <td className='td black'>
                        <BsPencil
                          className='profile-icons'
                          onClick={() => handleEditUser(el)}
                        />
                      </td>

                      <td className='td blue'>
                        <RiDeleteBin6Line
                          className='profile-icons'
                          onClick={() => handleDelete(el)}
                        />
                      </td>

                      <td className='td blue'>
                        <GiPadlock
                          className='profile-icons'
                          onClick={() => handleChangePassword(el._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className='button btnProfile' onClick={handleAddUser}>
            Agregar Usuario
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
