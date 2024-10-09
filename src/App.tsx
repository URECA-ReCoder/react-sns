import Router from './Router/Router';
import GlobalStyle from './style/GlobalStyle';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  )
}

export default App
