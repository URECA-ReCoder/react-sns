import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;  /* IE와 Edge에서 스크롤바 비활성화 */
    scrollbar-width: none;  /* Firefox에서 스크롤바 비활성화 */

  }`;
