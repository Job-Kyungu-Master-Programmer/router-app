import { useParams } from 'react-router-dom'
import us from '../images/2151103665.jpg'

const Pub = ( { details } ) => {
    const ids = useParams().id 
    const pub = details.find(p => p.id == ids)

  return (
   <div className="pub">
       <div className="pub__container">
            <div className="pub__Card">
                 <div className="pub__image">
                    <img src={us} alt="" className="pub__img" />
                 </div>
                 <div className="pub__text">
                    <div className="pub__top">
                        <h1 className="pub__title">{pub.title}</h1>
                        <div className="pub__infos">
                            <div className="pub__hours"> {pub.hours}:{pub.minutes}</div>
                            <div className="pub__data"> {pub.day}-{pub.month}-{pub.years}</div>
                        </div>
                    </div>
                    <div className="pub__bottom">
                         <h3 className="pub__sub__title">#{pub.content}</h3>
                         <p className="pub__content">
                           {pub.text}
                         </p>
                    </div>
                 </div>
            </div>
       </div>
   </div>
  )
}

export default Pub