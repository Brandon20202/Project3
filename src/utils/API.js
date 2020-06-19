import axios from "axios";

let url = window.location.href

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search: function() {
        return axios.get(url + "api/keys");
    }
};