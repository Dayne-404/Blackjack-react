import { useEffect, useState } from 'react'
import io from 'socket.io-client';
const socket = io("http://localhost:4000", { transports: ['websocket'] });

function App() {
  function sendMessage() {
    console.log('Button Clicked');
    socket.emit('send_message', { message: "Hello from client"} );
  }

  useEffect(() => {
    socket.emit('')
  }, []);

  return (
    <div>
      <input></input>
      <button onClick={sendMessage}>Send message</button>
    </div>
  )
}

export default App
