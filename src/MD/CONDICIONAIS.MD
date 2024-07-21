## COMPARADORES MATEMÁTICOS
- MENOR QUE [<];
- MAIOR QUE [>];
- MENOR OU IGUAL QUE [<=];
- MAIOR OU IGUAL QUE [>=];

## COMPARADORES LÓGICOS
- IGUALDADE ENTRE SENTENÇAS (VALOR) [==];
- DIFERENÇA ENTRE SENTENÇAS (VALOR) [!=];
- IGUALDADE ENTRE SENTENÇAS (VALOR E TIPO) [===];
- DIFERENÇA ENTRE SENTENÇAS (VALOR E TIPO) [!==];

## OPERADORES DE LÓGICA
- E (AND) [&&];
- OU (OR) [||];
- NÃO (NOT) [!];

## OPERADORES LÓGICO DE ATRIBUIÇÃO
Tem a capacidade de atribuir um valor a partir de uma condição lógica, economiza Ifs.
```
var meuCarro = cor == "Preto" ? "Preto" : "Branco";
```

## IF
Se então... `If`

```rust
let cor = "preto"; // Definimos a variável "cor" com o valor "preto"

let meuCarro; // Definimos a variável "meuCarro", que terá seu valor atribuído com base na condição a seguir
if (cor === "preto") { 
    meuCarro = "preto"; // Se o valor de "cor" for "preto", atribuímos "preto" à variável "meuCarro"
}

console.log(meuCarro); // Imprime o valor de "meuCarro" no console, que será "preto"

```

## ELSE IF
Se não for as condições anteriores, será essa. `Else If`

```rust
let cor = "Azul";

let meuCarro;
if (cor === "preto") {
    meuCarro = "preto";
} else if (cor === "Azul") {
    meuCarro = "Azul"
}

console.log(meuCarro)
// Resultado será Azul
```

## ELSE
Se não for nenhuma condição anterior, será essa `Else`

```rust
let cor = "Azul";

let meuCarro;
if (cor === "preto") {
    meuCarro = "A cor do meu carro é preto";
} else if (cor === "Azul") {
    meuCarro = "A cor do meu carro é Azul"
} Else
    meuCarro = "Cor não definida"

console.log(meuCarro)
// Resultado será Azul
```