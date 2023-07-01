import { useState, useContext } from 'react';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
// import Toast from 'sweetalert2';
import TbcEntreFechas from './TbcEntreFechas';
import TbcTotal from './TbcTotal';
import { Link } from 'react-router-dom';

function Tbc() {
  const [ultimoMesTbc, setUltimoMesTbc] = useState(false);

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
      <h2>Tuberculosis</h2>

      {baseCompleta.length > 0 ? (
        <>
          <div className='btnElegir-page'>
            <button
              className={ultimoMesTbc ? 'button' : 'buttonActive'}
              onClick={() => setUltimoMesTbc(false)}
            >
              Acumulado {anioBaseActual}
            </button>
            <button
              className={ultimoMesTbc ? 'buttonActive' : 'button'}
              onClick={() => setUltimoMesTbc(true)}
            >
              Ver entre fechas
            </button>
          </div>

          {ultimoMesTbc ? <TbcEntreFechas /> : <TbcTotal />}
        </>
      ) : (
        <Link to='/upload' className='homeInstruction'>
          Haz click aquí para cargar los gráficos
        </Link>
      )}
    </div>
  );
}

export default Tbc;
