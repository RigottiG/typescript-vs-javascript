# TypeScript ⚔ JavaScript

Assim como o JQuery, toda tecnologia tem seu tempo e seu espaço, ou seja, não são eternas nem são balas de prata.

> Com a tipagem estática, temos o benefício de pegar erros em tempo de compilação ao invés de runtime, melhorando a leitura e auxiliando na refatoração do código, além de trazer sugestões mais precisas na IDE. [TypeScript vs Flow no segundo semestre de 2018](https://medium.com/rung-brasil/typescript-vs-flow-no-segundo-semestre-de-2018-54af2d4325d1)

## Nome 😋

| TypeScript  |  JavaScript |
|---|---|
| 1  | 0  |

## Qual problema o TypeScript vem resolver?

Tudo começou com o Ajax, quando as aplicações pararam de ter que recarregar as páginas e passaram a tratar mais os dados com JavaScript. O termo para isso é Interface de Aplicação Rica (RIA), esse conceito moveu muitas coisas no frontend, como surgimento dos grandes frameworks JS e também a criação dos atributos de acessibilidade (ARIA) que na sigla já diz que é uma interface rica e também acessível.

Progressivamente os websites evoluiram da seguinte forma em relação ao javascript:

- sem javascript
- ajax, renderizar templates, alterar elementos da DOM
- a página inteira em JavaScript
- O site inteiro em JavaScript, a navegação não recarrega mais a página (SPA)

O que aconteceu é que o JavaScript talvez não foi criado pensado para isso, alguns indicios é que quando a aplicação cresce há maior dificuldade de quem não esteve presente na criação saber como partes dela funcionam, o que precisam receber, o que retornam. Outro problema bem comum é haver alguma confusão no tipo da variável ou então na criação de um objeto mais complexo aí outra parte precisa desse dado e para de funcionar e para descobrir onde aconteceu o erro, só com JavaScript, irá precisa de um rastreio por parte do desenvolvedor.

Em resumo conforme a aplicação cresce a manutenção fica onerosa apenas com JavaScript.

### Quais as dificuldades do JavaScript

- Não saber se houve confusão nos dados.
- Não descrever o formato de um elemento fazendo com que quem usar possa cometer erros.
- Auxiliar fracamente no preenchimento (VS Code + Typescript)
- Não ser declarativo quanto a valores opcionais.
- Não ter Enum que deixa o código mais amarrado e da uma noção melhor das possíveis opções de preenchimento.

## Quem está usando?

Exagerando um pouco, "todo mundo". Toda biblioteca maior que importamos é em typescript ou ao menos uso o typescript para gerar o arquivo de definição de tipos que será abaixo. Alguns casos:

### Angular

Desde a versão 2 eles perceberam a necessidade da tipagem.

### React

 Mesmo não sendo obrigatório igual o Angular, o React exporta os tipos junto com suas bibliotecas.

### Material UI

Nos componentes do Material UI se usamos o auxilio de preenchimento já mostra os possíveis atributos, após escrever o atributo="" se pressionar o auxilio dentro do "" irá mostrar todas as opções (Enum).

## E não tem nada que substitua o TypeScript?

### Flow

O Facebook fez suas iniciativas e investimentos na tipagem de dados, pois também perceberam a necessidade, uma delas e principal concorrente do TypeScript é o [Flow](https://github.com/flow-typed/flow-typed) que talvez por falta de conhecimento eu tinha que rodar um comando para verificar os tipos e achei isso trabalhoso, pode se mesmo falta de conhecimento da minha parte. 

### Prop Types

O Facebook fez também o Prop Types, para tipar os compoenentes React, algo bem específico, mas funciona bem, problema que limita a tipagem a componentes e o reaproveitamento fica devendo.

### [JSDoc](https://jsdoc.app/)

Sou bem suspeito em falar desse cara, foi a primeira experiência boa que tive com tipagem, você inclui muita informação em um método que futuramente pode ser usado para gerar uma documentação. A tipagem funciona bem fácil se o editor de texto tiver suporte, problema é que ele ocupa muito espaço no código e não faz validação alguma, só auxilia mesmo.

## Comparando injustamente as tecnologias

Estou avaliando poucos pontos, sem estudo algum, então um pouco injusto. Outro motivo da injustiça é por ter avaliado usando VS Code que "apoia" o TypeScript.

|             | Tipagem do JS  | Tipagem do JSX | Validação na tipagem | Tipagem de módulo¹ |
|---          |---             |---             |---                   |---                 |
| TypeScript  | X              | X              | X                    | X                  |
| JSDoc       | X              |                |                      |                    |
| Flow        | X              | X              | X                    |                    |
| Prop Types  |                | X              | X                    |                    |

¹ A tipagem de módulo é quando importar algo do node_modules saber exatamente o que, como chamar e o retorno.

# TypeScript ⚔ Flow

## TypeScript

### Prós

- Comunidade maior: Por ser mais antigo que o Flow, sua comunidade é maior e possui mais definições.
- Suporte do VS code é aparentemente melhor que o do Flow (Microsoft 👬).

### Contras

- Mais verboso

## Flow

Com `//@flow` você pode ir aplicando o Flow apenas nos arquivos que desejar e ir fazendo a tipagem gradualmente.

### Prós

- Fácil integração e refatoração automática

### Contras

- “Move fast and breaks things” — É comum que de uma versão pra outra tenha grandes mudanças (pode ter mudado).
- Funcionalidades não documentadas (pode ter mudado).
- Nem sempre as mensagens de erro são claras — Dentro do erro exibido na IDE, o Flow adiciona placeholders como [1] [2], isso é meio confuso as vezes (pode ter mudado)
- Para algumas libs, é necessário o uso de Flow-Typed

