import './App.css'
import { Terminal,Cards,Title } from './components'
import 'bootstrap/dist/css/bootstrap.css';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { skills } from './constants/skills';
import { references } from './constants/references';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: theme.palette.mode === 'light' ? '#924FC4' : '#308fe8',
    },
  }));

  console.log(references)

  return (
    <>
      <div className="div-principal">
        <Terminal></Terminal>
        <div className="about-me row">
          <Cards style="info-center" col="col-6">
            <div className="photo-circle">
              <div className="photo"></div>
            </div>
            <div className="info-about-me">
              <div className='info-center'>
                <h5>
                  <b>Maria Fernanda Orozco Cuartas</b>
                </h5>
                <p className="occupation">Programadora junior</p>
              </div>
              <p>
              Soy una persona dedicada, independiente, creativa, curiosa y autoconciente.Mi objetivo es alcazar el mayor nivel de perfeccion en mis proyectos. Busco un puesto desafiante donde pueda continuar aprendiendo y retarme a mi misma.
              </p>
              <b className="occupation">Habilidades</b>
              <ul>
                <li>Trabajo en equipo: Ya es lo largo de mi estudio y carrera el trabajo en equipo es indispensable, y en varias situaciones ya trabaje con equipos caoticos que me ayudo a perfeccionar mi trabajo en equipo, dejar de lado el individualismo aceptar y aprender de otras opiniones, hasta en ciertas situaciones tome el rol de lider</li>
                <li>Creatividad: Diria que una de las cosas que mas destaca de mi es la creatividad, es algo que se puede observar de mi trabajo en especial en el prototipado y frontend de los proyectos que realizo (Yo realice toda este curriculum desde 0)</li>
                <li>Aprendizaje rapido: Es uno de mis puntos fuertes, si no conozco algo de una tecnologia o lenguaje no me toma mucho tiempo empezar a manejarla, si le preguntara a compañeros de trabajo y estudio esto seria lo que mas resaltarian de mi</li>
              </ul>

            </div>
          </Cards>
          <Cards col="col-6">
            <Title titulo="Skills" icono="bi bi-code-slash"/>
            {skills.map((item, index) => (
              <div key={index} className="row">
                <div className="col-3">
                  <p>{item.nombre}</p>
                </div>
                <div className="col-9">
                  <BorderLinearProgress
                    variant="determinate"
                    value={item.progress}
                  />
                </div>
              </div>
            ))}
          </Cards>
          <Cards col="col-12 contact">
            <Title titulo="Contacto" icono="bi bi-telephone-fill"/>
            <div className="row">
              <div className="col-6">
                <p>
                  <b>Ciudad de residencia:</b> Marinilla-Antioquia
                </p>
              </div>
              <div className="col-6">
                <p>
                  <b>Direccion:</b>  Cra 26 #26-15 Edificio Sauce de la vega apto 808
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>
                  <b>LinkedIn:</b> Maria Fernanda Orozco
                </p>
              </div>
              <div className="col-6">
                <p>
                  <b>Github:</b> mafeorozco
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>
                  <b>Correos:</b> 
                  <ul>
                    <li>Gmail: lovelacemf72@gmail.com</li>
                    <li>Outlook: maria72orozco@outlook.es</li>
                  </ul>
                </p>
              </div>
              <div className="col-6">
                <p>
                  <b>Telefono:</b> 3107240381
                </p>
              </div>
            </div>
          </Cards>
          </div>
          <hr></hr>
          <div className='aling-center'>
            <Title titulo="Educacion" icono="bi bi-award-fill" />
          </div>
          <div className="row">
            <Cards style="cards-education" col="col-4">
              <b>SENA- En convenio con la Institucion Educativa Román Gómez</b>
              <p>Tecnico en programacion de software, 2021</p>
            </Cards>
            <Cards style="cards-education" col="col-4">
              <b>Servicio Nacional de Aprendizaje (SENA)</b>
              <p>Tecnologo en análisis y desarrollo de software, 2024</p>
            </Cards>
            <Cards style="cards-education" col="col-4">
              <b>Corporación Universitaria Remington</b>
              <p>Ingeniería de sistemas En curso, 6° semestre</p>
            </Cards>
            <hr />
            <div className='aling-center'>
              <Title titulo="Experiencia" icono="bi bi-briefcase-fill"/>
            </div>
            <div className='row'>
              <Cards col="col-12 experince-card">
                <h3>Experiencia profesional</h3>
                <h5>Practicas empresariales: Agosto 2023-Febrero 2024</h5>
                <p><b>Lugar: Tecnoparque nodo Rionegro</b></p>
                <p><b>Descripcion:</b>Tuve la suerte de poder realizar mis practicas en Tecnoparque, ya que en primer lugar tienen un area completamente para el desarrollo de software por lo cual si pude hacer mis practicas de lo que estudie, a manos de programadores semiSenior, ingenieros con maestria, maestros y no solo tuve una gran curva de aprendizaje con las tecnologias que manejan como lo es React, manejo de API, base de datos SQL y noSQL, si no tambien mas a manera profesional como el trabajo en equipo, trabajar con metodologias como fue scrum, hacer charlas en publicos que me ayudo a ganar seguridad, interracion con los clientes de tecnoparque, fue una experiencia muy enriquecedora que me ayudo a estar mas lista para el mundo laboral y de donse sali con muy buenas criticas y recomendaciones.</p>
              </Cards>
            </div>
            <div className='row'>
              
              <Cards col="col-8" style="template-web" isTemplate={true}>
                <div className='header-template-web'>
                  <div className='btn-header-1'>
                    <p>-</p>
                  </div>
                  <div className='btn-header-2'>
                    <div></div>
                  </div>
                  <div className='btn-header-3'>
                  <CloseIcon/>
                  </div>
                </div>
                <div className='body-template-web'>
                  <h3>Experiencia en desarrollo web</h3>
                  <p><b>Proyecto tipo:</b> Es un proyecto realizado para distintos municipios como Abejorral, el Carmen de Viboral, entre otros, que buscaba incentivar el turismo en estos pueblos, la funcion que tenia era mostrar diferentes eventos que realizan estos municipios, rutas y servicios que puedes encontrar, y una tienda con los productos locales, yo estuve implicada en la parte del frontend desde la realizacion del prototipo hasta la programacion de este en React JS</p>
                  <p><b>TecnoDrone:</b> Este aplicativo fue creado para el area de aviacion del sena, este permite llevar un control, seguimiento del uso por parte de los pilotos y mantenimiento de los distintos drones que manejan, en este aplicativo tambien fui parte de la programacion del frontend en React JS</p>
                  <p><b>Eternal Health:</b> Es una pagina web que se hizo para el servicio de salud militar, solo se realizo una primera version esta con los modulos de registrar pacientes, agendar citas y actualizar historia clinica, fue realizado el backend con PHP, el frontend con html y css sin framework y base de datos SQL, en los cuales yo participe en cada uno</p>
                </div>
              </Cards>
              <Cards col="col-4" style="template-movil" isTemplate={true}>
                <div className='header-template-movil'>
                  <div></div>
                </div>
                <div className='body-template-movil'>
                  <h3>Experiencia en desarrollo Movil</h3>
                  <p><b>HCJ: </b> Este es un proyecto en el cual estoy realizando en asociacion con un comerciante internacional, siendo actualmente la unica que esta encargada en la programacion de este, el proyecto trata de una aplicacion movil para solicitar y/o hacer envios con carga pesada, podria explicarse que en caso de que quieras solicitar un servicio de camion porque necesitas trasladar algun/algunos paquetes pesados se puede hacer en la aplicacion, o si eres un conductor independiente o una empresa que quiere poder sus servicios en linea se puede realizar en la aplicacion</p>
                </div>
              </Cards>
              <hr />
              <div className='aling-center'>
                <Title titulo="Referencias" icono="bi bi-people-fill"/>
              </div>
              <div className='list-references'>
                {references.map((item,index)=>(
                  <Cards col="col-4 col-references" style="cards-references" key={index}>
                    <i className="bi bi-person-fill"></i>
                    <p><b>{item.reference}</b></p>
                    <p>{item.name}</p>
                    <p>Cel: {item.cel}</p>
                  </Cards>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App
