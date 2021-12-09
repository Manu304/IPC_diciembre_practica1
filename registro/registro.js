const datosRegistro = [];
const nombre = document.getElementById("name");
const apellidos = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");

const registrar = () => {
    if (password.value !== password_confirm.value) {
        //alert("Las contraseñas no coinciden");
        let errorPass = document.getElementById("error-password");
        errorPass.removeAttribute("hidden");
    } else {
        console.log("Nombres: " + nombre.value + " \nApellidos: " + apellidos.value + "\nE-mail: " + email.value + "\nContraseña: " + password.value);
    }
}

const mostrarPassword = () =>{
    const checkBox = document.getElementById("mostrar-password");
    if (checkBox.checked) {
        password.setAttribute("type","text");
        password_confirm.setAttribute("type","text"); 
    }else{
        password.setAttribute("type","password");
        password_confirm.setAttribute("type","password");  
    }
}