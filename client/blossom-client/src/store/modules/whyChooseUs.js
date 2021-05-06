const state = {
  whyUsArr: [
    {
      id: 1,
      image: require("../../assets/bouquet.svg"),
      name: "Unique compositions",
      description:
        "Bouquets carefully created by our Floral Art professionals.",
    },
    {
      id: 2,
      image: require("../../assets/greenhouse.svg"),
      name: "Own production",
      description:
        "Directly from our greenhouses, they last seven, ten or even fifteen days!",
    },
    {
      id: 3,
      image: require("../../assets/ship.svg"),
      name: "Delivery in 24h",
      description: "We deliver in 24 hours anywhere in Egypt",
    },
    {
      id: 4,
      image: require("../../assets/star.svg"),
      name: "Guaranteed quality",
      description:
        "If our flowers do not arrive in good condition, we will send another one!",
    },
  ],
};

const getters = {
  whyUsArr: (state) => state.whyUsArr,
};

export default {
  namespaced: true,
  state,
  getters,
};
