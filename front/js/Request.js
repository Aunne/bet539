export default function Request() {
    const req = axios.create({
        baseURL: 'http://localhost/bet539/backend',
        headers: { 'Authorization': window.localStorage.getItem("jwtToken") }
    })
    return req;
}
