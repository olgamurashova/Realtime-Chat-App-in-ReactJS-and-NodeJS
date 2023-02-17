import React, { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';


export default function Chat({socket, username, room}) {

  const [currentMessage, setCurrentMessage] =  useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: 
        new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      }

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    };

  }

  //emit events to frontend from backend, listen events from backend, when another message received

  useEffect(() => {
    socket.on("receive_message", (data) => {
      
      setMessageList((list) => [...list, data]);
      setCurrentMessage("");

    });

      
  }, [socket]);


  return (
    <div className='chat-window'>
        <div className='chat-header'>
            <p>LIVE CHAT</p>
        </div>

        <div className='chat-body'>
          <ScrollToBottom>
         {messageList.map((messageContent) => {
          return <div className='message' id={username === messageContent.author ? "you" : "other"}> 

          <div className='message-content'> 
          <p>{messageContent.message}</p>

          </div>


          <div className='message-meta'> 
          <p id="time">{messageContent.time}</p>
          <p author="author">{messageContent.author}</p>
          
          
          </div>
          
          </div>
        
          
         })}
         </ScrollToBottom>
        </div>
        

        <div className='chat-footer' value={currentMessage}>
            <input type="text" 
            value={currentMessage}
            
            
            placeholder='Hey...'
            onChange = {(event) => {setCurrentMessage(event.target.value);
            }}
            
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            
            }}
            
            />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
      
    </div>
  );
}
