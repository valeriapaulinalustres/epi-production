import { useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import BarChartSexAge from '../../components/BarChartSexAge';
import BarChartSe from '../../components/BarChartSe';

function HepatitisCTotal() {
  //destructuring from context

  const {
    anioBaseActual,
    se,
    semanas,
    numeroTotalNotificadosHepatitisC,
    numeroTotalNotificadosHepatitisCFemenino,
    numeroTotalNotificadosHepatitisCMasculino,
    numeroTotalNotificadosHepatitisCSd,
    numeroConfirmadosTotalHepatitisC,
    numeroDescartadosTotalHepatitisC,
    numeroSospechososTotalHepatitisC,
    numeroEmbarazadasNotificadoTotalHepatitisC,
    numeroEmbarazadasConfirmadasHepatitisC,
    numeroEmbarazadasDescartadasHepatitisC,
    numeroEnEstudioTotalHepatitisC,
    numeroTotalGeneralHepatitisCMoron,
    numeroTotalGeneralHepatitisCNoMoron,
    porcentajeNotificadosHepatitisCMoron,
    hepatitisCSexoEdad,
    hepatitisCXse,
  } = useContext(DataContext);



  const [
    salmonTransparente,
    salmon,
    lilaTransparente,
    lila,
    rosaTransparente,
    rosa,
  ] = Colors;

  //---Agrupados por sexo y edad

  const [
    hepatitisCFmenor1m,
    hepatitisCF2m12m,
    hepatitisCF13m24m,
    hepatitisCF2a4a,
    hepatitisCF5a9a,
    hepatitisCF10a14a,
    hepatitisCF15a19a,
    hepatitisCF20a24a,
    hepatitisCF25a34a,
    hepatitisCF35a44a,
    hepatitisCF45a65a,
    hepatitisCFmay65,
    hepatitisCMmenor1m,
    hepatitisCM2m12m,
    hepatitisCM13m24m,
    hepatitisCM2a4a,
    hepatitisCM5a9a,
    hepatitisCM10a14a,
    hepatitisCM15a19a,
    hepatitisCM20a24a,
    hepatitisCM25a34a,
    hepatitisCM35a44a,
    hepatitisCM45a65a,
    hepatitisCMmay65,
  ] = hepatitisCSexoEdad;

  //Gráfico notificados según sexo

  const totalPorSexoHepatitisC = [
    numeroTotalNotificadosHepatitisCMasculino,
    numeroTotalNotificadosHepatitisCFemenino,
    numeroTotalNotificadosHepatitisCSd,
  ];
  const labelsSexoHepatitisC = ['Maculino', 'Femenino', 'SD'];
  const backgroundColorHepatitisC = [
    salmonTransparente,
    lilaTransparente,
    rosaTransparente,
  ];
  const borderColorHepatitisC = [salmon, lila, rosa];
  const titleSexoHepatitisC = `Casos notificados según sexo. Morón, SE 1 a ${se}, ${anioBaseActual}.`;

  //Gráfico notificados Morón/Total

  const notificadosHepatitisCEstablecimientoCarga = [
    numeroTotalGeneralHepatitisCMoron,
    numeroTotalGeneralHepatitisCNoMoron,
  ];
  const labelsEstablecimientoHepatitisC = [
    'Establecimientos de Morón',
    'Establecimientos no pertenecientes a Morón',
  ];
  const backgroundColorEstablecimientoHepatitisC = [
    lilaTransparente,
    rosaTransparente,
  ];
  const borderColorEstablecimientoHepatitisC= [lila, rosa];
  const titleEstablecimientoHepatitisC= `Casos notificados de Hepatitis C según Establecimiento de carga. Morón, SE 1 a ${se}, ${anioBaseActual}.`;

  //Tabla resultados

  const titleResultadoHepatitisC = `Casos notificados de Hepatitis C según resultado de laboratorio. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
  const labelsRestultadoHepatitisC = ['Resultados de laboratorio'];
  const label1RestultadoHepatitisC = 'Positivos';
  const label2RestultadoHepatitisC = 'Negativos';
  const label3RestultadoHepatitisC = 'En estudio';
  const dataPositivosHepatitisC = [numeroConfirmadosTotalHepatitisC];
  const dataNegativosHepatitisC = [numeroDescartadosTotalHepatitisC];
  const dataSinResultadosHepatitisC = [numeroSospechososTotalHepatitisC];

  //Gráfico Edad x sexo

  const titleEdadSexoHepatitisC = `Casos notificados de Hepatitis C, según sexo y edad. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
  const labelsEdadSexoHepatitisC = [
    '< 1 mes',
    '2 a 12 m',
    '1 a 2 años',
    '2 a 4 años',
    '5 a 9 años',
    '10 a 14 años',
    '15 a 19',
    '20 a 24 años',
    '25 a 34 años',
    '35 a 44 años',
    '44 a 65 años',
    '> 65 años',
  ];
  const label1HepatitisC = 'Mujeres';
  const label2HepatitisC = 'Varones';
  const femeninoHepatitisC = [
    hepatitisCFmenor1m,
    hepatitisCF2m12m,
    hepatitisCF13m24m,
    hepatitisCF2a4a,
    hepatitisCF5a9a,
    hepatitisCF10a14a,
    hepatitisCF15a19a,
    hepatitisCF20a24a,
    hepatitisCF25a34a,
    hepatitisCF35a44a,
    hepatitisCF45a65a,
    hepatitisCFmay65,
  ];
  const masculinoHepatitisC = [
    hepatitisCMmenor1m,
    hepatitisCM2m12m,
    hepatitisCM13m24m,
    hepatitisCM2a4a,
    hepatitisCM5a9a,
    hepatitisCM10a14a,
    hepatitisCM15a19a,
    hepatitisCM20a24a,
    hepatitisCM25a34a,
    hepatitisCM35a44a,
    hepatitisCM45a65a,
    hepatitisCMmay65,
  ];

  //Gráfico notificados x SE

  const titleSeHepatitisC = `Casos notificados de Hepatitis C, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
  const labelsSeHepatitisC = semanas;
  const labelSeHepatitisC = 'SE';
  const seHepatitisC = hepatitisCXse;

  //Alerts

  function handleEmbarazadasHepatitisC() {
    detallarEmbarazadasHepatitisC(
      numeroEmbarazadasConfirmadasHepatitisC,
      numeroEmbarazadasDescartadasHepatitisC
    );
  }

  function detallarEmbarazadasHepatitisC(conf, desc) {
    Toast.fire({
      title: `Gestantes confirmadas: ${conf}, \n 
    Gestantes descartadas: ${desc}. \n
    `,
    });
  }

  return (
    <div className='totalesGraphs-container'>
      <div className='totales-page-container'>
        <div className='recuadro naranja'>
          Total {anioBaseActual}:
          <p className='totalNumber'>{numeroTotalNotificadosHepatitisC}</p>
        </div>
        <div className='recuadro salmon'>
          Confirmados:
          <p className='totalNumber'>{numeroConfirmadosTotalHepatitisC}</p>
        </div>
        <div className='recuadro rosa'>
          Descartados:
          <p className='totalNumber'>{numeroDescartadosTotalHepatitisC}</p>
        </div>
        <div className='recuadro lila'>
          En estudio:
          <p className='totalNumber'>{numeroSospechososTotalHepatitisC}</p>
        </div>
        <div className='recuadro salmon' onClick={handleEmbarazadasHepatitisC}>
          Gestantes:
          <p className='totalNumber'>
            {numeroEmbarazadasNotificadoTotalHepatitisC}
          </p>
        </div>
        <div className='recuadro rosa'>
          Notificados por Morón:
          <p className='totalNumber'>
            {porcentajeNotificadosHepatitisCMoron}%
          </p>
        </div>
      </div>

      <div className='graphs-container'>
        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleSexoHepatitisC}
            datos={totalPorSexoHepatitisC}
            labels={labelsSexoHepatitisC}
            backgroundColor={backgroundColorHepatitisC}
            borderColor={borderColorHepatitisC}
          />
        </div>
        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEstablecimientoHepatitisC}
            datos={notificadosHepatitisCEstablecimientoCarga}
            labels={labelsEstablecimientoHepatitisC}
            backgroundColor={backgroundColorEstablecimientoHepatitisC}
            borderColor={borderColorEstablecimientoHepatitisC}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChart
            title={titleResultadoHepatitisC}
            barLabels={labelsRestultadoHepatitisC}
            label1={label1RestultadoHepatitisC}
            label2={label2RestultadoHepatitisC}
            label3={label3RestultadoHepatitisC}
            data1={dataPositivosHepatitisC}
            data2={dataNegativosHepatitisC}
            data3={dataSinResultadosHepatitisC}
            borderColor1={lila}
            borderColor2={salmon}
            borderColor3={rosa}
            bgColor1={lilaTransparente}
            bgColor2={salmonTransparente}
            bgColor3={rosaTransparente}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChartSexAge
            title={titleEdadSexoHepatitisC}
            barLabels={labelsEdadSexoHepatitisC}
            label1={label1HepatitisC}
            label2={label2HepatitisC}
            data1={femeninoHepatitisC}
            data2={masculinoHepatitisC}
            borderColor1={lila}
            borderColor2={salmon}
            bgColor1={lilaTransparente}
            bgColor2={salmonTransparente}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChartSe
            eje={'x'}
            title={titleSeHepatitisC}
            barLabels={labelsSeHepatitisC}
            label1={labelSeHepatitisC}
            data1={seHepatitisC}
            borderColor1={salmon}
            bgColor1={salmonTransparente}
          />
        </div>
      </div>
    </div>
  );
}

export default HepatitisCTotal;
