# Módulo 01 - Fundamentos
## Seção 04 - Introdução à JavaScript
### Dia 02 - JavaScript - Array e loop For

#### Parte 1: Arrays

    exercicio1.js

- Obtenha o valor “Serviços” do `array` menu.
- Procure o índice do valor “Portfólio” do array menu.
- Adicione o valor “Contato” no final do array menu.

#### Parte 2 - For

    exercicio2.js

- Utilize o `for` para imprimir os elementos da lista `groceryList` com o `console.log()`.

#### Parte 3 - For/of

    exercicio3.js

- Utilize o `for/of` para imprimir os elementos da lista names com o `console.log()`.

#### Parte 4 - Aula ao Vivo - Jogo da Mega-Sena

    lotterychecker.js

Vamos desenvolver um algoritmo em JavaScript que verifica se a pessoa ganhou na Mega-Sena.
Para isso:
- A pessoa marca 6 números
- Uma sequência de 6 números é sorteada nesse mesmo intervalo.
- Se os números forem correspondentes.

#### EXERCÍCIOS FINAIS

Iremos utilizar esse array para realizar os próximos exercícios.

#### 1: 🚀 Lidando com Arrays

    exercicio-final-1.<x>.js

    `let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];`

1. Percorra o array imprimindo todos os valores nele contidos com a função `console.log()`;

2. Some todos os valores contidos no array e imprima o resultado;

3. Calcule e imprima a média aritmética dos valores contidos no array;
    - A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

4. Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

5. Utilizando `for`, descubra qual o maior valor contido no array e imprima-o;

6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

7. Utilizando `for`, descubra qual o menor valor contido no array e imprima-o;

8. Utilizando `for`, crie um array que vá de 1 até 25 e imprima o resultado;
    - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

#### Bônus - Ordenação Bubble Sort:

    exercicio-bonus-1.<x>.js

Para os próximos dois exercícios leia [este artigo](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) e tente entender o que está acontecendo no código abaixo:

    for (let index = 1; index < array.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            if (array[index] < array[secondIndex]) {
                let position = array[index];
                array[index] = array[secondIndex];
                array[secondIndex] = position;
            }
        }
    }

Com base na leitura que fez, faça os exercícios:

- Ordene o array `numbers` em ordem crescente e imprima seus valores;

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

- Ordene o array `numbers` em ordem decrescente e imprima seus valores;

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

- Agora, crie um novo array a partir do array `numbers`, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array `numbers` multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o `for` e o método `push`. O resultado deve ser o array abaixo:

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]