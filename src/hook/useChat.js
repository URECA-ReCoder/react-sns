import { useState, useEffect } from "react";

export function useChat() {
    const [inputValue, setInputValue] = useState('');
    const [inputChatList, setInputChatList] = useState([]);

    const sendChat = () => {
        if (inputValue.trim()) {
            const newChat = [...inputChatList, inputValue];
            setInputChatList(newChat);
            setInputValue('');
        }
    }
    return {
        inputValue,
        setInputValue,
        sendChat,
        inputChatList,
    };
}
