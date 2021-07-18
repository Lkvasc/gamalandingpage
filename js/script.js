function store() {
    var inputEmail = document.getElementById("email");
    var inputNome = document.getElementById("name");
    localStorage.setItem("email", inputEmail.value)
    localStorage.setItem("nome", inputNome.value)

    console.log("Dados do local storage: ", localStorage);
}
  
