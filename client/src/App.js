
import './App.css';

import io from "socket.io-client";

import { useState } from "react";

const socket = io.connect("http://localhost:3000");



export default function App () {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  //function to join room
const joinRoom = () => {
  if(username !=="" && room !==""){
    socket.emit("join_room", room);
    
  }

};


  return (
    <div className='App'>

      <h3>Join Chat</h3>
      <input type="text" placeholder="Harry" 
      onChange = {(event) => {setUsername(event.target.value);}} />

      <input type="text" placeholder="Room Id"
      onChange={(event) => {setRoom(event.target.value);}}
      
      />
      <button onClick={joinRoom}>Join a Room</button>

      <Chat socket={socket} username={username} room={room} />
      

    </div>
    
  );
};


