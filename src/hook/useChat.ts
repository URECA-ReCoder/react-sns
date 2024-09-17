import { useState } from 'react';
import { useAlert } from './useAlert';

// 상태 객체의 타입 정의
interface Chat {
  id: string;
  time: string;
  value: string;
}

// 반환되는 훅의 타입 정의
interface UseChatReturn {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  sendChat: () => void;
  inputChatList: Chat[];
  handleBack: () => void;
  alertBack: () => void;
  alertVideo: () => void;
}

export function useChat(): UseChatReturn {
  const [inputValue, setInputValue] = useState<string>('');
  const [createObject, setCreateObject] = useState<Chat>({
    id: 'eonny',
    time: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }), // 초를 제외한 시간 설정
    value: '',
  });
  const [inputChatList, setInputChatList] = useState<Chat[]>([]);

  // alert 훅 호출 Test
  const handleBack = () => {
    alert('이것은 다음 과제🦖');
  };

  const { alertBack, alertVideo } = useAlert();

  const sendChat = () => {
    if (inputValue.trim()) {
      // 새로운 채팅 객체 생성
      const newChat: Chat = {
        ...createObject,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }), // 초를 제외한 시간으로 갱신
        value: inputValue, // 입력된 값을 객체의 value로 설정
      };

      // 새로운 객체를 리스트에 추가
      setInputChatList([...inputChatList, newChat]);

      // 입력값과 객체를 초기화
      setInputValue('');
      setCreateObject({
        id: 'eonny',
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }), // 초를 제외한 시간으로 초기화
        value: '',
      });
    }
  };

  return {
    inputValue,
    setInputValue,
    sendChat,
    inputChatList,
    handleBack,
    alertBack,
    alertVideo,
  };
}
