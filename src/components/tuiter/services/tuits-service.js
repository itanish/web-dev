import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {}
export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;

}
export const deleteTuit = async (tuit) => {}
export const updateTuit = async (tuit) => {}

