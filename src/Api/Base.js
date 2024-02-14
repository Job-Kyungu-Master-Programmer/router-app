import axios from 'axios'

//le lien api* pour se connecter , on a 3 liens ici
const baseUrlPub = 'http://localhost:3001/pubs'
const baseUrlUser = 'http://localhost:3001/users'
const baseUrlPicture = 'http://localhost:3001/photos'


const getAll = () => {
    const request = axios.get(baseUrlPub)
    return request.then(response => response.data)
}

const createPub = newObject => {
    const request = axios.post(baseUrlPub, newObject)
    return request.then(response => response.data)
}

const delet = (id, newObject) => {
    const request = axios.delete(`${baseUrlPub}/${id}`, newObject)
    return request.then(response => response.data)
}

const likes = (id, newObject) => {
    const request = axios.put(`${baseUrlPub}/${id}`, newObject)
    return request.then(response => response.data)
}



//Pour toute les utilisateurs 
const createUser = newObject => {
    const request = axios.post(baseUrlUser, newObject)
    return request.then(response => response.data)
}

const getUser = () => {
    const request = axios.get(baseUrlUser)
    return request.then(response => response.data)
}

export default {
    getAll,
    createPub,
    delet,
    likes,
    createUser,
    getUser,
}
