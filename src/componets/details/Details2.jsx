import React from "react"



const Details2 =()=>{
    
    
  return (

    <div className="scroll-hidden">


 {/* Details 2  */}
	<div className="tabs " >
        <div className="area-1">
            <div className="tabs-container">
                
                 {/* Tabs Links  */}
                <ul className="nav nav-tabs" id="ariaTabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-th"></i> On</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-th"></i> Time</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-th"></i> WMS</a>
                    </li>
                </ul>
                 {/* end of tabs links  */}
                
                 {/* Tabs Content  */}
                <div className="tab-content" id="ariaTabsContent" >

                     {/* Tab  */}
                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                        <h4>Control Total de Inventarios</h4>
                        <p>Optimización de los procesos de almacén, multiplicando su eficiencia y 
rentabilidad. Full <a className="green page-scroll" href="#services">Services</a> e integración con SAP y Zebra de ser requerido.</p>
                        
                         {/* Progress Bars  */}
                        <div className="progress-container" >
                            <div className="title">Manejo de Suministros 100%</div>
                            <div className="progress">
                                <div className="progress-bar first" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="title">Incremento de Oportunidades 76%</div>
                            <div className="progress">
                                <div className="progress-bar second" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="title" >Apoyo a Ventas 90%</div>
                            <div className="progress">
                                <div className="progress-bar third" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                         {/* end of progress-container */}
                         {/* end of progress bars  */}
                        
                    </div> 
                 {/* end of tab-pane  */}
                     {/* end of tab  */}

                     {/* Tab  */}
                    <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                        <ul className="list-unstyled li-space-lg first">
                            <li className="media">
                                <div className="media-bullet">1</div>
                                <div className="media-body"><strong>Flexibilidad,</strong> adaptabilidad y 
escalabilidad on demand</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">2</div>
                                <div className="media-body"><strong>Control total,</strong> sabrás en todo momento cual es tu stock</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">3</div>
                                <div className="media-body"><strong>QOS,</strong> incrementa tus KPI's fácilmente</div>
                            </li>
                        </ul>
                        <ul className="list-unstyled li-space-lg last">
                            <li className="media">
                                <div className="media-bullet">4</div>
                                <div className="media-body"><strong>Gestion de flujos.</strong> Fluidez en los flujos de productos e información</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">5</div>
                                <div className="media-body"><strong>Integración en</strong> cualquier ERP según se requiera</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">6</div>
                                <div className="media-body"><strong>Rápida implementación</strong> y puesta a punto</div>
                            </li>
                        </ul>
                    </div>
                      {/* end of tab-pane  */}
                    {/* end of tab  */}

                     {/* Tab  */}
                    <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3" >
                        <p><strong>OnTime WMS</strong> es un software potente, robusto, versátil, flexible y<a className="green" href="#your-link"> multi plataforma.</a></p>
                        <p><strong>Nuestro objetivo es:</strong> ayudar a tu compañía a desarrollar el 100% de su potencial y <a className="green" href="#your-link">crecimiento.</a></p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Recepción, almacenaje y preparación de pedidos.</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">App tracking de mercadería.</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Evaluación de KPI's.</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Reporte de entregas y control de documentos.</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Auditoria de facturas y proveedores.</div>
                            </li>
                        </ul>
                    </div>
                     {/* end of tab-pane  */}
                    {/* end of tab  */}

                </div>
                  {/* end of tab-content  */}
                 {/* end of tabs content  */}

            </div> 
            {/* end of tabs-container */}
        </div>
         {/* end of area-1 on same line and no space between comments to eliminate margin white space */}
         <div className="area-2"></div> 
         {/* end of area-2  */}
    </div>
     {/* end of tabs */}
    {/* end of details 2  */}


    </div>
  )
}
export default Details2