const nombre = document.getElementById("name");
const apellido = document.getElementById("last-name");
const CUI = document.getElementById("cui");
const departamento = document.getElementById("departamento");
const municipio = document.getElementById("municipio");
const errorCui = document.getElementById("error-cui");

const ingresar = () => {
    if (!isCUIValid(CUI.value)) {
        errorCui.removeAttribute("hidden");
    } else {
        errorCui.setAttribute("hidden", " ");
        console.log("CUI: " + CUI.value + "\nNombres: " + nombre.value + "\nApellidos: " + apellido.value + "\nDepartamento: " + departamento.value + "\nMunicipio: " + municipio.value);
    }

}

const isCUIValid = (e) => {
    const pattern = /^\d{2,20}$/;
    return pattern.test(e);
}