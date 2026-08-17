let tamanhoFonte = 16;

const corpo = document.body;

// Botões
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

// Aumentar a fonte
    aumentar.addEventListener("click", function(){
        tamanhoFonte += 2;
        corpo.style.fontSize = tamanhoFonte + "px";
    });

// Diminuir a fonte
    diminuir.addEventListener("click", function (){
        if(tamanhoFonte > 10){
            tamanhoFonte -= 2;
            corpo.style.fontSize = tamanhoFonte + "px";
        }
    });