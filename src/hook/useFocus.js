import { useRef, useEffect } from 'react';

export function useFocus() {
  const inputRef = useRef(null); // 입력창에 대한 ref
  const chatContainerRef = useRef(null); // 채팅 컨테이너 ref

  // 처음 렌더링 시 입력창에 자동으로 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // 새로운 메시지가 입력될 때마다 채팅방 하단으로 스크롤
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return { inputRef, chatContainerRef, scrollToBottom };
}
