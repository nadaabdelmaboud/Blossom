import axios from "axios";

const state = {};

const mutations = {};
const actions = {
    async uploadImg({ state },  {imageFile,imageData}) {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        console.log(state)

        try {
            let data = await axios.post("upload",imageData)
            console.log(data)
            delete axios.defaults.headers.common["Authorization"];
            let url = data.data.url;
            let key = data.data.key;
            console.log("key",key)
            let response = await axios.put(url,imageFile , {headers:{"Content-Type": imageFile.type}})
            console.log("amazon res",response)
          } catch (err) {
            console.log(err);
          }

                
      },
 
};

const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
