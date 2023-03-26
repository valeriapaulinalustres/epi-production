import './addUser.css';
import {URI} from '../../utils.js';
import {FaWindowClose} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AddUser() {

  const navigate = useNavigate()

function handleSubmit (e) {
  e.preventDefault()



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
  }
  e.target[0].value = ''
    e.target[1].value = ''
   e.target[2].value = ''
   e.target[3].value = ''
    e.target[4].value = ''
   e.target[5].value = ''
   e.target[6].checked = false

 // console.log(newUser)

 register(newUser)
 }

 async function register(newUser) {
  const {first_name, last_name, email, profession, job, password, isAdmin} = newUser
  try {
    const response = await fetch(`${URI}/api/users/register`,{
      method:'POST',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
     first_name,
     last_name,
     email,
     profession,
     job,
     password,
     isAdmin
      })
    })
    const responseData = await response.json()
    console.log(responseData.mensaje)
    // if (Response.status === 200) {
    //  const responseData = response.json()
    //  console.log(responseData)
      
    // } else {
    //   throw new Error ('error al crear usuario')
    // }
  } catch (error) {
   console.log('error al crear usuario')
  }
 } 

  return (
    <div>
      <div>
      <h2>Agregar Usuario</h2>
      <FaWindowClose onClick={()=>{navigate('/profile')}}></FaWindowClose>
      </div>
     
      <form onSubmit={handleSubmit} className='addUser-form'>
        <label>Nombres</label>
<input type='text' className='addUdser-input' name='first_name'/>
<label>Apellido</label>
<input type='text' className='addUdser-input' name='last_name'/>
<label>email</label>
<input type='text' className='addUdser-input' name='email'/>
<label>Profesión</label>
<input type='text' className='addUdser-input' name='profession'/>
<label>Trabajo</label>
<input type='text' className='addUdser-input' name='job'/>

<label>Contraseña</label>
<input type='text' className='addUdser-input' name='password'/>
<label>¿Es admin?</label>
<input type='checkbox' className='addUdser-input' name='isAdmin'/>
<button type='submit'>Crear usuario</button>


      </form>
    </div>
  )
}

export default AddUser