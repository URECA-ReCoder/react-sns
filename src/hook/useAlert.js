import React from 'react';

export function useAlert() {
    const alertBack = () => {
        alert("이것은 다음 과제🦖");
    };
    const alertVideo = () => {
        alert('🎥이 기능은 장식입니다.')
    }

    return {
        alertBack,
        alertVideo,
   
    };
}
