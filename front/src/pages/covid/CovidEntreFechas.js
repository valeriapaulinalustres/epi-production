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
        numeroConfirmadosCovidTotalNoMoronEntreFechas

    } = useContext(DataContext);

    const [salmonTransparente, salmon, lilaTransparente, lila, rosaTransparente, rosa, amarillo, amarilloTransparente, verde, verdeTransparente] = Colors


    //Entre fechas
    //Gráfico clasificación COVID
    const titleClasificacionCovidEntreFechas = `Clasificación de los casos confirmados de COVID. Morón, SE ${semanaInicial} a ${semanaFinal}.`
    const labelsClasificacionCovidEntreFechas = ["Clasificación"]
    const label1ClasificacionCovidEntreFechas = "Confirmados por PCR"
    const label2ClasificacionCovidEntreFechas = "Confirmados por Test de Antígeno"
    const label3ClasificacionCovidEntreFechas = "Confirmados por autotest"
    const dataConfirmadosPcrCovidEntreFechas = [numeroConfirmadosCovidPcrEntreFechas]
    const dataConfirmadosAgCovidEntreFechas = [numeroConfirmadosCovidAgEntreFechas]
    const dataConfirmadosAutotestCovidEntreFechas = [numeroConfirmadosCovidAutotestEntreFechas]


    //Gráfico notificados Morón/Total
    const notificadosCovidEstablecimientoCargaEntreFechas = [numeroConfirmadosCovidTotalMoronEntreFechas, numeroConfirmadosCovidTotalNoMoronEntreFechas]
    const labelsEstablecimientoCovidEntreFechas = ['Establecimientos de Morón', 'Establecimientos no pertenecientes a Morón',]
    const backgroundColorEstablecimientoCovidEntreFechas = [lilaTransparente, rosaTransparente]
    const borderColorEstablecimientoCovidEntreFechas = [lila, rosa]
    const titleEstablecimientoCovidEntreFechas = `Casos confirmados de COVID según Establecimiento de carga. Morón, SE ${semanaInicial} a ${semanaFinal}, ${anioBaseActual}.`

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
            {
                semanaInicial
                    ? <h3>Semanas Epidemiológicas {semanaInicial} a {semanaFinal}</h3>
                    : <div>
                        <p>No hay fechas ingresadas</p>
                        <Link to="/upload"><button className='button'>Ingresar fechas</button></Link>
                    </div>
            }

            <div className='totales-page-container'>
                <div className='recuadro naranja'>
                    Total notificados ETI:
                    <p className='totalNumber'>
                        {totalNotificadosETIEntreFechas}
                    </p>
                </div>
                <div className='recuadro salmon'>
                    Confirmados COVID:
                    <p className='totalNumber'>
                        {numeroConfirmadosCovidTotalEntreFechas}
                    </p>
                </div>
                <div className='recuadro rosa'>
                    Confirmados Influenza A:
                    <p className='totalNumber'>
                        {numeroConfirmadosInfluenzaAEntreFechas}
                    </p>
                </div>
                <div className='recuadro lila'>
                    Confirmados Influenza B:
                    <p className='totalNumber'>
                        {numeroConfirmadosInfluenzaBEntreFechas}
                    </p>
                </div>
                <div className='recuadro rosa'>
                    Total Confirmados VSR:
                    <p className='totalNumber'>
                        {numeroConfirmadosVsrEntreFechas}
                    </p>
                </div>
                <div className='recuadro salmon'>
                    Covid conf. por Morón:
                    <p className='totalNumber'>
                        {porcentajeNotificadosCovidMoronEntreFechas}%
                    </p>
                </div>

            </div>

            <div className='graphs-container'>

                <div className='barChart-sifilis'>
                    <BarChartThreeData
                        title={titleClasificacionCovidEntreFechas}
                        barLabels={labelsClasificacionCovidEntreFechas}
                        label1={label1ClasificacionCovidEntreFechas}
                        label2={label2ClasificacionCovidEntreFechas}
                        label3={label3ClasificacionCovidEntreFechas}
                        data1={dataConfirmadosPcrCovidEntreFechas}
                        data2={dataConfirmadosAgCovidEntreFechas}
                        data3={dataConfirmadosAutotestCovidEntreFechas}
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
                        title={titleEstablecimientoCovidEntreFechas}
                        datos={notificadosCovidEstablecimientoCargaEntreFechas}
                        labels={labelsEstablecimientoCovidEntreFechas}
                        backgroundColor={backgroundColorEstablecimientoCovidEntreFechas}
                        borderColor={borderColorEstablecimientoCovidEntreFechas}
                    />
                </div>

            </div>
        </div>


    )
}

export default Covid
