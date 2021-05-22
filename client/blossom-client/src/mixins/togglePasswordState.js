export default {
  methods: {
    togglePasswordState() {
      let passwordInput = document.getElementById("passwordInput");
      let type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.showPassword = !this.showPassword;
    },
  },
};
