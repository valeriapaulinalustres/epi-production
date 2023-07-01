import { useState, useContext } from 'react';
import './sifilis.css';
import DataContext from '../../context/DataContext';
import SifilisEntreFechas from './SifilisEntreFechas';
import SifilisTotal from './SifilisTotal';
import { Link } from 'react-router-dom';

function Sifilis() {
  const [ultimoMesSifilis, setUltimoMesSifilis] = useState(false);

  // destructuring from context
  const { anioBaseActual, baseCompleta } = useContext(DataContext);

  return (
    <div className='page-container'>
      <h2>Sífilis</h2>

      {baseCompleta.length > 0 ? (
        <>
          <div className='btnElegir-page'>
            <button
              className={ultimoMesSifilis ? 'button' : 'buttonActive'}
              onClick={() => setUltimoMesSifilis(false)}
            >
              Acumulado {anioBaseActual}
            </button>
            <button
              className={ultimoMesSifilis ? 'buttonActive' : 'button'}
              onClick={() => setUltimoMesSifilis(true)}
            >
              Ver entre fechas
            </button>
          </div>

          {ultimoMesSifilis ? <SifilisEntreFechas /> : <SifilisTotal />}
        </>
      ) : (
        <Link to='/upload' className='homeInstruction'>
          Haz click aquí para cargar los gráficos
        </Link>
      )}
    </div>
  );
}

export default Sifilis;
