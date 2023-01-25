export default function Request() {
    const req = axios.create({
        baseURL: 'https://b48a-125-229-161-9.jp.ngrok.io//bet539/backend',
        headers: { 'Authorization': window.localStorage.getItem("jwtToken") }
    })
    return req;
}
