//Arrays são arranjos que acomodam valores.
//Podemos dizer que Arrays são a base para formar um matriz.
//Há alguns modos de declarar array:
//var arr = new Array(n,n,n...);
//var arr = Array(n,n,n...);
//var arr = [n,n,n...];
//Esta último pode ser o mais utilizado.
//OBS.: var arr = new Array(12); significa
//que o valor 12 é o número de posições do arranjo, isso
//neste modelo de declaração de array.

var valores = [8,1,7,2,9];

console.log(valores[3]);

for(var pos=0; pos<valores.length; pos++){
    console.log(" Posição: "+pos+" Valor: "+valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW","Yamaha","Honda");

//Calcular a média de todos os números de um array
var soma = 0;
for(var pos=0; pos<valores.length; pos++){
    console.log(" Valor de soma até o momento: "+soma);
    soma += valores[pos];
}

var media = soma/valores.length;
console.log(media);