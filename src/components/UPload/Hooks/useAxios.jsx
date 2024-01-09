import axios from "axios";

const aAxios=axios.create({
    baseURL:'https://portfolio-backend-seven-tan.vercel.app'
})
const useAxios = () => {
    return aAxios
};

export default useAxios;