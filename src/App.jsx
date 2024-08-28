import { useState } from "react";
import img from "./assets/pngtree-rain-rain-down-the-hd-wallpaper-picture-image_2636716.jpg";
import img1 from "./assets/concepto.webp";
import img2 from "./assets/imporytancia.jpg";
import img3 from "./assets/venta.jpg";
import img4 from "./assets/desve.jpg";
import img5 from "./assets/papel.jpg";
import img6 from "./assets/eleme.webp";

const sections = [
  {
    id: "concepto",
    title: "Concepto de los Sistemas de Información Gerencial",
    content:
      "Los Sistemas de Información Gerencial (SIG) son sistemas que proporcionan a los gerentes de una organización información relevante para tomar decisiones. Estos sistemas recopilan, procesan y almacenan datos de diversas fuentes, y luego los transforman en información útil que puede ser utilizada para realizar análisis, generar informes, y apoyar la planificación estratégica. Un SIG bien implementado no solo facilita el acceso a datos críticos, sino que también mejora la eficiencia operativa y permite a los gerentes detectar tendencias, identificar problemas y aprovechar oportunidades antes de que se conviertan en desafíos serios.",
    size: "w-72 h-64",
    image: img1,
  },
  {
    id: "importancia",
    title: "Importancia de los Sistemas de Información Gerencial",
    content:
      "Los Sistemas de Información Gerencial son fundamentales en el entorno empresarial moderno, ya que permiten a las organizaciones mantener una ventaja competitiva. Facilitan la toma de decisiones informadas mediante el análisis de grandes volúmenes de datos, lo que es esencial para responder rápidamente a cambios en el mercado. Además, estos sistemas permiten un mejor control y seguimiento de las operaciones, desde la cadena de suministro hasta la gestión de recursos humanos. Al mejorar la eficiencia y productividad organizacional, los SIG contribuyen a la reducción de costos, la mejora de la calidad de los productos y servicios, y la optimización de los procesos internos.",
    size: "w-80 h-64",
    image: img2,
  },
  {
    id: "ventajas",
    title: "Ventajas de los Sistemas de Información Gerencial",
    content:
      "Los Sistemas de Información Gerencial ofrecen numerosas ventajas a las organizaciones. Entre las más destacadas se encuentran la optimización de procesos, ya que automatizan tareas repetitivas y permiten una gestión más eficiente de los recursos. Además, proporcionan acceso rápido a información crítica, lo que es vital para la toma de decisiones estratégicas en tiempo real. También facilitan la integración y la colaboración entre diferentes departamentos, al centralizar la información en un solo sistema accesible para toda la organización. Esto no solo mejora la comunicación interna, sino que también permite a la empresa ser más ágil y adaptarse rápidamente a los cambios.",
    size: "w-96 h-64",
    image: img3,
  },
  {
    id: "desventajas",
    title: "Desventajas de los Sistemas de Información Gerencial",
    content:
      "A pesar de sus beneficios, los Sistemas de Información Gerencial también presentan desventajas que deben ser consideradas. Los costos de implementación y mantenimiento de un SIG pueden ser elevados, especialmente para pequeñas y medianas empresas. Además, la dependencia de la tecnología puede ser un riesgo, ya que cualquier fallo en el sistema podría interrumpir las operaciones empresariales. También es importante destacar que la implementación de un SIG requiere una formación adecuada del personal, lo que puede generar resistencia al cambio y requerir tiempo para que los empleados se adapten. Por último, la seguridad de la información es una preocupación constante, ya que estos sistemas manejan grandes volúmenes de datos sensibles.",
    size: "w-[370px] h-64",
    image: img4,
  },
  {
    id: "papel",
    title: "El Papel de los Sistemas de Información en las Organizaciones",
    content:
      "En las organizaciones modernas, los sistemas de información juegan un papel crucial en la gestión de las operaciones diarias y en la planificación estratégica. Estos sistemas facilitan la comunicación interna al proporcionar una plataforma común para compartir información entre departamentos. Además, permiten un análisis detallado de los datos, lo que es esencial para la toma de decisiones informadas. Los sistemas de información también apoyan la planificación estratégica, al proporcionar a los gerentes herramientas para prever tendencias, planificar recursos y alinear los objetivos organizacionales con las oportunidades del mercado. Sin ellos, sería difícil para las organizaciones mantener la coherencia y eficiencia en sus operaciones.",
    size: "w-96 h-64",
    image: img5,
  },
  {
    id: "elementos",
    title: "Elementos Básicos y Funcionales de los Sistemas de Información",
    content:
      "Un Sistema de Información Gerencial se compone de varios elementos básicos y funcionales. El hardware incluye todos los equipos físicos necesarios para que el sistema funcione, como servidores, computadoras y dispositivos de red. El software se refiere a los programas y aplicaciones que procesan datos y generan informes, permitiendo a los usuarios interactuar con el sistema. Los datos son la materia prima del sistema, que se recoge, almacena y procesa para proporcionar información útil. Las personas incluyen tanto a los usuarios que interactúan con el sistema, como a los administradores que se encargan de su mantenimiento y operación. Por último, los procedimientos son los protocolos y procesos que guían el uso del sistema, asegurando que funcione de manera eficiente y efectiva.",
    size: "w-72 h-64",
    image: img6,
  },
];

function App() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (section) => {
    setModalContent(section);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={img}
        alt="Landscape"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <header className="absolute left-0 top-0 z-10 w-full bg-white/10 p-4 shadow-md">
        <h1 className="text-center text-3xl font-bold text-white">
          Introducción a los Sistemas de Información Gerencial
        </h1>
      </header>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative grid grid-cols-3 gap-4 p-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`transform rounded-lg bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 ${section.size} relative cursor-pointer overflow-hidden`}
              style={{
                transform: `translate(${Math.random() * 20}px, ${
                  Math.random() * 20
                }px) rotate(${Math.random() * 10 - 5}deg)`,
              }}
              onClick={() => openModal(section)}
            >
              <img
                src={section.image}
                alt={section.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative bg-black/40 p-6 backdrop-blur-sm">
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="max-h-20 overflow-hidden text-ellipsis text-sm text-gray-200">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalContent && (
        <div
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-[50%] rounded-lg bg-white p-8 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-3 top-2 text-xl font-bold text-gray-500 hover:text-gray-900"
              onClick={closeModal}
            >
              &#10005;
            </button>
            <img
              src={modalContent.image}
              alt={modalContent.title}
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />
            <h2 className="mb-4 text-2xl font-semibold">
              {modalContent.title}
            </h2>
            <p className="text-base">{modalContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
