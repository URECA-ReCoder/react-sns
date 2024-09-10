import React, { useState } from "react";

export function useChat() {
    const [inputValue, setInputValue] = useState('');
    const [createObject, setCreateObject] = useState({
        id: "eonny",
        time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        }), // 초를 제외한 시간 설정
        value: ''
    });
    const [inputChatList, setInputChatList] = useState([]);
    const back = () => {
        alert("하이염");
    };
    const sendChat = () => {
        if (inputValue.trim()) {
            // 새로운 채팅 객체 생성
            const newChat = {
                ...createObject,
                time: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                }), // 초를 제외한 시간으로 갱신
                value: inputValue // 입력된 값을 객체의 value로 설정
            };

            // 새로운 객체를 리스트에 추가
            setInputChatList([...inputChatList, newChat]);

            // 입력값과 객체를 초기화
            setInputValue('');
            setCreateObject({
                id: "eonny",
                time: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                }), // 초를 제외한 시간으로 초기화
                value: ''
            });
        }
    };

    return {
        inputValue,
        setInputValue,
        sendChat,
        inputChatList,
        back,
    };
}
