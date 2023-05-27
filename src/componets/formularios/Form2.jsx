import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'





const Form2 = () =>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l2457sy', 'template_aklnef9', form.current, 'aMTVpNLjonZPkjElR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(


        <div>


 {/* Contact  */}
    <div id="contact" className="form-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">CONTACTOS</div>
                        <h2>Preguntas o sugerencias</h2>
                        <p>¿Necesitas mayor información sobre Gosén S&T? por favor llena el siguiente formulario.</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="address"><i className="fas fa-map-marker-alt"></i>Col. Miramonte, Av. Tecana #630. San Salvador, El Salvador.</li>
                            <li><i className="fas fa-phone"></i><a href="tel:0050323006127">+503 2300 6127</a></li>
                            <li><i className="fas fa-phone"></i><a href="https://wa.me/50377852155">+503 7785 2155</a></li>
                            <li><i className="fas fa-envelope"></i><a href="mailto:info@gosensv.com">info@gosensv.com</a></li>
                        </ul>
                        <h3>Síguenos en redes sociales</h3>

                        <span className="fa-stack">
                            <a href="https://www.facebook.com/gosensv">
                                <span className="hexagon"></span>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://twitter.com/gosensv">
                                <span className="hexagon"></span>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                          <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://sv.linkedin.com/company/gosensv/">
                                <span className="hexagon"></span>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                     {/* end of text-container  */}
                </div> 
                 {/* end of col  */}
                <div className="col-lg-6">
                    
                    {/* Contact Form  */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" className="form-control-input" name="user_name" id="cname" required/>
                            <label className="label-control" for="cname">Nombre</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" name="user_email" id="cemail" required/>
                            <label className="label-control" for="cemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" name="message" id="cmessage" required></textarea>
                            <label className="label-control" for="cmessage">Mensaje</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="cterms" value="Agreed-to-Terms" required/>Estoy de acuerdo con la  <Link href="privacy-policy.html">Política de Privacidad</Link> y <a href="terms-conditions.html">Términos & Condiciones</a> 
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button" value="send">ENVIAR</button>
                        </div>
                        <div className="form-message">
                            <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
                     {/* end of contact form  */}

                </div>
                  {/* end of col  */}
            </div> 
            {/* end of row  */}
        </div> 
        {/* end of container  */}
    </div> 
     {/* end of form-2  */}
    {/* end of contact  */}


                </div>
    )
}


export default Form2
