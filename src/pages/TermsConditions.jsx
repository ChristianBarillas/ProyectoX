import React from 'react'
import { Link } from 'react-router-dom'





const TermsConditions = () =>{

    return(


        <div>

{/* Header  */}
    <header id="header" className="ex-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Términos y Condiciones</h1>
                </div>   {/* end of col  */}
            </div>    {/* end of row  */}
        </div>   {/* end of container  */}
    </header>   {/* end of ex-header  */}
    {/* end of header  */}


     {/* Breadcrumbs  */}
    <div className="ex-basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs">
                        <Link to='/'>Home</Link><i className="fa fa-angle-double-right"></i><span>Términos y Condiciones</span>
                    </div> {/* end of breadcrumbs  */}
                </div>  {/* end of col  */}
            </div>   {/* end of row  */}
        </div> {/* end of container  */}
    </div> {/* of ex-basic-1 */}
    {/* end of breadcrumbs  */}

    {/* Terms Content  */}
    <div className="ex-basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-container">
                        <h3>Condiciones de uso</h3>
                        <p>Lea detalladamente las siguientes condiciones de uso antes de usar este sitio, incluyendo cualquier contenido vinculado al mismo. Estas condiciones de uso también aplican cuando utiliza una aplicación, un navegador de dispositivo móvil u otra tecnología para acceder a cualquier característica, funcionalidad, contenido o información que esté disponible o provista en este sitio. Debe revisar los términos de uso con regularidad, ya que pueden cambiar en cualquier momento. Las referencias a "usted" o "su" significarán la persona que accede o utiliza este sitio. Las referencias a "Gosén S&T.", "nosotros", "nos" o "nuestro" significarán Gosén S&T, sus subsidiarias y/o afiliados.</p>
                        <p>Cuando se registra por primera vez en una plataforma de Gosén S&T y al utilizar los servicios, recopilamos cierta <a className="green" href="#your-link">Información Personal</a>, como:</p>
                        <ul className="list-unstyled li-space-lg indent">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">El área geográfica donde usa su computadora y dispositivos móviles</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Su nombre completo, de usuario, dirección de correo electrónico y otros datos de contacto</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">ID de usuario único que se le asigna al registrarse en nuestros servicios</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Otra información opcional parte del perfil de su cuenta</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Su dirección IP y cuando corresponda, la marca de tiempo relacionada con su consentimiento y confirmación de aceptacion</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Otra información enviada por usted o los representantes de su organización a través de varios métodos</div>
                            </li>
                        </ul>
                    </div>      {/* end of text-container  */}
                    
                    <div className="text-container">
                        <h3>Condiciones Especiales</h3>
                        <p>Bajo ninguna circunstancia, Gosén S&T será responsable de daños directos, indirectos, especiales, incidentales y/o consecuentes, incluidos entre otros: la pérdida de datos o ganancias, que surjan del mal uso o la imposibilidad de usar los materiales de este sitio. Incluso si Gosén S&T o un representante autorizado han sido informados de la posibilidad de tales daños. Si la utilización de materiales de este sitio resulta en la necesidad de servicios adicionales, reparación o corrección de equipos o datos, usted asume los costos correspondientes.</p>
                    </div>  {/* end of text-container  */}

                    <div className="text-container">
                        <h3>Licencias de uso</h3>
                        <p>Todas nuestras plantillas pueden o no heredar licencia pública general GNU de HTML. Todos los archivos .PSD y CSS se empaquetan por separado y no tienen licencia GPL 2.0. En su lugar, estos archivos heredan la licencia de uso personal de Gosén S&T. Estos archivos se proporcionan a todos los clientes para uso personal. No puede ofrecerlos, <a className="green" href="#terms-conditions.html">modificados o sin modificar</a>, para su redistribución o reventa de ningún tipo. No puede usar uno de nuestros temas y/o contenido en un dominio HTML personal. </p>
                        <p>Los servicios ayudan a nuestros clientes a promocionar sus productos y servicios, marketing y publicidad, atraer audiencias, programar y publicar mensajes, y analizar resultados.</p>
                    </div>  {/* end of text-container  */}

                    <div className="text-container">
                        <h3>Herramientas y sitios de terceros</h3>
                        <p>Gosén S&T puede utilizar proveedores de servicios de terceros para proporcionar ciertas herramientas y / o programas, algunos de los cuales pueden estar alojados en un servidor o en un sitio que otros hayan desarrollado de forma independiente. Como tal, al acceder a este sitio, puede estar vinculado a otros servidores. El acceso a otros sitios o el uso de herramientas o programas de terceros en este sitio están sujetos a todos los términos y condiciones que se encuentran en dichos sitios.</p>
                    </div> {/* end of text-container  */}
                    
                    <div className="text-container last">
                        <h3>Privacidad</h3>
                        <p>Gosén S&T se compromete a respetar la privacidad de su información personal. Para obtener más información sobre cómo protegemos su información personal, consulte nuestra <a className="green" href="privacy-policy.html">Política de Privacidad</a> en línea. Sin embargo, es importante tener en cuenta que el Internet no es un medio de comunicación seguro. Por este motivo, no podemos garantizar la privacidad de la información que ingrese, nos envíe o solicite que le sea enviada durante su transmisión a través de Internet. No seremos responsables de ningún daño que usted u otros puedan sufrir como resultado de la pérdida de la confidencialidad de dicha información en el curso de la transmisión a través de Internet.</p>
                        <Link className="btn-outline-reg" to="/">ATRAS</Link>
                    </div>  {/* end of text-container  */}
                </div>
            </div>  {/* end of row */}
        </div>   {/* end of container  */}
    </div> 
    {/* end of ex-basic  */}
    {/* end of terms content */}

    
     {/* Breadcrumbs  */}
    <div className="ex-basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumbs">
                        <Link to='/'>Home</Link><i className="fa fa-angle-double-right"></i><span>Términos y Condiciones</span>
                    </div>  {/* end of breadcrumbs  */}
                </div> {/* end of col  */}
            </div> {/* end of row  */}
        </div>   {/* end of container */}
    </div>  {/* end of ex-basic-1  */}
     {/* end of breadcrumbs  */}

        </div>
    )
}


export default TermsConditions
