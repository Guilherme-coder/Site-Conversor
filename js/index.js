
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

    let numero = campoDecHex.value;

    let daVez;
    let total = "";

    while (numero >= 16){
        daVez = numeroParaLetra(numero % 16);
        numero = parseInt(numero / 16);
        
        total = daVez + total;
    }

    if (numero != 0){
        numero *= 1;
        numero = numeroParaLetra(numero);
        total = numero + total;
    }

    labDecHex.value = total;

});

let botaoHexDec = document.querySelector("#hex-dec--submit");
let campoHexDec = document.querySelector("#hex-dec");
let labHexDec = document.querySelector("#hex-dec--lab");
botaoHexDec.addEventListener("click", function(event){
    event.preventDefault;

    let numero = campoHexDec.value;
    let indice = numero.length - 1;
    let daVez;
    let total = 0;
    let multiplicador = 0;

    while(indice >= 0){
        daVez = letraParaNumero(numero[indice]);
        daVez *= Math.pow(16, multiplicador);
        
        
        
        
        total = daVez + total;
        indice -= 1;
        multiplicador += 1;
    }
    
    
    
    
    
    
    
    
    
    labHexDec.value = total;
    
});



function numeroParaLetra(numero){
    switch(numero){
        case 10:
            numero = "A";
            break;
        case 11: 
            numero = "B";
            break;
        case 12:
            numero = "C";
            break; 
        case 13:
            numero = "D";
            break;
        case 14:
            numero = "E";
            break;
        case 15:
            numero = "F";
            break;
    };
    return numero;
};


function letraParaNumero(letra){
    let letraGrande = letra.toUpperCase()
    switch(letraGrande){
        case "A":
            letraGrande = 10;
            break;
        case "B": 
            letraGrande = 11;
            break;
        case "C":
            letraGrande = 12;
            break; 
        case "D":
            letraGrande = 13;
            break;
        case "E":
            letraGrande = 14;
            break;
        case "F":
            letraGrande = 15;
            break;
    };
    return letraGrande;
};