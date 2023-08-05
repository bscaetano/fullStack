//Faca um algoritmo que efetue o calculo da quantidade de
//litros de combustivel gastos em uma viagem, sabendo-se
//que o carro faz 12Km com um litro. Deverao ser fornecidos
//o tempo gasto na viagem e a velocidade media.
//utilizar as seguintes formulas:
//distanci = tempo*velocidade
//litros usados = distancia/12.
//O algoritmo devera apresentar os valores da velocidade
//media, tempo gasto na viagem, distancia percorrida e a
//quantidade de litros utilizados na viagem.
var tempo = 3;
var velocidade = 80;
var distancia = tempo * velocidade;
var litros = distancia/12;

console.log(" A velocidade média foi: " + velocidade + " Km/h");
console.log(" O tempo gasto na viagem foi: " + tempo + " hora");
console.log(" A distância percorrida foi: " + distancia + " Km");
console.log(" O consumo de combustível foi: " + litros + " litros");
