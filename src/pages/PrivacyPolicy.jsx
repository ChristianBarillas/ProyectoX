import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Modal from '../componets/modals/Modal';





const PrivacyPolicy = () =>{

    const [showModal, setShowModal] = useState(false);

    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hujac84', 'template_92ige3s', form.current, 'NvAnm4cJfNm-WENuh')
      .then((result) => {
        
       if(result.text === 'OK'){
   setShowModal(true);
       }
       
      })
      .catch((error) => {
       alert("error al enviar formulario, vuelva a intentar más tarde, si el problema persiste llamenos al +503 7785 2155 o +503 2300 6127");
      });
  };


    return(


        <div>

 {/* Header  */}
    <header id="header" className="ex-header">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Política de Privacidad</h1>
                </div>    {/* end of col  */}
            </div>{/* end of row  */}
        </div>  {/* end of container */}
    </header> 
    {/* end of ex-header */}
     {/* end of header */}


     {/* Breadcrumbs  */}
    <div className="ex-basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs">
                        <Link to='/'>Home</Link><i className="fa fa-angle-double-right"></i><span>Políticas</span>
                    </div> 
                     {/* end of breadcrumbs  */}
                </div>  {/* end of col  */}
            </div> {/* end of row  */}
        </div> {/* end of container  */}
    </div>    {/* end of ex-basic-1 */}
    {/* end of breadcrumbs */}


    {/* Privacy Content  */}
    <div className="ex-basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <h3>Datos privados que recibimos y recopilamos</h3>
                        <p>Gosén S&T respeta su derecho de privacidad. Esta política resume qué información personal podemos recoger, de qué manera podemos utilizar esta información y otros temas importantes relacionados con su privacidad y protección de datos. Nuestra política es cumplir con todas las leyes de privacidad y de protección de datos vigentes. Este compromiso refleja el valor que le damos al hecho de obtener y conservar la confianza de nuestros clientes, socios comerciales y demás personas que comparten su información personal con nosotros.</p>
                        <p>Esta se aplica a todos los sitios de Internet y/o aplicaciones móviles administrados por GOSEN S&T por ejemplo:</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-unstyled li-space-lg indent">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Dirección IP de conexión, en algunos casos el nombre de su ISP o proveedor local de servicios de Internet</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">MacID del dispositivo de ingreso a las diferentes plataformas</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Fecha y hora de conexión</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Zona horaria y región geográfica</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Número de conexiones por usuario y Cookies. También el sistema operativo del dispositivo usado para interconectar con las diferentes plataformas o apps móviles pertenecientes a Gosén</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Log de actividades dentro de las plataformas pertenecientes a Gosén S&T </div>
                                    </li>
                                </ul>
                            </div>  {/* end of col  */}

                            <div className="col-md-6">
                                <ul className="list-unstyled li-space-lg indent">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Su dirección de facturación y cualquier otra información necesaria para completar cualquier transacción financiera y al realizar compras a través de los servicios electrónicos de Gosén, también podemos recopilar su tarjeta de crédito/débito o información de PayPal</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Contenido generado por el usuario (como mensajes, publicaciones, comentarios, páginas, perfiles, imágenes, fuentes o comunicaciones intercambiadas en las Plataformas admitidas)</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Logos o imagenes compartidas en su perfil de ingreso a plataforma</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Información diversa de actividad dentro de las plataformas pertenecientes a Gosén S&T </div>
                                    </li>
                                </ul>
                            </div>  {/* end of col  */}
                        </div>   {/* end of row */}
                    </div>   {/* end of text-container */}
                    
                    <div className="text-container">
                        <h3>Especificaciones sobre lo anterior</h3>
                        <p>Gosén S&T utiliza la información descrita con los siguientes propósitos:</p>
                        <ol className="li-space-lg">
                            <li>Para idenficar los usuarios que hacen uso de las plataformas</li>
                            <li>Para permitirnos operar los servicios y proporcionárselos</li>
                            <li>Para verificación y confirmación de compras, facturación, seguridad y autenticación de nuestros usuarios en cualquiera de nuestras plataformas</li>
                            <li>Para analizar el sitio web o los otros servicios y la información sobre nuestros visitantes y usuarios, incluida la investigación de la demografía y el comportamiento, para mejorar nuestro contenido y/o servicios</li>
                            <li>Para comunicarnos con usted y dar seguimiento a su cuenta, brindarle asistencia y/o servicio al cliente, incluida la respuesta a sus comentarios y preguntas</li>
                            <li>Para compartir estadísticas agregadas (no identificables) sobre los usuarios de los servicios con posibles anunciantes y socios</li>
                            <li>Para mantenerlo informado sobre los servicios, características, encuestas, boletines, ofertas, concursos y eventos que creemos que pueden resultarle útiles o que nos ha solicitado</li>
                            <li>Para venderle o comercializarle productos y servicios de Gosén S&T </li>
                            <li>Para comprender mejor sus necesidades y las necesidades de los usuarios en conjunto, diagnosticar problemas, analizar tendencias, mejorar las características y la facilidad de uso de los servicios, comprender y comercializar mejor a nuestros clientes y usuarios</li>
                            <li>Para mantener seguro el servicio proporcionado</li>
                            <li>También utilizamos información no identificable recopilada con fines estadísticos para realizar un seguimiento del número de visitas a los servicios con el fin de introducir mejoras y mejorar la usabilidad</li>
                        </ol>
                    </div>    {/* end of text-container  */}

                    <div className="text-container">
                        <h3>Manejo de contenido del cliente</h3>
                        <p>Por su naturaleza, los servicios permiten a nuestros clientes promocionar sus productos y los servicios se integran con cientos de aplicaciones comerciales que ya utilizan, todo en un solo lugar.</p>
                        <p>Los servicios ayudan a nuestros clientes a promocionar sus productos y servicios, marketing y publicidad; atraer audiencias; programar y publicar mensajes y analizar los resultados.</p>
                    </div>  {/* end of text container  */}

                    <div className="text-container">
                        <h3>Consentimiento de uso</h3>
					    <p className="mb-5">Al usar cualquiera de los servicios y/o plataformas, al enviar o recopilar cualquier Información personal de sus clientes a través de ellos, usted acepta: la recopilación, transferencia, almacenamiento y uso de su información en la manera establecida en esta Política de privacidad.</p>
                    </div>  {/* end of text-container  */}
                                       
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-container last">
                                <h3>Consulta tu información</h3>
                                <p>Gosén S&T utiliza tecnología de seguimiento en Landing Page, en las aplicaciones y plataformas, incluidos los identificadores de aplicaciones móviles y una identificación de usuario única de Gosén para ayudarnos a reconocerlo en los diferentes servicios, para monitorear el uso, enrutamiento del tráfico web y para personalizar y mejorar los servicios.</p>
                                <p> Al visitar el Landing Page, usted acepta el uso de cookies en su navegador y correos electrónicos basados en HTML. Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita un sitio web. Al usar cualquiera de ellos o enviar o recopilar cualquier información personal a través de los servicios, usted acepta el uso de dicha Información Personal</p>
                            </div> {/* end of text container  */}
                        </div>   {/* end of col */}
                        <div className="col-md-6">

                             {/* Privacy Form  */}
                            <div className="form-container">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" name="user_name" id="pname" required/>
                                        <label className="label-control" htmlFor="pname">Nombre</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control-input" name="user_email" id="pemail" required/>
                                        <label className="label-control" htmlFor="pemail">Email</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control-select" id="pselect" name="message" required>
                                            <option className="select-option" value="" disabled defaultValue>Seleccione...</option>
                                            <option className="select-option" value="Delete data">Consulta de Información</option>
                                            <option className="select-option" value="Show me data">Borrado Permanente</option>
                                        </select>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group checkbox">
                                        <input type="checkbox" id="pterms" value="Agreed-to-Terms" required/>Estoy de acuerdo con la <Link to='/privacy-policy'>Política de Privacidad</Link> y <Link to='/terms-conditions'>Términos & Condiciones</Link>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="form-control-submit-button" value="send">ENVIAR</button>
                                    </div>
                                    <div className="form-message">
                                        <div id="pmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </form>
                            </div>  {/* end of form container  */}
                             {/* end of privacy form  */}

                        </div>  {/* end of col */}
                    </div>   {/* end of row  */}
                    <Link className="btn-outline-reg back" to='/'>ATRAS</Link>
                </div>     {/* end of col */}
            </div>   {/* end of row  */}
        </div>  {/* end of container  */}
    </div>   {/* end of ex-basic-2  */}
     {/* end of privacy content  */}


     {/* Breadcrumbs  */}
    <div className="ex-basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs">
                        <Link to='/'>Home</Link><i className="fa fa-angle-double-right"></i><span>Políticas</span>
                    </div> {/* end of breadcrumbs  */}
                </div> {/* end of col  */}
            </div>   {/* end of row  */}
        </div>  {/* end of container  */}
    </div>{/* end of ex-basic-1  */}
     {/* end of breadcrumbs  */}

     <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}


export default PrivacyPolicy
