import React from 'react'

const Barra =()=> {
  return (
    <div>
  <header class="header" id="header">
            <nav class="nav container">
              

               

                <div class="nav__menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#home" class="nav__link active-link">
                                <i class='bx bxs-user-pin'></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#story" class="nav__link">
                               <i class='bx bx-history' ></i>
                                <span>Mystory</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#youtube" class="nav__link">
                                <i class='bx bxl-youtube'></i>
                                <span>Youtube</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#proyect" class="nav__link">
                                <i class='bx bx-code'></i>
                                <span>ProjectPortfolio</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="#mediaProyect" class="nav__link">
                                <i class='bx bx-code'></i>
                                <span>ProjectImages</span>
                            </a>
                        </li>
                       
                        <li class="nav__item">
                            <a href="#contact" class="nav__link">
                                <span>Contact</span>
                                <i class='bx bx-phone' ></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Theme change button --> */}
                <i class='bx bx-moon change-theme' id="theme-button"></i>

                <a href="#" class="nav__button button">Top</a>
            </nav>
        </header>

    </div>
  )
}

export default Barra
