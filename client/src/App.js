
import './App.css';

import io from "socket.io-client";

import { useState } from "react";

const socket = io.connect("http://localhost:3000");

function App() {

function App () {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  //function to join room
const joinRoom = [];
};

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
