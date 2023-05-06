import axios from 'axios';
export default{
    getCustomers: function(){
        return axios.get("/api/customers");
    },
    getCustomer: function(id){
        return axios.get(`/api/${id}`);
    },
    addCustomer: function(customer){
        return axios.post("/api/customers", customer);
    }
}