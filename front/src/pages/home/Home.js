import { useState, useContext, useEffect } from 'react';
import DataContext from '../../context/DataContext';
import './home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeGraphsRender from './HomeGraphsRender';

function Home() {
  const { baseCompleta, user, anioBaseActual } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(user.first_name);
    if (user?.first_name === undefined) {
      navigate('/login');
    }
  }, []);

  return (
    <div className='home-container'>
      <h2>Vigilancia de Enfermedades de Notificación Obligatoria</h2>
      <h6>Datos actualizados al 30/05/2023</h6>

      {anioBaseActual && <h3>Datos del año {anioBaseActual}</h3>}

      <div className='home-text-container'>
        <p>
          La LEY N° 15.465 en su Artículo N°1 declara obligatoria, en todo el
          territorio de la Nación, la notificación de los casos de enfermedades
          infecciosas comprendidas en el Artículo 2 de la mencionada Ley.
          <a
            href='http://servicios.infoleg.gob.ar/infolegInternet/anexos/195000-199999/195093/norma.htm'
            target='_blank'
            className='home-text-link'
            rel='noreferrer'
          >
            (Ver texto completo de la norma)
          </a>
        </p>
        <p>
          En nuestro Municipio hemos priorizado la notificación y análisis de
          las siguientes enfermedades: Dengue, Sifilis, Tuberculosis, HIV.
        </p>
      </div>

      {baseCompleta.length > 0 ? (
        <HomeGraphsRender />
      ) : (
        <>
          <div className='home-news'>
            <h3 className='home-news-title'>Novedades</h3>
            <p>
              Próximamente estará disponible la información sobre Bronquiolitis
              en la pestaña de COVID y OVR
            </p>
          </div>

          <Link to='/upload' className='homeInstruction'>
            Haz click aquí para cargar los gráficos
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;
