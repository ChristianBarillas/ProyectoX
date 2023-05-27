import React from 'react'
import aboutImg from '/src/assets/img/about1.jpg'
import CountUp from 'react-countup';




const Informative1 = () =>{

    return(
        <div>

            {/* Header */}
            <header id="header" className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Conoce Nuestro Trabajo</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* About */}
            <div id="about" className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-6">
                            <div className="image-container">
                                <img className="img-fluid" src={aboutImg} alt="alternative"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-6">
                            <div className="text-container">
                                <div className="section-title">SOMOS</div>
                                <h2>Apasionados en lo que hacemos</h2>
                                <p>Nuestro objetivo es proporcionarte productos y servicios de calidad, en el momento justo y acorde a tus metas de crecimiento.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Creamos impactos positivos en tus proyectos</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">Seremos el aliado perfecto de tu empresa</div>
                                    </li>
                                </ul>

                                {/* Counter */}
                                <div id="counter">
                                    <div className="cell">
                                        <CountUp start={0} end={24} duration={2} separator="," decimals={0} className="counter-value number-count" />
                                        <div className="counter-info">Horas<br/>al día</div>
                                    </div>
                                    <div className="cell">
                                        <CountUp start={0} end={7} duration={2} separator="," decimals={0} className="counter-value number-count" />
                                        <div className="counter-info">Días<br/>por semana</div>
                                    </div>
                                    <div className="cell">
                                        <CountUp start={0} end={365} duration={2} separator="," decimals={0} className="counter-value number-count" />
                                        <div className="counter-info">Días<br/>al año</div>
                                    </div>
                                </div>
                                {/* end of counter */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of about */}
        </div>
    )
}

export default Informative1