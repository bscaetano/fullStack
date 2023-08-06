//A condição switch realiza uma troca de respostas
//ou saída de resultados, se preferir.
//caso não corresponda a uma opção, passa para a próxima
//até encontrar a opção correspondente.
//caso não haja, o valor default padrão
//é retornado.
var diaSem = 1;

switch(1){
    case 1://caso 1
        console.log(" Domingo ");
    break//break é necessario para para a execução caso o valor corresponda
    case 2:
        console.log(" Segunda ");
    break
    case 3:
        console.log(" Terça ");
    break
    case 4:
        console.log(" Quarta ");
    break
    case 5:
        console.log(" Quinta ");
    break
    case 6:
        console.log(" Sexta ");
    break
    case 7:
        console.log(" Sabado ");
    break
    default://valor/resposta padrão caso nenhuma alternativa corresponda
    console.log(" Esse dia da semana não existe! ");
}