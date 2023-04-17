import { BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./profile.css";
import { useState, useEffect, useContext } from "react";
import { URI } from "../../utils";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [usersList, setUsersList] = useState([]);

  const { user } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

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

  async function deleteUser(id){
    try {
      const response = await fetch (`${URI}/api/users/delete-user/${id}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}
      })
      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.log('error:', error)
    }
  }

  function handleDelete (id) {
    deleteUser(id).then(()=> getUsers())
  }

  //rol user sólo verá el principio
  return (
    <div className="profile-container">
      <div className="profile-user">
        <h1>Hola usuario 👋</h1>
        <div className="profile-userData">
          <h3>Nombre y apellido:</h3>
          <h3>Profesión:</h3>
          <h3>Puesto:</h3>
          <h3>Rol:</h3>
        </div>
      </div>

      {user?.isAdmin && (
        <div className="profile-usersList">
          <h2>Lista de usuarios</h2>

          <div className="secondBlock">
            <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <th className="th">Nombre</th>
                  <th className="th">Apellido</th>
                  <th className="th">Profesión</th>
                  <th className="th">Puesto</th>
                  <th className="th">Mail</th>
                  <th className="th">Admin</th>
                  <th className="th" colSpan="2">
                    Edición
                  </th>
                </tr>
              </thead>

              <tbody className="tbody">
                {usersList.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td className="td">{el.first_name}</td>
                      <td className="td">{el.last_name}</td>
                      <td className="td">{el.profession}</td>
                      <td className="td">{el.job}</td>
                      <td className="td">{el.email}</td>
                      <td className="td">
                      <input type="checkbox" className="td checkbox" checked={user?.isAdmin === true && 'checked'}/>
                      </td>
                      
                      <td className="td black">
                        <BsPencil className="profile-icons" />
                      </td>
                      <td className="td blue">
                        <RiDeleteBin6Line 
                        className="profile-icons" 
                        onClick={()=>handleDelete(el._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button
            className="button btnProfile"
            onClick={() => navigate("/profile/add-user")}
          >
            Agregar Usuario
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
