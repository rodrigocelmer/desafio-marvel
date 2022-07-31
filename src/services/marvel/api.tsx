import axios from 'axios';
import createAuth from './configs'

export async function getCharacters(page?: number) {
    try {   
        const Limit = 100;
        const Page = page ? page : 0;
        const Offset = (Page) * Limit;

        const axiosResponse = await axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
            ...createAuth(),
            limit: Limit,
            offset: Offset,
        }
        })
        return axiosResponse.data
    } catch (error) {
        alert("ERROR - marvel.getCharacters()")
        console.log(error);
    }
}

export async function getCharacterById(id?: number) {
    try {   
        const axiosResponse = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
        params: {
            ...createAuth()
        }
        })
        return axiosResponse.data
    } catch (error) {
        // alert("ERROR - marvel.getCharacterById()")
        console.log(error);
    }
}