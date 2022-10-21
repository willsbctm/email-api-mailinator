# email-api-mailinator

Projeto usado para testes em que é necessário recuperar um código enviado via e-mail.

O projeto funciona com e-mails @mailinator.com.

## Pré requisitos

- Node
- Npm

## Instalação

```sh
npm install email-api-mailinator
```

## Uso

```javascript
import { getCodeFromEmail } from "email-api-mailinator";

const email = "meuteste"
const timeoutSeconds = 50000
const selector = "(?<=Ativation Code: )[0-9]{8}"

getCodeFromEmail(email, timeoutSeconds, selector)
  .then(codigo => console.log(codigo))
```

#### Parâmetros
- email: e-mail cadastrado para o usuário sem o domínio.
Exemplo: meuteste@mailinator.com deverá ser informado apenas meuteste.
- timeoutSeconds: tempo máximo em segundos que deverá ser esperado até a chegada do e-mail.

## Publicação
```
npm run build
```
