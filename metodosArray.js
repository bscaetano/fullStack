//métodos com Array
var arr1 = [1,2,3,4,5,6];
//inverter os valores do array
console.log(" Array invertido: "+arr1.reverse());
//Join trasforma os valores de um array em uma String e pode exibi-los
//com caracteres adicionais, por exemplo, para separá-los
console.log(arr1.join('|'));
//retirar o primeiro valor de um array
var retirado = arr1.shift();
console.log(" Valor retirado com shift() foi o "+retirado);
console.log(arr1);
//verificando valor segundo a posição
console.log(" Posição do número 3: "+arr1.indexOf(3));
//adiciona um item no array, neste caso, no final.
arr1.push(7);
console.log(arr1);
//retirando o último valor de um array
arr1.pop();
console.log(arr1);

var arr2 = [-5,10,23,-3,89];
