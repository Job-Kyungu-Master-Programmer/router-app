import React, { useState } from 'react'
import News from './News'
import Comite_users from './Comite_users'
import { GiLoveMystery } from "react-icons/gi";
import us from '../images/user1.png'
import { FaRegImages } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Community = ({
    pub, 
    title,
    content,
    text,
    setTitle,
    setContent,
    setText,
    addPub,

    pubDelete,
    onLike,
}) => {
  const [isPop, setIsPop] = useState(false)//For open and closed Pop
  
  return (
    <div className="comty">
        <div className="comty__container">
            <News />
             <div className="coms">
                  <div className="coms__container">
                      <div className="coms__top">
                        <button
                          onClick={() => setIsPop(true)}
                         className="coms__button">What are you thinking about ?</button>
                        <form action="" className="coms__form_input">
                            <input type="file" className="coms__input" />
                            <div className="coms__form_btn">
                                <FaRegImages />
                            </div>
                        </form>
                    </div>
                    {/* Form for addPub */}
                      <div className={isPop ? 'pop__form__opened' : 'pop'}>
                      <div 
                        onClick={() => setIsPop(false)}
                      className="clicking"></div>
                          <form onSubmit={addPub} className='pop__form'>
                              <h1 className="pop__title">Create Status</h1>
                              <input type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Title'
                                className="pop__input pop_titles" />
                               <input type="text"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder='Content'
                                className="pop__input" />
                                <textarea placeholder='Write your status'
                                 value={text}
                                 onChange={(e) => setText(e.target.value)}
                                 className="pop__textarea"></textarea>
                                <button type='submit' onClick={() => setIsPop(false)} className="pop__submit">Create</button>
                          </form>
                      </div>
                    {/* Les Pub = publication */}
                    <div className="pubs">
                        {pub.map(pu =>
                        <div className="pubs__card" key={pu.id}>
                             <div className="pubs__user">
                                  <img src={us} alt="" className="pubs__user__img" />
                                  <h5 className="pubs__user__name">Name User</h5>
                             </div>
                             <div className="pubs__text">
                                 <Link to={`/pubs/${pu.id}`} className="pubs__title">{pu.title}</Link>
                                  <span>...</span>
                                  <div className="pubs__bottom">
                                      <span 
                                        onClick={() => onLike(pu.id)}
                                        className="pubs__like">
                                          <GiLoveMystery />
                                          <em>{pu.like}</em>
                                      </span>
                                      <span 
                                      onClick={() => pubDelete(pu.id) }
                                      className="pubs__delete">
                                            <AiOutlineDelete />
                                      </span>
                                      <span className="pubs__date">{pu.day}-{pu.month}-{pu.years}</span>
                                  </div>
                             </div>
                         </div>
                        )}
                    </div>
                  </div>
             </div>
            <Comite_users />
        </div>
    </div>
  )
}

export default Community