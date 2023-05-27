import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form1 = () =>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l2457sy', 'template_9v0qkvn', form.current, 'aMTVpNLjonZPkjElR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(


        <div>

{/* Call Me  */}
    <div id="callMe" className="form-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">AGENDA</div>
                        <h2 className="white">Será un gusto comunicarnos contigo</h2>
                        <p className="white">Por favor llena los datos del formulario. Uno de nuestros colaboradores atenderá todas tus inquietudes.</p>
                        <ul className="list-unstyled li-space-lg white">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Asesoria completa sin costo</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Acompañamiento de proyectos</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Soluciones a medida</div>
                            </li>
                        </ul>
                    </div>
                </div>
                  {/* end of col  */}
                <div className="col-lg-6">
                   
                     {/* Call Me Form  */}
                     <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="lname" name="user_name" required/>
                            <label className="label-control" for="lname">Nombre</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="lphone" name="lphone" required/>
                            <label className="label-control" for="lphone">teléfono</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="email" name="user_email" required/>
                            <label className="label-control" for="lemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <select className="form-control-select" name="message" id="lselect" required >
                                <option className="select-option" value="" disabled selected>Interesado en...</option>
                                <option className="select-option" value="Off The Ground">WMS OnTime</option>
                                <option className="select-option" value="Accelerated Growth">CRM +Plus</option>
                                <option className="select-option" value="Market Domination">Otros</option>
                            </select>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox white">
                            <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms" required/>Estoy de acuerdo con la <a className="white" href="privacy-policy.html">Política de Privacidad</a> y <a className="white" href="terms-conditions.html">Términos & Condiciones</a>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button" value="send">ENVIAR</button>
                        </div>
                        <div className="form-message">
                            <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
                    {/* end of call me form  */}
                    
                </div>
                  {/* end of col  */}
            </div> 
             {/* end of row  */}
        </div> 
        {/* end of container */}
    </div>
      {/* end of form-1  */}
     {/* end of call me  */}


                </div>
    )
}


export default Form1
