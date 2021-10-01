import { Route, Switch } from 'react-router';

import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
