import React from 'react'





const Details1 =()=>{

  return (

    <div>


 {/* Details 1  */}
	<div id="details" class="accordion">
		<div class="area-1">
		</div>
    {/* end of area-1 on same line and no space between comments to eliminate margin white space  */}
    <div class="area-2">
            
             {/* Accordion  */}
            <div class="accordion-container" id="accordionOne">
                <h2>CRM +PLUS. Pensado para todo tipo de negocios</h2>
                <div class="item">
                    <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span class="circle-numbering">1</span><span class="accordion-title">Obtén pronósticos precisos.</span>
                        </span>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
                        <div class="accordion-body">
                            Utiliza datos útiles para tomar mejores decisiones.
                        </div>
                    </div>
                </div>
                  {/* end of item  */}
            
                <div class="item">
                    <div id="headingTwo">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span class="circle-numbering">2</span><span class="accordion-title">Simplifica tareas.</span>
                        </span>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
                        <div class="accordion-body">
                            Logra fluidez para que puedas hacer un acompañamiento de leads más efectivo.
                        </div>
                    </div>
                </div>
                  {/* end of item  */}
            
                <div class="item">
                    <div id="headingThree">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">3</span><span class="accordion-title">Comunicación OMNICANAL.</span>
                        </span>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
                        <div class="accordion-body">
                            Disponible 24 horas por día, 7 días por semana y en multiples plataformas.
                        </div>
                    </div>
                </div> 
                 {/* end of item  */}
            </div>
              {/* end of accordion-container  */}
             {/* end of accordion  */}

		</div> 
     {/* end of area-2  */}
    </div>
      {/* end of accordion */}
    {/* end of details 1 */}



    </div>
  )
}
export default Details1