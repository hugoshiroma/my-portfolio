import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
