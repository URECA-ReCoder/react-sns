import React,{useState, useEffect} from 'react';
import ChatData from '../assets/chatting.json';
function ChatHeader() {
    const [chat, setChat] = useState(null); 

    useEffect(()=>{
        fetch(ChatData)
        .then((Response)=> Response.json())
        .then((jsonData) => {
            const chatRoom = jsonData.chat
    })
  return (
    <div>
      <span></span>
      <span></span>
      <span>
        <div>{chat.id == 1 && chat.name}</div>
        <div>{chat.id == 1 && chat.name}</div>
      </span>
      <span></span>
      <span></span>
    </div>
  );
}
export default ChatHeader;
