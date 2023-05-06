import React from 'react'

const Footer =()=> {
  return (
    <div>




        {/* // <!--==================== FOOTER ====================--> */}
        <footer className="footer section">
            <div className="footer__container container grid">
                <div>
                    <a className="footer__logo">
                        AitanaSv   
                    </a>
                    <p className="footer__description">
                    Find your favorite product! <br/> 
                        
                    </p>
                </div>

                <div className="footer__content">
                   
              

                    <div>
                        <h3 className="footer__title">
                            Follow us
                        </h3>

                        <ul className="footer__social">


                            <a href="https://www.facebook.com/cristian.barillas.7923/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-facebook-circle' ></i>
                            </a>
                            <a href="https://www.instagram.com/christian.barillasoficial/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-instagram-alt' ></i>
                            </a>
                            <a href="https://www.linkedin.com/in/christian-barillas-8795a1236/" target="_blank" className="footer__social-link">
                                <i className='bx bxl-linkedin' ></i>
                            </a>    

                            <a href= "https://github.com/ChristianBarillas" target="_blank" className="footer__social-link">
                                <i className='bx bxl-github' ></i>
                            </a>    

                            <a href= "https://www.youtube.com/@christianbarillas664" target="_blank" className="footer__social-link">
                                <i className='bx bxl-youtube'></i>
                            </a>   

                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__info container">
                <span className="footer__copy">
                    &#169; Aitana. All rigths reserved
                </span>

                {/* <!-- <div className="footer__privacy">
                    <a href="#">Terms & Agreements</a>
                    <a href="#">Privacy Policy</a>
                </div> --> */}
            </div>
        </footer>
    </div>
  )
}

export default Footer