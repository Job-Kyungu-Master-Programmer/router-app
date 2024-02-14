import { useParams } from 'react-router-dom'
import us from '../images/line.jpeg'

const User_profil = ( {user} ) => {

  return (
    <div className="user-profil">
        <h1 className="user-profil__title">Udpate info user</h1>
         <div className="user-profil__container">
             <div className="user-profil__card">
                 <div className="user-profil__image"></div>
                 <div className="user-profil__text">
                     <div className="user-profil__profil">
                         <img src={us} alt="" className="user-profil__img" />
                     </div>
                     <input type="text" className="user-profil__input" value={user.name} />
                     <input type="text" className="user-profil__input" value={user.lastName} />
                     <input type="text" className="user-profil__input" value={user.mail} />
                     <input type="text" className="user-profil__input" value={user.country} />
                     <input type="text" className="user-profil__input" value={user.profession} />
                     <button className="user-profil__btn">Save</button>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default User_profil