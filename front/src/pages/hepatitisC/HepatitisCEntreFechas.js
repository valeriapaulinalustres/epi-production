import { useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import { Link } from 'react-router-dom';

function TbcEntreFechas() {
  //destructuring from context

  const {
    semanaFinal,
    semanaInicial,
    numeroTotalNotificadosHepatitisCEntreFechas,
    numeroTotalNotificadosHepatitisCFemeninoEntreFechas,
    numeroTotalNotificadosHepatitisCMasculinoEntreFechas,
    numeroTotalNotificadosHepatitisCSdEntreFechas,
    numeroConfirmadosTotalHepatitisCEntreFechas,
    numeroDescartadosTotalHepatitisCEntreFechas,
    numeroSospechososTotalHepatitisCEntreFechas,
    numeroEmbarazadasNotificadoTotalHepatitisCEntreFechas,
    porcentajeNotificadosHepatitisCMoronEntreFechas,
    numeroTotalGeneralHepatitisCMoronEntreFechas,
    numeroTotalGeneralHepatitisCNoMoronEntreFechas,
  } = useContext(DataContext);

  const [
    salmonTransparente,
    salmon,
    lilaTransparente,
    lila,
    rosaTransparente,
    rosa,
  ] = Colors;

  //Gráfico notificados según sexo
  const labelsSexoHepatitisC = ['Maculino', 'Femenino', 'SD'];
  const backgroundColorHepatitisC = [
    salmonTransparente,
    lilaTransparente,
    rosaTransparente,
  ];
  const borderColorHepatitisC = [salmon, lila, rosa];
  const totalPorSexoHepatitisCEntreFechas = [
    numeroTotalNotificadosHepatitisCMasculinoEntreFechas,
    numeroTotalNotificadosHepatitisCFemeninoEntreFechas,
    numeroTotalNotificadosHepatitisCSdEntreFechas,
  ];
  const titleSexoHepatitisCEntreFechas = `Casos notificados según sexo. Morón, SE ${semanaInicial} a ${semanaFinal}.`;

  //Gráfico notificados Morón/Total
  const labelsEstablecimientoHepatitisC = [
    'Establecimientos de Morón',
    'Establecimientos no pertenecientes a Morón',
  ];
  const backgroundColorEstablecimientoHepatitisC = [
    lilaTransparente,
    rosaTransparente,
  ];
  const borderColorEstablecimientoHepatitisC = [lila, rosa];
  const notificadosHepatitisCEstablecimientoCargaEntreFechas = [
    numeroTotalGeneralHepatitisCMoronEntreFechas,
    numeroTotalGeneralHepatitisCNoMoronEntreFechas,
  ];
  const titleEstablecimientoHepatitisCEntreFechas = `Casos notificados de Tuberculosis según Establecimiento de carga. Morón, SE ${semanaInicial} a ${semanaFinal}.`;

  //Tabla resultados
  const labelsRestultadoHepatitisC = ['Resultados de laboratorio'];
  const label1RestultadoHepatitisC = 'Positivos';
  const label2RestultadoHepatitisC = 'Negativos';
  const label3RestultadoHepatitisC = 'En estudio';
  const titleResultadoHepatitisCEntreFechas = `Casos notificados de Hepatitis C según resultado de laboratorio. Morón, SE ${semanaInicial} a ${semanaFinal}.`;
  const dataPositivosHepatitisCEntreFechas = [
    numeroConfirmadosTotalHepatitisCEntreFechas,
  ];
  const dataNegativosHepatitisCEntreFechas = [
    numeroDescartadosTotalHepatitisCEntreFechas,
  ];
  const dataSinResultadosHepatitisCEntreFechas = [
    numeroSospechososTotalHepatitisCEntreFechas,
  ];

  //Alerts

  // function handleEmbarazadasHepatitisCEntreFechas() {
  //   detallarEmbarazadasHepatitisC(
  //     numeroEmbarazadasConfirmadasHepatitisCEntreFechas,
  //     numeroEmbarazadasDescartadasHepatitisCEntreFechas
  //   );
  // }

  // function detallarEmbarazadasHepatitisC(conf, desc) {
  //   Toast.fire({
  //     title: `Gestantes confirmadas: ${conf}, \n 
  //   Gestantes descartadas: ${desc}. \n
  //   `,
  //   });
  // }

  return (
    <div className='totalesGraphs-container'>
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
          Total entre fechas:
          <p className='totalNumber'>
            {numeroTotalNotificadosHepatitisCEntreFechas}
          </p>
        </div>
        <div className='recuadro salmon'>
          Confirmados:
          <p className='totalNumber'>
            {numeroConfirmadosTotalHepatitisCEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Descartados:
          <p className='totalNumber'>
            {numeroDescartadosTotalHepatitisCEntreFechas}
          </p>
        </div>
        <div className='recuadro lila'>
          En estudio:
          <p className='totalNumber'>
            {numeroSospechososTotalHepatitisCEntreFechas}
          </p>
        </div>
        <div
          className='recuadro salmon'
          // onClick={handleEmbarazadasHepatitisCEntreFechas}
        >
          Gestantes:
          <p className='totalNumber'>
            {numeroEmbarazadasNotificadoTotalHepatitisCEntreFechas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Notificados por Morón:
          <p className='totalNumber'>
            {porcentajeNotificadosHepatitisCMoronEntreFechas}%
          </p>
        </div>
      </div>
      <div className='graphs-container'>
        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleSexoHepatitisCEntreFechas}
            datos={totalPorSexoHepatitisCEntreFechas}
            labels={labelsSexoHepatitisC}
            backgroundColor={backgroundColorHepatitisC}
            borderColor={borderColorHepatitisC}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEstablecimientoHepatitisCEntreFechas}
            datos={notificadosHepatitisCEstablecimientoCargaEntreFechas}
            labels={labelsEstablecimientoHepatitisC}
            backgroundColor={backgroundColorEstablecimientoHepatitisC}
            borderColor={borderColorEstablecimientoHepatitisC}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChart
            title={titleResultadoHepatitisCEntreFechas}
            barLabels={labelsRestultadoHepatitisC}
            label1={label1RestultadoHepatitisC}
            label2={label2RestultadoHepatitisC}
            label3={label3RestultadoHepatitisC}
            data1={dataPositivosHepatitisCEntreFechas}
            data2={dataNegativosHepatitisCEntreFechas}
            data3={dataSinResultadosHepatitisCEntreFechas}
            borderColor1={lila}
            borderColor2={salmon}
            borderColor3={rosa}
            bgColor1={lilaTransparente}
            bgColor2={salmonTransparente}
            bgColor3={rosaTransparente}
          />
        </div>
      </div>
    </div>
  );
}

export default TbcEntreFechas;
