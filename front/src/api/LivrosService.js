import axios from "axios";

const BASE_URL = "http://localhost:3000"

export class LivrosService{
    static getLivros(){
        return axios.get(BASE_URL+'/livros');
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/livros/edicao/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/livros/cadastro`,body);
    }

    static updateLivro(id,body){
        return axios.put(`${BASE_URL}/livros/edicao/${id}`,body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}/livros/${id}`);
    }
    
}