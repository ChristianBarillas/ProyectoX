import React from 'react'
import IMG1 from '/src/assets/img/animation-design5.svg'
import IMG2 from '/src/assets/img/animation-design3.svg'
import IMG3 from '/src/assets/img/animation-design4.svg'





const Description1 =()=>{

  return (

    <div>
 
 <div className="cards-1 ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 img-group">
                    
                    {/* Card  */}
                    <div className="card img-group scroll-hidden">
                       
                        <img src={IMG1}/>

                        <div className="card-body">
                            <h4 className="card-title">Análisis de Ambiente</h4>
                            <p>El punto de partida para una historia de éxito es conocer el status de las diferentes áreas de negocio.</p>
                        </div>
                    </div>
                     {/* end of card  */}

                     {/* Card  */}
                    <div className="card img-group scroll-hidden">

                    <img src={IMG2}/>
                
                        <div className="card-body">
                            <h4 className="card-title">Plan de Desarrollo</h4>
                            <p>Después de completar el análisis ambiental, la siguiente etapa es diseñar y planificar tu estrategia de desarrollo.</p>
                        </div>
                    </div>
                    {/* end of card  */}

                     {/* Card  */}
                    <div className="card img-group scroll-hidden">
                       
                    <img src={IMG3}/>

                        <div className="card-body">
                            <h4 className="card-title">Ejecución y Evaluación</h4>
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
export default Description1