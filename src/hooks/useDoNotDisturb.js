import { useState } from 'react';

function useDoNotDisturb() {
  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);
  return { isDoNotDisturb, setIsDoNotDisturb };
}

export default useDoNotDisturb;
