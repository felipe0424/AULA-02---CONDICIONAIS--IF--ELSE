// ## COMPARADORES MATEMÁTICOS

// 1. Verifique se uma variável 'x' é menor que 10.
let x = 8;
console.log(x < 10); // true

// 2. Verifique se uma variável 'y' é maior que 20.
let y = 25;
console.log(y > 20); // true

// 3. Verifique se uma variável 'z' é menor ou igual a 15.
let z = 15;
console.log(z <= 15); // true

// 4. Verifique se uma variável 'w' é maior ou igual a 30.
let w = 30;
console.log(w >= 30); // true

// ## COMPARADORES LÓGICOS

// 1. Verifique se duas variáveis 'a' e 'b' têm o mesmo valor.
let a = 5; // number
let b = "5"; // string
console.log(a == b); // true

// 2. Verifique se duas variáveis 'c' e 'd' têm valores diferentes.
let c = 10;
let d = 20;
console.log(c != d); // true

// 3. Verifique se duas variáveis 'e' e 'f' têm o mesmo valor e tipo.
let e = 30; // number
let f = "30"; // string
console.log(e === f); // false // A variável "e" é do tipo number, já a variável "f" é um string 

// 4. Verifique se duas variáveis 'g' e 'h' têm valores e tipos diferentes.
let g = 40;
let h = "40";
console.log(g !== h); // true

// ## OPERADORES DE LÓGICA

// 1. Verifique se duas variáveis booleanas 'i' e 'j' são ambas verdadeiras.
let i = true;
let j = false;
console.log(i && j); // false

// 2. Verifique se pelo menos uma das variáveis booleanas 'k' ou 'l' é verdadeira.
let k = false;
let l = true;
console.log(k || l); // true

// 3. Verifique se uma variável booleana 'm' é falsa.
let m = false;
console.log(!m); // true

// ## OPERADORES LÓGICO DE ATRIBUIÇÃO

// 1. Atribua "Pequeno" a uma variável 'tamanho' se uma variável 'num' for menor que 10, caso contrário, atribua "Grande".
let num = 8;
let tamanho = num < 10 ? "Pequeno" : "Grande";
console.log(tamanho); // Pequeno

// ## IF

// 1. Se uma variável 'idade' for maior ou igual a 18, atribua "Adulto" a uma variável 'categoria'.
let idade = 20;
let categoria;
if (idade >= 18) {
    categoria = "Adulto";
}
console.log(categoria); // Adulto

// ## ELSE IF

// 1. Se uma variável 'nota' for maior ou igual a 90, atribua "A" a uma variável 'grau'. Se for maior ou igual a 80, mas menor que 90, atribua "B".
let nota = 85;
let grau;
if (nota >= 90) {
    grau = "A";
} else if (nota >= 80) {
    grau = "B";
}
console.log(grau); // B

// ## ELSE

// 1. Se uma variável 'cor' for "vermelho", atribua "Parar" a uma variável 'acao'. Se for "amarelo", atribua "Atenção". Caso contrário, atribua "Ir".
let cor = "verde";
let acao;
if (cor == "vermelho") {
    acao = "Parar";
} else if (cor == "amarelo") {
    acao = "Atenção";
} else {
    acao = "Ir";
}
console.log(acao); // Ir

//-----------------------------------------------------------------------------------------------

/* 1. Atribua "Pequeno" a uma variável 'tamanho' se uma variável 'num' for menor que 10, 
caso contrário, atribua "Grande".
*/

let num = 10;
let tamanho = num <= 10 ? "Pequeno" : "Grande";
console.log(tamanho);

/* 2. Atribua "Positivo" a uma variável 'estado' se uma variável 'numero' for maior que 0,
caso contrário, atribua "Negativo".
*/

let numero = -50;
let estado = numero > 0 ? "Positivo" : "Negativo";
console.log(estado);

/* 3. Atribua "Par" a uma variável 'paridade' se uma variável 'valor' for divisível por 2, 
caso contrário, atribua "Ímpar".
*/

let valor = 3;
let paridade = valor % 2 === 0 ? "Par" : "Ímpar";
console.log(paridade);

/* 4. Atribua "Maior" a uma variável 'comparacao' se uma variável 'x' for maior que uma variável 'y', 
caso contrário, atribua "Menor ou Igual".
*/

let x = 10;
let y = 20;
let comparacao = x > y ? "O valor " + x + " é maior que " + y : "O valor " + y + " é maior que " + x;
console.log(comparacao);

/* 5. Atribua "Quente" a uma variável 'clima' se uma variável 'temperatura' for maior que 30, 
caso contrário, atribua "Frio".
*/

let temperatura = 35;
let clima = temperatura >= 30 ? "Quente" : "Frio";
console.log(clima);

/* 6. Atribua "Adulto" a uma variável 'faixaEtaria' se uma variável 'idade' for maior ou igual a 18, 
caso contrário, atribua "Menor de idade".
*/

let idade = 10;
let faixaEtaria = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(faixaEtaria);

/* 7. Atribua "Ligado" a uma variável 'estadoLuz' se uma variável 'interruptor' for true, 
caso contrário, atribua "Desligado".
*/

let interruptor = true;
let estadoLuz = interruptor === true ? "Ligado" : "Desligado";
console.log(estadoLuz);

/* 8. Atribua "Permitido" a uma variável 'acesso' se uma variável 'idade' for maior ou igual a 18 e 
'documento' for true, caso contrário, atribua "Negado".
*/

let idade = 17;
let documento = true;
let acesso = idade >= 18 && documento == true ? "Permitido" : "Negado";
console.log(acesso);

/* 9. Atribua "Cheio" a uma variável 'estadoTanque' se uma variável 'nivelCombustivel' for igual a 100, 
caso contrário, atribua "Incompleto".
*/

let combustivel = parseFloat(1050);
let estado = combustivel > 100 ? "Cheio" : "Incompleto";
console.log(estado);