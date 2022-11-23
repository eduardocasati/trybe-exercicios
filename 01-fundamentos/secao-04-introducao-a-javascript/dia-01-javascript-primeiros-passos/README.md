# Módulo 01 - Fundamentos
## Seção 04 - Introdução à JavaScript
### Dia 01 - JavaScript - Primeiros passos

#### Parte 1: Variáveis (Exercício 1)

    exercicio1.js

- Crie uma constante chamada `myName` e atribua a ela o seu nome (Exemplo: Carolina).
- Crie uma constante chamada `birthCity` e atribua a ela a sua cidade natal.
- Crie uma variável `let` chamada `birthYear` e atribua a ela o ano em que você nasceu.
- Utilize o `console.log()` para imprimir as constantes e variáveis que você criou.
- Altere o valor atribuído à variável `birthYear` para 2030. Faça um `console.log(birthYear)` novamente para ver o que acontece!

Altere o valor atribuído à constante `birthCity`. Faça um `console.log(birthCity)` novamente! Você saberia explicar por que recebemos uma mensagem de erro? **R:** _Não é possível atribuir um novo valor para uma variável const._

#### Parte 2 - Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

    exercicio2.js

- Crie uma constante chamada `base` e atribua a ela o valor 5.
- Crie uma constante uma chamada `heigth` e atribua a ela o valor 8.
- Crie uma constante chamada `area` e atribua a ela o resultado da multiplicação da `base` pela `heigth`. Dica: lembre-se de usar ~~sempre~~ o `console.log()` para imprimir as variáveis e checar os resultados das operações!
- Crie uma constante chamada `perimeter` e atribua a ela a soma de todos os lados do retângulo.

#### Parte 3 - Condições If e Else

    exercicio3.js

- Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
- mplemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
    - Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
    - Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
    - Se a nota for menor que 60, imprima “Você foi reprovada(o)”
- Crie uma estrutura condicional utilizando o `if`, `else if` e `else` para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

Altere o valor da nota para verificar se as condições que você implementou funcionam.

#### Parte 4 - Operadores lógicos

    exercicio4.js

- Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
- Crie uma variável chamada “message” que, inicialmente, é uma string vazia.
- Implemente condicionais para que:
    - Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.
    - Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.
    - Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.
    - Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.
    - Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
- Agora imprima a variável `message` fora das suas condições.


    exercicio5.js

- Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.
- Utilizando `if/else`, implemente condicionais para que:
    - Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.
    - Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

#### Parte 5 - Switch e Case

    exercicio6.js

- Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: `"aprovada"`, `"lista"` ou `"reprovada"`;
- Crie uma estrutura condicional com o `switch/case` que irá imprimir as seguintes mensagens:
    - Caso `"aprovada"`, imprima “Parabéns, você foi aprovada(o)!”.
    - Caso `"lista"`, imprima “Você está na nossa lista de espera”.
    - Caso `"reprovada"`, imprima “Você foi reprovada(o)”.
    - Caso `default`, imprima a mensagem de “Informação incorreta”.

---

### EXERCÍCIOS FINAIS

#### 1:

    exercicio-final-1.js

- Elabore alguns códigos e imprima o resultado no console usando o `console.log`, um para cada operação aritmética básica. Seu código deve ter duas constantes, `a` e `b`, definidas no começo com os valores que serão operados. Escreva códigos para:
    - Adição (a + b)
    - Subtração (a - b)
    - Multiplicação (a * b)
    - Divisão (a / b)
    - Módulo (a % b)

#### 2:

    exercicio-final-2.js

- Utilize `if/else` para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

#### 3:

    exercicio-final-3.js

- Utilize `if/else` para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

#### 4:

    exercicio-final-4.js

- Utilize `if/else` para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.