import { deleteEmail, getCode } from './email.js'
import { getEmailId } from './websocket.js'

const selector = '(?<=Código de Ativação: )[0-9]{6}'

export const getCodeFromEmail = (conta, timeout) => 
  getEmailId(conta, timeout)
  .then(async id => { 
      const code = await getCode(id, selector)  
      await deleteEmail(id);
      return code;
    },
    error => console.log(error)
  )
