import axios from "axios";

const BASE_APP_URL = "http://localhost:8080/api"
class AppService {
    static addExpenses(expenses){
        return axios.post(BASE_APP_URL +`/expenses`,expenses,{});
    }
    static getAllExpenses(){
        return axios.get(BASE_APP_URL+`/expenses`,{})
    }
    static getExpenseById(id){
        return axios.get(BASE_APP_URL+`/expenses?id=${id}`,{})
    }
    static deleteExpenseById(id){
        return axios.get(BASE_APP_URL+`/expenses?id=${id}`,{});
    }
}
export  default AppService;