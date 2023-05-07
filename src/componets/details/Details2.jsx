import React from 'react'





const Details2 =()=>{

  return (

    <div>


 {/* Details 2  */}
	<div class="tabs">
        <div class="area-1">
            <div class="tabs-container">
                
                 {/* Tabs Links  */}
                <ul class="nav nav-tabs" id="ariaTabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i class="fas fa-th"></i> On</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i class="fas fa-th"></i> Time</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i class="fas fa-th"></i> WMS</a>
                    </li>
                </ul>
                 {/* end of tabs links  */}
                
                 {/* Tabs Content  */}
                <div class="tab-content" id="ariaTabsContent">

                     {/* Tab  */}
                    <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                        <h4>Control Total de Inventarios</h4>
                        <p>Optimización de los procesos de almacén, multiplicando su eficiencia y 
rentabilidad. Full <a class="green page-scroll" href="#services">Services</a> e integración con SAP y Zebra de ser requerido.</p>
                        
                         {/* Progress Bars  */}
                        <div class="progress-container">
                            <div class="title">Manejo de Suministros 100%</div>
                            <div class="progress">
                                <div class="progress-bar first" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="title">Incremento de Oportunidades 76%</div>
                            <div class="progress">
                                <div class="progress-bar second" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="title">Apoyo a Ventas 90%</div>
                            <div class="progress">
                                <div class="progress-bar third" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                         {/* end of progress-container */}
                         {/* end of progress bars  */}
                        
                    </div> 
                 {/* end of tab-pane  */}
                     {/* end of tab  */}

                     {/* Tab  */}
                    <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                        <ul class="list-unstyled li-space-lg first">
                            <li class="media">
                                <div class="media-bullet">1</div>
                                <div class="media-body"><strong>Flexibilidad,</strong> adaptabilidad y 
escalabilidad on demand</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">2</div>
                                <div class="media-body"><strong>Control total,</strong> sabrás en todo momento cual es tu stock</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">3</div>
                                <div class="media-body"><strong>QOS,</strong> incrementa tus KPI's fácilmente</div>
                            </li>
                        </ul>
                        <ul class="list-unstyled li-space-lg last">
                            <li class="media">
                                <div class="media-bullet">4</div>
                                <div class="media-body"><strong>Gestion de flujos.</strong> Fluidez en los flujos de productos e información</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">5</div>
                                <div class="media-body"><strong>Integración en</strong> cualquier ERP según se requiera</div>
                            </li>
                            <li class="media">
                                <div class="media-bullet">6</div>
                                <div class="media-body"><strong>Rápida implementación</strong> y puesta a punto</div>
                            </li>
                        </ul>
                    </div>
                      {/* end of tab-pane  */}
                    {/* end of tab  */}

                     {/* Tab  */}
                    <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                        <p><strong>OnTime WMS</strong> es un software potente, robusto, versátil, flexible y<a class="green" href="#your-link"> multi plataforma.</a></p>
                        <p><strong>Nuestro objetivo es:</strong> ayudar a tu compañía a desarrollar el 100% de su potencial y <a class="green" href="#your-link">crecimiento.</a></p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Recepción, almacenaje y preparación de pedidos.</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">App tracking de mercadería.</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Evaluación de KPI's.</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Reporte de entregas y control de documentos.</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Auditoria de facturas y proveedores.</div>
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
         <div class="area-2"></div> 
         {/* end of area-2  */}
    </div>
     {/* end of tabs */}
    {/* end of details 2  */}


    </div>
  )
}
export default Details2