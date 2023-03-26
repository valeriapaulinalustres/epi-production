import {  useContext } from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import '../sifilis/sifilis.css';
import DataContext from '../../context/DataContext';
import Toast from 'sweetalert2';
import Colors from '../../components/Colors';
import BarChartSe from '../../components/BarChartSe';
import BarChartThreeData from '../../components/BarChartThreeData';

function Covid() {


  //destructuring from context
  const {
    anioBaseActual,
    se,
    semanas,
    totalNotificadosETI,
    etiXse,
    numeroConfirmadosCovidTotal,
    numeroConfirmadosCovidPcr, 
    numeroConfirmadosCovidAg, 
    numeroConfirmadosCovidAutotest,
    numeroConfirmadosFemeninosCovid, 
    numeroConfirmadosMasculinosCovid,
    numeroConfirmadosSdCovid,
    porcentajeNotificadosCovidMoron,
    numeroConfirmadosCovidTotalMoron, 
    numeroConfirmadosCovidTotalNoMoron,
    numeroConfirmadosInfluenzaA,
    numeroConfirmadosInfluenzaB,
    numeroConfirmadosVsr,
    covidXse,

   
  } = useContext(DataContext);

  const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa, amarillo, amarilloTransparente, verde, verdeTransparente] = Colors

  //Gráfico notificados x SE ETI

  const titleSeEti= `Casos notificados de ETI, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`
  const labelsSeEti = semanas;
  const labelSeEti = "SE";
  const seEti = etiXse;

   //Gráfico clasificación COVID
   const titleClasificacionCovid = `Clasificación de los casos confirmados de COVID. Morón, SE 1 a ${se}, ${anioBaseActual}.`
   const labelsClasificacionCovid = ["Clasificación"]
   const label1ClasificacionCovid = "Confirmados por PCR"
   const label2ClasificacionCovid = "Confirmados por Test de Antígeno"
   const label3ClasificacionCovid = "Confirmados por autotest"
   const dataConfirmadosPcrCovid = [numeroConfirmadosCovidPcr]
   const dataConfirmadosAgCovid = [numeroConfirmadosCovidAg]
   const dataConfirmadosAutotestCovid = [numeroConfirmadosCovidAutotest]

     //Gráfico confirmados según sexo Covid
  const totalPorSexoCovid = [numeroConfirmadosFemeninosCovid, numeroConfirmadosMasculinosCovid, numeroConfirmadosSdCovid]
  const labelsSexoCovid = ['Maculino', 'Femenino', 'SD']
  const backgroundColorCovid = [salmonTransparente, lilaTransparente, rosaTransparente]
  const borderColorCovid = [salmon, lila, rosa]
  const titleSexoCovid = `Casos confirmados de COVID según sexo. Morón, SE 1 a ${se}, ${anioBaseActual}.`
 
  //Gráfico notificados Morón/Total
  const notificadosCovidEstablecimientoCarga = [numeroConfirmadosCovidTotalMoron, numeroConfirmadosCovidTotalNoMoron]
  const labelsEstablecimientoCovid = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
  const backgroundColorEstablecimientoCovid = [lilaTransparente, rosaTransparente]
  const borderColorEstablecimientoCovid = [lila, rosa]
  const titleEstablecimientoCovid = `Casos confirmados de COVID según Establecimiento de carga. Morón, SE 1 a ${se}, ${anioBaseActual}.`

 //Gráfico notificados x SE
 const titleSeCovid = `Casos confirmados de COVID, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`
 const labelsSeCovid = semanas;
 const labelSeCovid = "SE";
 const seCovid = covidXse;



  //Alerts

  function detallarEmbarazadasDengue() {

    Toast.fire({
      title: `Gestantes confirmadas: , \n 
    Gestantes descartadas: . \n
    `
    })
  }

  return (


     
        <div className='totalesGraphs-container'>
          <div className='totales-page-container'>
            <div className='recuadro naranja'>
              Total notificados ETI:
              <p className='totalNumber'>
                {totalNotificadosETI}
              </p>
            </div>
            <div className='recuadro salmon'>
              Confirmados COVID:
              <p className='totalNumber'>
                {numeroConfirmadosCovidTotal}
              </p>
            </div>
            <div className='recuadro rosa'>
              Confirmados Influenza A:
              <p className='totalNumber'>
                {numeroConfirmadosInfluenzaA}
              </p>
            </div>
            <div className='recuadro lila'>
              Confirmados Influenza B:
              <p className='totalNumber'>
                {numeroConfirmadosInfluenzaB}
              </p>
            </div>
            <div className='recuadro rosa' onClick={detallarEmbarazadasDengue}>
              Total confirmados VSR:
              <p className='totalNumber'>
                {numeroConfirmadosVsr}
              </p>
            </div>
          
            <div className='recuadro salmon'>
              Covid conf. por Morón:
              <p className='totalNumber'>
                {porcentajeNotificadosCovidMoron}%
              </p>
            </div>
          </div>
          
          <div className='graphs-container'>
           
            <div className='barChart-sifilis'>
              <BarChartSe
                eje={'x'}
                title={titleSeEti}
                barLabels={labelsSeEti}
                label1={labelSeEti}
                data1={etiXse}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>

            <div className='barChart-sifilis'>
          <BarChartThreeData
            title={titleClasificacionCovid}
            barLabels={labelsClasificacionCovid}
            label1={label1ClasificacionCovid}
            label2={label2ClasificacionCovid}
            label3={label3ClasificacionCovid}
            data1={dataConfirmadosPcrCovid}
            data2={dataConfirmadosAgCovid}
            data3={dataConfirmadosAutotestCovid}
            borderColor1={lila}
            borderColor2={salmon}
            borderColor3={rosa}
            bgColor1={lilaTransparente}
            bgColor2={salmonTransparente}
            bgColor3={rosaTransparente}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleSexoCovid}
            datos={totalPorSexoCovid}
            labels={labelsSexoCovid}
            backgroundColor={backgroundColorCovid}
            borderColor={borderColorCovid}
          />
        </div>

        <div className='doughnutChart-sifilis'>
          <DoughnutChart
            title={titleEstablecimientoCovid}
            datos={notificadosCovidEstablecimientoCarga}
            labels={labelsEstablecimientoCovid}
            backgroundColor={backgroundColorEstablecimientoCovid}
            borderColor={borderColorEstablecimientoCovid}
          />
        </div>

        <div className='barChart-sifilis'>
          <BarChartSe
            eje={'x'}
            title={titleSeCovid}
            barLabels={labelsSeCovid}
            label1={labelSeCovid}
            data1={seCovid}
            borderColor1={salmon}
            bgColor1={salmonTransparente}
          />
        </div>

          </div>
        </div>
      
    

  )
}

export default Covid
