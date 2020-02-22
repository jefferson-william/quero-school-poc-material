## React Hooks + Next Boilerplate

### Instalação

```bash
yarn install
```

### Configuração

Clone este projeto preferencialmente na pasta `~/dev`.

Peça o arquivo `.npmrc` e as variáveis de ambiente `FONT_AWESOME_TOKEN` e `NPM_TOKEN` com um colega do trabalho.

```bash
export FONT_AWESOME_TOKEN=
export NPM_TOKEN=

cd ~/dev/boilerplace-react-next

touch .npmrc
```

O conteúdo do `.npmrc` deve ser:

```txt
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=${FONT_AWESOME_TOKEN}
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

### Rodar o projeto

O projeto foi feito para funcionar rodando com React apenas, ou React sendo servido pelo Next com ou sem Express.

**Rodar com React apenas**

```bash
yarn start
# yarn build ; npx serve build
```

**Rodar com Next**

```bash
yarn next
# yarn next:build ; yarn next:export
```

**Rodar com Next via Express**

```bash
yarn server
# yarn server:start
```

### Lint

Será rodado a cada commit com a configuração do `Husky`.

### Desenvolvimento

Desenvolva usando `React Hooks` e `Functional Component` sempre que possível. Evite `Class Component`.

#### Criar novas páginas no Next

A primeira forma é criando algo como `/pages/about/index.js`. Assim a url será `http://localhost:3000/about`.

A segunda, depende da primeira, porém a url para a página pode ser defina via regex no arquivo `/routes.js`.

#### TypeScript

Use-o de forma a não trazer lentidão para o desenvolvimento. Use principalmente as `interfaces` de forma a refletir as propriedades de uma tabela do seu banco de dados.

### Boas práticas

#### Modelo

```js
import React from 'react'

export default function() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}
```

#### React Hooks

Procure aplicar os hooks nesta ordem:

```js
import React, { useState, useMemo, useCallback, useEffect } from 'react'

export default function() {
  const [numbers, UseNumbers] = useState([1, 2, 3])

  const lastNumber = useMemo(() => numbers[numbers.length - 1], [numbers])

  const SetNewNumber = useCallback(newNumber => UseNumbers([...numbers, newNumber]), [numbers])

  useEffect(() => {
    SetNewNumber(4)

    return () => {
      UseNumbers([])
    }
  })

  return (
    <>
      <h1>Example</h1>
      <p><strong>Last number:</strong> {lastNumber}</p>
    </>
  )
}
```

#### Considerções finais

* Evite fazer alterações nos arquivos de configuração ou avise outros times para que todos possam desenvolver num mesmo padrão.
  * `.editorconfig`, `.eslintrc.js`, `prettierrc.js`, `stylelint.config.js`, `tslint.json` e `tspaths.json`.
* Use sempre que possível `React Hooks` e `Functional Component`.

### Referências

- https://create-react-app.dev/docs/getting-started/
- https://nextjs.org/learn/basics/getting-started
