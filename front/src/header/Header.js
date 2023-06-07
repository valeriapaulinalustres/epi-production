import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { GoCalendar } from 'react-icons/go'
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';
import './header.css';
import { FiDownload } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Joyride, {STATUS} from 'react-joyride'

function Header() {

  const [menu, setMenu] = useState(false)
  const [modalCalendar, setModalCalendar] = useState(false)

  const [stateJoyride, setStateJoyride] = useState({
    run: true,
    localStorageKey: null,
    steps: [
      {
        content: <h2>¡Comencemos la recorrida!</h2>,
        locale: { skip: <strong>Saltear</strong> },
        placement: "center",
        target: "body"
      },
      {
        content: <h2>Primero haz click aquí para cargar los archivos y las fechas, los cuales permitirán generar los gráficos</h2>,
        placement: "bottom",
        target: "#upload",
        title: "Primer paso",
        locale: { skip: <strong>Saltear</strong> },
      },
      {
        content: <h2>Luego puedes elegir la enfermedad en el menú desplegable para ver su estadística específica</h2>,
        placement: "bottom",
        target: "#menu",
        title: "Segundo paso",
        locale: { skip: <strong>Saltear</strong> },
      },
      {
        content: <h2>Aquí verás tu información de usuario</h2>,
        placement: "bottom",
        target: "#profile",
        title: "Tercer paso",
        locale: { skip: <strong>Saltear</strong> },
      },
      {
        content: <h2>Aquí encontrarás el Calendario epidemiológico</h2>,
        placement: "bottom",
        target: "#calendar",
        title: "Cuarto paso",
        locale: { skip: <strong>Saltear</strong> },
      },
 
   
      // {
      //   content: <h2>Here is six step!</h2>,
      //   placement: "bottom",
      //   target: "#step-6",
      //   title: "Six step"
      // },
    ]
  });




  // *** Joyride ***
  useEffect(()=>{
    if (!stateJoyride.localStorageKey) {setStateJoyride({...stateJoyride, run: true}); return;}
    const tourViewed = window.localStorage.getItem(stateJoyride.localStorageKey)
    if (tourViewed) {return;}
    
window.localStorage.setItem(stateJoyride.localStorageKey, "1")
setStateJoyride({...stateJoyride, run: true})
  },[stateJoyride.localStorageKey])
 // *** fin Joyride *** 


  return (
    <div className='header-container'>



      <NavLink to="/" className='logo'></NavLink>
      
      <div className='menubar-container'>
      <Joyride
        continuous
        callback={() => {}}
        run={stateJoyride.run}
        steps={stateJoyride.steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />
        <NavLink to="/upload"  >
          <div className='menubar-buttons'>
            <FiUpload className='menubar-icons' id='upload'/>
          </div>
        </NavLink>
        <NavLink to="/profile"  >
        <div className='menubar-buttons'>
          <FaUserMd className='menubar-icons' id='profile'/>
        </div>
        </NavLink>
        <button className='menubar-buttons' onClick={() => setModalCalendar(true)}>
          <GoCalendar className='menubar-icons' id='calendar'/>
        </button>
    
        <HeaderMenu menu={menu} setMenu={setMenu} />
        <Navbar menu={menu} setMenu={setMenu}  />
    
      
      </div>

      {modalCalendar && <div className='modal'>
        <div className='window'>
          <div className='window-header-fixed'>
          <div className='window-header'>
            <button className="download-btn">
              <Link
                to="./calendario-epidemiológico.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="calendario-epidemiológico-2022.pdf"
              >
                <FiDownload className='download-btn-icon' />
              </Link>
            </button>
            <button className="download-btn" onClick={() => setModalCalendar(false)}>
              <IoIosClose className='download-btn-icon' />
            </button>
          </div>
          </div>
          

          <p className='modal-text'>
            El calendario epidemiológico comprende 52 semanas epidemiológicas que dividen los 365 días del año. Su uso durante las actividades de vigilancia es importante porque el estandardizar la variable tiempo, permite la comparación de eventos epidemiológicos sucedidos en determinado año o período dentro de un año con los de años previos o de otros países. (www3.paho.org)
          </p>
          <div className='epiCalendar-container'>
            <img src="/calendario-epidemiológico.png" alt="calendario epidemiológico" width="100%"></img>
          </div>
        </div>
      </div>}
     
    </div>
  )
}

export default Header