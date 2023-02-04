
import './App.css';

import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {


  
  return (
    <div className='App'>

      <h3>Join Chat</h3>
      <input type="text" placeholder="Harry"/>
      <input type="text" placeholder="Olga"/>
      <button>Join a Room</button>
      

    </div>
    
  );
}

export default App;
