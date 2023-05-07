import React from 'react'



const Description =()=>{

  return (

    <div>
 
 <div class="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    
                    {/* Card  */}
                    <div class="card">
                        <span class="fa-stack">
                            <span class="hexagon"></span>
                            <i class="fas fa-binoculars fa-stack-1x"></i>
                        </span>
                        <div class="card-body">
                            <h4 class="card-title">Análisis de Ambiente</h4>
                            <p>El punto de partida para una historia de éxito es conocer el status de las diferentes áreas de negocio.</p>
                        </div>
                    </div>
                     {/* end of card  */}

                     {/* Card  */}
                    <div class="card">
                        <span class="fa-stack">
                            <span class="hexagon"></span>
                            <i class="fas fa-list-alt fa-stack-1x"></i>
                        </span>
                        <div class="card-body">
                            <h4 class="card-title">Plan de Desarrollo</h4>
                            <p>Después de completar el análisis ambiental, la siguiente etapa es diseñar y planificar tu estrategia de desarrollo.</p>
                        </div>
                    </div>
                    {/* end of card  */}

                     {/* Card  */}
                    <div class="card">
                        <span class="fa-stack">
                            <span class="hexagon"></span>
                            <i class="fas fa-chart-pie fa-stack-1x"></i>
                        </span>
                        <div class="card-body">
                            <h4 class="card-title">Ejecución y Evaluación</h4>
                            <p>En esta fase te enfocarás en ejecutar el plan de acciones y evaluar los resultados después de cada mejora.</p>
                        </div>
                    </div>
                    {/* end of card  */}

                </div> 
                {/* end of col  */}
            </div> 
            {/* end of row  */}
        </div>  
        {/* end of container */}
    </div> 
    {/* end of cards-1 */}
  



    </div>
  )
}
export default Description