
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import SidBar from './SidBar';
import Pusher from 'pusher-js';
import axios from './Axios'

function App() {
  const [message, setMessage] = useState([])
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(res => {
      setMessage(res.data)
    })
  }, [message])

  useEffect(()=>{
    const pusher = new Pusher('ce7cab24ca7bee42b392', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessage([...message, newMessage])
    });
    return ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [message])
  console.log(message)
  return (
    <div className="app">
      <div className="app_body">
      <SidBar/>
      <Chat message={message}/>
      </div>
    </div>
  );
}

export default App;
