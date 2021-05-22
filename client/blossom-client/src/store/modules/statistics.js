import axios from "axios";

const state = {
    salesLoaded:false,
    topUsersLoaded:false,
    ratingLoaded:false,
    sales:[0,10,20,30,40,50,60,65,70,75,80,85,80,75,65,55,50,40,35,30,20,10,20,30,40,35,30,20,10,12,17],
    topUsers:["Nada AbdElmaboud","Nihal Mansour","Hager Ismail"],
    rating:[1,2,20,30,24]

};

const mutations = {
    setSalsesLoaded(state,flag){
        state.salesLoaded=flag
    },
    setSales(state,data){
        state.sales=data
    },
    setRatingLoaded(state,flag){
        state.ratingLoaded=flag
    },
    setRating(state,data){
        state.rating=data
    }
};
const actions = {
   // async
    getSales({ commit }) {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        try {
            // let data = await axios.post("upload",imageData)
            setTimeout(()=>{
                commit("setSalsesLoaded",true);
            },2000)
          } catch (err) {
            console.log(err);
          }            
      },
     // async
    getRating({ commit }) {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        try {
            // let data = await axios.post("upload",imageData)
            setTimeout(()=>{
                commit("setRatingLoaded",true);
            },2000)
          } catch (err) {
            console.log(err);
          }            
      },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
