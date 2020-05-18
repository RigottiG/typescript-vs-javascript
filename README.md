# JavaScript tipado ⚔ JavaScript puro

Assim como o JQuery, toda tecnologia tem seu tempo e seu espaço, ou seja, não são eternas nem são balas de prata.

> Com a tipagem estática, temos o benefício de pegar erros em tempo de compilação (na tipagem estática) ao invés de runtime, melhorando a leitura e auxiliando na refatoração do código, além de trazer sugestões mais precisas na IDE. [TypeScript vs Flow no segundo semestre de 2018](https://medium.com/rung-brasil/typescript-vs-flow-no-segundo-semestre-de-2018-54af2d4325d1)

## Qual problema a tipagem vem resolver?

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
- Auxiliar fracamente no preenchimento
- Não ser declarativo quanto a valores opcionais.
- Não ter Enum que deixa o código mais amarrado e da uma noção melhor das possíveis opções de preenchimento.

## O que tem para auxiliar nisso?

### Flow

O Facebook fez suas iniciativas e investimentos na tipagem de dados, pois também perceberam a necessidade, uma delas e principal concorrente do TypeScript é o [Flow](https://github.com/flow-typed/flow-typed). 

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

Digamos que estamos convencidos que precisamos de uma tipagem.

| | TypeScript | Flow |
|---|---|---|
| Suporte em editores e IDEs	| Vs Code e WebStorm	| Quase nada |
| Questões no Stack Overflow	| 100000+	| 600+ |
| Suporte a framework	| vários, including Express, Vue, React, Angular, etc.	| Somente React |
| Documentação	| Ampla |	Muito fraca |
| Autocomplete	| Disponível  |	Não há |
| Compiler error detection	| Available in IDEs and text editors |	Não há |
| Syntax	| Comprehensive type checking, includes both static and dynamic type annotations	| Comprehensive type checking, includes both static and dynamic type annotations |
| Generics |	Supported	| Supported |
| Support in existing projects |	TypeScript package can be added to support TypeScript	| Add support with Babel |

# TypeScript

Digamos que escolhemos o TypeScript.

## Nome 😋

| TypeScript  |  JavaScript |
|---|---|
| 1  | 0  |

## Quem está usando?

Exagerando um pouco, "todo mundo". Toda biblioteca maior que importamos é em typescript ou ao menos uso o typescript para gerar o arquivo de definição de tipos que será abaixo. Alguns casos:

### Angular

Desde a versão 2 eles perceberam a necessidade da tipagem.

### React

 Mesmo não sendo obrigatório igual o Angular, o React exporta os tipos junto com suas bibliotecas.

### Material UI

Nos componentes do Material UI se usamos o auxilio de preenchimento já mostra os possíveis atributos, após escrever o atributo="" se pressionar o auxilio dentro do "" irá mostrar todas as opções (Enum).

## Mitos

### É Orientado a Objetos

Isso vai depender de como você usa o JavaScript, ele é tanto Orientado a objetos como funcional, então vai do teu gosto.

O React é mais voltado para o paradigma funcional e também da suporte para TypeScript.

### É necessario tipar TUDO :fearful: ?

Bem resumidamente **NÃO**, durante o desenvolvimento o próprio Typescript encontra todas entradas e saídas possíveis e tenta determinar automaticamente elas, é a chamada _inferência de tipos_

Isso significa que para declarmos uma variavel String por exemplo não necessitamos explicitamente dizer que é uma String, o próprio Typescript vai inferir esse tipo para nós.

```typescript
const truth = 'Typescript é o melhor \o/';
```

O TypeScript já entende que a variável `truth` é uma string e se tentarmos alterar seu valor para numerico posteriormente, receberemos um erro.

## Exemplos

Quando as informações vêm de lugares diferentes e após um formatador queremos que os dados fiquem num mesmo padrão.

```js
const formatProductEcommerce = (data = {}) => ({
  sku: data.sku,
  image: data.thumb
  // ...
});
```

```js
const formatProductRichRelevance = (data = {}) => ({
  // os dados vieram diferentes, mas que quero que saia daqui igual o de cima
});
```
