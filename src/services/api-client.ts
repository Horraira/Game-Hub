import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '23b5eed669a04f3095898cc2732b55c9'
    }
});