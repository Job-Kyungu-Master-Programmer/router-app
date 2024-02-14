import React from 'react'
import us from '../images/Group 1474 (1).png'

const Home = () => {
  return (
    <div className="home">
         <div className="home__container">
             <div className="home__text">
                 <h1 className="home__title">
                     Community Dev Africo
                 </h1>
                 <div className="home__content">
                 Mutual support and mentoring: In a community, developers can help each other, share tips and resources, and provide mentoring.
                 This can be especially useful for new developers or those looking to hone their skills.
                 </div>
                 <button className="home__button">
                     Community Dev
                 </button>
             </div>
             <div className="home__image">
                    <img src={us} alt="" className="home__image__img" />
             </div>
         </div>
    </div>
  )
}

export default Home