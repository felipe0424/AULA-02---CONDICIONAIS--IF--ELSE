/* 5. Atribua "Quente" a uma variável 'clima' se uma variável 'temperatura' for maior que 30, 
caso contrário, atribua "Frio".
*/

let temp = prompt('Qual a temperatura atual?');
let clima = temp >= 30 ? 'Quente' : 'Frio';
alert(clima);