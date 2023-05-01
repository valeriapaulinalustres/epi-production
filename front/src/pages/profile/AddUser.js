import "./addUser.css";
import { URI } from "../../utils.js";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // let newUser = {}
    // for (let i = 0; i < 7; i++) {
    //   newUser = {...newUser, e.target[i].name: e.target[i].value}

    // }

    const newUser = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      email: e.target[2].value,
      profession: e.target[3].value,
      job: e.target[4].value,
      password: e.target[5].value,
      isAdmin: e.target[6].checked,
    };
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    e.target[5].value = "";
    e.target[6].checked = false;

    // console.log(newUser)

    register(newUser);
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
        <input type="text" className="addUdser-input" name="first_name" />
        </div>
      
        <div className="smallContainer">
        <label className="titleLabel">Apellido</label>
        <input type="text" className="addUdser-input" name="last_name" />
        </div>
      
        <div className="smallContainer">
        <label className="titleLabel">email</label>
        <input type="text" className="addUdser-input" name="email" />
        </div>
      
        <div className="smallContainer">
        <label className="titleLabel">Profesión</label>
        <input type="text" className="addUdser-input" name="profession" />
        </div>
     
        <div className="smallContainer">
        <label className="titleLabel">Trabajo</label>
        <input type="text" className="addUdser-input" name="job" />
        </div>
     
        <div className="smallContainer">
        <label className="titleLabel">Contraseña</label>
        <input type="text" className="addUdser-input" name="password" />
        </div>
       
        <div className="smallContainer">
        <label className="titleLabel">¿Es admin?</label>
        <input type="checkbox" className="addUdser-checkbox" name="isAdmin" />
        </div>
       
        <button type="submit" className="button">
          Crear usuario
        </button>
      </form>
    </div>
  );
}

export default AddUser;
