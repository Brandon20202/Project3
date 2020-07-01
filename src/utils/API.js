import axios from "axios";

//let url = window.location.href

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    getCompanies: function() {
        return axios.get("api/companies");
    },
    getCompanie: function(id){
        return axios.get("/api/companies/" + id);
    },
    deleteCompanie: function(id){
        return axios.delete("/api/companies" + id);
    },
    saveCompanie: function(companiesData){
        return axios.post("api/companies" + companiesData);
    }
    
};