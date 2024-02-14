import us from '../images/user1.png'

const Comite_users = () => {
  return (
    <div className="comite">
          <h1 className="comite__title">Amis qui sont dans la plateforme</h1>
        <div className="comite__container">
             <div className="comite__card">
                 <div className="comite__image">
                     <img src={us} alt="" className="comite__img" />
                 </div>
                 <div className="comite__text">
                    <h4 className="comite__name">Jeancy Dalos</h4>
                 </div>
             </div>
             <div className="comite__card">
                 <div className="comite__image">
                     <img src={us} alt="" className="comite__img" />
                 </div>
                 <div className="comite__text">
                    <h4 className="comite__name">Jeancy Dalos</h4>
                 </div>
             </div>
             <div className="comite__card">
                 <div className="comite__image">
                     <img src={us} alt="" className="comite__img" />
                 </div>
                 <div className="comite__text">
                    <h4 className="comite__name">Jeancy Dalos</h4>
                 </div>
             </div>
             <div className="comite__card">
                 <div className="comite__image">
                     <img src={us} alt="" className="comite__img" />
                 </div>
                 <div className="comite__text">
                    <h4 className="comite__name">Jeancy Dalos</h4>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Comite_users