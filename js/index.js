
let botaoDecBin = document.querySelector("#dec-bin--submit");
let campoDecBin = document.querySelector("#dec-bin");
let labDecBin = document.querySelector("#dec-bin--lab");
botaoDecBin.addEventListener("click", function(event){
    event.preventDefault;
    let numero = campoDecBin.value;
    
    let resto;
    var total = "";

    while (numero != 0){
        resto = numero % 2;
        numero = parseInt(numero/2);
        total = resto.toString() + total;
    }
    if (numero === 1){
        total = "1" + total;
    }



    labDecBin.value = total;

});

let botaoBinDec = document.querySelector("#bin-dec--submit");
let campoBinDec = document.querySelector("#bin-dec");
let labBinDec = document.querySelector("#bin-dec--lab");
botaoBinDec.addEventListener("click", function(event){
    event.preventDefault;
    let numero = campoBinDec.value;

    let indice = (numero.length - 1);
    let multiplicador = 1;
    var total = 0;


    while(indice >= 0){
        let daVez = numero[indice] * multiplicador;
        total += daVez;
        indice -= 1;
        multiplicador *= 2;
    }




    labBinDec.value = total;







    
});

let botaoDecHex = document.querySelector("#dec-hex--submit");
let campoDecHex = document.querySelector("#dec-hex");
let labDecHex = document.querySelector("#dec-hex--lab");
botaoDecHex.addEventListener("click", function(event){
    event.preventDefault;
    labDecHex.value = campoDecHex.value;
});

let botaoHexDec = document.querySelector("#hex-dec--submit");
let campoHexDec = document.querySelector("#hex-dec");
let labHexDec = document.querySelector("#hex-dec--lab");
botaoHexDec.addEventListener("click", function(event){
    event.preventDefault;
    labHexDec.value = campoHexDec.value;
});