import { useState, useContext, useEffect } from "react";
import BarChart from "../../components/BarChart";
import DataContext from "../../context/DataContext";
import "./home.css";
import BarChartSe from "../../components/BarChartSe";
import BarChartFourData from "../../components/BarChartFourData";
import Colors from "../../components/Colors";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";


function HomeGraphsRender() {

    const {
        setBaseCompleta,
        baseCompleta,
        setBaseCompletaClinica,
        user,
        lastWeek,
        se,
        semanaInicial,
        semanaFinal,
        semanas,
        anioBaseActual,
        calendar,
        numeroTotalGeneralNotificadosSifilis,
        numeroTotalGeneralNotificadosHiv,
        numeroTotalNotificadosTuberculosis,
        numeroTotalNotificadosDengue,
        notificadosEno1,
        notificadosEno2,
        sifilisXse,
        tuberculosisXse,
        dengueXse,
        hivXse,
        numeroTotalGeneralNotificadosSifilisEntreFechas,
        numeroTotalNotificadosTuberculosisEntreFechas,
        numeroTotalGeneralNotificadosHivEntreFechas,
        numeroTotalNotificadosDengueEntreFechas,
      } = useContext(DataContext);
    
      const [ultimoMesHome, setUltimoMesHome] = useState(false);
    
      const [
        salmonTransparente,
        salmon,
        lilaTransparente,
        lila,
        rosaTransparente,
        rosa,
        amarilloTransparente,
        amarillo,
      ] = Colors;
    
      const navigate = useNavigate();
    
      useEffect(() => {
        console.log(user.first_name);
        if (user?.first_name == undefined) {
          navigate("/login");
        }
      }, []);
    
      console.log(anioBaseActual);
    
      let mesPrevio = "18 a 22";
    
      //Gráfico notificados de todas las ENOs
      const titleEnos = `Casos notificados de Enfermedades de Notificación Obligatoria . Morón, ${anioBaseActual}`;
      const labelsEnos1 = [
        "Accidente potencialmente rábico (APR)",
        "Alacranismo",
        "Brucelosis",
        "Caso sospechoso de intoxicación por consumo de cocaína contaminada",
        "Celiaquía",
        "Chagas agudo congénito",
        "Chagas crónico",
        "Chagas en embarazadas",
        "Coqueluche",
        //"Dengue",
        "Diarrea aguda",
        "Encefalitis de San Luis",
        "Enfermedad Febril Exantemática-EFE (Sarampión/Rubéola)",
        "Enfermedad Pie-Mano-Boca",
        //"Estudio de SARS-COV-2 en situaciones especiales",
        "Fiebre del Nilo Occidental",
        "Gonorrea",
        "Hantavirosis",
        "Hepatitis B",
        "Hepatitis C",
      ];
    
      const labelsEnos2 = [
        "Hepatitis E",
        "Hidatidosis",
        "HTLV",
        "Infección respiratoria aguda viral sin especificar",
        "Intoxicación con otros tóxicos",
        "Intoxicación/Exposición a Mercurio",
        "Intoxicación/Exposición por Monóxido de Carbono",
        "IRAG",
        "Leptospirosis",
        "Meningoencefalitis",
        "Otras infecciones invasivas (bacterianas y otras)",
        "Poliomielitis-Parálisis flácida aguda en menores de 15 años",
        //"SARS-COV-2 en puntos de entrada y casos relacionados con importación",
        //"Sífilis",
        //"Sífilis congénita",
        //"Sífilis en Embarazadas",
        "Sindrome inflamatorio multisistémico (SIM)",
        "Streptococcus agalactiae grupo B en embarazadas",
        "SUH - Sindrome Urémico Hemolítico",
        "Toxoplasmosis congénita",
        "Toxoplasmosis en embarazadas",
        //"Tuberculosis",
        //"Vigilancia genómica de SARS-CoV-2",
        //"VIH",
        //"VIH - Expuesto perinatal",
        //"VIH en embarazo",
        "Viruela símica",
      ];
    
      const labelEnos = "Casos notificados";
      const enos1 = notificadosEno1;
      const enos2 = notificadosEno2;
    
      //Gráfico Sífilis
      const titleSeSifilis = `Casos notificados de Sífilis, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
      const labelsSeSifilis = semanas;
      const labelSeSifilis = "SE";
      const seSifilis = sifilisXse;
    
      //Gráfico TBC
      const titleSeTuberculosis = `Casos notificados de Tuberculosis, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
      const labelsSeTuberculosis = semanas;
      const labelSeTuberculosis = "SE";
      const seTuberculosis = tuberculosisXse;
    
      //Gráfico Dengue
      const titleSeDengue = `Casos notificados de Dengue, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
      const labelsSeDengue = semanas;
      const labelSeDengue = "SE";
      const seDengue = dengueXse;
    
      //Gráfico HIV
      const titleSeHiv = `Casos notificados de HIV, según Semana Epidemiológica. Morón, SE 1 a ${se}, ${anioBaseActual}.`;
      const labelsSeHiv = semanas;
      const labelSeHiv = "SE";
      const seHiv = hivXse;
    
      //entre fechas, notificados
    
      const enoPriorizadasNotificadosTitleEntreFechas = `Casos notificados de ENO priorizadas. Morón, SE ${semanaInicial} a ${semanaFinal}.`;
    
      const enoPriorizadasNotificadosLabelsEntreFechas = ["ENO priorizadas"];
      const labelsNotificadosEjeY = ["Casos notificados"];
      const label1EnoPriorizadas = "Sífilis";
      const label2EnoPriorizadas = "Tuberculosis";
      const label3EnoPriorizadas = "Dengue";
      const label4EnoPriorizadas = "HIV";
      const datanumeroTotalGeneralNotificadosSifilisEntreFechas = [
        numeroTotalGeneralNotificadosSifilisEntreFechas,
      ];
      const datanumeroTotalNotificadosTuberculosisEntreFechas = [
        numeroTotalNotificadosTuberculosisEntreFechas,
      ];
      const datanumeroTotalNotificadosDengueEntreFechas = [
        numeroTotalNotificadosDengueEntreFechas,
      ];
      const datanumeroTotalGeneralNotificadosHivEntreFechas = [
        numeroTotalGeneralNotificadosHivEntreFechas,
      ];
    


  return (
    <>
<div className="btnElegir-page">
        <button
          className={ultimoMesHome ? "button" : "buttonActive"}
          onClick={() => setUltimoMesHome(false)}
        >
          Acumulado {anioBaseActual}
        </button>
        <button
          className={ultimoMesHome ? "buttonActive" : "button"}
          onClick={() => setUltimoMesHome(true)}
          id="enteFechas"
        >
          Ver entre fechas
        </button>
      </div>

      {ultimoMesHome ? (
        <div className="totalesGraphs-container">
          {semanaInicial ? (
            <h3>
              Semanas Epidemiológicas {semanaInicial} a {semanaFinal}
            </h3>
          ) : (
            <div>
              <p>No hay fechas ingresadas</p>
              <Link to="/upload">
                <button className="button">Ingresar fechas</button>
              </Link>
            </div>
          )}
          <h3>Total de casos notificados:</h3>
          <div className="totales-page-container">
            <Link to="/sifilis" className="links">
              <div className="recuadro lila">
                Sífilis:
                <p className="totalNumber">
                  {numeroTotalGeneralNotificadosSifilisEntreFechas}
                </p>
              </div>
            </Link>
            <Link to="/tbc" className="links">
              <div className="recuadro salmon">
                Tuberculosis:
                <p className="totalNumber">
                  {numeroTotalNotificadosTuberculosisEntreFechas}
                </p>
              </div>
            </Link>
            <Link to="/dengue" className="links">
              <div className="recuadro rosa">
                Dengue:
                <p className="totalNumber">
                  {numeroTotalNotificadosDengueEntreFechas}
                </p>
              </div>
            </Link>
            <Link to="/hiv" className="links">
              <div className="recuadro lila">
                HIV:
                <p className="totalNumber">
                  {numeroTotalGeneralNotificadosHivEntreFechas}
                </p>
              </div>
            </Link>
          </div>
          <div className="graphs-container">
            <div className="barChart-sifilis">
              <BarChartFourData
                title={enoPriorizadasNotificadosTitleEntreFechas}
                barLabels={enoPriorizadasNotificadosLabelsEntreFechas}
                label1={label1EnoPriorizadas}
                label2={label2EnoPriorizadas}
                label3={label3EnoPriorizadas}
                label4={label4EnoPriorizadas}
                data1={datanumeroTotalGeneralNotificadosSifilisEntreFechas}
                data2={datanumeroTotalNotificadosTuberculosisEntreFechas}
                data3={datanumeroTotalNotificadosDengueEntreFechas}
                data4={datanumeroTotalGeneralNotificadosHivEntreFechas}
                borderColor1={lila}
                borderColor2={salmon}
                borderColor3={rosa}
                borderColor4={amarilloTransparente}
                bgColor1={lilaTransparente}
                bgColor2={salmonTransparente}
                bgColor3={rosaTransparente}
                bgColor4={amarillo}
              />
            </div>
            {/* <div className='barChart-sifilis'>
              <BarChartFourData             
                
              />
            </div> */}
          </div>
        </div>
      ) : (
        <div className="totalesGraphs-container">
          <h3>SE 1 a {lastWeek}</h3>
          <h3>Total de casos notificados:</h3>
          <div className="totales-page-container">
            <Link to="/sifilis" className="links">
              <div className="recuadro lila">
                Sífilis:
                <p className="totalNumber">
                  {numeroTotalGeneralNotificadosSifilis}
                </p>
              </div>
            </Link>
            <Link to="/tbc" className="links">
              <div className="recuadro salmon">
                Tuberculosis:
                <p className="totalNumber">
                  {numeroTotalNotificadosTuberculosis}
                </p>
              </div>
            </Link>
            <Link to="/dengue" className="links">
              <div className="recuadro rosa">
                Dengue:
                <p className="totalNumber">{numeroTotalNotificadosDengue}</p>
              </div>
            </Link>
            <Link to="/hiv" className="links">
              <div className="recuadro lila">
                HIV:
                <p className="totalNumber">
                  {numeroTotalGeneralNotificadosHiv}
                </p>
              </div>
            </Link>
          </div>

          <div className="graphs-container">
            <div className="barChart-sifilis">
              <BarChartSe
                eje={"x"}
                title={titleSeSifilis}
                barLabels={labelsSeSifilis}
                label1={labelSeSifilis}
                data1={seSifilis}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>

            <div className="barChart-sifilis">
              <BarChartSe
                eje={"x"}
                title={titleSeTuberculosis}
                barLabels={labelsSeTuberculosis}
                label1={labelSeTuberculosis}
                data1={seTuberculosis}
                borderColor1={rosa}
                bgColor1={rosaTransparente}
              />
            </div>

            <div className="barChart-sifilis">
              <BarChartSe
                eje={"x"}
                title={titleSeDengue}
                barLabels={labelsSeDengue}
                label1={labelSeDengue}
                data1={seDengue}
                borderColor1={lila}
                bgColor1={lilaTransparente}
              />
            </div>

            <div className="barChart-sifilis">
              <BarChartSe
                eje={"x"}
                title={titleSeHiv}
                barLabels={labelsSeHiv}
                label1={labelSeHiv}
                data1={seHiv}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>

            <div className="barChartENO-sifilis" id="eno1">
              <BarChartSe
                eje={"y"}
                title={titleEnos}
                barLabels={labelsEnos1}
                label1={labelEnos}
                data1={enos1}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>

            <div className="barChartENO-sifilis" id="eno2">
              <BarChartSe
                eje={"y"}
                title={titleEnos}
                barLabels={labelsEnos2}
                label1={labelEnos}
                data1={enos2}
                borderColor1={salmon}
                bgColor1={salmonTransparente}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HomeGraphsRender