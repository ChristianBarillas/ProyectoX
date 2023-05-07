import React from 'react'





const Form1 = () =>{

    return(


        <div>

{/* Call Me  */}
    <div id="callMe" class="form-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <div class="section-title">AGENDA</div>
                        <h2 class="white">Será un gusto comunicarnos contigo</h2>
                        <p class="white">Por favor llena los datos del formulario. Uno de nuestros colaboradores atenderá todas tus inquietudes.</p>
                        <ul class="list-unstyled li-space-lg white">
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Asesoria completa sin costo</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Acompañamiento de proyectos</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Soluciones a medida</div>
                            </li>
                        </ul>
                    </div>
                </div>
                  {/* end of col  */}
                <div class="col-lg-6">
                   
                     {/* Call Me Form  */}
                    <form action="php/callmeform-process.php" method="post" id="callMeForm" data-toggle="validator" data-focus="false">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="lname" name="lname" required/>
                            <label class="label-control" for="lname">Nombre</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="lphone" name="lphone" required/>
                            <label class="label-control" for="lphone">Tel.</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="lemail" name="lemail" required/>
                            <label class="label-control" for="lemail">Email</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <select class="form-control-select" id="lselect" required>
                                <option class="select-option" value="" disabled selected>Interesado en...</option>
                                <option class="select-option" value="Off The Ground">WMS OnTime</option>
                                <option class="select-option" value="Accelerated Growth">CRM +Plus</option>
                                <option class="select-option" value="Market Domination">Otros</option>
                            </select>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group checkbox white">
                            <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms" required/>Estoy de acuerdo con la <a class="white" href="privacy-policy.html">Política de Privacidad</a> y <a class="white" href="terms-conditions.html">Términos & Condiciones</a>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">ENVIAR</button>
                        </div>
                        <div class="form-message">
                            <div id="lmsgSubmit" class="h3 text-center hidden"></div>
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
