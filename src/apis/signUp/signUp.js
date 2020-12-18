import axios from 'axios';

const signUp = (data)=>axios
    .post('http://localhost:8080/register',data)
    .then((response)=>response.data);

export default signUp;