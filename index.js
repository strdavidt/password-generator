document.addEventListener("DOMContentLoaded", function() {
    const caracteresA = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];
    const caracteresN = document.getElementById("numCaracteres");
    const generarBtn = document.getElementById("generar-btn");
    const contraseña1 = document.getElementById("contraseña1");

    function generarContraseña() {
        let contraseñaGenerada = "";
        let numCaracteres = parseInt(caracteresN.value, 10);
        if (isNaN(numCaracteres) || numCaracteres <= 0) {
            alert("Por favor, ingresa un número válido de caracteres.");
            return;
        }
        
        for (let i = 0; i < numCaracteres; i++) {
            
            let randomId = Math.floor(Math.random() * caracteresA.length);
            let randomCaracter = caracteresA[randomId];
            contraseñaGenerada += randomCaracter;
        }
        contraseña1.textContent = contraseñaGenerada;
        return contraseñaGenerada;
    }
    if (caracteresN) {
        caracteresN.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                const resultado = generarContraseña();
                console.log("Contraseña generada: " +  resultado);
            }
        });
    }
    
    function copiarContra() {
        const resultado = contraseña1.textContent;
        if (!resultado) return;
        navigator.clipboard.writeText(resultado)
            .then(() => {
                console.log("Contraseña copiada al portapapeles: " + resultado);
            })
            .catch(err => {
                console.error("Error al copiar la contraseña: ", err);
            });
    }
    if (contraseña1) {
        contraseña1.addEventListener("click", copiarContra);
    }
    if (generarBtn) {
        generarBtn.addEventListener("click", generarContraseña);
    }
});