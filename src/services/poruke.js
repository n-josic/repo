	
import axios from 'axios'
const osnovniUrl = 'http://localhost:3001/poruke'
 
const dohvatiSve = () => {   
    const promise = axios.get(osnovniUrl);
    return promise.then( response => response.data)
}
 
const stvori = noviObjekt => {
    return axios.post(osnovniUrl, noviObjekt)
}
 
const osvjezi = (id, noviObjekt) => {
    return axios.put(`${osnovniUrl}/${id}`, noviObjekt)
}
 
export default { dohvatiSve, stvori, osvjezi}
/* export default {
    dohvatiSve: dohvatiSve,
    stvori: stvori,
    osvjezi: osvjezi
} */