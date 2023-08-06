var nome = " Marcelo da Silva ";
var x = nome.length;
console.log(x);

resultado = x > 15 ? " Obrigado! " : " Por favor preencher seu nome completo ";

console.log(resultado);

var res = nome.toLocaleUpperCase();//tudo em maiuscula
console.log(res);

var jogo = " Barcelona vs Real ";
var posicao = jogo.lastIndexOf("Real");//posicao de uma palavra
console.log(posicao);

var conrtado = jogo.slice(0,5);//corta a palavra. 0 começo 5 fim
console.log(conrtado);

var val = jogo.includes("Real");//encontrar palavra
console.log(val);

var str1 = " Hello ";
var str2 = " Turma ";

var str3 = str1.concat(str2);//concatenado Strings com concat()
console.log(str3);

var frase = "         Olá vc está aprensendo JavaScript ";
console.log(frase.trim());//retira espaços

var num = "0,1,2,3,4,5,6,7,8,9";
var arr = num.split(",");//transforma em um array. A virgula é o separador, mas poderia ser | . etc...

