# Array Pessoas
## Sumário
- [Array Pessoas](#array-pessoas)
  - [Sumário](#sumário)
  - [Desafio Complementar da aula 06 de Javascript](#desafio-complementar-da-aula-06-de-javascript)
    - [Ordenar um array de objetos](#ordenar-um-array-de-objetos)
    - [Instruções](#instruções)
    - [Formato](#formato)
    - [Descrição sobre o algoritmo escolhido.](#descrição-sobre-o-algoritmo-escolhido)
  - [Desafio Complementar da aula 09 de Javascript](#desafio-complementar-da-aula-09-de-javascript)
    - [Gerar HTML](#gerar-html)
    - [Instruções](#instruções-1)
    - [Descrição sobre o algoritmo escolhido](#descrição-sobre-o-algoritmo-escolhido-1)
  - [Membros do grupo](#membros-do-grupo)

## Desafio Complementar da aula 06 de Javascript
### Ordenar um array de objetos
Para levar adiante essa tarefa, sugerimos pensar em um processo complexo, decompô-lo em ao menos três partes e realizar uma função que se encarregue de cada uma delas.

### Instruções
Codifique uma função cujas instruções permitam ordenar uma coleção (array). Preferencialmente, receber o critério de ordenamento por parâmetro e mostrar o resultado do processamento em uma saída.

### Formato
Arquivo HTML e Arquivo JavaScript referenciado, que inclua a definição um array de objetos, a declaração e a chamada de uma função que ordene a coleção.

### Descrição sobre o algoritmo escolhido.
- Declarado um array de objetos
- Criada a classe Pessoa, que possui método construtor de objetos.
- Criada função para registrar uma pessoa via prompt, inserindo no array de objetos
- Criada função para registrar mais pessoas via prompt, inserindo no array de objetos
- Criada função usando o método sort() para comparar e ordenar os objetos da pessoa mais velha para a pessoa mais nova
  - usado console.log() para visualizar todo o array ordernado
- Criada função que cria um array apenas com os nomes de usuário
- Criado alert() que mostra o array de nomes, e o array ordenado por idade.

## Desafio Complementar da aula 09 de Javascript
### Gerar HTML
Na atividade, você pode gerar os novos elementos do DOM enquanto percorre um array de objetos, criando um ou mais elementos html em cada iteração (com createElement), os acrescentando como filhos ao body ou outro nó (com appendChild).
### Instruções
Codifique um script cujas instruções permitam gerar uma seção do HTML de forma dinâmica. Os valores que movimentam esse processo compreendem um array de objetos, cujos dados deverão ser incluídos utilizando métodos do DOM e elementos apropriados para sua representação.
### Descrição sobre o algoritmo escolhido
- Foi reaproveitado o desafio complementar 06 para essa atividade.
- Entradas das pessoas seguem sendo feitas via prompt
- Após inserir as pessoas, é gerado um array de pessoas, que irá ser renderizado agora na DOM. Prompt de saída retirado.
## Membros do grupo
- Erica Daikawa
