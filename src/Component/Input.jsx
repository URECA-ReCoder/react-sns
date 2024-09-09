import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import send from '../assets/images/bell.png';
function Input({ value, onChange, sendChat }) {
  return (
    <div>
      <input value={value} onChange={onChange} />
      {/* <span style={{ width: '100px', alignItems: 'center' }} onClick={sendChat}> */}
      <img
        src={send}
        style={{ width: '30px', margin: 'auto' }}
        onClick={sendChat}
      />
      {/* </span> */}
    </div>
  );
}
export default Input;
