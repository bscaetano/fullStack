//A condição while executa a ação dentro do bloco
//enquanto a condição for válida.
//Já do while irá executar a ação do bloco
//pelo menos uma vez, porque ela faz o do
//e só depois verifica a condição no while.

var c = 1;//variável
while(c <= 10){
    console.log(c);
    c++//incremento
}

var t = 1;
do{
    console.log(t);
    t++
}while(t < 6);