var gasolina, etanol, distancia, km, melhor, divideBy
;

function divideBy(){
    distancia= parseFloat(frdados.txdistancia.value.replace(",","."));
    km= parseFloat(frdados.txquilometros.value.replace(",","."));
    document.getElementById("result").innerHTML = distancia / km;
}

function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
    if(etanol < 0.7*gasolina){
        document.getElementById("imagem").src="imagens/alcool.png";
        document.getElementById("imagem2").src="imagem2.png";

    }

    else{
        document.getElementById("imagem").src="imagens/gasolina.png";
        document.getElementById("imagem2").src="imagem2.png";
    }
}

function limpar(){
    document.getElementById("imagem").src="imagens/normal.png";
    document.getElementById("imagem2").src="imagem2.png";
}
var melhor()
