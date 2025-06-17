const caracteresA = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];
const caracteresN = document.getElementById("numCaracteres");
const generarBtn = document.getElementById("generar-btn");


function generarContraseña() {
    let contraseñaGenerada = "";
    let numCaracteres = caracteresN.value;
    const contraseña1 = document.getElementById("contraseña1");
    for (let i = 1; i < numCaracteres; i++) {
        
        let randomId = Math.floor(Math.random() * caracteresA.length);
        let randomCaracter = caracteresA[randomId];
        contraseñaGenerada += randomCaracter;
    }
    contraseña1.textContent = contraseñaGenerada;
    return contraseñaGenerada;
}
caracteresN.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const resultado = generarContraseña();
        console.log("Contraseña generada: " +  resultado);
    }
});
function copiarContra() {
    const resultado = contraseña1.textContent;
    navigator.clipboard.writeText(resultado)
        .then(() => {
            console.log("Contraseña copiada al portapapeles: " + resultado);
        })
        .catch(err => {
            console.error("Error al copiar la contraseña: ", err);
        });
}
contraseña1.addEventListener("click", copiarContra);
generarBtn.addEventListener("click", generarContraseña);