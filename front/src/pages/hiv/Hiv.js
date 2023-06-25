import { useState, useContext } from 'react';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import HivEntreFechas from './HivEntreFechas';
import HivTotal from './HivTotal';
import { Link } from 'react-router-dom';

function Hiv() {

  const [ultimoMesHiv, setUltimoMesHiv] = useState(false)

  //destructuring from context
  const {
    anioActual,
    anioBaseActual,
    baseCompleta
  } = useContext(DataContext);


  return (
    <div className='page-container'>
      <h2>HIV</h2>

      {
  baseCompleta.length > 0
   ?  <>
      <div className='btnElegir-page'>
        <button
          className={ultimoMesHiv ? "button" : "buttonActive"}
          onClick={() => setUltimoMesHiv(false)}
        >
          Acumulado {anioBaseActual}
        </button>
        <button
          className={ultimoMesHiv ? "buttonActive" : "button"}
          onClick={() => setUltimoMesHiv(true)}
        >
          Ver entre fechas
        </button>
      </div>

      {ultimoMesHiv
        ? <HivEntreFechas />
        : <HivTotal />
      }
   </>
   : <Link to='/upload' className='homeInstruction'>Haz click aquí para cargar los gráficos</Link>
}

   
    </div>
  )
}

export default Hiv
