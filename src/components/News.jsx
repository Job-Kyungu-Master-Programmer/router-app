import us from '../images/screen.png'

import br from '../images/ampoul.jpeg'
import line from '../images/line.jpeg'
import pl from '../images/2151103665.jpg'


const News = () => {
  return (
    <div className="news">
        <div className="news__container">
            <div className="news__card">
                <div className="news__image">
                    <img src={br} alt="" className="news__img" />
                </div>
                <div className="news__text">
                    <h3 className="news__name">Student in Russia</h3>
                    <span className="news__span">Voir les anciennes nouvelles</span>
                </div>
            </div>
            <div className="news__card">
                <div className="news__image">
                    <img src={line} alt="" className="news__img" />
                </div>
                <div className="news__text">
                    <h3 className="news__name">Student in Russia</h3>
                    <span className="news__span">Voir les anciennes nouvelles</span>
                </div>
            </div>
            <div className="news__card">
                <div className="news__image">
                     <img src={pl} alt="" className="news__img" />
                </div>
                <div className="news__text">
                    <h3 className="news__name">Student in Russia</h3>
                    <span className="news__span">Voir les anciennes nouvelles</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News