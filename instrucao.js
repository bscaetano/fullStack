//if e else são condições para algo acontecer.
//if significa se; else significa senão
//e else if significa senão se.

var pais = "Brasil";

if(pais != "Brasil"){//se pais não for Brasil
    console.log(" Voce^é estrangeiro ");
}else{
    console.log(" Você é brasileiro ");
}

var idade = 22;

if(idade < 16){//se idade menor que 16
    console.log(" Não vota ");
}else if(idade < 18 || idade > 65){//se menor que 18 ou maior que 65
    console.log(" Voto opcional ");
}else{//senão for nenhuma das opções acima, então:
    console.log(" Voto obrigatório ");
}