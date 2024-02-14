import React, { useEffect, useState } from 'react'
import Auth from './auth/Auth'
import Register from './auth/Register'
import { Route, Routes, useMatch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Users from './components/Users'
import Community from './components/Community'
import Profile from './components/Profile'
import Pub from './components/Pub'
import UserProfil from './components/User_profil'
import Base from './Api/Base'

const App = () => {
   //nous allons definir les variables pour notre formulaire d'ajout des Pub
   const [pub, setPub] = useState([])
   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [text, setText] = useState('')
   //Pour les utilisateur
   const [userRegister, setUserRegister] = useState([])

   useEffect(() => {
       Base.getUser().then(returnIs => {
         setUserRegister(returnIs)
   })

   
   //Ca c'est pour les Pubs
},[])
useEffect(() => {
   Base.getAll().then(returnIs => {
      setPub(returnIs)
   })
},[])

   const match = useMatch('/users/:id') //Pour les utilisateur
   const userId = match ? userRegister.find(us => us.id === Number(match.params.id))
                        : null
                        // console.log(useriD)
   //Pour les Pubs aussi
   const isMatch = useMatch('/pubs/:id')
   const ids = isMatch ? pub.find(p => p.id == (isMatch.params.id)) : null

   //AddPub, pour ajouter des nouvelles pubs*
   const addPub = (e) => {
      try {
         e.preventDefault()
         let dates = new Date()
         const infoPub = {
            title: title,
            content: content,
            text: text,
            like: 0,
            hours: dates.getHours(),
            minutes: dates.getMinutes(),
            years: dates.getFullYear(),
            month: dates.getMonth() + 1,
            day: dates.getDate()
         }
         Base.createPub(infoPub).then(returnIs => {
             setPub(pub.concat(returnIs))
             setTitle('')
             setContent('')
             setText('')
         })
      } catch {
         console.log('Echec')
      }
   }

   //on va utitliser maintenant la suppression des pub 
   const onDelete = id => {
      const pubId = pub.filter(p => p.id !== id)
      Base.delet(id, pubId).then(returnIs => {
          setPub(pub.map(p => p.id !== id ? p : returnIs))
          setPub(pub.filter(p => p.id !== id))
      })
      .catch(error => {
         alert(`Une erreur s'est produite sur l'ID ${id}`)
      })
   }

   //nous allons faire une crementation des likes*
   const likesIs = id => {
      const pubId = pub.find(p => p.id === id)
      const pubCrement = {...pubId, like: pubId.like + 1}
      Base.likes(id, pubCrement ).then(returnIs => {
         setPub(pub.map(p => p.id === id ? returnIs : p))
         // setPub()
      })
   }

  return (
    <div className="app">
         <div className="app__container">
             <div className="app__logins" style={{display:'none'}}>
                ..//
             </div>
             <div className="app__web">
                <div className="dashboard">
                     <div className="dashboard__logo">DEV</div>
                     <div className="dashboard__list">
                        <Header />
                        <Profile />
                     </div>
                </div>
                <Routes>
                   <Route path='/' element={<Home />} />
                   <Route path='/community' element={<Community 
                   pub={pub}
                   title={title}
                   content={content}
                   text={text}
                   setTitle={setTitle}
                   setContent={setContent}
                   setText={setText}
                   addPub={addPub}
                   pubDelete={onDelete}
                   onLike={likesIs}
                     />
                   } />
                   <Route path='/users' element={<Users />} />
                   <Route path='/users/:id' element={<UserProfil user={userId} />} />
                   <Route path='/pubs/:id' element={ <Pub details={pub} />} />
                </Routes>
             </div>
         </div>
    </div>
  )
}

export default App