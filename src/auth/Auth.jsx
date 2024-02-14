import React from 'react'
import logo from '../images/logo.jpeg'
import { tailspin } from 'ldrs'
import { RxCrossCircled } from "react-icons/rx";


tailspin.register()


const Auth = () => {
  return (
        <div className="auth">
             <div className="auth__container container">
                <div className="auth__errors">
                     <div className="auth__errors__bars"><div className="auth__errors__bar"></div></div>
                     <div className="auth__errors__icon"><RxCrossCircled /></div>
                     <div className="auth__errors__content">Your SSO or login not found</div>
                </div>
                 <div className="auth__auth">
                    <div className="auth__logo">
                        <img src={logo} alt="" className="auth__img" />
                    </div>
                    <form action="" className="auth__form">
                        <h1 className="auth__title">Log in with SSO</h1>
                        <label htmlFor="mail">Email</label>
                        <input type="mail" placeholder='johndoe@gmail.com' className="auth__input" />
                        <button className="auth__button">
                            <div className="auth__log">Login</div>
                            <div className="auth__loading">
                            <l-tailspin
                            size="27"
                            stroke="5"
                            speed="0.9" 
                            color="white" 
                            ></l-tailspin>
                            </div>
                        </button>
                        <div className="auth__quest">
                            <div className="auth__content">You do not have an account ?</div>
                            <div className="auth__content auth__signup">Sign up</div>
                        </div>
                    </form>
                 </div>
             </div>
        </div>
  )
}

export default Auth