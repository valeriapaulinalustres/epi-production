import { useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import { Link } from 'react-router-dom';
import BarChartThreeData from '../../components/BarChartThreeData';

function Covid() {
  //destructuring from context
  const {

    anioBaseActual,
    semanaInicial,
    semanaFinal,
    totalNotificadosETIEntreFechas,
    numeroConfirmadosVsrEntreFechas,
    numeroConfirmadosInfluenzaAEntreFechas,
    numeroConfirmadosInfluenzaBEntreFechas,
    numeroConfirmadosCovidPcrEntreFechas,
    numeroConfirmadosCovidAgEntreFechas,
    numeroConfirmadosCovidAutotestEntreFechas,
    numeroConfirmadosCovidTotalEntreFechas,
    porcentajeNotificadosCovidMoronEntreFechas,
    numeroConfirmadosCovidTotalMoronEntreFechas,
    numeroConfirmadosCovidTotalNoMoronEntreFechas,
    numeroNotificadosTotalBqlEntreFechas,
    numeroCovidTotalEntreFechas,
    numeroCovidTotalUTIEntreFechas,
    numeroCovidTotalARMEntreFechas,
    numeroCovidTotalInternadosEntreFechas,
    arayNumeroCovidTotalInternadosEntreFechas,
    arrayNumeroCovidTotalUTIEntreFechas,
    arayNumeroCovidTotalARMEntreFechas
  } = useContext(DataContext);


console.log(    numeroCovidTotalEntreFechas,
  numeroCovidTotalUTIEntreFechas,
  numeroCovidTotalARMEntreFechas,
  numeroCovidTotalInternadosEntreFechas,
  arayNumeroCovidTotalInternadosEntreFechas,
  arrayNumeroCovidTotalUTIEntreFechas,
  arayNumeroCovidTotalARMEntreFechas)

  const [
    salmonTransparente,
    salmon,
    lilaTransparente,
    lila,
    rosaTransparente,
    rosa,
    amarillo,
    amarilloTransparente,
    verde,
    verdeTransparente,
  ] = Colors;

  //Entre fechas
  //Gráfico clasificación COVID
  // const titleClasificacionCovidEntreFechas = `Clasificación de los casos confirmados de COVID. Morón, SE ${semanaInicial} a ${semanaFinal}.`;
  // const labelsClasificacionCovidEntreFechas = ['Clasificación'];
  // const label1ClasificacionCovidEntreFechas = 'Confirmados por PCR';
  // const label2ClasificacionCovidEntreFechas =
  //   'Confirmados por Test de Antígeno';
  // const label3ClasificacionCovidEntreFechas = 'Confirmados por autotest';
  // const dataConfirmadosPcrCovidEntreFechas = [
  //   numeroConfirmadosCovidPcrEntreFechas,
  // ];
  // const dataConfirmadosAgCovidEntreFechas = [
  //   numeroConfirmadosCovidAgEntreFechas,
  // ];
  // const dataConfirmadosAutotestCovidEntreFechas = [
  //   numeroConfirmadosCovidAutotestEntreFechas,
  // ];

  //Gráfico notificados Morón/Total
  // const notificadosCovidEstablecimientoCargaEntreFechas = [
  //   numeroConfirmadosCovidTotalMoronEntreFechas,
  //   numeroConfirmadosCovidTotalNoMoronEntreFechas,
  // ];
  // const labelsEstablecimientoCovidEntreFechas = [
  //   'Establecimientos de Morón',
  //   'Establecimientos no pertenecientes a Morón',
  // ];
  // const backgroundColorEstablecimientoCovidEntreFechas = [
  //   lilaTransparente,
  //   rosaTransparente,
  // ];
  // const borderColorEstablecimientoCovidEntreFechas = [lila, rosa];
  // const titleEstablecimientoCovidEntreFechas = `Casos confirmados de COVID según Establecimiento de carga. Morón, SE ${semanaInicial} a ${semanaFinal}, ${anioBaseActual}.`;


//Gráfico clasificación de internados COVID
const totalInternadosCovid = [
  numeroCovidTotalInternadosEntreFechas,
  numeroCovidTotalUTIEntreFechas,
  numeroCovidTotalARMEntreFechas,
];
const labelsInternadosCovid = ['Sala común', 'UTI', 'ARM'];
const backgroundColorCovidInternados = [
  salmonTransparente,
  lilaTransparente,
  rosaTransparente,
];
const borderColorCovidInternados = [salmon, lila, rosa];
const titleInternadosCovid = `Casos internados de COVID según condición. Morón, SE ${semanaInicial} a ${semanaFinal}, ${anioBaseActual}.`;




  //Alerts

  function detallarEmbarazadasDengue() {
    Toast.fire({
      title: `Gestantes confirmadas: , \n 
    Gestantes descartadas: . \n
    `,
    });
  }

  return (
    <div className='totalesGraphs-container'>
       <p
        style={{
          border: '1px solid red',
          borderRadius: '15px',
          padding: '10px',
          color: 'red',
        }}
      >
        Nota: Los casos de COVID fueron notificados hasta SE 6 solamente
      </p>
      {semanaInicial ? (
        <h3>
          Semanas Epidemiológicas {semanaInicial} a {semanaFinal}
        </h3>
      ) : (
        <div>
          <p>No hay fechas ingresadas</p>
          <Link to='/upload'>
            <button className='button'>Ingresar fechas</button>
          </Link>
        </div>
      )}

      <div className='totales-page-container'>
        <div className='recuadro naranja'>
          Total notificados ETI:
          <p className='totalNumber'>{totalNotificadosETIEntreFechas}</p>
        </div>
        <div className='recuadro salmon'>
          Internados COVID:
          <p className='totalNumber'>{numeroCovidTotalEntreFechas}</p>
        </div>
        <div className='recuadro rosa' onClick={detallarEmbarazadasDengue}>
          Notificados Bronquiolitis:
          <p className='totalNumber'>{numeroNotificadosTotalBqlEntreFechas}</p>
        </div>
      </div>

      <div className='graphs-container'>
        {
          numeroCovidTotalEntreFechas !== 0 &&
          <>
           <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleInternadosCovid}
            datos={totalInternadosCovid}
            labels={labelsInternadosCovid}
            backgroundColor={backgroundColorCovidInternados}
            borderColor={borderColorCovidInternados}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChartThreeData
            title={`Casos de COVID internados según esquema de vacunación.  Morón, SE ${semanaInicial} a ${semanaFinal}, ${anioBaseActual}`}
            barLabels={['Esquema completo + Refuerzo','Esquema completo sin refuerzo', 'Esquema incompleto', 'Sin vacunas']}
            label1={'Sala'}
            label2={'UTI'}
            label3={'ARM'}
            data1={arayNumeroCovidTotalInternadosEntreFechas}
            data2={arrayNumeroCovidTotalUTIEntreFechas}
            data3={arayNumeroCovidTotalARMEntreFechas}
            borderColor1={lila}
            borderColor2={salmon}
            borderColor3={rosa}
            bgColor1={lilaTransparente}
            bgColor2={salmonTransparente}
            bgColor3={rosaTransparente}
          />
        </div>
          </>
         
        }
     
      </div>
    </div>
  );
}

export default Covid;
