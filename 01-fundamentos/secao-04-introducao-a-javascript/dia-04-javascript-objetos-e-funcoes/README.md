# Módulo 01 - Fundamentos
## Seção 04 - Introdução à JavaScript
### Dia 04 - JavaScript - Objetos e funções

#### Parte 1: Objetos

    parte-1-exercicio-1.js

- Crie uma variável `player` e atribua um objeto contendo as variáveis listadas abaixo:

    `let name = 'Marta';`
    `let lastName = 'Silva';`
    `let age = 34;`
    `let medals = { golden: 2, silver: 3 };`


    parte-1-exercicio-2.js

- Acesse as chaves `name`, `lastName` e `age`, usando a sintaxe `meuObjeto.chave`, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.


    parte-1-exercicio-3.js

- Adicione ao objeto a chave `bestInTheWorld`, usando a sintaxe `meuObjeto.chave = valor`, e atribua a essa chave um `array` contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

    `[2006, 2007, 2008, 2009, 2010, 2018]`


    parte-1-exercicio-4.js

- Acesse a chave `bestInTheWorld`, usando a sintaxe `meuObjeto['chave']`, e faça um `console.log` no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.


    parte-1-exercicio-5.js

- Acesse a chave `medals`, usando a sintaxe `meuObjeto.chave`, e faça um `console.log` no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

#### Parte 2: for/in e for/of

    parte-2-exercicio-1.js

- Usando o objeto abaixo, utilize `for/in` e imprima no console a mensagem `'Olá xxxxx'` para cada nome, substituindo o `xxxxx` pelo nome em questão.

    `let names = {`
    `person1: 'João',`
    `person2: 'Maria',`
    `person3: 'Jorge',`
    `};`


    parte-2-exercicio-2.js

- Usando o objeto abaixo, utilize `for/in` e imprima um `console.log` com as chaves e valores desse objeto.

    `let car = {`
    `model: 'A3 Sedan',`
    `manufacturer: 'Audi',`
    `year: 2020`
    `};`

#### Parte 2: Objetos e funções

Desenvolva cada exercício a seguir utilizando `funções`:


    parte-3-exercicio-1.js

- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
    - Adição (a + b)
    - Subtração (a - b)
    - Multiplicação (a * b)
    - Divisão (a / b)
    - Módulo (a % b)


    parte-3-exercicio-2.js

- Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.


    parte-3-exercicio-3.js

- Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.


    parte-3-exercicio-4.js

- Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.


    parte-3-exercicio-5.js

- Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
    - [Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus](https://blogdoenem.com.br/triangulos-propriedades/).
    - Um ângulo será considerado inválido se não tiver um valor positivo.