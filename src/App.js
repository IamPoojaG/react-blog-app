import './App.css';
import Topbar from './components/topbar/Topbar.js';
import Homepage from './pages/homepage/Homepage.js';
import Login from './pages/login/Login.js';
import Register from './pages/register/Register.js';
import Settings from './pages/settings/Settings.js';
import Single from './pages/single/Single.js';
import Write from './pages/write/Write.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/posts'>
          <Homepage />
        </Route>
        <Route path='/register'>
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path='/login'>{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path='/post/:id'>
          <Single />
        </Route>
        <Route path='/write'>{currentUser ? <Write /> : <Login />}</Route>
        <Route path='/settings'>{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
