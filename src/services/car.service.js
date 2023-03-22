import axios from "axios";

export const CarSevice = {
    //Для всех
    // async getAll(){
    //     const response = await axios.get('https://63c682584ebaa802854750c5.mockapi.io/test1'); 
        
    //     return response;
    // },
    //Для одной карточки
    async getById(id){
        // const response = await axios.get(`https://63c682584ebaa802854750c5.mockapi.io/test1?${id}`); 
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        
        console.log(response.data.data);
        
        // return response.data[id - 1];
        return response.data.data;
    }
    
}