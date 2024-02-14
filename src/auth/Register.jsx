import React, { useState } from 'react'
import { tailspin } from 'ldrs'
import { RxCrossCircled } from "react-icons/rx";
import Base from '../Api/Base';


tailspin.register()

const Register = () => {
  const [user, setUser] = useState([])
  const [name, setName] = useState('name')
  const [lastName, setLastName] = useState('last-nae')
  const [mail, setMail] = useState('mail')
  const [password, setPassword] = useState('password')
  const [country, setCountry] = useState('country')
  const [profession, setProfession] = useState('profession')

  //on va maintenant travailler sur la creat* des compte utilisateurs
  const addUser = (e) => {
      e.preventDefault()
      const infosUser = {
         name: name,
         lastName: lastName,
         mail: mail,
         password: password,
         country: country,
         profession: profession
      }
      Base.createUser(infosUser).then(returned => {
          setUser(user.concat(returned))
          setName('')
          setLastName('')
          setMail('')
          setPassword('')
          setCountry('')
          setProfession('')
      }) 
  }

  return (
    <div className="reg">
        <div className="reg__container">
        <div className="errors auth__errors">
            <div className="auth__errors__bars"><div className="auth__errors__bar"></div></div>
              <div className="auth__errors__icon"><RxCrossCircled /></div>
               <div className="auth__errors__content">Something went wrong, please try again later</div>
            </div>
            <div className="reg__reg">
                <form action="" className="reg__form">
                    <h1 className="reg__title">Devenez Membre</h1>
                    <div className="reg__form__infos">
                        <input type="text" className="reg__input" placeholder='John' />
                        <input type="text" className="reg__input" placeholder='Doe' />
                        <input type="mail" className="reg__input" placeholder='Johndoe@gmail.com' />
                        <input type="text" className="reg__input" placeholder='Password' />
                        <input type="text" className="reg__input" placeholder='Country' />
                        <input type="text" className="reg__input" placeholder='Profession' />
                        <button className="auth__button">
                            <div className="auth__log">Register in platform</div>
                            <div className="auth__loading">
                            <l-tailspin
                            size="27"
                            stroke="5"
                            speed="0.9" 
                            color="white" 
                            ></l-tailspin>
                            </div>
                        </button>
                    </div>
                    <div className="auth__quest">
                            <div className="auth__content">Do you already have an account ?</div>
                            <div className="auth__content auth__signup">Sign in</div>
                        </div>
                </form>
            </div>
            <div className="reg__image">
                <div className="reg__image__image"></div>
            </div>
        </div>
    </div>
  )
}

export default Register