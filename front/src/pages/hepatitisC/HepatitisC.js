import { useState, useContext } from 'react';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
// import Toast from 'sweetalert2';

import { Link } from 'react-router-dom';
import HepatitisCEntreFechas from './HepatitisCEntreFechas';
import HepatitisCTotal from './HepatitisCTotal';

function HepatitisC() {
  const [ultimoMesHepatitisC, setUltimoMesHepatitisC] = useState(false);

  //destructuring from context

  const { anioBaseActual, baseCompleta } = useContext(DataContext);

  //Alerts

  // function detallarEmbarazadasTuberculosis(conf, desc) {
  //   Toast.fire({
  //     title: `Gestantes confirmadas: ${conf}, \n
  //   Gestantes descartadas: ${desc}. \n
  //   `,
  //   });
  // }

  return (
    <div className='page-container'>
      <h2>Hepatitis C</h2>

      {baseCompleta.length > 0 ? (
        <>
          <div className='btnElegir-page'>
            <button
              className={ultimoMesHepatitisC ? 'button' : 'buttonActive'}
              onClick={() => setUltimoMesHepatitisC(false)}
            >
              Acumulado {anioBaseActual}
            </button>
            <button
              className={ultimoMesHepatitisC ? 'buttonActive' : 'button'}
              onClick={() => setUltimoMesHepatitisC(true)}
            >
              Ver entre fechas
            </button>
          </div>

          {ultimoMesHepatitisC ? <HepatitisCEntreFechas /> : <HepatitisCTotal />}
        </>
      ) : (
        <Link to='/upload' className='homeInstruction'>
          Haz click aquí para cargar los gráficos
        </Link>
      )}
    </div>
  );
}

export default HepatitisC;
