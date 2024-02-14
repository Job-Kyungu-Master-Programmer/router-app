import usr from '../images/user1.png'

const Profile = () => {
  return (      
    <div className="profil">
         <div className="profil__container">
            <div className="profil__image">
                <img src={usr} alt="" className="profil__img" />
            </div>
            <div className="profil__tex">
                <div className="profil__name">Jeancy Dalos</div>
                <button className="profil__logout">Logout</button>
            </div>
         </div>
    </div>
  )
}

export default Profile