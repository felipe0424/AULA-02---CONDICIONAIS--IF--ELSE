<div align="center">
<a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/3804386a-094d-42de-8a5d-f4dfb033ffba" alt="js" width="70"></a>

# **JavaScript**
### `Condicionais`
</div>

## :bookmark_tabs:	Índice
* [1. Comparadores Matemáticos](#1-comparadores-matemáticos)
    * [1.1. Menor que](#11-menor-que-)
    * [1.2. Maior que](#12-maior-que-)
    * [1.3. Menor ou igual que](#13-menor-ou-igual-que-)
    * [1.4. Maior ou igual que](#14-maior-ou-igual-que-)
* [2. Comparadores Lógicos](#2-comparadores-lógicos)
    * [2.1. Igualdade entre sentenças (Valor)](#21-igualdade-entre-sentenças-valor-)
    * [2.2. Igualdade entre sentenças (Valor e Tipo)](#22-igualdade-entre-sentenças-valor-e-tipo-)
    * [2.3. Diferença entre sentenças (Valor)](#23-diferença-entre-sentenças-valor-)
    * [2.3. Diferença entre sentenças (Valor e Tipo)](#24-diferença-entre-sentenças-valor-e-tipo-)
* [3. Operadores Lógicos](#3-operadores-lógicos)
    * [3.1. E (and)](#31-e-and-)
    * [3.2. Ou (or)](#32-ou-or-)
    * [3.3. Não (not)](#33-não-not-)
* [4. Operadores de atribuição](#4-operadores-de-atribuição)
    * [4.1. If](#41-if)
    * [4.2. Else If](#42-else-if)
    * [4.3. Else](#43-else)

## :computer:	Ferramentas e linguagens utilizadas no desenvolvimento
<div align="auto">
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/3804386a-094d-42de-8a5d-f4dfb033ffba" alt="js" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/64486d67-8973-4b62-bdfc-212cf9f16709" alt="md" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/d3813ef4-1409-40c9-9bfb-6e988f79b2c8" alt="Git" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/b03adba8-e155-4555-8737-2afaf449620d" alt="Node" width="50"></a>
</div>

## :books:	Conteúdo

## 1. Comparadores matemáticos

* ### 1.1. Menor que `<`
```rust
let a = 10;
const resultado = (a < 20);

console.log(resultado); // O resultado apresenta true se o valor de "a" for menor que 20.
```

* ### 1.2. Maior que `>`
```rust
let a = 10;
const resultado = (a > 5);

console.log(resultado); // O resultado apresenta true se o valor de "a" for maior que 5.
```

* ### 1.3. Menor ou igual que `<=`
```rust
let a = 10;
const resultado = (a <= 20);

console.log(resultado); // O resultado apresenta true se o valor de "a" for menor ou igual que 20.
```

* ### 1.4. Maior ou igual que `>=`
```rust
let a = 10;
const resultado = (a >= 5);

console.log(resultado); // O resultado apresenta true se o valor de "a" for maior ou igual que 5.
```

## 2. Comparadores lógicos

* ### 2.1. Igualdade entre sentenças (Valor) `==` 
```rust
let a = 10;
let b = 20;
const resultado = (a == b);

console.log(resultado); // O resultado apresenta true se o valor de "a" for igual o valor de "b".
```

* ### 2.2. Igualdade entre sentenças (Valor e Tipo) `===` 
```rust
let a = 10;
let b = 20;
const resultado = (a === b);

console.log(resultado); // O resultado apresenta true se o valor e o tipo de "a" for igual o valor e o tipo de "b".
```

* ### 2.3. Diferença entre sentenças (Valor) `==` 
```rust
let a = 10;
let b = 20;
const resultado = (a != b);

console.log(resultado); // O resultado apresenta true se o valor de "a" for diferente do valor de "b".
```

* ### 2.4. Diferença entre sentenças (Valor e Tipo) `==` 
```rust
let a = 10;
let b = 20;
const resultado = (a !== b);

console.log(resultado); // O resultado apresenta true se o valor e o tipo de "a" for diferente do valor e do tipo de "b".
```

## 3. Operadores lógicos

* ### 3.1. E (and) `&&` 
```rust
let a = 10;
let b = 10;
let c = 10;
const resultado = (a && b == c);

console.log(resultado); // O resultado apresenta true se o valor de "a" e "b" for igual o valor de "c".
```

* ### 3.2. OU (or) `||` 
```rust
let a = 10;
let b = 20;
let c = 10;
const resultado = (a || b == c);

console.log(resultado); // O resultado apresenta true se o valor de "a" ou "b" for igual o valor de "c".
```

* ### 3.3. Não (not) `!` 
```rust
let a = 10;
let b = 20;
let c = 10;
const resultado = (a != b == c);

console.log(resultado); // O resultado apresenta true se o valor de "a" não for igual ao valor de "b".
```

## 4. Operadores de atribuição
Tem a capacidade de atribuir um valor a partir de uma condição lógica, economiza Ifs.
```rust
let cor = 'Azul';
let meuCarro = cor == "Preto" ? "Cor é Preto" : (cor == "Azul" ? "Cor é Azul" : "Cor diferente");

console.log(meuCarro);
```

* ### 4.1. If
Se então... `If`
```rust
let cor = "preto"; // Definimos a variável "cor" com o valor "preto"
let meuCarro; // Definimos a variável "meuCarro", que terá seu valor atribuído com base na condição a seguir
if (cor === "preto") { 
    meuCarro = "preto"; // Se o valor de "cor" for "preto", atribuímos "preto" à variável "meuCarro"
}

console.log(meuCarro); // Imprime o valor de "meuCarro" no console, que será "preto"
```

* ### 4.2. Else If 
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

* ### 4.3. Else
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

## :telephone_receiver:	Contato
Para saber mais sobre meus trabalhos, entre em contato comigo através do <a href="https://www.linkedin.com/in/jfeliperamos/">LinkedIn</a> ou visite meu <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html">GitHub.</a> 

<div align=center>
    <a href="https://www.linkedin.com/in/jfeliperamos/">
        <img src="https://github.com/user-attachments/assets/0350e54a-100e-4273-aa51-81aa9fce3d79" alt="LinkedIn" width="25">
    </a> 
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html">
        <img src="https://github.com/user-attachments/assets/3fda6271-fd40-4485-bb7c-60b927b9feae" alt="GitHub" width="25">
    </a>
</div>

> [!WARNING]
> Este código é disponibilizado exclusivamente para fins de estudo e aprendizado. A reprodução total ou parcial deste código, sem autorização prévia, é expressamente proibida. A utilização deste código em projetos comerciais, distribuição não autorizada ou qualquer outro uso que não seja educativo pode resultar em sanções legais. Ao utilizar este código, você concorda em respeitar os termos de uso e a propriedade intelectual do autor.