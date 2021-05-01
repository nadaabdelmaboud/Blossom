export default {
  methods: {
    showToast() {
      var mytoast = document.getElementById("toastId");
      clearTimeout(mytoast.hideTimeout);
      mytoast.className = "toast toast--visible";
      mytoast.hideTimeout = setTimeout(() => {
        mytoast.classList.remove("toast--visible");
      }, 2000);
    },
  },
};
