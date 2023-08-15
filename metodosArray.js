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
console.log(" Adicionado valor no final "+arr1);
//unshift adiciona no início
arr1.unshift(0);
console.log(" Adicionado valor no começo "+arr1);
//retirando o último valor de um array
arr1.pop();
console.log(arr1);
//removendo elementos com slice();
var arr2 = [1,2,3,4,5,6,7];
console.log(" Array antes da remoção com splice(): "+arr2);
arr2.splice(1,1);//apartir da posição 1 retirar um elemento
console.log(" Array depois da remoção de um elemento com splice(): "+arr2);
//retirando mais de um elemento
console.log(" Array antes da remoção com splice(): "+arr2);
arr2.splice(1,2);//apartir da posição 1 retirar dois elementos
console.log(" Array depois da remoção de dois elementos com splice(): "+arr2);

//substituindo valores de um array com splice()
var nomes = ["Maria","João","Lucas","Pedro"];
var novos = nomes.splice(1,1,"Luiz");//na posição 1 retira um valor e acrescentar nesta posição o nome Luiz, ficando o valor retirado armazenado em novos
console.log(" O valor retirado foi: "+novos);
console.log(" O valor do array agora é: "+nomes);
//OBS.: pode ser retirado e substituido mais valores utilizando
//var novos = nomes.splice(1,2,"nome1","nome2");

//diferente do splice(), o método slice() não corta os dados
//do array original, somente realiza uma cópia dos dados determinados.
var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["Davi","Manuela"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);//array original não sofreu alterações.
console.log(pessoas1);//novo array com os dados selecionados.
//concatenando valores de arrays
var empresa = pessoa.concat(gerente);

console.log(empresa);//array com os valores concatenados.