import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Details1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div>
      <div id="details" className="accordion">
        <div className="area-1"></div>
        <div className="area-2">
          <div className="accordion-container" id="accordionOne">
            <h2 data-aos="fade-up">CRM +PLUS. Pensado para todo tipo de negocios</h2>
            <div className="item">
              <div id="headingOne">
                <span
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  role="button"
                >
                  <span className="circle-numbering">1</span>
                  <span className="accordion-title" data-aos="fade-right">
                    Obtén pronósticos precisos.
                  </span>
                </span>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionOne"
              >
                <div className="accordion-body" data-aos="fade-up">
                  Utiliza datos útiles para tomar mejores decisiones.
                </div>
              </div>
            </div>
            <div className="item">
              <div id="headingTwo">
                <span
                  className="collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  role="button"
                >
                  <span className="circle-numbering">2</span>
                  <span className="accordion-title" data-aos="fade-right">
                    Simplifica tareas.
                  </span>
                </span>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionOne"
              >
                <div className="accordion-body" data-aos="fade-up">
                  Logra fluidez para que puedas hacer un acompañamiento de leads más efectivo.
                </div>
              </div>
            </div>
            <div className="item">
              <div id="headingThree">
                <span
                  className="collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  role="button"
                >
                  <span className="circle-numbering">3</span>
                  <span className="accordion-title" data-aos="fade-right">
                    Comunicación OMNICANAL.
                  </span>
                </span>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionOne"
              >
                <div className="accordion-body" data-aos="fade-up">
                  Disponible 24 horas por día, 7 días por semana y en multiples plataformas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details1;
