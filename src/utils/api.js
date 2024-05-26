import axios from 'axios';
export const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export async function postLogin(body) {
    const resp = await instance.post('/auth/login', body);
    return resp.data;
}
