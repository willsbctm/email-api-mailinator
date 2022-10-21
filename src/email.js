import axios from 'axios'
import { config } from './const.js'

export async function getCode(id, selector) {
  var mensagem = `${config.URL_EMAIL}${id}`;

  try {
    const res = await axios.get(mensagem);
    const body = res.data.data.parts[0].body;
    const re = new RegExp(selector);
    const code = body.match(re)[0];
    console.log(`Get code: ${code}`);
    return code;
  } catch (err) {
    console.log('Error: ', err.message);
  }
} 

export async function deleteEmail(id) {
  var mensagem = `${config.URL_DELETE_EMAIL}${id}`;

  try {
    console.log(`Delete e-mail: ${id}`);
    await axios.get(mensagem);
  } catch (err) {
    console.log('Error: ', err.message);
  }
} 