import "./addUser.css";
import { URI } from "../../utils.js";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { useContext } from "react";
import UsersContext from "../../context/UsersContext.js";
import { toastAlert } from "../../alerts";

function AddUser() {
  const { user, userToEdit, setUserToEdit } = useContext(DataContext);

  const { register, editUser } = useContext(UsersContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    {
      if (userToEdit?.first_name) {
        //se va a usar el botón submit como edit
        let first_name = e.target[0].value;
        let last_name = e.target[1].value;
        let email = e.target[2].value;
        let profession = e.target[3].value;
        let job = e.target[4].value;
        let isAdmin = e.target[5].checked;

        if (!first_name || !last_name || !email || !profession || !job) {
          return toastAlert('error', "Falta ingresar datos") 
        }

        let expReg =
          /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
            email
          );

        if (!expReg) {
          return toastAlert('error', `${email} es un mail inválido`)
        }

        const newUser = {
          first_name,
          last_name,
          email,
          profession,
          job,
          isAdmin,
        };
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        e.target[4].value = "";

        e.target[5].checked = false;

        editUser(newUser, userToEdit._id).then(() => navigate("/profile"));
      } else {
        //se va a usar el botón submit como add

        let first_name = e.target[0].value;
        let last_name = e.target[1].value;
        let email = e.target[2].value;
        let profession = e.target[3].value;
        let job = e.target[4].value;
        let password = e.target[5].value;
        let isAdmin = e.target[6].checked;

        if (
          !first_name ||
          !last_name ||
          !email ||
          !profession ||
          !job ||
          !password
        ) {
          return toastAlert('error', "Falta ingresar datos") 
        }

        let expReg =
          /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
            email
          );

        if (!expReg) {
          return toastAlert('error', `${email} es un mail inválido`) 
        }

        const newUser = {
          first_name,
          last_name,
          email,
          profession,
          job,
          password,
          isAdmin,
        };
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        e.target[4].value = "";
        e.target[5].value = "";
        e.target[6].checked = false;


        register(newUser).then(() => navigate("/profile"));
      }
    }
  }

  return (
    <div className="big-container-add-user">
      <div className="title-users">
        <h2 className="add-user-title">Agregar Usuario</h2>
        <IoMdCloseCircleOutline
          className="close-icon"
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>

      <form onSubmit={handleSubmit} className="addUser-form">
        <div className="smallContainer">
          <label className="titleLabel">Nombres</label>
          <input
            type="text"
            className="addUdser-input"
            name="first_name"
            defaultValue={userToEdit.first_name}
          />
        </div>

        <div className="smallContainer">
          <label className="titleLabel">Apellido</label>
          <input
            type="text"
            className="addUdser-input"
            name="last_name"
            defaultValue={userToEdit.last_name}
          />
        </div>

        <div className="smallContainer">
          <label className="titleLabel">email</label>
          <input
            type="text"
            className="addUdser-input"
            name="email"
            defaultValue={userToEdit.email}
          />
        </div>

        <div className="smallContainer">
          <label className="titleLabel">Profesión</label>
          <input
            type="text"
            className="addUdser-input"
            name="profession"
            defaultValue={userToEdit.profession}
          />
        </div>

        <div className="smallContainer">
          <label className="titleLabel">Trabajo</label>
          <input
            type="text"
            className="addUdser-input"
            name="job"
            defaultValue={userToEdit.job}
          />
        </div>
        {!userToEdit?.first_name && (
          <>
            <div className="smallContainer">
              <label className="titleLabel">Contraseña</label>
              <input
                type="password"
                className="addUdser-input"
                name="password"
              />
            </div>
          </>
        )}

        <div className="smallContainer">
          <label className="titleLabel">¿Es admin?</label>
          <input
            type="checkbox"
            className="addUdser-checkbox"
            name="isAdmin"
            defaultChecked={userToEdit.isAdmin && "checked"}
          />
        </div>
{
  userToEdit?.first_name
  ? 
  <button type="submit" className="button">
  Guardar cambios
</button>
:
<button type="submit" className="button">
          Crear usuario
        </button>
}
        
      </form>
    </div>
  );
}

export default AddUser;
