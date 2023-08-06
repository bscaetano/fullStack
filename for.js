//A condição for pode ser usada para percorrer os itens
//de um arranjo ou matriz. Também é possível usar como um contador.
//podemos utilizar:
//for(let i = 0; i < 10; i++){total += carros[i]}
//for(let caract in carro){total += carros[i]}
//for(let caract of carro){total += carros}

var carro = [{modelo: 'Audi A3', marca: 'Audi', ano: 2020},
             {modelo: 'Compass', marca: 'Jeep', ano: 2021}
            ];

for(let caracteristica in carro){
    console.log(carro[caracteristica]);
}