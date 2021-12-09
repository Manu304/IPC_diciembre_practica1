const nombre = document.getElementById("name");
const apellido = document.getElementById("last-name");
const CUI = document.getElementById("cui");
const departamento = document.getElementById("departamento");
const municipio = document.getElementById("municipio");
const errorCui = document.getElementById("error-cui");

const ingresar = () => {
    console.log("CUI: " + CUI.value + "\nNombres: " + nombre.value + "\nApellidos: " + apellido.value + "\nDepartamento: " + departamento.value + "\nMunicipio: " + municipio.value);
}