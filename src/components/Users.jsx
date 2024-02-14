import { useEffect, useState } from 'react'
import uss from '../images/user1.png'
import Base from '../Api/Base'
import { Link } from 'react-router-dom'

const Users = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    Base.getUser().then(returned => {
        setUser(returned)
    })
  },[])

  return (
    <div className="users">
        <div className="cards">
          {user.map(us => 
            <Link key={us.id} to={`/users/${us.id}`} className="card">
              <div className="card-image">
                <img src={uss} alt='' />
              </div>
              <div className="card-content">
                <h3 className="card-title">{us.name}</h3>
                <p>{us.profession}</p>
              </div>
              <div className="card-actions">
                <button>Learn More</button>
              </div>  
          </Link>
          )}    
        </div>
    </div>
  )
}

export default Users