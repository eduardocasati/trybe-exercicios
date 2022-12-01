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

#### Final 1: 🚀 objetos e for/in

Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

    final-1-exercício-1.js

- Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe `meuObjeto.chave`.


    final-1-exercicio-2.js

- Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe `meuObjeto['chave'] = valor`.


    final-1-exercicio-3.js

- Faça um `for/in` que mostre todas as chaves do objeto.


    final-1-exercicio-4.js

- Faça um novo `for/in`, mas agora mostre todos os valores das chaves do objeto.


    final-1-exercicio-5.js

- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.


Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


    final-1-exercicio-6.js

- Acesse as chaves `nome`, `sobrenome` e `titulo`, que está dentro da chave `livrosFavoritos`, e faça um `console.log` no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
- Adicione um novo livro favorito na chave `livrosFavoritos`, que é um `array`. Atribua a essa chave um objeto contendo as seguintes informações:

{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

- Acesse as chaves `nome` e `livrosFavoritos` e faça um `console.log` no seguinte formato: “Julia tem _quantidade_ livros favoritos”, onde _“quantidade”_ é um número gerado automaticamente pelo seu código.

#### Final 2: 🚀 funções

    final-2-exercicio1.js até final-2-exercicio-7.js

- Crie uma função que receba uma `string` e retorne `true` se for um palíndromo, ou `false`, se não for.
    - Exemplo de palíndromo: _arara_
    - `verificaPalindrome('arara')`
        - Retorno esperado: `true`
    - `verificaPalindrome('desenvolvimento')`
        - Retorno esperado: `false`
- Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.
    - Array de teste: `[2, 3, 6, 7, 10, 1];`.
    - Valor esperado no retorno da função: `4`.
- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
    - Array de teste: [2, 4, 6, 7, 10, 0, -3];`.
    - Valor esperado no retorno da função: `6`.
- Crie uma função que receba um `array` de nomes e retorne o nome com a maior quantidade de caracteres.
    - Array de teste: `['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];`.
- Crie uma função que receba um `array` de inteiros e retorne o inteiro que mais se repete.
    - Array de teste: `[2, 3, 2, 5, 8, 2, 3];`.
    - Valor esperado no retorno da função: `2`.
- Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
    - Valor de teste: N = 5.
    - Valor esperado no retorno da função: 1+2+3+4+5 = 15.
- Crie uma função que receba uma `string word` e outra `string ending`. Verifique se a `string ending` é o final da `string word`. Considere que a `string ending` sempre será menor que a `string word`.
    - Valor de teste: `'trybe'` e `'be'`
    - Valor esperado no retorno da função: `true`
    - `verificaFimPalavra('trybe', 'be')`;
        - Retorno esperado: `true`
    - `verificaFimPalavra('joaofernando', 'fernan')`;
        - Retorno esperado: `false`