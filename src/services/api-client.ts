import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'c7428dd02cff4545bce86760550eb8e1',
    }
})