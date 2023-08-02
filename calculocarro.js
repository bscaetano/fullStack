/*O custo de um carro novo ao consumidor é a
soma do custo de fabrica com a porcentagem
do distribuidor e dos impostos (aplicados ao
custo de fabrica). Spondo que o percentual
do distribuidor seja de 28% e os impostos de
45%, escrever um algoritmo para ler o custo
de fabrica de um carro, calcular e escrever o
custo final ao consumidor.*/

var custofabrica = 40000;
var porcDist;
var porcImp;
var custoFinal;

porcDist = custofabrica * 28/100;
porcImp = custofabrica * 45/100;
custoFinal = custofabrica + porcDist + porcImp;

console.log(" O custo final ao consumidor é: " + custoFinal);