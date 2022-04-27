import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com/search'
})

export async function getAllUsers(userName:string) {

    const { data } = await api.get('/users?q='+userName);
    return data;

}
