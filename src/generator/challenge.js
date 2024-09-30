const API = 'https://api.escuelajs.co/api/v1'

const getData = async (urlApi) => {
    try {
        const res = await fetch(urlApi);
        const data = await res.json();
        return console.log(data);
    } catch (error) {
        console.log(error);
    }
}

console.time('tiempo')
getData(`${API}/products/`);
console.timeEnd('tiempo')