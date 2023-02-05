import React, { useState, useEffect } from 'react'

export default function Chat({socket, username, room}) {

  const [currentMessage, setCurrentMessage] =  useState("");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now().getMinutes()),
      }

      await socket.emit("send_message", messageData);
    };

  }

  //listen events from backend

  useEffect(() => {
      
  });


  return (
    <div>
        <div className='chat-header'>
            <p>LIVE CHAT</p>
        </div>

        <div className='chat-body'></div>

        <div className='chat-footer' value={currentMessage}>
            <input type="text" placeholder='Hey...'
            onChange = {(event) => {setCurrentMessage(event.target.value);}}
            
            />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
      
    </div>
  )
};
