import "./addUser.css";
import { URI } from "../../utils.js";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { useContext, useState } from "react";
import UsersContext from "../../context/UsersContext.js";
import { toastAlert } from "../../alerts";
import { BsEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import "./changePassword.css";

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const { user, userToEdit, setUserToEdit } = useContext(DataContext);

  const { register, editUser, saveNewPassword } = useContext(UsersContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

   
        //se va a usar el botón submit como add

        let password = e.target[0].value;
        let repeatedPassword = e.target[1].value;
      

        if (
       !password || !repeatedPassword
        ) {
          return toastAlert("error", "Falta ingresar datos");
        }

        if (password !== repeatedPassword) {return toastAlert('error', 'No coinciden las contraseñas')}

  
saveNewPassword(userToEdit, password).then(() => navigate("/profile"));
    
      }
    
  

  return (
    <div className="big-container-add-user">
      <div className="title-users">
        <h2 className="add-user-title">Cambiar contraseña</h2>
        <IoMdCloseCircleOutline
          className="close-icon"
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>

      <form onSubmit={handleSubmit} className="addUser-form">
        <div className="smallContainer">
          <label className="titleLabel">Nueva contraseña</label>
          <input
            type={showPassword ? "text" : "password"}
            className="addUdser-input"
            name="password"
          />
          <div className="eyeContainer">
            {showPassword ? (
              <BsEyeFill
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <BsFillEyeSlashFill
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        <div className="smallContainer">
          <label className="titleLabel">Repetir Contraseña</label>
          <input
            type={showPassword ? "text" : "password"}
            className="addUdser-input"
            name="password"
          />
          <div className="fill"></div>
        </div>

        <button type="submit" className="button">
          Guardar contraseña
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;

/*

 <input
            className={styles.valueInputEyes}
            type={showPassword ? "text" : "password"}
            name="password"
          />
          <div className={styles.eyes}>
            {showPassword ? (
              <BsEyeFill
                className={styles.icons}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <BsFillEyeSlashFill
                className={styles.icons}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        */
