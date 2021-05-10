import axios from "axios";

const state = {
};

const mutations = {
};
const actions = {
    async uploadImg({ state },  {imageFile,imageData}) {
        const token = localStorage.getItem("token");

        axios.defaults.headers.common["Authorization"] = token;
        console.log(state)
        const file = new FormData();
        file.append("file", imageFile);
        // axios({url:"url_goes_here",data:{params:{foo:'bar'}})
        try {
            let data = await axios.post("upload",imageData)
            console.log(data)
            delete axios.defaults.headers.common["Authorization"];
            let response = await axios({ method: "get",url: data.data.url,data: file , 
                headers: 
                {'Content-Type': imageData.ContentType
                }})
                console.log(response)
          } catch (err) {
            console.log(err);
          }

                
      },
 
};
const getters = {
  
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
