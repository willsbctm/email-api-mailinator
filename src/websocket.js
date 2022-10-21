import WebSocket from 'ws';
import { config } from './const.js'

export function getEmailId(channel, timeoutSeconds, selector) {
  return new Promise(function(resolve, reject){
    const options = { 
      headers: {
        ["Cookie"]: "notempty"
      }
    } 
    let socket = new WebSocket(config.URL_WEBSOCKET, options );

    socket.onopen = function(e) {
      console.log("[open] Connection established");
      console.log("Sending to server");
      socket.send(JSON.stringify({"cmd":"sub","channel":channel}));
    };

    socket.onmessage = function(event) {
      console.log(`[message] Data received from server`);
      const data  = JSON.parse(event.data);
      if(data.channel == 'msg') {
        console.log(`Get emailId: ${data.id}`);
        clearTimeout(timeout);
        socket.close();
        resolve(data.id)
      }
    };

    socket.onclose = function(event) {
      if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
      } else {
        console.log('[close] Connection died');
      }
    };

    socket.onerror = function(error) {
      console.log(`[error] ${error.message}`);
      socket.close();
      reject(error);
    };

    const timeout = setTimeout(() => {
      socket.close();
      reject("timeout")
    }, timeoutSeconds);
  })
}