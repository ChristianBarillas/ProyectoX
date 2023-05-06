import React from 'react'

const Contact=()=> {
  return (
    <div >

<main className='main'>



            {/* <!--==================== SUBSCRIBE ====================--> */}
            <section className="subscribe section">
                <div className="subscribe__container container">
        

                    <div>
                    <form>
                        <div>
                           
                            <input type="email" id="user_email" placeholder="Insert your email!"/>
                          </div>
                          <div>
                            
                            <textarea  placeholder="Insert your comment"  id="user_comment" ></textarea>
                          </div>
              
                       
                      </form>

                      <button onclick="guardarInfo()">Send</button>
                       

                    </div> 

                    <p className="subscribe__description">
                       <br/> Do not forget to contact if you have any suggestions, questions or doubts!
                    </p>
                    <a href="#" className="button subscribe__button">
                        Back to top
                    </a>
                </div>
            </section>

            </main>
    </div>
  )
}

export default Contact