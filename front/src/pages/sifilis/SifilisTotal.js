import { useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import BarChart from '../../components/BarChart';
import './sifilis.css';
import DataContext from '../../context/DataContext';
import Colors from '../../components/Colors';
import BarChartSexAge from '../../components/BarChartSexAge';
import BarChartSe from '../../components/BarChartSe';

function SifilisTotal() {
  // destructuring from context
  const {
    anioBaseActual,
    se,
    semanas,
    numeroTotalGeneralNotificadosSifilis,
    numeroTotalGeneralNotificadosSifilisFemenino,
    numeroTotalGeneralNotificadosSifilisMasculino,
    numeroTotalGeneralNotificadosSifilisSd,
    numeroTotalNotificadosSifilisCongenita,
    numeroTotalNotificadosSifilisEmbarazadas,
    numeroConfirmadosTotalGeneralSifilis,
    numeroProbablesTotalGeneralSifilis,
    numeroDescartadosTotalGeneralSifilis,
    numeroTotalGeneralSifilisNoMoron,
    numeroTotalGeneralSifilisMoron,
    porcentajeNotificadosSifilisMoron,
    numeroConfirmadosMasculinosSifilis,
    numeroConfirmadosFemeninosSifilis,
    numeroConfirmadosSDSifilis,
    numeroProbablesFemeninosSifilis,
    numeroProbablesMasculinosSifilis,
    numeroProbablesSDSifilis,
    sifilisSexoEdad,
    sifilisXse,
  } = useContext(DataContext);

  const [
    salmonTransparente,
    salmon,
    lilaTransparente,
    lila,
    rosaTransparente,
    rosa,
  ] = Colors;

  const [
    sifilisFmenor1m,
    sifilisF2m12m,
    sifilisF13m24m,
    sifilisF2a4a,
    sifilisF5a9a,
    sifilisF10a14a,
    sifilisF15a19a,
    sifilisF20a24a,
    sifilisF25a34a,
    sifilisF35a44a,
    sifilisF45a65a,
    sifilisFmay65,
    sifilisMmenor1m,
    sifilisM2m12m,
    sifilisM13m24m,
    sifilisM2a4a,
    sifilisM5a9a,
    sifilisM10a14a,
    sifilisM15a19a,
    sifilisM20a24a,
    sifilisM25a34a,
    sifilisM35a44a,
    sifilisM45a65a,
    sifilisMmay65,
  ] = sifilisSexoEdad;

  // Gráfico notificados según sexo

  const totalPorSexoSifilis = [
    numeroTotalGeneralNotificadosSifilisMasculino,
    numeroTotalGeneralNotificadosSifilisFemenino,
    numeroTotalGeneralNotificadosSifilisSd,
  ];
  const labelsSexoSifilis = ['Maculino', 'Femenino', 'SD'];
  const backgroundColorSifilis = [
    salmonTransparente,
    lilaTransparente,
    rosaTransparente,
  ];
  const borderColorSifilis = [salmon, lila, rosa];
  const titleSexoSifilis = `Casos notificados de Sífilis según sexo. Morón, SE 1 a ${se}, ${anioBaseActual}.`;

  // Gráfico embarazadas sobre total de notificadas mujeres

  const embarazadasEnMujeresSifilis = [
    numeroTotalNotificadosSifilisEmbarazadas,
    parseInt(
      numeroTotalGeneralNotificadosSifilisFemenino -
        numeroTotalNotificadosSifilisEmbarazadas
    ),
  ];
  const labelsEmbarazoSifilis = ['Gestantes', 'No gestantes'];
  const backgroundColorEmbarazoSifilis = [lilaTransparente, rosaTransparente];
  const borderColorEmbarazoSifilis = [lila, rosa];
  const titleEmbarazoSifilis = `Casos notificados de Síflis en gestantes, sobre personas con posibilidad de gestar. Morón, SE 1 a ${se}, ${anioBaseActual}.`;

  //  notificados Morón/Total

  const notificadosSifilisEstablecimientoCarga = [
    numeroTotalGeneralSifilisMoron,
    numeroTotalGeneralSifilisNoMoron,
  ];
  const labelsEstablecimientoSifilis = [
    'Establecimientos de Morón',
    'Establecimientos no pertenecientes a Morón',
  ];
  const backgroundColorEstablecimientoSifilis = [
    salmonTransparente,
    rosaTransparente,
  ];
  const borderColorEstablecimientoSifilis = [salmon, rosa];
  const titleEstablecimientoSifilis = `Casos notificados de Sífilis según Establecimiento de carga. Morón, SE 1 a ${se}, ${anioBaseActual}.`;

  // Gráfico tabla probables y confirmados

  const titleConfProbSifilis = `Casos confirmados y probables de Sífilis. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
  const labelsConfProbSifilis = ['Confirmados', 'Probables'];
  const label1Sifilis = 'Mujeres';
  const label2Sifilis = 'Varones';
  const label3Sifilis = 'SD';
  const femeninoConfProbSifilis = [
    numeroConfirmadosFemeninosSifilis,
    numeroProbablesFemeninosSifilis,
  ];
  const masculinoConfProbSifilis = [
    numeroConfirmadosMasculinosSifilis,
    numeroProbablesMasculinosSifilis,
  ];
  const sdConfProbSifilis = [
    numeroConfirmadosSDSifilis,
    numeroProbablesSDSifilis,
  ];

  // Gráfico Edad x sexo
  const titleEdadSexoSifilis = `Casos notificados de Sífilis, según sexo y edad. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
  const labelsEdadSexoSifilis = [
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
  const femeninoSifilis = [
    sifilisFmenor1m,
    sifilisF2m12m,
    sifilisF13m24m,
    sifilisF2a4a,
    sifilisF5a9a,
    sifilisF10a14a,
    sifilisF15a19a,
    sifilisF20a24a,
    sifilisF25a34a,
    sifilisF35a44a,
    sifilisF45a65a,
    sifilisFmay65,
  ];
  const masculinoSifilis = [
    sifilisMmenor1m,
    sifilisM2m12m,
    sifilisM13m24m,
    sifilisM2a4a,
    sifilisM5a9a,
    sifilisM10a14a,
    sifilisM15a19a,
    sifilisM20a24a,
    sifilisM25a34a,
    sifilisM35a44a,
    sifilisM45a65a,
    sifilisMmay65,
  ];

  // Gráfico notificados x SE
  const titleSeSifilis = `Casos notificados de Sífilis, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
  const labelsSeSifilis = semanas;
  const labelSeSifilis = 'SE';
  const seSifilis = sifilisXse;

  // --------ALERTS----------------

  /*
    function detallarDescartadosSifilis() {
      Toast.fire({
        title: `Descartados en gestantes: ${numeroDescartadosTotalSifilisEmbarazadas}, \n 
      Descartados en congénitos: ${numeroDescartadosTotalSifilisCongenita}, \n
      Descartados en restantes: ${numeroDescartadosTotalSifilis}`
      })
    }
  
  */
  return (
    <div className='totalesGraphs-container'>
      <div className='totales-page-container'>
        <div className='recuadro naranja'>
          Total {anioBaseActual}:
          <p className='totalNumber'>{numeroTotalGeneralNotificadosSifilis}</p>
        </div>
        <div className='recuadro salmon'>
          Confirmados:
          <p className='totalNumber'>{numeroConfirmadosTotalGeneralSifilis}</p>
        </div>
        <div className='recuadro rosa'>
          Probables:
          <p className='totalNumber'>{numeroProbablesTotalGeneralSifilis}</p>
        </div>
        <div className='recuadro lila'>
          Descartados:
          <p className='totalNumber'>{numeroDescartadosTotalGeneralSifilis}</p>
        </div>
        <div className='recuadro salmon'>
          Gestantes:{' '}
          <p className='totalNumber'>
            {numeroTotalNotificadosSifilisEmbarazadas}
          </p>
        </div>
        <div className='recuadro rosa'>
          Congénitos:
          <p className='totalNumber'>
            {numeroTotalNotificadosSifilisCongenita}
          </p>
        </div>
      </div>
      <div className='recuadro lila'>
        Notificados por Morón:
        <p className='totalNumber'>{porcentajeNotificadosSifilisMoron}%</p>
      </div>

      <div className='graphs-container'>
        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleSexoSifilis}
            datos={totalPorSexoSifilis}
            labels={labelsSexoSifilis}
            backgroundColor={backgroundColorSifilis}
            borderColor={borderColorSifilis}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEmbarazoSifilis}
            datos={embarazadasEnMujeresSifilis}
            labels={labelsEmbarazoSifilis}
            backgroundColor={backgroundColorEmbarazoSifilis}
            borderColor={borderColorEmbarazoSifilis}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEstablecimientoSifilis}
            datos={notificadosSifilisEstablecimientoCarga}
            labels={labelsEstablecimientoSifilis}
            backgroundColor={backgroundColorEstablecimientoSifilis}
            borderColor={borderColorEstablecimientoSifilis}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChart
            title={titleConfProbSifilis}
            barLabels={labelsConfProbSifilis}
            label1={label1Sifilis}
            label2={label2Sifilis}
            label3={label3Sifilis}
            data1={femeninoConfProbSifilis}
            data2={masculinoConfProbSifilis}
            data3={sdConfProbSifilis}
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
            title={titleEdadSexoSifilis}
            barLabels={labelsEdadSexoSifilis}
            label1={label1Sifilis}
            label2={label2Sifilis}
            data1={femeninoSifilis}
            data2={masculinoSifilis}
            borderColor1={lila}
            borderColor2={salmon}
            bgColor1={lilaTransparente}
            bgColor2={salmonTransparente}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChartSe
            eje={'x'}
            title={titleSeSifilis}
            barLabels={labelsSeSifilis}
            label1={labelSeSifilis}
            data1={seSifilis}
            borderColor1={salmon}
            bgColor1={salmonTransparente}
          />
        </div>
      </div>
    </div>
  );
}

export default SifilisTotal;
