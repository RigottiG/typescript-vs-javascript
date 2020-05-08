# TypeScript ⚔ JavaScript

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

## Quem está usando?

Exagerando um pouco, "todo mundo". Toda biblioteca maior que importamos é em typescript ou ao menos uso o typescript para gerar o arquivo de definição de tipos que será abaixo. Alguns casos:

### Angular

Desde a versão 2 eles perceberam a necessidade da tipagem.

### React

 Mesmo não sendo obrigatório igual o Angular, o React exporta os tipos junto com suas bibliotecas.

## E não tem nada que substitua o TypeScript?

### Flow Typed

O Facebook fez suas iniciativas e investimentos na tipagem de dados, pois também perceberam a necessidade, uma delas e principal concorrente do TypeScript é o [Flow Typed](https://github.com/flow-typed/flow-typed) que talvez por falta de conhecimento eu tinha que rodar um comando para verificar os tipos e achei isso trabalhoso, pode se mesmo falta de conhecimento da minha parte. 

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
| Flow Typed  | X              |                | X                    |                    |
| Prop Types  |                | X              | X                    |                    |

¹ A tipagem de módulo é quando importar algo do node_modules saber exatamente o que, como chamar e o retorno.
