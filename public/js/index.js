document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("login_form");
    const backdrop = document.getElementById("backdrop");

    function showModal() {
        if (!modal) return;
        modal.style.display = "block";
        document.body.classList.add("modal-open");
        if (backdrop) {
            backdrop.setAttribute("aria-hidden", "false");
        }
    }

    function hideModal() {
        if (!modal) return;
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        caracteresN.focus();
        if (backdrop) {
            backdrop.setAttribute("aria-hidden", "true");
        }
    }

    setTimeout(function() {
        console.log("Mostrando el modal de inicio de sesión");
        showModal();
    }, 1500); // Mostrar el modal después de 1.5 segundos (1500 ms)
    const caracteresA = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];
    const caracteresN = document.getElementById("numCaracteres");
    const generarBtn = document.getElementById("generar-btn");
    const contraseña1 = document.getElementById("contraseña1");
    const nologinP = document.getElementById("nologin-p");

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
                guardarBtn(resultado)
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

    function guardarBtn(resultado) {
        console.log(resultado)
    }
    if (nologinP) {
        nologinP.addEventListener("click", hideModal);
    }
    /*
    // Opcional: cerrar al hacer clic en el backdrop o con ESC
    if (backdrop) {
        backdrop.addEventListener("click", hideModal);
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.style.display === "block") {
            hideModal();
        }
    });
    */
});
