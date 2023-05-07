import React from 'react'
import { Link } from 'react-router-dom'





const Form2 = () =>{

    return(


        <div>


 {/* Contact  */}
    <div id="contact" class="form-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <div class="section-title">CONTACTOS</div>
                        <h2>Preguntas o sugerencias</h2>
                        <p>¿Necesitas mayor información sobre Gosén S&T? por favor llena el siguiente formulario.</p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="address"><i class="fas fa-map-marker-alt"></i>Col. Miramonte, Av. Tecana #630. San Salvador, El Salvador.</li>
                            <li><i class="fas fa-phone"></i><a href="tel:0050323006127">+503 2300 6127</a></li>
                            <li><i class="fas fa-phone"></i><a href="https://wa.me/50377852155">+503 7785 2155</a></li>
                            <li><i class="fas fa-envelope"></i><a href="mailto:info@gosensv.com">info@gosensv.com</a></li>
                        </ul>
                        <h3>Síguenos en redes sociales</h3>

                        <span class="fa-stack">
                            <a href="https://www.facebook.com/gosensv">
                                <span class="hexagon"></span>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="https://twitter.com/gosensv">
                                <span class="hexagon"></span>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                          <span class="fa-stack">
                            <a href="#your-link">
                                <span class="hexagon"></span>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="https://sv.linkedin.com/company/gosensv/">
                                <span class="hexagon"></span>
                                <i class="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                     {/* end of text-container  */}
                </div> 
                 {/* end of col  */}
                <div class="col-lg-6">
                    
                    {/* Contact Form  */}
                    <form action="php/contactform-process.php" method="post" id="contactForm" data-toggle="validator" data-focus="false">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="cname" required/>
                            <label class="label-control" for="cname">Nombre</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="cemail" required/>
                            <label class="label-control" for="cemail">Email</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control-textarea" id="cmessage" required></textarea>
                            <label class="label-control" for="cmessage">Mensaje</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group checkbox">
                            <input type="checkbox" id="cterms" value="Agreed-to-Terms" required/>Estoy de acuerdo con la  <Link href="privacy-policy.html">Política de Privacidad</Link> y <a href="terms-conditions.html">Términos & Condiciones</a> 
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">ENVIAR</button>
                        </div>
                        <div class="form-message">
                            <div id="cmsgSubmit" class="h3 text-center hidden"></div>
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
