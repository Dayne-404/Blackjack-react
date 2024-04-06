import { useEffect } from 'react'
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

function App() {
  function sendMessage() {
    socket.emit('send_message', 'Hello world!');
  }

  useEffect(() => {
    console.log('Hello World!');
  }, []);

  return (
    <div className='App'>
      <input placeholder='Message'></input>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default App
