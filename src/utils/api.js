import axios from 'axios';
export const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export function setJWT(auth) {
    instance.defaults.headers.common['Authorization'] = auth
}

export async function postLogin(body) {
    const resp = await instance.post('/auth/login', body);
    return resp.data;
}

export async function getSession() {
    const resp = await instance.get('/auth/revalidate-session');
    return resp.data;
}

export async function getUsers() {
    const resp = await instance.get('/auth/list-users');
    return resp.data;
}
