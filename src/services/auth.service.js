
let keyName='token'
let token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2Q3N2VmMTk5OGE2N2NmYWM2Yzc4YmI1OTBjNWFmZSIsInN1YiI6IjYyZTU0NWE3ZTg2MDE3MDA2MjU0ZTI0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AWebeWi9VOmiPexHd9Uky4xgnpFjk4TjO-ojZ0QkEk'


const setToken = () => {
    localStorage.setItem(keyName,token)};

setToken();

const getToken= () => localStorage.getItem(keyName)

export {getToken}