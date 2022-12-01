# Módulo 01 - Fundamentos
## Seção 04 - Introdução à JavaScript
### Dia 05 - JavaScript ES6

#### Parte 1

    parte-1-exercicio-1.js até parte-1-exercicio-8.js

- 🚀 Altere o tipo das variáveis (`var`) para `let` ou `const` para que respeitem o escopo em que foram declaradas.`
    - 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

- 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo `const`;

- 🚀 Modifique a variável para que não ocorra `Erro`;

- 🚀 Modifique as concatenações para template literals.

- 🚀 Modifique a estrutura das funções a seguir para que elas sejam `arrow functions`;
    - 🚀 Transforme a função `numeroAleatorio` em uma `arrow function`;

- 🚀 Transforme a função `hello` em uma `arrow function`;

- 🚀 Transforme a função `nomeCompleto` em uma `arrow function`;

- 🚀 Altere a expressão `if/else` utilizando `ternary operator`;

#### Parte 2

    parte-2-exercicio-1.js até parte-2-exercicio-3.js

Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre `let`, `const`, `arrow functions`, `template literals` e `ternary operator`.

- Crie uma função que ligue e desligue um motor de um carro.
    - Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
    - Crie a função `ligarDesligar` utilizando `arrow functions`. Ela não receberá nenhum parâmetro;
    - Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
    - Imprima no terminal “O motor está `ligado`“ e “O motor está `desligado`“ (lembre-se de utilizar o `template literals` nesse momento).
    - Bônus (opcional): tente fazer o mesmo exercício utilizando `ternary operator`.

- 🚀 Crie uma função que calcule a área de um círculo.
    - Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
    - Com base nessa informação:
        - Crie a função `circleArea`, que recebe o valor do raio como parâmetro, utilizando `arrow functions`;
        - Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
        - Crie a lógica para retornar a área do círculo;
        - Imprima no terminal “Essa é a área do círculo: `resultado da função` (lembre-se de utilizar o `template literals` nesse momento).

- 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
    - **Exemplo:** `longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'`
    > **De olho na dica 👀:** *Nesse exercício, será necessário utilizar os conhecimentos sobre `array, método split e loop for/of`*.
    - *Bônus (opcional):* Tente fazer o mesmo exercício utilizando o método `array.sort()`.

#### Bônus

    bonus-exercicio-1.js

Crie duas funções *JavaScript* com as seguintes especificações:

**Não se esqueça de usar `template literals`**

- *Função 1:* Escreva uma função que substitua a letra ‘x’ em uma frase.
    - O nome da função deverá ser `substituaX`;
    - A função deverá receber um `nome` por parâmetro;
    - Declare dentro da função uma variável do tipo `const`, com o nome **frase**, atribuindo o valor `'Tryber x aqui!'`;
    - A função deverá retornar uma nova frase em que o `x` da frase `'Tryber x aqui!'` seja substituído pelo `nome` passado por parâmetro.
    - **Exemplo:** 
        - Parâmetro: ‘Bebeto’
        - Retorno: ‘Tryber Bebeto aqui!’
- *Função 2:* Escreva uma função que irá receber o retorno da *Função 1* por parâmetro e retornará uma nova `string`.
    - O nome da função deverá ser `minhasSkills`;
    - A função deverá receber o retorno da *Função 1* - `substituaX` por parâmetro;
    - Declare dentro da função uma variável com o nome **skills**, do tipo `const`;
        - A variável **skills** deverá ser um `array` contendo três `strings` com tecnologias que você já aprendeu.
    - Crie uma varável do tipo `let` e concatene o valor retornado da *Função 1* - `substituaX` (utilize `template literals`), a frase `'Minhas três principais habilidades são:'` e o valor da variável `skills`.

**Exemplo de retorno:**
Tryber Bebeto aqui!
Minhas três principais habilidades são:
- JavaScript
- HTML
- CSS