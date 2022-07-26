import axios from 'axios';
import createAuth from './configs'

export default async function getCharacters() {
    try {        
        const axiosResponse = await axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
            ...createAuth(),
        }
        })
        return axiosResponse.data
    } catch (error) {
        alert("ERROR - marvel.getCharacters()")
     console.log(error);
    }
}