import { useState, useContext } from 'react';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import CovidEntreFechas from './CovidEntreFechas';
import CovidTotal from './CovidTotal'

function Covid() {

  const [ultimoMesCovid, setUltimoMesCovid] = useState(false)

  //destructuring from context
  const {
    anioBaseActual,
  } = useContext(DataContext);


  return (
    <div className='page-container'>
      <h2>COVID y OVR</h2>
      <div className='btnElegir-page'>
        <button
          className={ultimoMesCovid ? "button" : "buttonActive"}
          onClick={() => setUltimoMesCovid(false)}
        >
          Acumulado {anioBaseActual}
        </button>
        <button
          className={ultimoMesCovid ? "buttonActive" : "button"}
          onClick={() => setUltimoMesCovid(true)}
        >
          Ver entre fechas
        </button>
      </div>

      {ultimoMesCovid
        ? <CovidEntreFechas />
        : <CovidTotal />
      }  

    </div>
  )
}

export default Covid
