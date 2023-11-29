import axios from "axios";



export async function cadastro(body) {
   const response = await axios.post("http://localhost:8080/users", body);
   return response;
}

export async function login(body) {
   const response = await axios.post("http://localhost:8080/login", body);
   return response.data; 
}
