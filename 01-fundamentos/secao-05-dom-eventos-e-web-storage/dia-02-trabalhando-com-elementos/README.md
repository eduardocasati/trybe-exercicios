# Módulo 01 - Fundamentos
## Seção 05 - DOM, Eventos e Web Storage
### Dia 02 - Trabalhando com elementos

#### Exercício 1

    exercicio-1.html

- Acesse o elemento `elementoOndeVoceEsta`.
- Acesse `pai` a partir de `elementoOndeVoceEsta` e adicione uma `color` a ele.
- Acesse o `primeiroFilhoDoFilho` e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
- Acesse o `primeiroFilho` a partir de `pai`.
- Agora acesse o `primeiroFilho` a partir de `elementoOndeVoceEsta`.
- Agora acesse o texto `Atenção!` a partir de `elementoOndeVoceEsta`.
- Agora acesse o `terceiroFilho` a partir de `elementoOndeVoceEsta`.
- Agora acesse o `terceiroFilho` a partir de `pai`.

#### Exercício 2

    exercicio-2.html

- Crie um irmão para `elementoOndeVoceEsta`.
- Crie um filho para `elementoOndeVoceEsta`.
- Crie um filho para `primeiroFilhoDoFilho`.
- A partir desse filho criado, acesse `terceiroFilho`.

#### Exercício 3

    exercicio-3.html

- Remova a tag `h2`, filha do elemento `elementoOndeVoceEsta`

#### Exercício 4

    exercicio-4.html

Imagine que você trabalha em uma agência de viagens e a sua liderança informou que você será a pessoa responsável por dar início a nova página inicial (`landing page`) da empresa.

Seu objetivo nesse novo desafio é criar tags `HTML` usando a manipulação do DOM com JavaScript. Para isso, utilize a estrutura HTML no arquivo exercicio-4.html.

Para dar início a página, você deve criar algumas tags:
- Adicione a tag `h1` com o texto `TrybeTrip - Agência de Viagens` como filho da tag `body`;
- Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
- Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
- Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
- Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
- Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section`criado no passo 5;
- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
- Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.

Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações:
- Adicione a classe `title` na tag `h1` criada;
- Adicione a classe `description` nas 3 tags `h3` criadas;
- Remova a `section` criada no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
- Centralize a `section` criada no passo 6 (aquele que possui a classe `right-content`).
- Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
Remova os dois últimos elementos (`nove` e `dez`) da lista criada no passo 8.