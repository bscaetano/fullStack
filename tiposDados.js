var nome = "Bruno";
console.log(typeof(nome));//typeof retorna o tipo da variavel

if(typeof(nome) == "string"){//se nome for string
console.log(nome.toLocaleUpperCase());//passando para caixa alta
}else{//se nome não for string
    console.log("Você precisa usar uma String");
}
