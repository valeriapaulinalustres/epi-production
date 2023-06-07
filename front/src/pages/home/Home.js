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
import HomeGraphsRender from "./HomeGraphsRender";

function Home() {
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

console.log(baseCompleta)

  return (
    <div className="home-container">
      <h2>Vigilancia de Enfermedades de Notificación Obligatoria</h2>
      <h6>Datos actualizados al 30/05/2023</h6>

      {anioBaseActual && <h3>Datos del año {anioBaseActual}</h3>}

      <div className="home-text-container">
        <p>
          La LEY N° 15.465 en su Artículo N°1 declara obligatoria, en todo el
          territorio de la Nación, la notificación de los casos de enfermedades
          infecciosas comprendidas en el Artículo 2 de la mencionada Ley.
          <a
            href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/195000-199999/195093/norma.htm"
            target="_blank"
            className="home-text-link"
          >
            (Ver texto completo de la norma)
          </a>
        </p>
        <p>
          En nuestro Municipio hemos priorizado la notificación y análisis de
          las siguientes enfermedades: Dengue, Sifilis, Tuberculosis, HIV.
        </p>
      </div>
{
  baseCompleta.length > 0
   ?  <HomeGraphsRender />
   : <Link to='upload' className='homeInstruction'>Haz click aquí para cargar los gráficos</Link>
}
     
    </div>
  );
}

export default Home;
